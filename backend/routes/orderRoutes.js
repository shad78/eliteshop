import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").get(protect, updateOrderToPaid);

export default router;
