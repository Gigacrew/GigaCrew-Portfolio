import express from "express";

// controller logic to display the home page
// This is where we will define the team array, objects are used to create the cards for About Us Page
// TODO: these need to be updated with the appropriate objects 1 for everyone , that url path is correct for where the images have been moved just need the picture name fixed
const team = [
  {
    name: "Rajanpreet Singh",
    role: "Lead Software Engineer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
    imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
  },
  {
    name: "Eric Donnelly",
    role: "Project Manager",
    bio:
      "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
    imgUrl: "/assets/images/crewImages/EricPic.jpg",
  },
  {
    name: "Rajanpreet Singh",
    role: "Lead Software Engineer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
    imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
  },
  {
    name: "Eric Donnelly",
    role: "Project Manager",
    bio:
      "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
    imgUrl: "/assets/images/crewImages/EricPic.jpg",
  },
  {
    name: "Rajanpreet Singh",
    role: "Lead Software Engineer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
    imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
  },
  {
    name: "Eric Donnelly",
    role: "Project Manager",
    bio:
      "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
    imgUrl: "/assets/images/crewImages/EricPic.jpg",
  },
  {
    name: "Rajanpreet Singh",
    role: "Lead Software Engineer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
    imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
  },
  {
    name: "Eric Donnelly",
    role: "Project Manager",
    bio:
      "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
    imgUrl: "/assets/images/crewImages/EricPic.jpg",
  },

  // Add additional Members as needed
];

export function DisplayHomePage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", {
    title: "Home",
    page: "home",
    team: team,
  });
}

export function DisplayAboutPage(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  res.render("index", {
    title: "About",
    page: "about",
    team: team,
  });
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
