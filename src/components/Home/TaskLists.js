"use client";

import EditTasklistsModal from "@/modals/EditTasklistsModal";
import TasklistsModal from "@/modals/TasklistsModal";
import { useDisclosure } from "@nextui-org/react";
import { FaEdit, FaRegPlusSquare } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
const TaskLists = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onOpenChange: editOnOpenChange,
  } = useDisclosure();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
          {[0, 1, 2, 4, 5, 6].map((task) => (
            <div
              key={task}
              className="bg-white shadow-xl rounded-lg px-6 py-3 space-y-3"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-purple-800 font-semibold text-2xl capitalize">
                  Task list one
                </h2>
                <div className="flex items-center gap-4">
                  <div
                    onClick={() => editOnOpen()}
                    className="bg-purple-100 text-purple-700 border border-solid border-purple-600 rounded-lg p-2"
                  >
                    <FaEdit size={20} />
                  </div>
                  <div className="bg-red-100 text-red-700 border border-solid border-red-600 rounded-lg p-2">
                    <MdAutoDelete size={22} />
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                laboriosam labore voluptatem omnis quisquam dolorum fugit sequi
                fuga beatae adipisci, amet quia ut quos doloremque asperiores
                animi corrupti ullam dolore.
              </p>
              <button className="bg-purple-900 text-white rounded-md px-6 py-2 capitalize font-semibold text-sm">
                pending
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* add Task modal  */}
      <TasklistsModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* edit task modal */}
      <EditTasklistsModal isOpen={editIsOpen} onOpenChange={editOnOpenChange} />
    </>
  );
};

export default TaskLists;
