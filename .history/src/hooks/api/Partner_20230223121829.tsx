import { useQuery } from "@tanstack/react-query";
import * as api from "src/api/parner";

export const usePost = (siteUrl: number) => {
  return useQuery(["post", id], () => api.getParner(siteurl), {
    staleTime: 10,
  });
};