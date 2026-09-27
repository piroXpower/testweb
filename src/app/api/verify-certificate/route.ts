import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { certificateVerifications } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const certificateNo = searchParams.get('certificateNo');

    if (!certificateNo) {
      return NextResponse.json(
        { error: 'Certificate number is required' },
        { status: 400 }
      );
    }

    const certs = await db
      .select()
      .from(certificateVerifications)
      .where(eq(certificateVerifications.certificateNo, certificateNo.trim().toUpperCase()))
      .limit(1);

    if (certs.length === 0) {
      return NextResponse.json({ valid: false }, { status: 404 });
    }

    return NextResponse.json({ valid: true, data: certs[0] });
  } catch (error) {
    console.error('Certificate verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
