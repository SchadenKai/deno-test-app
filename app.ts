import express from "express";
import postRouter from "./routes/postRoute.ts";
import userRouter from "./routes/userRoute.ts";
import authRouter from "./routes/authRouter.ts";
import cors from "cors";
import helmet from "helmet";
import logger from "./middlewares/logStatusMIddleware.ts";

const app = express();
app.use(logger);
const PORT = 8080;

app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ methods: ["GET", "POST", "PUT", "DELETE", "PATCH"] }));
app.use(helmet());

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Listening to localhost:" + PORT);
});
