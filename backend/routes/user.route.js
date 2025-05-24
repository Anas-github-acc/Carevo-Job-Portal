import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
  updateExperience,
  updateEducation,
  updateCertifications,
  getCurrentUser
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload, profileUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, profileUpload, updateProfile);
router.route("/profile/experience/update").post(isAuthenticated, updateExperience);
router.route("/profile/education/update").post(isAuthenticated, updateEducation);
router.route("/profile/certifications/update").post(isAuthenticated, updateCertifications);
router.route("/me").get(isAuthenticated, getCurrentUser);

export default router;
