"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input, Select, SelectItem } from "@nextui-org/react";

import axiosPublic from "@/Hooks/axiosPublic";
import toast from "react-hot-toast";

const EditTasklistsModal = ({ isOpen, onOpenChange, data, refetch }) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setdescriptionError] = useState("");
  const axios = axiosPublic();

  const [values, setValues] = useState("");

  const handleSelectionChange = (e) => {
    setValues(e.target.value);
  };
  const status = [
    { label: "Pending", value: "pending" },
    { label: "Complete", value: "complete" },
  ];
  useEffect(() => {
    setdescription(data?.description);
    setTitle(data?.title);
    setValues(data?.status); // Set initial status
  }, [data]);

  const handleUpdateTask = async (onClose, e) => {
    if (!title) {
      return setTitleError("Please enter a title for the tasklist.");
    }
    if (!description) {
      return setdescriptionError(
        "Please enter a description for the tasklist."
      );
    }
    const tasks = {
      title,
      description,
      status: values,
    };
    const { data: addTask } = await axios.patch(
      `/task/updateById/${data?._id}`,
      tasks
    );
    console.log(tasks, "tasks");
    if (addTask.status === "success") {
      toast.success("Task updated successfully");
      refetch(); // assuming refetch is defined somewhere
      onClose();
    } else {
      toast.error(addTask.error);
    }
  };

  return (
    <>
      <Modal
        size="4xl"
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
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
                  <Input
                    value={title}
                    labelPlacement={"outside"}
                    type="text"
                    label="Title"
                    placeholder="Enter Title"
                    onChange={({ target }) => {
                      setTitle(target.value);
                      setTitleError("");
                    }}
                  />
                </div>
                {titleError && (
                  <span className="text-red-500 text-xs font-semibold">
                    {titleError}
                  </span>
                )}
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    value={description}
                    labelPlacement={"outside"}
                    type="text"
                    label="description"
                    placeholder="Enter description"
                    onChange={({ target }) => {
                      setdescription(target.value);
                      setdescriptionError("");
                    }}
                  />
                </div>
                {descriptionError && (
                  <span className="text-red-500 text-xs font-semibold">
                    {descriptionError}
                  </span>
                )}

                <div className="flex w-full  flex-col gap-2">
                  <Select
                    labelPlacement={"outside"}
                    label="Status"
                    placeholder="Select status"
                    selectionMode="single"
                    value={values}
                    className="max-w-xs"
                    onChange={handleSelectionChange}
                  >
                    {status.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onPress={() => handleUpdateTask(onClose)}
                >
                  Update Task
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditTasklistsModal;
