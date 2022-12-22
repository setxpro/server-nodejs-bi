import express from "express";
import { findAllMallAndSensors } from "../Controllers/FindAllMallAndSensoresController";
import { findAllSensors } from "../Controllers/FindAllSensorsController";
import { messagePortal } from "../Controllers/MessagePortal";
import { registerMall } from "../Controllers/RegisterMallController";
import { findAll } from "./../Controllers/findAll";
import { registerSensor } from "./../Controllers/RegisterSensorController";

export const router = express.Router();

router.get("/test", findAll);
router.get("/find-all", findAllMallAndSensors);
router.get("/find-all-sensors", findAllSensors);

router.post("/create-mall", registerMall);
router.post("/create-sensor", registerSensor);
router.post("/send-message", messagePortal);
