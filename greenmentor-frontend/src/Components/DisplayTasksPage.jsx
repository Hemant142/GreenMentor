import React, { useEffect, useState } from "react";
import logo from "../assets/taskLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks, updateStatus } from "../Redux/taskReducer/action";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";

const DisplayTasksPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.authReducer.token);
  const tasks = useSelector((store) => store.taskReducer.tasks) || [];
  const isLoading = useSelector((store) => store.taskReducer.isLoading);
  const isError = useSelector((store) => store.taskReducer.isError);

  console.log("DisplayTaskPage");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");

  const open = (id) => {
    setId(id);
    setIsUpdate(true);
  };

  const close = () => {
    setIsUpdate(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    try {
      dispatch(deleteTask(id, token)).then((res) => {
        alert(res.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = (id) => {
   
    dispatch(updateStatus(id, token))
  };

  useEffect(() => {
    dispatch(getTasks(token));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div>
          <img
            src="https://mdmtaskweb.rubi.ru.ac.za/site_media/img/477.GIF"
            alt="Loading Indicator"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end w-11/12 mx-auto mt-10 items-center">
        <div>
          <button
            onClick={openModal}
            className="bg-custom-pink px-4 py-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full"
          >
            Add Task
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} token={token} />
      <UpdateModal open={isUpdate} id={id} close={close} token={token} />
      {!isModalOpen && tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://i.postimg.cc/jdH9H0BB/No-data-rafiki.png"
            alt="No Data"
            className="w-96 h-auto relative"
          />
          {/* Adjusted width */}
          <h1 className="text-xl font-semibold text-custom-darkpink mt-4">
            Add Some Tasks
          </h1>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            key={task._id}
            className="flex justify-between items-center bg-white w-11/12 mx-auto p-4 my-4 rounded-md shadow-md"
          >
            <div className="flex items-center">
              <img
                src={logo}
                alt="Task Image"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="mb-1 text-custom-green">Task : {index + 1}</h3>
                <h2 className="text-lg font-serif md:text-xl text-custom-darkpink font-semibold mb-2">
                  {task.title}
                </h2>
                <p className="text-gray-600 font-serif">{task.description}</p>
                {/* Display status */}
                <p
                  className={`text-sm font-bold ${
                    task.status ? "text-custom-green" : "text-custom-darkpink"
                  }`}
                >
                  {task.status ? "Completed" : "Pending"}
                </p>
                <div className="flex mt-2">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-custom-pink px-2 mr-4 mt-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => open(task._id)}
                    className="bg-custom-pink px-2 mr-4 mt-2 shadow-lg border-custom-darkpink border-2 rounded:xl hover:rounded-full"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div>
              {/* <input
                type="checkbox"
                className={`h-6 w-6 cursor-pointer ${
                  task.status ? "text-custom-green" : "text-custom-red"
                }`}
                style={{ marginRight: "10px" }}
                checked={task.status} // Automatically checked if status is true
                onChange={() => handleStatus(task._id)}
              /> */}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default DisplayTasksPage;
