import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full md:h-[800px] h-96"
        src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="p-10 bg-orange-50">
        <h1 className="text-4xl mb-4 font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-xl font-medium text-gray-700">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-xl font-medium text-gray-700">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-orange-300 w-fit p-5 rounded-lg mt-8 mb-4">
          <h2 className="text-2xl font-bold">Your destination is waiting.</h2>
          <h2 className="text-2xl font-bold mb-5">Your van is ready.</h2>
          <Link to="/vans" className="bg-black text-white rounded-lg py-2 px-5 font-medium">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About