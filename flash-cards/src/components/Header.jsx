import React from 'react'

function Header({sharedData}) {


  return (
    <header className="w-full h-[25%] bg-transparent   p-4 ">
      <h2 className="pb-5 text-3xl font-bold  font-medium text-black-700">Flash Cards</h2>
      <div className="relative w-full h-[60px] p-1 border-2 border-gray-400 rounded-xl">
          <p className={`absolute top-4 right-2 left-100 bottom-0 ${sharedData + 1 > 9 ? `text-white` : `text-gray-600`} `}>{sharedData + 1} of 10</p>

          <div className="flex items-align justify-center p-4 bg-gray-500  h-[100%] rounded-xl" style={{width: `${(sharedData + 1) * 10}%`}}>
            <p className='text-white'>{(sharedData + 1) * 10}%</p>

          </div>
      </div>
    </header>
  )
}

export default Header;
