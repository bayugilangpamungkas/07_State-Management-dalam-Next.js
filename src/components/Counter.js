'use client';

import React from 'react';
import useCounterStore from '../stores/counterStore';

export default function Counter() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Count: {count}</h2>
            <div className="flex space-x-4">
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl transition duration-200 shadow"
                >
                    +
                </button>
                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-xl transition duration-200 shadow"
                >
                    -
                </button>
                <button
                    onClick={reset}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition duration-200 shadow"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
