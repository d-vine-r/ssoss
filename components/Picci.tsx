'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  width: number;
  height: number;
  photographer: string;
  croppedUrl: string;
  src: {
    original: string;
  };
}

interface HimageProps {
  query?: string;
  perPage?: number;
  cropWidth?: number;
}

export default function Himage({
  query = 'ministry',
  perPage = 9,
  cropWidth = 800,

}: HimageProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/pexels?query=${query}&per_page=${perPage}&width=${cropWidth}`
        );
        const data = await response.json();
        
        if (data.error) throw new Error(data.error);
        if (!data.photos) throw new Error('No photos found');
        
        setPhotos(data.photos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, perPage, cropWidth]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="overflow-hidden rounded-lg shadow-md">
          <div className="relative aspect-video w-full">
            <Image
              src={photo.croppedUrl}
              alt={`Photo by ${photo.photographer}`}
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>
          {/* <div className="p-3 bg-white dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Photo by {photo.photographer}
            </p>
          </div> */}
        </div>
      ))}
    </div>
  );
}