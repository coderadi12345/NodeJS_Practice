import {z } from "zod";

export const pingValidate = z.object({
message: z.string().min(1)
})