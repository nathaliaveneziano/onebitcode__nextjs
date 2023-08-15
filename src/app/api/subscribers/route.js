import { NextResponse } from 'next/server';

export async function GET() {
  // return new Response('Olá, mundo!', { status: 200 });
  return NextResponse.json({ message: 'Olá, mundo!' });
}

export async function POST() {
  return NextResponse.json({ message: 'Olá, mundo!' });
}
