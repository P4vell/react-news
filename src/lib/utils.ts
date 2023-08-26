import { clsx, ClassValue } from "clsx";
import { AxiosError } from "axios";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const transformToError = (err: unknown) => {
  if (err instanceof z.ZodError) {
    throw new Error(JSON.stringify(err.errors));
  }

  if (err instanceof AxiosError) {
    if (err.response) {
      return new Error(JSON.stringify(err.response.data));
    }
    return new Error(err.message);
  }

  if (err instanceof Error) {
    return err;
  }

  if (typeof err === "object") {
    return new Error(JSON.stringify(err));
  }

  if (typeof err === "string") {
    return new Error(err);
  }

  return new Error(String(err));
};

export const dateFormatter = new Intl.DateTimeFormat("en-GB");
