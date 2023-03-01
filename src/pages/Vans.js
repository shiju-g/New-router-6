import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [Vans,setVans] = useState()
 
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch(e => console.log(e))
  }, [])  

  return (
    <div className="bg-orange-50 min-h-screen  sm:p-10 p-5">
      <h2 className="font-bold text-xl mb-2">Explore our van options</h2>
      <div className="flex sm:justify-end w-full">
        <button className="bg-orange-200 cursor-pointer rounded text-sm sm:mx-2 mx-1 py-1 w-[70px]">
          Simple
        </button>
        <button className="bg-orange-200 cursor-pointer rounded text-sm py-1 sm:mx-2  mx-1 w-[70px]">
          Luxury
        </button>
        <button className="bg-orange-200 cursor-pointer rounded text-sm py-1 sm:mx-2  mx-1 w-[70px]">
          Rugged
        </button>
        <button className=" text-sm underline sm:ml-3 ml-auto">
          Clear filters
        </button>
      </div>
      <div className="grid  gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8 mb-3">
        {Vans ? (
          Vans.map((item, index) => (
            <Link to={item.id}>
              <div key={item.id} className="max-w-sm mb-3">
                {console.log(item)}
                <img className="rounded shadow-gray-400 shadow" src={item.imageUrl} alt="" />
                <div className="flex justify-between mt-2">
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  <div>
                    <h3 className="text-sm font-bold">${item.price}</h3>
                    <p className="text-xs">/day</p>
                  </div>
                </div>
                {/* py-1 w-16 text-white capitalize rounded text-sm bg-orange-500 */}
                <button
                  className={
                    item.type === "simple"
                      ? " py-1 w-16 text-white capitalize rounded text-sm bg-orange-500"
                      : item.type === "rugged"
                      ? "py-1 w-16 text-white capitalize rounded text-sm bg-green-800"
                      : item.type === "luxury"
                      ? "py-1 w-16 text-white capitalize rounded text-sm bg-black"
                      : ""
                  }
                >
                  {item.type}
                </button>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-lg font-bold">Loading</h1>
        )}
      </div>
    </div>
  );
}

export default Vans