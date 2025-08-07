'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Keyboard } from 'swiper/modules';
import Sedan from '../../../public/images/cars/sedan.jpg';
import Suv from '../../../public/images/cars/suv.jpg';
import Luxary from '../../../public/images/cars/sedan.jpg';
import Hatchback from '../../../public/images/cars/suv.jpg';
import Van from '../../../public/images/cars/van.jpg';

// Swiper core styles (safe to import in a client component)
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const cars = [
  { src: Sedan, label: 'Sedan' },
  { src: Suv, label: 'Comfort SUV' },
  { src: Luxary, label: 'Luxury Class' },
  { src: Hatchback, label: 'City Hatchback' },
  { src: Van, label: 'Family Van' },
];

export default function CarCarousel() {
  return (
    <section className="relative py-10 mt-12">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-orange-200" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-gray-950 text-3xl md:text-4xl font-extrabold tracking-tight">
            Choose Your Ride
          </h2>
          <p className="mt-2 text-gray-600">
            From city hops to luxury arrivals — find the perfect car for your trip.
          </p>
        </div>

        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination, Keyboard]}
          effect="coverflow"
          grabCursor
          centeredSlides
          // responsive: automatic sizing of slides
          slidesPerView="auto"
          // 3D coverflow settings
          coverflowEffect={{
            rotate: 0,       // no tilt rotation
            stretch: -20,    // negative to bring slides closer
            depth: 180,      // 3D depth
            modifier: 1.2,   // intensity
            slideShadows: false,
          }}
          loop
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          className="!pb-12" // space for pagination
        >
          {cars.map((car, idx) => (
            <SwiperSlide
              key={idx}
              // card size: adjusts across screens
              className="!w-[240px] sm:!w-[300px] md:!w-[360px] lg:!w-[420px]"
            >
              <div className="group relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg
                              ring-1 ring-black/5 bg-white/40 backdrop-blur
                              transition-transform duration-300 will-change-transform">
                {/* Car image */}
                <Image
                  src={car.src}
                  alt={car.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 bg-cover"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority={idx < 2}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Bottom glass label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/70 backdrop-blur px-3 py-2
                                  shadow-sm ring-1 ring-black/5">
                    <span className="font-semibold text-gray-900">{car.label}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">
                      Book Now
                    </span>
                  </div>
                </div>

                {/* Top-left badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/70 text-white text-xs px-3 py-1">
                    {idx === 2 ? 'Best Choice' : 'Available'}
                  </span>
                </div>

                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100
                                transition duration-300 blur-2xl bg-gradient-to-r from-blue-300/30 to-purple-300/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
