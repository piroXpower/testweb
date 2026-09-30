import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { goldSchemeEnrollments } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, schemeType, monthlyAmount } = body;

    if (!fullName || !phoneNumber || !schemeType || !monthlyAmount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await db.insert(goldSchemeEnrollments).values({
      fullName,
      phoneNumber,
      email: email || null,
      schemeType,
      monthlyAmount: Number(monthlyAmount),
    });

    return NextResponse.json({ success: true, message: 'Successfully enrolled' });
  } catch (error) {
    console.error('Gold scheme error:', error);
    return NextResponse.json({ error: 'Failed to process enrollment' }, { status: 500 });
  }
}
