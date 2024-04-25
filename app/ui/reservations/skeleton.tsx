'use client';

import { useEffect, useRef } from 'react';

export default function ReservationsTableSkeleton() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = localStorage.getItem('ReservationHTML');
    if (!html || !ref.current) return;
    console.log('Restoring ReservationHTML');
    ref.current.innerHTML = html;
  }, []);

  return <div ref={ref} />;
}
