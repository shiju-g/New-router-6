import React from 'react'

const About = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full h-[500px]"
        src="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt=""
      />
      <div className="py-8 px-10 bg-orange-50">
        <h1 className="text-4xl mb-4 font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-xl mb-3">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-orange-300 p-5 rounded-lg mt-5">
          <h2 className="text-2xl font-bold">Your destination is waiting.</h2>
          <h2 className="text-2xl font-bold">Your van is ready.</h2>
          <button className='bg-black text-white rounded-lg py-2 px-5 font-medium mt-5'>Explore our vans</button>
        </div>
      </div>
    </div>
  );
}

export default About