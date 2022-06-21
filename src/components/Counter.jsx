import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/slices/counter/counterSlice'

export default function Counter() {
  const { value } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <h2 className='text-xl font-semibold text-gray-800'>Counter</h2>
      <h3 className='text-lg font-semibold text-gray-700'>Simple Slice</h3>
      <div className='flex flex-row justify-around items-center m-4'>
        <button onClick={() => dispatch(increment())} className='border px-4 py-2 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200 rounded'>
          +
        </button>
        <div className='text-xl px-32'>
          <span>{ value }</span>
        </div>
        <button onClick={() => dispatch(decrement())} className='border px-4 py-2 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200 rounded'>
          -
        </button>
      </div>
      <div className='flex flex-col w-min mx-auto space-y-2'>
        <input 
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className='text-center border rounded px-4 py-2' type="text" 
        />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))} className='border px-4 py-2 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200 rounded'>
          Add amount
        </button>
      </div>
    </div>
  )
}
