import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

export const useConvexMutation = (mutation) => {
  const mutationFn = useMutation(mutation);

  const [data, setdata] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(...args);
      setdata(response);
      return response;
    } catch (err) {
      setError(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { mutate, data, isLoading, error };
};
