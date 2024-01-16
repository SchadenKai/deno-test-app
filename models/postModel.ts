import {z} from 'zod'


export const postBodySchema = z.object({
    title : z.string(),
    content: z.string(),
    image_url : z.string(),
    username : z.string(),
})

export const postUpdateBodySchema = z.object({
    title : z.string(),
    content: z.string(),
    image_url : z.string(),
    username : z.string(),
}).partial()

