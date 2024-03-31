import TaskCard from "@/components/TaskCard/TaskCard";

const CompleteTasksPage = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
        <TaskCard />
      </div>
    </section>
  );
};

export default CompleteTasksPage;
