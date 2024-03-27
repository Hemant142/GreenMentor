import React, { useEffect, useState } from 'react'
import logo from '../assets/taskLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getTasks } from '../Redux/taskReducer/action'
import Modal from './Modal'
import UpdateModal from './UpdateModal'
const DisplayTasksPage = () => {
  const dispatch = useDispatch()
  const token = useSelector((store)=>store.authReducer.token)
  const tasks = useSelector((store)=>store.taskReducer.tasks) || []
  const isLoading = useSelector((store)=>store.taskReducer.isLoading)
  const isError = useSelector((store)=>store.taskReducer.isError)
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isupdate,setIsupdate] = useState(false)
  const [id,setId] = useState("")

  const open = (id)=>{
    setId(id)
    setIsupdate(true)
  }
  const close = ()=>{
    setIsupdate(false)
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete =(id)=>{
    try{
      dispatch(deleteTask(id,token)).then((res)=>{
        
        alert(res.message)
      })
    }
    catch(error){
      console.log(error)
    }

  }


useEffect(()=>{
  dispatch(getTasks(token))
},[])

 if(isLoading){
  return <div className='flex justify-center items-center'>
    <div>
    <img src='https://mdmtaskweb.rubi.ru.ac.za/site_media/img/477.GIF' />
    </div>
  </div>
 }

  return (
    <>
    <div className='flex justify-end w-11/12 mx-auto mt-10  items-center'>
    <div>
    <button onClick={openModal} className='bg-custom-pink px-4 py-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full'>Add Task</button>
    </div>
  </div>
  <Modal isOpen={isModalOpen} closeModal={closeModal} token={token} />
  < UpdateModal open={isupdate} id={id} close={close} token={token} />
     {
      tasks.map((task,index)=>(
        <div key={task._id} className="bg-white w-11/12 mx-auto p-4 my-4 rounded-md shadow-md flex flex-col-reverse md:flex-row items-center md:items-start">
        
        <div className="order-2 md:order-1 mb-4 md:mb-0 md:mr-4">
          <img
            src={logo}
            alt="Task Image"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          />
        </div>
        <div className="order-1 md:order-2">
        <h3 className="mb-1 text-custom-green">Task : {index+1}</h3>
          <h2 className="text-lg font-serif md:text-xl text-custom-darkpink font-semibold mb-2">{task.title}</h2>
          
          <p className="text-gray-600 font-serif">{task.description}</p>
          <button onClick={()=>handleDelete(task._id)} className='bg-custom-pink px-2 mr-4 mt-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full'>Delete</button>
          <button onClick={()=>open(task._id)} className='bg-custom-pink px-2 mr-4 mt-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full'>Edit</button>
        </div>
      </div>
      ))
     }
     
    
     </>
  )
}

export default DisplayTasksPage