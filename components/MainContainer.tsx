import Image from 'next/image'

export default function MainContainer({ children, label }) {
  return (
    <div className="h-screen text-white font-semibold flex flex-col items-center py-4 divide-y-2 divide-gray-200">
      <div className="w-11/12 mb-6 mx-10 pr-2 flex items-center justify-between">
        <Image src="/logo.png" width={586 / 3} height={296 / 3} />
        <Image className="filter-invert opacity-90 cursor-pointer" src="/cart-icon.svg" width={35} height={35} />
      </div>
      <div className="w-11/12 flex flex-col items-center">
        <span className="bg-rr px-5 -mt-5 mb-3 text-2xl md:text-3xl tracking-widest font-akaya">{label.toUpperCase()}</span>
        {children}
      </div>
    </div>
  )
}