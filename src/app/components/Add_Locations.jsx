'use client';

import { useState } from 'react';
import {
  EnvironmentOutlined,
  PlusCircleFilled,
  DeleteOutlined,
  AimOutlined,
  ArrowRightOutlined,
  SwapOutlined,
} from '@ant-design/icons';

export default function AddLocations({ onSubmitRoute }) {
  // (Paste your RoutePlanner logic here, just rename the function to AddLocations)
  const [start, setStart] = useState('');
  const [stops, setStops] = useState([]);
  const [end, setEnd] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const addStop = () => { if (stops.length < 5) setStops([...stops, '']); };
  const updateStop = (i, v) => setStops(stops.map((s, idx) => (idx === i ? v : s)));
  const removeStop = (i) => setStops(stops.filter((_, idx) => idx !== i));
  const swapStartEnd = () => { setStart(end); setEnd(start); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!start || !end) return;
    setSubmitting(true);
    try {
      onSubmitRoute?.({
        start,
        stops: stops.filter((s) => s && s.trim()),
        end,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 text-black">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white shadow">
            <AimOutlined />
          </span>
          <h3 className="!m-0 text-lg sm:text-xl !font-extrabold">Start travelling</h3>
        </div>
        <button type="button" onClick={swapStartEnd}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-white/90 ring-1 ring-white/20 bg-gray-300 cursor-pointer hover:bg-amber-600 hover:!text-white transition">
          <SwapOutlined /> Swap
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        <div className="sm:col-span-2">
          <label className="block text-sm text-black mb-1">Starting location</label>
          <div className="relative">
            <EnvironmentOutlined className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 !text-black" />
            <input
              value={start}
              onChange={(e) => setStart(e.target.value)}
              placeholder="e.g., Downtown"
              className="w-full rounded-xl bg-gray-100 placeholder:!text-gray-400 !text-gray-600 ring-1 ring-white/20 focus:ring-2 focus:ring-gray-300 outline-none px-10 py-2.5"
              required
            />
          </div>
        </div>

        <div className="hidden sm:flex sm:col-span-1 items-end justify-center pb-1">
          <ArrowRightOutlined className="text-white/70" />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm ">Destination</label>
          <div className="relative">
            <EnvironmentOutlined className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 !text-black rotate-180" />
            <input
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              placeholder="e.g., Airport"
              className="w-full rounded-xl bg-gray-100 placeholder:!text-gray-400 !text-gray-600 ring-1 ring-white/20 focus:ring-2 focus:ring-gray-300 outline-none px-10 py-2.5"
              required
            />
          </div>
        </div>
      </div>

      {/* Stops */}
      <div className="space-y-3">
        {stops.map((stop, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-3">
            <div className="col-span-10">
              <label className="block text-sm text-black mb-1">Stop {idx + 1}</label>
              <div className="relative">
                <EnvironmentOutlined className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  value={stop}
                  onChange={(e) => updateStop(idx, e.target.value)}
                  placeholder="Add a stop (optional)"
                  className="w-full rounded-xl bg-gray-100 !text-gray-600 ring-1 ring-white/20 focus:ring-2 focus:ring-gray-300 outline-none px-10 py-2.5"
                />
              </div>
            </div>
            <div className="col-span-2 flex items-end">
              <button type="button" onClick={() => removeStop(idx)}
                className="w-full inline-flex items-center justify-center rounded-xl bg-gray-300 hover:!text-white ring-1 ring-white/20 hover:bg-black py-2.5 transition"
                aria-label={`Remove stop ${idx + 1}`}>
                <DeleteOutlined />
              </button>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <button type="button" onClick={addStop} disabled={stops.length >= 5}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white bg-white/10 ring-1 ring-black hover:bg-white/15 disabled:opacity-50 transition">
            <PlusCircleFilled className="text-amber-400" /> Add stop
          </button>
          <span className="text-xs text-black">{stops.length}/5 stops</span>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-end">
        <button type="submit" disabled={submitting || !start || !end}
          className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 !text-white
                     bg-gradient-to-r from-gray-800 to-gray-500 hover:from-black hover:to-gray-600
                     shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-60">
          {submitting ? 'Submitting...' : 'Submit route'}
          <ArrowRightOutlined />
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md opacity-30
                           bg-gradient-to-r from-orange-600/60 to-amber-500/60" />
        </button>
      </div>
    </form>
  );
}
