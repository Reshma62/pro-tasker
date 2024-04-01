import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import axiosPublic from "@/Hooks/axiosPublic";
import toast from "react-hot-toast";

const TasklistsModal = ({ isOpen, onOpenChange, setAllTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const axios = axiosPublic();
  const handleAddTask = async (onClose) => {
    const tasks = {
      title,
      description,
    };
    const { data: addTask } = await axios.post(`/task/addTasks`, tasks);

    if (addTask.status === "success") {
      toast.success("Task added successfull");
      setAllTasks((allTasks) => {
        let temp = [...allTasks];
        temp.push({ ...tasks, addTask });
        return temp;
      });
      onClose();
    } else {
      toast.error(addTask.error);
    }
  };
  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                <h2 className="text-2xl font-semibold text-purple-800">
                  {" "}
                  Add Task
                </h2>
              </ModalHeader>
              <ModalBody>
                <form className="">
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
                    <Input
                      labelPlacement={"outside"}
                      type="text"
                      label="Title"
                      placeholder="Enter Title"
                      onChange={({ target }) => setTitle(target.value)}
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      labelPlacement={"outside"}
                      type="text"
                      label="description"
                      placeholder="Enter description"
                      onChange={({ target }) => setdescription(target.value)}
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleAddTask(onClose)}>
                  Add task
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TasklistsModal;
