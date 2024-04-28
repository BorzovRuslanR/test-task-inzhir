'use client' // Error components must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <h2>Что-то пошло не так!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Попробуйте еще раз
      </button>
      <Link href='/'><span className='flex items-center justify-center rounded h-10 bg-cyan-500 text-white cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-700 hover:translate-y-1'>Вернуться на главную</span></Link>
    </div>
  )
}