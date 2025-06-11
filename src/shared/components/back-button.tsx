const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div
      id="button-back"
      onClick={handleBack}
      className="w-fit bg-slate-50/30 flex items-center gap-1 mb-4 py-1 px-3 pr-6 border-1 rounded-full border-gray-50/80 hover:cursor-pointer  hover:rounded-full hover:border-slate-800/30  h-full sticky top-4 z-10 transition backdrop-blur-xs "
    >
      <i className="bxr  bx-arrow-left-stroke text-2xl"></i>
      <button className="hover:cursor-pointer ">back</button>
    </div>
  );
};

export default BackButton;
