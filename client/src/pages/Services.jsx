import React from 'react'

const Services = () => {
  // card css
  const cardStyle =
    "w-[17rem] h-[23rem] bg-white rounded-xl shadow-2xl flex items-center justify-center";
  return (
    <div className="bg-slate-100 w-full min-h-screen flex flex-col items-center">
      <h1 className="text-5xl sm:text-8xl mt-[4rem] font-bold">Services</h1>
      <div className="w-full  sm:px-[300px] mt-[5rem] flex flex-wrap justify-center gap-[5rem] mb-[4rem]">
        <div className={cardStyle}> card 1</div>
        <div className={cardStyle}> card 1</div>
        <div className={cardStyle}> card 1</div>
      </div>
    </div>
  )
}

export default Services;