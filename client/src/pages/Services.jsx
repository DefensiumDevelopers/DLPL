import React from 'react'
import Card from '../components/Card';

const Services = () => {
  // card css
  // const cardStyle =
  //   "w-[17rem] h-[23rem] bg-white rounded-xl shadow-2xl flex items-center justify-center";
  return (
    <div className="bg-slate-100 w-full flex flex-col items-center">
      <h1 className="text-5xl sm:text-8xl mt-[4rem] font-bold">Services</h1>
      <div className="w-full mt-[5rem] flex justify-center flex-col sm:flex-row items-center sm:items-baseline gap-5 sm:gap-24 mb-[4rem]">
        <Card />
      </div>
    </div>
  )
}

export default Services;