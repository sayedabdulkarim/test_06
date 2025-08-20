'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
      >
        -
      </button>
      <span className="text-2xl font-bold min-w-[40px] text-center">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
      >
        +
      </button>
    </div>
  );
}