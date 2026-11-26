export async function send(path, body) {
  const isForm = body instanceof FormData;
  const res = await fetch(`/api${path}`, {
    method: 'POST',
    headers: isForm ? undefined : { 'Content-Type': 'application/json' },
    body: isForm ? body : JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data.errors ? { errors: data.errors } : { message: data.message || 'Request failed' };
  return data;
}

export async function getJobs() {
  const res = await fetch('/api/jobs');
  if (!res.ok) throw new Error('Could not load jobs');
  return res.json();
}
