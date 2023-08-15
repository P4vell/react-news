import { Loader2 } from "lucide-react";

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-neutral-800/70">
      <Loader2
        className="w-12 h-12 text-white animate-spin"
        aria-label="Loading"
      />
    </div>
  );
};
