import nodemailer from 'nodemailer';
import { google } from "googleapis";


export async function POST(req) {
    try{
        const data = await req.json();
        const { name, email, phone, address, clientResponse } = data;

    
      console.log(`
        name: ${name} \n
        address: ${address} \n
        phone: ${phone} \n
        response: ${clientResponse}
        `)
        console.log("Refresh token:", process.env.GMAIL_REFRESH_TOKEN);
    
        console.log(
          `id: ${process.env.GMAIL_CLIENT_ID}, \n
          token: ${process.env.GMAIL_REFRESH_TOKEN},\n
          secret: ${process.env.GMAIL_CLIENT_SECRET},\n
          user: ${process.env.GMAIL_USER}\n`
    
        )
        
        
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.GMAIL_USER, 
                pass: process.env.GMAIL_PASSWORD
              },
            });
            await transporter.sendMail({
                from: `Lights in the Height ${process.env.GMAIL_USER}`,
                to: `${email}`,
                subject: `Thank you for contacting us ${name}`,
                text: `Thanks for reaching out! We will be in touch shortly. Please check the information below and fill the form out again if any contact information is incorrect\n\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${clientResponse}`
            });
            await transporter.sendMail({
                from: `Lights in the Height ${process.env.GMAIL_USER}`,
                to: `lightsintheheightsfw@gmail.com`,
                subject: `New Contact form info ${name}`,
                text: `New contact form has been filled out\n\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${clientResponse}`
            });
                return Response.json({ success: true })

} catch {
    console.log('error sending email')
    return Response.json({ success: false, error: error.message}, {status: 500})
}}