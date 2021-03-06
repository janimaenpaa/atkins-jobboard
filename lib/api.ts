//const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = "/api";

export const GET = async (path: string) => {
  const response = await fetch(`${API_URL}/${path}`);

  return await response.json();
};

export const POST = async (path: string, data: object) => {
  const response = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const PUT = async (path: string, data: object) => {
  const response = await fetch(`${API_URL}/${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const DELETE = async (path: string) => {
  const response = await fetch(`${API_URL}/${path}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  return await response.json();
};