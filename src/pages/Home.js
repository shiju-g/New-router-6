import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="relative   min-h-full w-full" style={{ height: "84vh" }}>
        <img
          className="h-full min-w-full"
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            <button className="text-white bg-yellow-500 w-fit px-10 py-3 font-bold text-2xl mt-8 rounded-lg">
              Find your van
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home