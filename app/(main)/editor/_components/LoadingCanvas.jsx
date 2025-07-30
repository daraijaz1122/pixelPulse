import { Loader2 } from "lucide-react";

export const LoadingCanvas = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400">
          {" "}
          <Loader2 />
        </div>
        <p className="text-white/70 text-sm">Loading canvas...</p>
      </div>
    </div>
  );
};
