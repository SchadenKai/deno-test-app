import { z } from "zod"

export const userBodySchema = z.object({
    username : z.string(),
    first_name : z.string(),
    middle_name : z.string().optional(),
    last_name : z.string()
})

export const userUpdateBodySchema = z.object({
    username : z.string(),
    first_name : z.string(),
    middle_name : z.string().optional(),
    last_name : z.string()
}).partial()