const TaskCard = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg px-6 py-3 space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-purple-800 font-semibold text-2xl capitalize">
          Task list one
        </h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam
        labore voluptatem omnis quisquam dolorum fugit sequi fuga beatae
        adipisci, amet quia ut quos doloremque asperiores animi corrupti ullam
        dolore.
      </p>
      <button className="bg-purple-900 text-white rounded-md px-6 py-2 capitalize font-semibold text-sm">
        pending
      </button>
    </div>
  );
};

export default TaskCard;
