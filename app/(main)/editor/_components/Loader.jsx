import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
        <p className="text-white/70">Loading...</p>
      </div>
    </div>
  );
};
