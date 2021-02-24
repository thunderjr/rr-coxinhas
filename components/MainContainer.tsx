import Image from 'next/Image'

export default function MainContainer({ children, label }) {
  return (
    <div className="bg-rr h-screen text-white font-semibold text-lg flex flex-col items-center py-4 divide-y-4 divide-gray-200 divide-dotted">
      <div className="w-44 md:w-72 mb-6">
        <Image src="/logo.png" width="586" height="296" />
      </div>
      <div className="w-5/6 flex flex-col items-center">
        <span className="bg-rr px-3 -mt-5 mb-2 text-2xl">{label.toUpperCase()}</span>
        <div>{children}</div>
      </div>
    </div>
  )
}