import Navbar from './Navbar'

const Saybar = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <Navbar />

      <main className='bg-lime-100 w-full'>
        {children}
      </main>

    </div>
  )
}

export default Saybar