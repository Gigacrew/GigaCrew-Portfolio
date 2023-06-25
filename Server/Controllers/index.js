"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const team = [
    {
        name: "Rajanpreet Singh",
        role: "Lead Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
        imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
    },
    {
        name: "Eric Donnelly",
        role: "Project Manager",
        bio: "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
        imgUrl: "/assets/images/crewImages/EricPic.jpg",
    },
    {
        name: "Rajanpreet Singh",
        role: "Lead Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
        imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
    },
    {
        name: "Eric Donnelly",
        role: "Project Manager",
        bio: "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
        imgUrl: "/assets/images/crewImages/EricPic.jpg",
    },
    {
        name: "Rajanpreet Singh",
        role: "Lead Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
        imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
    },
    {
        name: "Eric Donnelly",
        role: "Project Manager",
        bio: "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
        imgUrl: "/assets/images/crewImages/EricPic.jpg",
    },
    {
        name: "Rajanpreet Singh",
        role: "Lead Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet felis sit amet tortor cursus aliquam.",
        imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
    },
    {
        name: "Eric Donnelly",
        role: "Project Manager",
        bio: "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
        imgUrl: "/assets/images/crewImages/EricPic.jpg",
    },
];
function DisplayHomePage(req, res, next) {
    res.render("index", {
        title: "Home",
        page: "home",
        team: team,
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render("index", {
        title: "About",
        page: "about",
        team: team,
    });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicesPage(req, res, next) {
    res.render("index", { title: "Services", page: "services" });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
    res.render("index", { title: "Projects", page: "projects" });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    res.render("index", { title: "Contact", page: "contact" });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map