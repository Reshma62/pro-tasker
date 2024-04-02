"use client";

import TaskCard from "@/components/TaskCard/TaskCard";
import { Pagination } from "@nextui-org/react";
import Loading from "../loading";
import useGetTask from "@/Hooks/useGetTask";
import { useState } from "react";
import NotFound from "@/components/Shared/NotFound";

const CompleteTasksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const { isLoading, data: allTasks } = useGetTask(
    currentPage,
    itemsPerPage,
    "complete"
  );

  const totalPages = Math.ceil(allTasks?.data?.count / itemsPerPage);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="py-10 lg:pr-20 px-5 mt-16">
      {allTasks?.data?.count === 0 ? (
        <NotFound text="No Completed Task Found!" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 mb-10">
          {allTasks?.data?.result?.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
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
    </section>
  );
};

export default CompleteTasksPage;
