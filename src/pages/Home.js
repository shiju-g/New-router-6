import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="relative   min-h-full w-full" style={{ height: "84vh" }}>
        <img
          className="h-full min-w-full"
          src="https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zJTIwc3Vuc2V0JTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000067] flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className=" font-bold text-5xl mb-5">
              You got the travel plans,we got the travel vans
            </h1>
            <p className=" text-xl">
              Add adventure to your life by joining the #vanlife movement
            </p>
            <p className=" text-xl">
              Rent the perfect van to make your perfect road trip
            </p>
            <button className="text-white bg-yellow-500 w-fit px-10 py-3 font-bold text-2xl mt-8 rounded-lg">Find your van</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home