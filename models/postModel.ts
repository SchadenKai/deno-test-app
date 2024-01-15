import {z} from 'zod'


const PostSchema = z.object({
    title : z.string(),
    content: z.string(),
    image_url : z.string(),
    id : z.string(),
    created_at : z.string(),
})

export default PostSchema