import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { type, provider } = await request.json();

    if (!type || !provider) {
      return NextResponse.json({ error: 'Missing type or provider' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('hosting_comparison');

    // Get or create click counter for this type and provider
    const result = await db.collection('click_counts').findOneAndUpdate(
      { type, provider },
      { 
        $inc: { clicks: 1 },
        $setOnInsert: { 
          createdAt: new Date(),
          type,
          provider
        }
      },
      { 
        upsert: true,
        returnDocument: 'after'
      }
    );

    return NextResponse.json({ success: true, clicks: result.clicks });
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('hosting_comparison');

    // Get all click counts
    const clickCounts = await db.collection('click_counts').find().toArray();

    // Format the data
    const formattedCounts: any = {};
    clickCounts.forEach((item: any) => {
      if (!formattedCounts[item.type]) {
        formattedCounts[item.type] = {};
      }
      formattedCounts[item.type][item.provider] = item.clicks;
    });

    return NextResponse.json({ counts: formattedCounts });
  } catch (error) {
    console.error('Error fetching click counts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}