import { MoonLoader } from "react-spinners";

export const LoadingCanvas = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="">
          {" "}
          <MoonLoader color="#ffffff" />
        </div>
        <p className="text-white/70 text-sm">Loading canvas...</p>
      </div>
    </div>
  );
};
