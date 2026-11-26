import { useState } from 'react';
import { send } from '../api.js';

export default function useForm(endpoint, initial) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const bind = (name) => ({
    name,
    value: values[name] ?? '',
    onChange: (e) => setValues((v) => ({ ...v, [name]: e.target.value })),
  });

  async function submit(e, extra) {
    e.preventDefault();
    setErrors({});
    setStatus({ state: 'sending', message: '' });
    try {
      const body = extra ? extra(values, e.target) : values;
      const res = await send(endpoint, body);
      setStatus({ state: 'done', message: res.message });
      setValues(initial);
      e.target.reset();
    } catch (err) {
      setErrors(err.errors || {});
      setStatus({ state: 'error', message: err.message || 'Please fix the highlighted fields.' });
    }
  }
  const set = (name, value) => setValues((v) => ({ ...v, [name]: value }));
  return { bind, errors, status, submit, set };
}
