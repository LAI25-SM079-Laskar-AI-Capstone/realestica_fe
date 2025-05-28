const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div
      id="button-back"
      onClick={handleBack}
      className="w-fit bg-slate-50:50 flex items-center gap-1 mb-4 pr-3 border-1 rounded-full border-transparent hover:cursor-pointer  hover:rounded-full hover:border-slate-800  h-full sticky top-4 z-10 backdrop-blur-xs"
    >
      <i className="bx  bx-arrow-left text-4xl hover:cursor-pointer"></i>
      <button className="hover:cursor-pointer">back</button>
    </div>
  );
};

export default BackButton;
