import Image from 'next/image'

export default function MainContainer({ children }) {
  return (
    <div className="container mx-auto h-screen text-white flex flex-col items-center py-4">
      <div className="w-11/12 mb-2 mx-10 pr-2 flex items-center justify-between">
        <Image src="/logo.png" width={586 / 3} height={296 / 3} />
        <Image className="filter-invert opacity-90 cursor-pointer" src="/cart-icon.svg" width={35} height={35} />
      </div>
      <div className="w-11/12 flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}