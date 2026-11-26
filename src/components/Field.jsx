export default function Field({ label, error, as = 'input', children, ...props }) {
  const Tag = as;
  return (
    <label className={`field ${error ? 'has-error' : ''}`}>
      <span>{label}</span>
      <Tag {...props}>{children}</Tag>
      {error && <em role="alert">{error}</em>}
    </label>
  );
}

export function FormStatus({ status }) {
  if (status.state === 'done') return <p className="form-note ok" role="status">{status.message}</p>;
  if (status.state === 'error') return <p className="form-note bad" role="alert">{status.message}</p>;
  return null;
}
