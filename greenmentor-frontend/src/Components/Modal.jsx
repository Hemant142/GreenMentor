import axios from 'axios';
import React, { useState } from 'react';
import { adaddTask } from '../Redux/taskReducer/action';
import { useDispatch } from 'react-redux';

const Modal = ({ isOpen, closeModal,token }) => {
    const [title,setTitle]= useState("")
    const [description,setDesc]= useState("")
    const dispatch = useDispatch()
    const handleAdd = async(e)=>{
        e.preventDefault()
        let newtask = {
            title,description
        }
        if(title && description){
            dispatch(adaddTask(newtask,token)).then((res)=>{
                console.log(res)
                alert(res.message)
                closeModal()
              })
          }else{
            alert("Input Fields are required!")
          }
    }
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-75">
        <div className="bg-white pl-8 pr-8 pt-2 pb-8 rounded-md">
        <div className="flex justify-end mt-4">
            <button
              onClick={closeModal}
              className="text-black hover:bg-custom-green rounded-sm px-1 hover:text-white"
            >
              x
            </button>
          </div>
          <h2 className="text-2xl text-custom-green font-bold mb-4">Add Task</h2>
          <form onSubmit={(e)=>handleAdd(e)}>
          <div className="mb-5">
            <label htmlFor="title" className="block text-custom-green text-sm font-medium ">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Title goes here"
              onChange={(e)=>setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="desc" className="block text-custom-green text-sm font-medium ">
              Description:
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Description"
              onChange={(e)=>setDesc(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            
            className="bg-custom-darkpink mt-2 text-white  p-2 w-full rounded-md font-bold hover:rounded-full focus:outline-none "
          >
            Add
          </button>
        </form>
       
        </div>
      </div>
    )
  );
};

export default Modal;
