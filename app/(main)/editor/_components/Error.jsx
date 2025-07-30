export const ErrorMessage = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">
          Project Not Found
        </h1>
        <p className="text-white/70">
          The project you're looking for doesn't exist or you don't have to
          access to it.
        </p>
      </div>
    </div>
  );
};
