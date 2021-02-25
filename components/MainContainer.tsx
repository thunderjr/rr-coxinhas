import Image from 'next/Image'

export default function MainContainer({ children, label }) {
  return (
    <div className="h-screen text-white font-semibold flex flex-col items-center py-4 divide-y-2 divide-gray-200">
      <div className="w-11/12 mb-6 mx-10">
        <Image src="/logo.png" width={586 / 3} height={296 / 3} />
      </div>
      <div className="w-11/12 flex flex-col items-center">
        <span className="bg-rr px-3 -mt-5 mb-2 text-2xl">{label.toUpperCase()}</span>
        {children}
      </div>
    </div>
  )
}