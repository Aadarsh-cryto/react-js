import React from 'react'

const App2 = ({companyName,logo,role,salary}) => {
  return (
    <div className='h-90 w-90 border-gray-200 shadow-2xl rounded-4xl p-4'>
        <div className='rounded-full  h-12 w-12 border-0 border-black overflow-hidden'>
            <img className='h-full w-full object-cover' src={logo} alt={logo} />
        </div>
<h3 className='text-xl mt-3'>{companyName}</h3>
<h2 className='text-2xl'>{role}</h2>
<div className='mt-40 flex justify-between'>
    <h4 className='text-xl p-2'>${salary}</h4>
    <button className='border border-gray-300 rounded-2xl px-4 py-2 hover:bg-black hover:text-white active:scale-2 transition-all duration-500 ease-linear'>
        Apply now
    </button>
</div>
      
    </div>
  )
}

export default App2
