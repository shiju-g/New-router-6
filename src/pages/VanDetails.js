import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const VanDetails = () => {
  const [VanDetails,setVanDetails] = useState([])

  const params = useParams()
 
  useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data));
  }, [params.id])
  
  

  return (
    <div className="bg-orange-50 md:px-20 px-5 pb-10 md:h-[84.1vh]">
      <Link to="/vans" className="underline mb-5  flex items-center ">
        <HiOutlineArrowNarrowLeft className="mr-3" /> Back to all vans
      </Link>
      {
        VanDetails.vans ? (
          <div className="md:flex ">
        {console.log(VanDetails.vans && VanDetails.vans)}
        <img
          className="rounded-lg mb-5 lg:max-w-lg md:max-w-sm"
          src={ VanDetails.vans && VanDetails.vans.imageUrl}
          alt=""
        />
        <div className="md:px-10">
          <button
            className={
              VanDetails.vans && VanDetails.vans.type === "simple"
                ? " py-1 w-16 text-white mb-2 capitalize rounded text-sm bg-orange-500"
                : VanDetails.vans && VanDetails.vans.type === "rugged"
                ? "py-1 w-16 text-white mb-2 capitalize rounded text-sm bg-green-800"
                : VanDetails.vans && VanDetails.vans.type === "luxury"
                ? "py-1 w-16 text-white mb-2 capitalize rounded text-sm bg-black"
                : ""
            }
          >
            {VanDetails.vans && VanDetails.vans.type}
          </button>
          <h2 className="font-bold text-xl">{VanDetails.vans && VanDetails.vans.name}</h2>
          <h6 className="mb-3">
            <span className="font-bold text-lg">${VanDetails.vans && VanDetails.vans.price}</span>
            /day
          </h6>
          <p className="text-lg xl:w-10/12">{VanDetails.vans && VanDetails.vans.description}</p>
          <button className="bg-orange-500 text-white  text-lg sm:w-52 w-full py-3 rounded-lg mt-5">
            Rent this van
          </button>
        </div>
      </div>
        ) : (
            <h1 className='text-lg font-bold'>Loading</h1>
        )
      }
    </div>
  );
}

export default VanDetails