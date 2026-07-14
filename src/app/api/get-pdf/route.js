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

  // 1. Resolve absolute paths to prevent directory traversal
  const absoluteCertificatesDir = path.resolve(certificatesDir);
  const absoluteFilePath = path.resolve(filePath);

  if (!absoluteFilePath.startsWith(absoluteCertificatesDir)) {
    return new NextResponse('Access denied', { status: 403 });
  }

  // 2. Prevent directory/special file reading and check existence
  if (!fs.existsSync(absoluteFilePath)) {
    return new NextResponse('File not found', { status: 404 });
  }

  try {
    const stats = fs.statSync(absoluteFilePath);
    if (!stats.isFile()) {
      return new NextResponse('Access denied', { status: 403 });
    }
  } catch (err) {
    return new NextResponse('Error checking file status', { status: 500 });
  }

  // 3. Restrict allowed extensions (defense-in-depth)
  const allowedExtensions = ['.pdf', '.png', '.jpg', '.jpeg'];
  const fileExt = path.extname(absoluteFilePath).toLowerCase();
  if (!allowedExtensions.includes(fileExt)) {
    return new NextResponse('Invalid file type', { status: 400 });
  }

  try {
    const fileBuffer = fs.readFileSync(absoluteFilePath);
    const base64 = fileBuffer.toString('base64');
    return new NextResponse(base64, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (err) {
    return new NextResponse('Error reading file contents', { status: 500 });
  }
}
