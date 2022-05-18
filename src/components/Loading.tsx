import Image from 'next/image'
import loading from '../assets/Loading.svg'

export default function Loading() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col bg-gray-100'>
        <Image src={loading} height={200} width={200} alt="Pacman loading gif" />
    </div>
  )
}
