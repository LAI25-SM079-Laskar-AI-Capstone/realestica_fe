import Navbar from "../shared/components/navbar";

const LandingPage = () => {
  return (
    <main className="min-h-screen max-w-[1000px] mx-auto p-4 gap-12">
      <Navbar />
      <main className="p-2">
        <h1>this is home</h1>
      </main>
    </main>
  );
};

export default LandingPage;
