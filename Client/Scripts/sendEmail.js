"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = (to, from, subject, html) => {
    const msg = {
        to,
        from,
        subject,
        html,
    };
    mail_1.default
        .send(msg)
        .then(() => {
        console.log("Email was sent");
    })
        .catch((err) => {
        console.error("Email not sent", err);
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map