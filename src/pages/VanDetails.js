import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const VanDetails = () => {
  const [vanDetails,setVanDetails] = useState()

  const params = useParams()
 
  useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data));
  }, [])
  

  return (
    <div className='bg-orange-50 px-5 pb-10'>
      <Link className='underline flex items-center '><HiOutlineArrowNarrowLeft className='mr-3' /> Back to all vans</Link>
      <div className=''>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <span>simple</span>
          <h2>Modest Explorer</h2>
          <h6>$60/day</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque facere cupiditate nemo nostrum, quisquam similique repudiandae ullam? Adipisci, perspiciatis distinctio. Sunt ducimus sapiente excepturi quae voluptas quo non quos delectus?</p>
        </div>
      </div>
      <button>Rent this van</button>
    </div>
  )
}

export default VanDetails