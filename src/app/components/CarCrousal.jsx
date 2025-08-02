'use client';

import { Carousel } from 'antd';
import Image from 'next/image';

const cars = [
  { src: '/images/cars/sedan.jpg', label: 'Executive Sedan' },
  { src: '/images/cars/suv.jpg', label: 'Comfort SUV' },
  { src: '/images/cars/luxury.jpg', label: 'Luxury Class' },
];

export default function CarCarouselAnt() {
  return (
    <section className="relative py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Carousel autoplay dots draggable className="[&_.slick-dots]:!bottom-0">
          {cars.map((car, i) => (
            <div key={i} className="px-4">
              <div className="relative h-[360px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
                <Image src={car.src} alt={car.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/70 backdrop-blur px-3 py-2 shadow-sm">
                    <span className="font-semibold text-gray-900">{car.label}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">
                      Book Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
