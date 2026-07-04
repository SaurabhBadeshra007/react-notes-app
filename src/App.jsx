import React, { useState } from 'react'
import { Trash } from 'lucide-react';



const App = () => {

  // use state handler
  // for title of notes
  const [title, setTitle] = useState('')
  // for notes details
  const [details, setDetails] = useState('')

  // notes mapping
  const [task, setTask] = useState([])

  // form submission handling
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });



    setTask(copyTask)
    setDetails('')
    setTitle('')

    // console.log(copyTask);

  }

  // function for deleting note
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    setTask(copyTask)
    
    
  }


  return (
    <div className='h-screen lg:flex  bg-black   text-white'>

      {/* left side where notes will write and submit */}

      <form className='flex   gap-4 lg:w-1/2  flex-col p-10 items-start  ' onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h1 className='text-4xl font-bold'>Add Notes</h1>


        {/* input for heading */}

        <input type="text" placeholder='Enter Notes Heading' value={title} onChange={(e) => {
          setTitle(e.target.value);

        }}
          className='px-5 py-2 border-2 rounded w-full outline-none font-medium' />

        {/* detailed input */}
        <textarea name="" placeholder="Enter details" id="" value={details}
          onChange={(e) => {
            setDetails(e.target.value);

          }}
          className='px-5 h-32 py-2 font-medium border-2 w-full rounded' />

        <button className='bg-white font-medium text-black px-5 py-2 rounded w-full outline-none' > Add Note</button>



        {/* <img className=' h-52 rotate-y-180'src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt=''/> */}

      </form>

      {/* right side where the saved notes will see and preview */}

      <div className=' lg:w-1/2 lg:border-l-2    p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start  gap-5 justify-start mt-5 h-full overflow-auto '>

          {/* <div className='h-52 w-40 rounded-2xl bg-white'>        </div> */}
          {task.map(function (elem, idx) {
            return <div key={idx} className="h-52 w-40 justify-between flex flex-col items-start relative rounded-xl text-black px-4 pb-4 pt-9 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/675/small/sticky-note-paper-background-free-png.png')]">
              
            {/* notes details in the div */}
            <div>


             {/* Title heading */}
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>

              {/* notes discription */}
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details} </p>
            </div>

            {/* delete notes icon */}
            <button onClick={()=>{
              deleteNote(idx)
            }}
            className='flex flex-row gap-3 w-full bg-red-600 text-white cursor-pointer active:scale-95 hover:scale-105 py-1 font-bold rounded-xl text-xs justify-center'>
               Delete
               </button>
            </div>
          })}

        </div>
      </div>


    </div>
  )
}

export default App
