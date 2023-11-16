import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req: Request, res : Response) {
  const request = await req.json();
  const transporter:  nodemailer.Transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  })

  const mail = {
    from : request.email,
    to : 'teguhkiranaberutu@gmail.com',
    subject : 'Pesan dari :' + request.name,
    text: request.message + 'Pesan dari :' + request.email,
    html: `<div>${request.message}</div><p>Sent from:
    ${request.email}</p>`
  }

  transporter.sendMail(mail, function(err, info){
    if(err){
      console.log(err);
    }
    else{
      console.log(info)
    }
  })
  
  console.log(request.message,);
   
 return NextResponse.json(
   req.body
 );

}