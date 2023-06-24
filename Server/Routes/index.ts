import express from "express";
import {
  DisplayHomePage,
  DisplayAboutPage,
  DisplayServicesPage,
  DisplayProjectsPage,
  DisplayContactPage,
} from "../Controllers";
let router = express.Router();

/* GET Default  page. */
router.get("/", (req, res, next) => DisplayHomePage(req, res, next));

/* Get Home page*/

router.get("/home", (req, res, next) => DisplayHomePage(req, res, next));

router.get("/about", (req, res, next) => DisplayAboutPage(req, res, next));
router.get("/services", (req, res, next) =>
  DisplayServicesPage(req, res, next)
);
router.get("/projects", (req, res, next) =>
  DisplayProjectsPage(req, res, next)
);
router.get("/contact", (req, res, next) => DisplayContactPage(req, res, next));

export default router;
