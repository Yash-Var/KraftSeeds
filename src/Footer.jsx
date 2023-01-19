import React from 'react'

const Footer = () => {
  return (
    < div className=' bg-fotter '>
    <div className=' flex  px-96 pt-8' >
        <div>
        <h1 className='uppercase text-3xl text-sans text-white  '>Kraft seeds</h1>
        <p className='text-white text-xs pt-3'>Kraftseeds is your one-stop online shop for the
          Best and Widest range of Gardening Products </p>
        </div>
        <div className='ml-10'>
            <div className='text-white text-base '>
            <p>Get In Touch</p>
            <div>
                
                <p className='text-sm'><i class="fa-solid fa-phone"></i> +91-8860429881</p>
                <p className='text-sm'><i class="fa-solid fa-envelope"></i> sales@kraftseeds.com</p>
            </div>
            </div>
        </div>
        <div>
            <div className='text-white text-base mx-10 px-10'>
            <p>EXPLORE</p>
            <div>
                <p className='text-sm pt-2'>About Us</p>
                <p className='text-sm pt-2'>Brand Partner</p>
                <p className='text-sm pt-2'>Help Center</p>
            </div>
            </div>
        </div>
        <div>
            <div className='text-white text-base mx-10 px-10'>
            <p></p>
            <div className='mt-3'>
                <p className='text-sm pt-2'>World of Flora</p>
                <p className='text-sm pt-2'>Dealer Network</p>
                <p className='text-sm pt-2'>Contact Us</p>
            </div>
            </div>
        </div>
        <div>
            <div className='text-white text-base mx-10 px-10'>
            <p>NEWSLETTER</p>
            <div className='mt-3 flex'>
            <input type="email" name="text" class="mt-1 px-3 py-2 bg-fotter border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 w-48 h-10" placeholder="Add Your Email" />
           
         <div className='flex justify-center pt-2 bg-newcolor w-24 rounded'>
            <p >SUBSCRIBE</p>
            </div>
            
          
            </div>
            <p className='text-sm mt-3'>Connect with us on Social Media</p>
            <div className=' flex mt-6 space-x-4'>
                <div c className='rounded-full h-12 w-12 flex items-center justify-center border border-white'>

            <i class="fa-brands fa-square-facebook p-4 px-5"></i>
            
                </div>
                <div   className='rounded-full h-12 w-12 flex items-center justify-center border border-white'>

                <i class="fa-brands fa-square-instagram p-4 px-5"></i>
                </div>
                <div  className='rounded-full h-12 w-12 flex items-center justify-center border border-white'>

                <i class="fa-brands fa-youtube p-4 px-5"></i>
                </div>
            </div>
            </div>
        </div>
    </div >
    <div>
        <h1 className='text-xl text-white text-mono mt-4 px-96 pt-8'>Seeds</h1>
        <p className='text-white text-mono px-96  text-sm'>The phrase ‘As you sow, so shall you reap’ isn’t made for nothing. At Kraft Seeds, we believe that the quality of seeds matters a lot. It gives immense happiness to see a plant grow from the seed you sowed. We have a wide variety of vegetable seeds – English and Indian, greens &herbs seeds, flower seeds, fruits seeds</p>
        </div>
    <div>
        <h1 className='text-xl text-white text-mono mt-3 px-96 '>Gardening Tools</h1>
        <p className='text-white text-mono px-96  text-sm'>Organized is the new buzzword, what better way to enhance the delightful gardening experience than having the latest gardening tools. Please browse through our variety of tools in different variants such as wood, plastic and metal to make your gardening a comforting experience</p>
        </div>
    <div>
        <h1 className='text-xl text-white text-mono mt-3 px-96 '>Gardening Kites</h1>
        <p className='text-white text-mono px-96  text-sm'>At Kraft Seeds, we try to innovate to make our clients have different experiences; we guarantee that you won’t find more variety of gardening kits than ours. We have DIY boxes, kids combo, seed tray combos, tool &amp; seed combo and many more. Please explore our gardening kits section to buy one.</p>
        </div>
    <div>
        <h1 className='text-xl text-white text-mono mt-3 px-96 '>Manure & Composters </h1>
        <p className='text-white text-mono px-96  text-sm'>The health of the plant is crucial for its growth;manure & composts contribute the nutrients and minerals required by the plants. Our variety of manure & compost is organic, sustainable and eco-friendly, increases the nutrients in the soil & enhances growth</p>
        </div> 
    <div>
        <h1 className='text-xl text-white text-mono mt-3 px-96 '>Germination & Seedling Trays</h1>
        <p className='text-white text-mono px-96  text-sm'>Our range of products supports the entire life cycle of plants from seeds to germination to seedlings to healthy plants. We guarantee the best of seedling trays that will help increase the growth of seeds. You can choose from a variety of sizes and colors.</p>
        </div>
    <div>
        <h1 className='text-xl text-white text-mono mt-3 px-96 '>Kraft Luxe</h1>
        <p className='text-white text-mono px-96  text-sm'>Pots and Planters compliment the plants; one adds on to the beauty of the other. Pots and Planters not only give seeds/ plants a room to grow they add that oomph factors to the plants. Check out our most comprehensive range of pots and planters to enhance the look of your homes and offices</p>
        </div>
    <div>
        <h1 className='text-xl text-white text-mono mt-3 px-96 '>Brand Partners</h1>
        <p className='text-white text-mono px-96  text-sm'>Through Kraft Luxe we bring you the elegance of luxury in gardening. Our luxury products add to the style statements of our clients. We stand out by providing you products that are unique, modern; exquisite that will make your dream gardens a reality.</p>
        </div>
    <hr className='bg-gray-900 m-2' />
    <div className='flex justify-between'>
    <p className='text-white text-sm p-4'>
© 2020-2021 kraftseeds.com. All Rights Reserved
</p>
<img src="https://www.kraftseeds.com/images/payment1.png" className='w-25% pb-2' alt="" srcset="" />
<p className='text-white text-sm p-4'>Design by :
Yash Varshney</p>
</div>
    </div>
  )
}

export default Footer