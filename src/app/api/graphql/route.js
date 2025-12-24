// app/api/graphql/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  // Add CORS headers for Hostinger
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://darkseagreen-chicken-141904.hostingersite.com',
  ];

  const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin || '') ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };

  // Handle preflight request
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsHeaders });
  }

  try {
    const body = await request.json();
    
    // Your GraphQL logic here
    
    return NextResponse.json(
      { data: 'your response' },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GraphQL endpoint - use POST' });
}

// Important: Export OPTIONS handler
export async function OPTIONS(request) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://darkseagreen-chicken-141904.hostingersite.com',
  ];

  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': allowedOrigins.includes(origin || '') ? origin : allowedOrigins[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}