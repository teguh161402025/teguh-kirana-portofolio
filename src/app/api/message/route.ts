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
  
await new Promise((resolve, reject) => {

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

await new Promise((resolve, reject)=>{ 
transporter.sendMail(mail, function(err, info){
    if(err){
      console.log(err);
      reject(err)
    }
    else{
      console.log(info)
      resolve(info)
    }
  });
});
 
  
  console.log(request.message,);
   
 return NextResponse.json(
   req.body
 );

}