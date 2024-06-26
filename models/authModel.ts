import { z } from "zod";

export const authRegisterModel = z.object({
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
  options: z.object({
    data: z.object({
      display_name: z.string(),
      username: z.string(),
    }),
  }),
});

export const authSigninModel = z.object({
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
});
