import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../store/slices/pokemon/thunks'

export default function Pokemon() {
  const dispatch = useDispatch()
  const { isLoading, pokemons, page } = useSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <div className='flex flex-col justify-center items-center p-4 border-t text-center'>
      <h2 className='text-xl font-semibold text-gray-800'>Pokemon API</h2>
      <h3 className='text-lg font-semibold text-gray-700'>Thunks y Axios</h3>
      {
        isLoading && <p>Loading...</p>
      }
      <div className='p-4'>
        {
          pokemons?.map(pokemon => (
            <p key={pokemon.url}>{pokemon.name}</p>
          ))
        }
      </div>
      <button onClick={() => dispatch(getPokemons(page))} className='border px-4 py-2 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200 rounded'>
        Next page
      </button>
    </div>
  )
}
