import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full sticky top-0 bg-white'>
        <section className="top-notification bg-newcolor flex justify-center ">
            <div className='text-white'> 
            Sow & Grow
            </div>
	    </section>
      
        <nav className='px-80 flex space-x-24 space-y-6'>
            <img src="https://www.kraftseeds.com/images/logo.png" alt="logo" srcset="" className='w-64 h-20' />
            <div className='flex '>
  
  <input type="email" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 w-96 h-10" placeholder="Search Product" />
  
  <i class="fa-solid fa-magnifying-glass bg-newcolor w-8 h-10 mt-1 p-2 text-white rounded" ></i>

  </div>
  <div className='flex space-x-4 space-y-0.5  '>
    <div className='flex '>
  <i class="fa-solid fa-user-large h-10 mt-1 pt-2 font-bold text-gray-600 rounded hover:text-green-700 "  >
  </i>
  <p className='mt-1 pt-1 text-gray-600 font-bold hover:text-green-700 '>Login</p>
  
  </div>
 <div className='mx-4 space-x-4'>
  <i class="fa fa-heart h-10 mt-1 pt-2 font-bold text-gray-600 rounded hover:text-green-700 " ></i>
  <i class="fa fa-shopping-cart h-10 mt-1 pt-2 font-bold text-gray-600 rounded hover:text-green-700 "  aria-hidden="true"></i>
  </div>
  </div>
        </nav>
        
<div className='bg-bald p-4 '> 
<ul className='flex space-x-6 px-9  text-gray-500 font-mono' >
    <li>SEEDS</li>
    <li>POTS</li>
    <li>DRIP IRRIGATION</li>
    <li>FLOWER BULDS</li>
    <li>MANURES & COMPOSTERS</li>
    <li>GARDEN TOOLS & ACCESSORIES</li>
    <li>GARDENING KITS</li>
    <li>SEEDLING TRAY</li>
</ul>
</div>
    </div>
  )
}

export default Navbar