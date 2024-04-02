"use client";

import axiosPublic from "@/Hooks/axiosPublic";
import useGetTask from "@/Hooks/useGetTask";
import useGetTaskById from "@/Hooks/useGetTaskById";
import Loading from "@/app/loading";
import EditTasklistsModal from "@/modals/EditTasklistsModal";
import TasklistsModal from "@/modals/TasklistsModal";
import { Pagination, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaRegPlusSquare } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import NotFound from "../Shared/NotFound";
const TaskLists = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const axios = axiosPublic();

  // const [allTasks, setAllTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [id, setId] = useState(null);
  const { data } = useGetTaskById(id);
  const {
    isLoading,
    data: allTasks,
    refetch,
  } = useGetTask(currentPage, itemsPerPage);
  const totalPages = Math.ceil(allTasks?.data?.count / itemsPerPage);
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onOpenChange: editOnOpenChange,
  } = useDisclosure();
  //delete task
  const handleDeleteTask = async (id) => {
    const { data: deleteTask } = await axios.delete(`/task/deleteById/${id}`);
    if (deleteTask.status === "success") {
      toast.success("Task deleted successfully");
      refetch();
    } else {
      toast.error(deleteTask.error);
    }
  };
  const handleEditTask = (id) => {
    editOnOpen();
    setId(id);
  };
  console.log(allTasks, "all");
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="py-10 pr-20">
        <div className="flex justify-end ">
          <button
            onClick={() => onOpen()}
            className="bg-purple-900 text-white rounded-md px-6 py-3 capitalize font-semibold text-lg inline-flex justify-center items-center gap-2 mb-5"
          >
            <FaRegPlusSquare size={20} />
            Add task
          </button>
        </div>
        {allTasks?.data?.count === 0 ? (
          <NotFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
            {allTasks?.data?.result?.map((task) => (
              <div
                key={task._id}
                className="bg-white shadow-xl rounded-lg px-6 py-3 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-purple-800 font-semibold text-2xl capitalize">
                    {task.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => handleEditTask(task._id)}
                      className="bg-purple-100 text-purple-700 border border-solid border-purple-600 rounded-lg p-2"
                    >
                      <FaEdit size={20} />
                    </div>
                    <div
                      onClick={() => handleDeleteTask(task._id)}
                      className="bg-red-100 text-red-700 border border-solid border-red-600 rounded-lg p-2 cursor-pointer"
                    >
                      <MdAutoDelete size={22} />
                    </div>
                  </div>
                </div>
                <p>{task.description}</p>
                <button
                  className={`${
                    task.status === "complete"
                      ? "bg-green-900"
                      : "bg-yellow-600"
                  } text-white rounded-md px-6 py-2 capitalize font-semibold text-sm`}
                >
                  {task.status}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      {allTasks?.data?.count > 0 && (
        <Pagination
          loop
          showControls
          total={totalPages}
          initialPage={currentPage}
          page={currentPage}
          onChange={(currentPage) => {
            setCurrentPage(currentPage);
          }}
        />
      )}
      {/* add Task modal  */}
      <TasklistsModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        refetch={refetch}
      />
      {/* edit task modal */}
      <EditTasklistsModal
        refetch={refetch}
        data={data}
        isOpen={editIsOpen}
        onOpenChange={editOnOpenChange}
      />
    </>
  );
};

export default TaskLists;
