// app/api/pexels/route.ts
import { NextResponse } from 'next/server';

interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  photographer: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

interface PexelsResponse {
  photos: PexelsPhoto[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || 'nature';
  const perPage = searchParams.get('per_page') || '9';
  const width = searchParams.get('width') || '1200';

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY || '',
        },
      }
    );

    if (!res.ok) throw new Error('Pexels API request failed');

    const data = (await res.json()) as PexelsResponse;

    const processedPhotos = data.photos.map((photo) => ({
      ...photo,
      croppedUrl: photo.src.landscape || `${photo.src.original}?auto=compress&cs=tinysrgb&w=${width}&fit=crop`,
    }));

    return NextResponse.json({ photos: processedPhotos });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}