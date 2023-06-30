"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmail = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const sendEmail_1 = require("../../Client/Scripts/sendEmail");
const team = [
    {
        name: "Rajanpreet Singh",
        role: "Lead Software Engineer",
        bio: "Rajanpreet has 5 years of experience in Web Development with expertise in React Native, Typescript and Groovy and I am working as a Lead Software Engineer in Giga Crew.",
        imgUrl: "/assets/images/crewImages/RajanpreetPic.jpg",
    },
    {
        name: "Eric Donnelly",
        role: "Project Manager",
        bio: "Eric has 4 years of development experience primarily in creating and maintaining web-based applications. He is constantly improving his technical and team management skills. For Giga Crew, his role includes developing the roadmap and release cycle for Dream Journal , along with keeping the project moving forward as needed.",
        imgUrl: "/assets/images/crewImages/EricPic.jpg",
    },
    {
        name: "Vishnu Nair",
        role: "Lead App Designer",
        bio: "Vishnu has experience working as a web developer specializing in full stack development with expertise in Node.js, React, and MongoDB. As the Lead App Designer for Giga Crew, he manages design documents and ensures visually appealing and intuitive app and website design. He always try to stay updated in the rapidly evolving tech industry.",
        imgUrl: "/assets/images/crewImages/VishnuPic.jpg",
    },
    {
        name: "Jaivleen Kour",
        role: "Database Developer",
        bio: "Jaivleen has four years of expertise in developing iOS applications for Apple's mobile operating system. She works as a Database Developer for Giga Crew, enabling the storage, retrieval, and manipulation of data for systems and applications. She also took on design and implementation of both applications.",
        imgUrl: "/assets/images/crewImages/JaivleenPic.jpg",
    },
    {
        name: "Gurleen Kaur",
        role: "Web Designer",
        bio: "Hey there! Myself Gurleen Kaur having a Bachelor in computer application. I had a great interest in iOS development and I love to create stunning graphics . I strive to deliver exceptional user experiences by combining my keen eye for detail with a deep commitment to my craft.",
        imgUrl: "/assets/images/crewImages/GurleenPic.jpg",
    },
    {
        name: "Atmiya Patel",
        role: "Technical Artist",
        bio: "I am entry level programmer with a basic experience in JS & advance JS. I try to learn as much as I can while working on the projects.Working as Technical Artist with Giga Crew.",
        imgUrl: "/assets/images/crewImages/AtmiyaPic.jpg",
    },
    {
        name: "Supreet Singh Kler",
        role: "General Programmer",
        bio: "A passionate tech enthusiast with a Bachelor's degree in technology. I love creating innovative applications. I strive to deliver exceptional user experiences by combining my keen eye for detail.",
        imgUrl: "/assets/images/crewImages/SupreetPic.jpg",
    },
    {
        name: "Harmandeep Kaur",
        role: "General Programmer",
        bio: "Hii there! My Name is Harmandeep Kaur having a Bachelor in computer science. My expertise lies in iOS development where i love creating stunning graphics and crafting innovative applications.",
        imgUrl: "/assets/images/crewImages/HarmanPic.jpg",
    },
];
function DisplayHomePage(req, res, next) {
    res.render("index", {
        title: "Home",
        page: "home",
        team: [],
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
    res.render("index", { title: "Services", page: "services", team: [] });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
    res.render("index", { title: "Projects", page: "projects", team: [] });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    res.render("index", { title: "Contact", page: "contact", team: [] });
}
exports.DisplayContactPage = DisplayContactPage;
function SendEmail(req, res, next) {
    const { firstName, lastName, email, phone, message } = req.body;
    const from = "contact.gigacrew@gmail.com";
    const to = "contact.gigacrew@gmail.com";
    const subject = `Contact Request from ${email}`;
    const output = `
      <h2> New Contact Request </h3>
      <h3> Name: ${firstName} ${lastName} </h4>
      <h3> Email : ${email} </h3>
      <h3> Phone : ${phone} </h6>
      <p>Message : \n ${message}</p>

  `;
    (0, sendEmail_1.sendEmail)(to, from, subject, output);
    res.redirect("/contact");
}
exports.SendEmail = SendEmail;
//# sourceMappingURL=index.js.map