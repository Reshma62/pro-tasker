const NotFound = ({ text = " NO task added yet. Please add a new one!" }) => {
  return (
    <div className="max-w-3xl mx-auto text-center  bg-slate-50 shadow-xl rounded-lg py-8 px-5 text-purple-900 font-semibold text-2xl">
      {text}
    </div>
  );
};

export default NotFound;
