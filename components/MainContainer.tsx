import Header from './../components/Header'

export default function MainContainer({ children }) {
  return (
    <div className="container mx-auto h-screen text-white flex flex-col items-center py-4">
      <Header />
      <div className="w-11/12 flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}