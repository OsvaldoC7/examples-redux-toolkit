import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from '../store/API/todosApi'

export default function Todos() {
  const [todo, setTodo] = useState(1)

  const { data = [], isLoading, isSuccess, isError, error } = useGetTodosQuery()
  const { 
      data: dataOne, 
      isLoading: isLoadingOne, 
      isSuccess: isSuccessOne, 
      isError: isErrorOne, 
      error: errorOne 
  } = useGetTodoQuery(todo)

  return (
    <div className='flex flex-col justify-center items-center p-4 border-t text-center space-y-4'>
      <div>
        <h2 className='text-xl font-semibold text-gray-800'>Todos</h2>
        <h3 className='text-lg font-semibold text-gray-700'>RTK Query</h3>
      </div>

      <div className='border flex flex-col space-y-2 p-4'>
        <h4 className='text-gray-600 text-lg'>Get one</h4>
        { isLoadingOne && <p>Loading...</p> }
        { isSuccessOne && <p>Success</p> }
        { isErrorOne && <p>Error: { errorOne }</p> }
        <div>
          <p>Id: { dataOne?.id }</p>
          <p key={dataOne?.id}>
            <strong>{ dataOne?.completed ? 'Done' : 'Pending' }: </strong>
            { dataOne?.title }
          </p>
        </div>
        <button onClick={() => setTodo(todo > 1 ? todo - 1 : todo)} className='border px-4 py-2 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200 rounded'>
          Prev todo
        </button>
        <button onClick={() => setTodo(todo + 1)} className='border px-4 py-2 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200 rounded'>
          Next todo
        </button>
      </div>

      <div className='border'>
        <h4 className='text-gray-600 text-lg'>Get all</h4>
        { isLoading && <p>Loading...</p> }
        { isSuccess && <p>Success</p> }
        { isError && <p>Error: { error }</p> }
        <div>
          {
            data.map(todo => (
              <p key={todo.id}>
                <strong>{ todo.completed ? 'Done' : 'Pending' }: </strong>
                { todo.title }
              </p>
            ))
          }
        </div>
      </div>
    </div>
  )
}
