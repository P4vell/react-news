import { z } from "zod";

export const searchSchema = z
  .string()
  .transform((value) => value.replaceAll(/\d/g, "").trim());
