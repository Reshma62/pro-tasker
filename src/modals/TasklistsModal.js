import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const TasklistsModal = ({ isOpen, onOpenChange }) => {
  const handleAddTask = () => {
    console.log("first");
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
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      labelPlacement={"outside"}
                      type="text"
                      label="description"
                      placeholder="Enter description"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleAddTask}>
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
