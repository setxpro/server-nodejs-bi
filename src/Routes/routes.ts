import express from "express";
import { findAll } from "./../Controllers/findAll";

export const router = express.Router();

router.get("/test", findAll);
