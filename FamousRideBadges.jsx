'use client';
import React from 'react';
import { StarFilled, DollarCircleOutlined, EnvironmentOutlined, ArrowRightOutlined, CarOutlined } from '@ant-design/icons';

export default function FamousRideBadges  ({onSelect }) {
    const rides = [
    {
      id: 'r1',
      from: 'Downtown',
      to: 'Airport',
      rent: 'From $18',
      tag: 'Popular',
    },
    {
      id: 'r2',
      from: 'City Center',
      to: 'Tech Park',
      rent: 'From $12',
      tag: 'Rush Hour',
    },
    {
      id: 'r3',
      from: 'Old Town',
      to: 'University',
      rent: 'From $10',
      tag: 'Student Fav',
    },
    {
      id: 'r4',
      from: 'Harbor',
      to: 'Stadium',
      rent: 'From $15',
      tag: 'Game Day',
    },
    { id: 'r5', from: 'Museum', to: 'Zoo', rent: 'From $9', tag: 'Family' },
    {
      id: 'r6',
      from: 'Suburbs',
      to: 'City Center',
      rent: 'From $14',
      tag: 'Daily',
    },
  ];
  return (
    <section className='relative z-10 mt-8 sm:mt-12 md:mt-14 lg:mt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex items-center justify-between flex-wrap gap-3 mb-5'>
          <div>
            <h3 className='text-xl md:text-2xl font-extrabold tracking-tight text-slate-900'>
              Famous Rides
            </h3>
            <p className='text-slate-600'>
              Quick picks people love—tap Select to prefill your booking.
            </p>
          </div>
          <div className='inline-flex items-center gap-2 text-amber-500'>
            <StarFilled />
            <span className='text-sm font-medium text-slate-700'>
              Hand‑picked routes
            </span>
          </div>
        </div>

        {/* One grid for all breakpoints: no overflow, no horizontal scroll */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {rides && rides.map((ride) => (
            <RideBadge key={ride.id} ride={ride} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Fixed-size orange/white RideBadge ---------- */
function RideBadge({ ride, onSelect }) {
  return (
    <div className='group relative w-full sm:max-w-[380px] mx-auto'>
      {/* Orange gradient border shell */}
      <div className='p-[1.1px] rounded-2xl bg-[conic-gradient(from_160deg_at_50%_50%,#fb923c,#f59e0b,#f97316,#fb923c)] opacity-95 transition-opacity duration-300 group-hover:opacity-100'>
        {/* Card (fixed height + no overflow) */}
        <div className='flex flex-col justify-evenly rounded-2xl w-full h-[170px] overflow-hidden bg-white/95 ring-1 ring-black/5 p-4 shadow-[0_8px_24px_rgba(2,6,23,0.06)] group-hover:shadow-[0_14px_32px_rgba(2,6,23,0.12)] transition-shadow duration-300'>
          {/* Top row: tag + rent */}
          <div className='flex items-center justify-between'>
            <span className='text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 ring-1 ring-orange-200'>
              {ride.tag}
            </span>
            <span className='inline-flex items-center gap-1 text-sm font-semibold text-orange-700'>
              <DollarCircleOutlined />
              {ride.rent}
            </span>
          </div>

          {/* Route */}
          <div className='mt-3 md:flex md:flex-row'>
            <div className='flex items-center gap-2 text-slate-800'>
              <EnvironmentOutlined className='text-orange-500' />
              <span className='font-medium'>{ride.from}</span>
            </div>
            <div className='flex items-center gap-2 text-slate-500'>
              <div className='mx-1 h-[2px] w-7 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full' />
              <ArrowRightOutlined className='text-slate-400' />
              <div className='mx-1 h-[2px] w-7 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full' />
            </div>
            <div className='flex items-center gap-2 text-slate-800'>
              <EnvironmentOutlined className='rotate-180 text-orange-500' />
              <span className='font-medium'>{ride.to}</span>
            </div>
          </div>

          {/* Footer */}
          <div className='mt-4 flex items-center justify-between'>
            <div className='inline-flex items-center gap-2 text-slate-600'>
              <CarOutlined />
              <span className='text-sm'>Standard · Comfort · XL</span>
            </div>

            <button
              onClick={() => onSelect(ride)}
              className='relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-white
                         bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400
                         shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-0'
              aria-label={`Select ${ride.from} to ${ride.to}`}
            >
              Select
              <ArrowRightOutlined className='text-white/95' />
              {/* glow */}
              <span
                className='pointer-events-none absolute inset-0 -z-10 rounded-full blur-md opacity-40
                                bg-gradient-to-r from-orange-600/60 to-amber-500/60'
              />
            </button>
          </div>
        </div>
      </div>

      {/* Hover aura (very subtle to avoid color clash) */}
      <div className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-400/0 via-amber-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-300' />
    </div>
  );
}
