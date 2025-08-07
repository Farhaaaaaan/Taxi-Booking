// 'use client';

// import Link from 'next/link';
// import { useCallback } from 'react';
// import {
//   ThunderboltOutlined,
//   CalendarOutlined,
//   EnvironmentOutlined,
//   SafetyCertificateOutlined,
//   ArrowRightOutlined,
// } from '@ant-design/icons';

// export default function GetStarted() {
//   // If you have a booking form with id="booking", this will smooth‑scroll to it.
//   const scrollToBooking = useCallback(() => {
//     const target = document.getElementById('booking');
//     if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }, []);

//   const steps = [
//     {
//       title: 'Set Pickup & Drop',
//       desc: 'Tell us where you are and where you’re going.',
//       icon: <EnvironmentOutlined />,
//     },
//     {
//       title: 'Choose Time',
//       desc: 'Ride now or schedule days ahead—your call.',
//       icon: <CalendarOutlined />,
//     },
//     {
//       title: 'Confirm & Go',
//       desc: 'Instant confirmation, live driver updates.',
//       icon: <ThunderboltOutlined />,
//     },
//   ];

//   return (
//     <section className="relative py-20 overflow-hidden">
//       {/* Background gradient + blobs */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_10%,#1e3a8a18,transparent),linear-gradient(180deg,#0ea5e90f,#6366f10a)]" />
//       <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />

//       <div className="max-w-6xl mx-auto px-6">
//         {/* Headline */}
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-slate-700 ring-1 ring-black/5 backdrop-blur">
//             <SafetyCertificateOutlined />
//             <span className="text-sm">Trusted by 10k+ happy riders</span>
//           </span>

//           <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
//             Ready to ride? <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Get started</span> in 60 seconds.
//           </h2>
//           <p className="mt-3 text-slate-600">
//             Book instantly or schedule ahead. Transparent pricing, real‑time tracking, and pro drivers—no surprises.
//           </p>
//         </div>

//         {/* Cards + Dotted path */}
//         <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
//           {/* Dotted path SVG (desktop) */}
//           <svg
//             className="hidden md:block absolute left-0 right-0 top-16 mx-auto w-[80%] -z-10"
//             height="60"
//             viewBox="0 0 1000 60"
//             fill="none"
//           >
//             <path
//               d="M0,30 C200,0 300,60 500,30 C700,0 800,60 1000,30"
//               stroke="url(#grad)"
//               strokeWidth="2"
//               strokeDasharray="6 10"
//             />
//             <defs>
//               <linearGradient id="grad" x1="0" x2="1">
//                 <stop offset="0%" stopColor="#60a5fa" />
//                 <stop offset="100%" stopColor="#818cf8" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {steps.map((s, i) => (
//             <div
//               key={s.title}
//               className="group relative rounded-2xl bg-white/70 backdrop-blur p-5 ring-1 ring-black/5 shadow-sm
//                          hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
//             >
//               {/* Accent gradient border on hover */}
//               <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300
//                               bg-[conic-gradient(from_120deg_at_50%_50%,#60a5fa55,#818cf855,#60a5fa55)] blur-[2px]" />
//               <div className="relative">
//                 <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
//                   <span className="text-lg">{s.icon}</span>
//                 </div>
//                 <h3 className="mt-4 text-lg font-semibold text-slate-900">{i + 1}. {s.title}</h3>
//                 <p className="mt-1 text-slate-600">{s.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA bar */}
//         <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
//           <button
//             onClick={scrollToBooking}
//             className="group relative inline-flex items-center gap-3 rounded-full px-6 py-3
//                        text-white font-semibold shadow-lg transition-transform duration-200
//                        bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500
//                        hover:-translate-y-[1px]"
//           >
//             <span>Get Started</span>
//             <ArrowRightOutlined className="transition-transform duration-200 group-hover:translate-x-0.5" />
//             {/* Glow */}
//             <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md opacity-60
//                               bg-gradient-to-r from-indigo-600/50 to-blue-600/50" />
//           </button>

//           <Link
//             href="/prebook"
//             className="inline-flex items-center gap-2 rounded-full px-5 py-2.5
//                        bg-white/80 text-slate-900 ring-1 ring-black/10 backdrop-blur
//                        hover:shadow-md hover:-translate-y-[1px] transition"
//           >
//             <CalendarOutlined />
//             Pre‑book a ride
//           </Link>
//         </div>

//         {/* Trust minis */}
//         <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
//           <div className="inline-flex items-center gap-2">
//             <span className="size-2 rounded-full bg-green-500 animate-pulse" />
//             Live driver tracking
//           </div>
//           <span className="hidden sm:inline">•</span>
//           <div className="inline-flex items-center gap-2">
//             <SafetyCertificateOutlined />
//             Verified drivers
//           </div>
//           <span className="hidden sm:inline">•</span>
//           <div className="inline-flex items-center gap-2">
//             <span className="font-semibold text-slate-700">24/7</span> support
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useRouter } from 'next/navigation';
import AddLocations from './AddLocations';
import Image from 'next/image';
import { useCallback } from 'react';
import {
  ArrowRightOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  DollarCircleOutlined,
  CarOutlined,
  StarFilled,
} from '@ant-design/icons';

// Put a large, high‑quality image in /public/images/hero/hero-bg.jpg
// (or replace the default via props)
export default function HeroGetStarted({
  bgSrc = '/images/GG.png',
  headline = (
    <>
      Book a{' '}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-200'>
        reliable ride
      </span>{' '}
      in seconds
    </>
  ),
  subtext = 'Instant booking, transparent pricing, and verified drivers — day or night.',
  ctaText = 'Get Started',
  onGetStarted, // optional callback; if not provided, it will scroll to #booking
}) {
  const handleClick = useCallback(() => {
    if (onGetStarted) return onGetStarted();
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [onGetStarted]);

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

  const router = useRouter();

  const onSelect = (ride) => {
    // Pass selection to your booking page as query params
    const params = new URLSearchParams({
      from: ride.from,
      to: ride.to,
      routeId: ride.id,
    }).toString();
    router.push(`/book-now?${params}`);
  };

  return (
    <div className='relative pb-8 z-0 '>
      <section className='relative overflow-hidden'>
        {/* Background image */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src={bgSrc}
            alt='City night road with car lights'
            fill
            quality={100}
            priority
            sizes='100vw'
            className='object-cover object-center'
          />
          {/* Darkening & color overlay to ensure text dominance */}
          <div className='absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(2,6,23,.5),rgba(2,6,23,.85))]' />
          <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50' />
        </div>

        {/* Content container */}
        <div className='flex justify-between lg:flex-row flex-col gap-4 relative mx-auto w-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
          {/* Glass panel keeps text crisp on any background */}

          <div className='flex justify-between flex-row lg:flex-col w-full self-start'>
            <div>
              <p className='flex w-max gap-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-[10px] sm:text-[12px] md:text-sm ring-1 ring-white/20'>
                <SafetyCertificateOutlined />
                Trusted by 10k+ riders
              </p>
              <p className='m-0 ml-4'>___ _ _ ___</p>
              <p className='mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-wrap font-extrabold leading-tight text-white'>
                {headline}
              </p>
            </div>
            {/* CTA Row */}
            <div className='self-center lg:self-auto lg:mt-6 flex flex-col lg:flex-row items-stretch sm:items-center gap-3'>
              <button
                onClick={handleClick}
                className='group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 !text-[12px] sm:!text-[14px] lg:!text-[16px]
                         font-semibold bg-white/15 cursor-pointer outline-1 outline-amber-50 hover:!bg-orange-600 hover:outline-none
                         shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-0'
              >
                {ctaText}
                <ArrowRightOutlined className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </button>

              <a
                href='/prebook'
                className='inline-flex gap-2 rounded-full px-5 py-2.5 !text-[12px] sm:!text-[14px] lg:!text-[16px] 
                         bg-white/15 text-white ring-1 ring-white/25 backdrop-blur
                         hover:bg-white/20 transition justify-center items-start'
              >
                <CalendarOutlined />
                Pre‑book a ride
              </a>
            </div>
          </div>
          <div className='max-w-full lg:max-w-3xl rounded-2xl w-full bg-white content-evenly backdrop-blur-[4px] ring-1 ring-white/15 p-4 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,.35)]'>
            <AddLocations
              onSubmitRoute={(payload) => {
                console.log('Route payload:', payload);
              }}
            />
          </div>
        </div>

        {/* Decorative gradient blobs (behind content) */}
        <div className='pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl -z-10' />
        <div className='pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl -z-10' />
      </section>

      {/* ===== FAMOUS RIDES (Orange + White, fixed size, fully responsive) ===== */}
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
            {rides.map((ride) => (
              <RideBadge key={ride.id} ride={ride} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

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
