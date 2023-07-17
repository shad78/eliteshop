import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  userUpdateProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, userUpdateProfile);

export default router;
