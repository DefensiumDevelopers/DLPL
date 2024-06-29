import React from 'react';

const Card = () => {
    const cards = [
        {
            "title": "Penetration Testing",
            "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque veniam eveniet ratione! Doloribus soluta neque omnis dignissimos perspiciatis provident."
        },
        {
            "title": "Penetration Testing",
            "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque veniam eveniet ratione! Doloribus soluta neque omnis dignissimos perspiciatis provident."
        },
        {
            "title": "Penetration Testing",
            "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque veniam eveniet ratione! Doloribus soluta neque omnis dignissimos perspiciatis provident."
        },
    ];

    return (
        <>
            {cards.map((item, index) => (
                <div key={index} className="w-[300px] h-[420px] sm:w-[330px] bg-transparent cursor-pointer group perspective rounded-lg">
                    <div className="relative preserve-3d group-hover:my-rotate-x-180 w-full h-full duration-500 rounded-lg shadow-xl">
                        <div className='absolute backface-hidden w-full h-full shadow-xl rounded-lg'>
                            <img src="https://media.istockphoto.com/id/1473719070/photo/3d-internet-secuirty-badge.jpg?s=2048x2048&w=is&k=20&c=kcZyrooZi-T8kdM9LeoFbN0v2zykniC7XVxNG_TYVqk=" alt="" className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <div className='absolute backface-hidden my-rotate-x-180 w-full h-full bg-white rounded-lg'>
                            <div className='text-center flex flex-col items-center justify-around h-full'>
                                <h1 className='text-4xl font-bold text-blue-600 px-16'>{item.title}</h1>
                                <p className='p-5 text-gray-700'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;
