"use client";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg px-6 py-3 space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-purple-800 font-semibold text-2xl capitalize">
          {task.title}
        </h2>
      </div>
      <p>{task.description}</p>
      <button
        className={`${
          task.status === "complete" ? "bg-green-900" : "bg-yellow-600"
        } text-white rounded-md px-6 py-2 capitalize font-semibold text-sm`}
      >
        {task.status}
      </button>
    </div>
  );
};

export default TaskCard;
