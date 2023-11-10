import Background from "../assets/car_garage.jpg";

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          {/* <h3 className='p-5 bg-gray-700 border border-white text-white'>Welcome to the Garage</h3> */}
        </div>
    </div>
  )
}

export default Home