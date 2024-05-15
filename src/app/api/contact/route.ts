import {NextRequest, NextResponse} from "next/server";
import * as nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars'

export async function POST(req: NextRequest) {
    let res = NextResponse;
    let data = await req.json()
    for (const dataKey in data) {
        console.log(data, data[dataKey])
        if (data[dataKey].length == 0) {
            data[dataKey] = "Non déféni par le client"
        }
        if(data[dataKey] === "on"){
            data[dataKey] = "Oui"
        }
        else if(data[dataKey] === "off"){
            data[dataKey] = "Non"
        }
    }
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.NODEMAIL_EMAIL,
            pass: process.env.NODEMAIL_PASS
        }
    })
    const hbsOptions = {
        viewEngine: {
            defaultLayout: false
        },
        viewPath: 'src/views'
    }
    // @ts-ignore
    transporter.use('compile', hbs(hbsOptions))
    let mailOptions = {
        from: '"Site web de baptou 👻" <test@gmail.com>',
        to: "gabin.buignet@gmail.com",
        subject: "Un client viens de vous contactez ! ✔", // Subject line
        template: 'template',
        context: data
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error("Erreur lors de l'envoie du mail :", error);
            return res.json({success: false, type: 'warning', message: "Erreur lors de l'envoie du mail."}, {
                status: 500
            })
        }
    })
    return res.json({})
}