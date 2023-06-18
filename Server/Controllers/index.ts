import express from "express";

// controller logic to display the home page

export function DisplayHomePage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", { title: "Home", page: "home" });
}

export function DisplayAboutPage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", { title: "About", page: "about" });
}

export function DisplayServicesPage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", { title: "Services", page: "services" });
}
export function DisplayProjectsPage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", { title: "Projects", page: "projects" });
}
export function DisplayContactPage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", { title: "Contact", page: "contact" });
}
