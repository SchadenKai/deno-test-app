import { z } from "zod";

export const userBodySchema = z.object({
  username: z.string(),
  email: z.string().email(),
});

// TODO: Fix in the Supabase functions trigger
export const userUpdateBodySchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be more than 8 characters")
      .regex(
        new RegExp(".*[A-Z].*"),
        "You must include upper case character in your password"
      )
      .regex(
        new RegExp(".*[a-z].*"),
        "You must include lower case character in your password"
      )
      .regex(
        new RegExp(".*[0-9].*"),
        "You must include number 0-9 to your password"
      )
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "You must include special characters in your password"
      ),
    display_name: z.string(),
    username: z.string(),
  })
  .partial();
