import React from 'react'


const submitHandler = (e) => {
  e.preventDefault();
  console.log("Form Submitted");
}



const App = () => {
  return (
    <div className='h-screen lg:flex  bg-black   text-white'>

      {/* left side where notes will write and submit */}
     
      <form className='flex   gap-4 lg:w-1/2  flex-col p-10 items-start  ' onSubmit={(e) => {
        submitHandler(e)
      }}>
         <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input type="text" placeholder='Enter Notes Heading'
          className='px-5 py-2 border-2 rounded w-full outline-none font-medium' />
        <textarea name="" placeholder="Enter details" id="" className='px-5 h-32 py-2 font-medium border-2 w-full rounded' />

        <button className='bg-white font-medium text-black px-5 py-2 rounded w-full outline-none' > Add Note</button>



        {/* <img className=' h-52 rotate-y-180'src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt=''/> */}

      </form>

      {/* right side where the saved notes will see and preview */}

      <div className=' lg:w-1/2 lg:border-l-2    p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto '>

          <div className='h-52 w-40 rounded-2xl bg-white'>        </div>
          <div className='h-52 w-40 rounded-2xl bg-white'>        </div>
          <div className='h-52 w-40 rounded-2xl bg-white'>        </div>
         
        </div>
      </div>


    </div>
  )
}

export default App
