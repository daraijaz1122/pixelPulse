import { MoonLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <MoonLoader color="#ffffff" />
        <p className="text-white/70">Loading...</p>
      </div>
    </div>
  );
};
