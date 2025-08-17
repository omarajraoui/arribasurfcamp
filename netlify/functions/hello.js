export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Hello from Netlify Functions 👋', time: new Date().toISOString() })
  };
}
