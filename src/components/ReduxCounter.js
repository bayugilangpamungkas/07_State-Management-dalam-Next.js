// components/ReduxCounter.js
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/features/counter/counterSlice';

export default function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Redux Count: {count}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-300"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition duration-300"
        >
          -
        </button>
      </div>
    </div>
  );
}
