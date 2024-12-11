export async function POST(request: Request) {
  const body = await request.json();
  console.log("Test POST request:", body);
  return new Response('OK');
}