import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file) {
    return new NextResponse('Missing file parameter', { status: 400 });
  }

  const safeFile = path.basename(file);
  const certificatesDir = path.join(process.cwd(), 'public', 'certificates');
  const filePath = path.join(certificatesDir, safeFile);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found', { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const base64 = fileBuffer.toString('base64');
    return new NextResponse(base64, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (err) {
    return new NextResponse(`Error reading file: ${err.message}`, { status: 500 });
  }
}
