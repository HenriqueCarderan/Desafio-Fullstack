import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import usersRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import contactsRoutes from "./routes/contacts.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);
app.use(handleError);

export default app;
