import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      serviceType, 
      specificService, 
      message,
      // Chauffeur specific fields
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      formType
    } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.asdtechnology.ca",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "info@asdtechnology.ca",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format email content based on form type
    let emailSubject = "";
    let emailBody = "";

    if (formType === "quote") {
      emailSubject = `New Quote Request - ${serviceType === "technology" ? "Technology" : "Chauffeur"} Service`;
      
      if (serviceType === "chauffeur") {
        emailBody = `
          <h2>New Chauffeur Service Quote Request</h2>
          <hr/>
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Service Details:</h3>
          <p><strong>Service Type:</strong> Chauffeur</p>
          <p><strong>Specific Service:</strong> ${specificService || "Not specified"}</p>
          <p><strong>Pickup Location:</strong> ${pickupLocation || "Not specified"}</p>
          <p><strong>Drop-off Location:</strong> ${dropoffLocation || "Not specified"}</p>
          <p><strong>Pickup Date:</strong> ${pickupDate || "Not specified"}</p>
          <p><strong>Pickup Time:</strong> ${pickupTime || "Not specified"}</p>
          
          <h3>Additional Notes:</h3>
          <p>${message || "No additional notes"}</p>
          
          <hr/>
          <p><em>This message was sent from the ASD Technology website quote form.</em></p>
        `;
      } else {
        emailBody = `
          <h2>New Technology Service Quote Request</h2>
          <hr/>
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Service Details:</h3>
          <p><strong>Service Type:</strong> Technology</p>
          <p><strong>Specific Service:</strong> ${specificService || "Not specified"}</p>
          
          <h3>Project Details:</h3>
          <p>${message || "No details provided"}</p>
          
          <hr/>
          <p><em>This message was sent from the ASD Technology website quote form.</em></p>
        `;
      }
    } else {
      // Contact form
      emailSubject = `New Contact Form Submission - ${serviceType === "technology" ? "Technology" : "Chauffeur"} Service`;
      
      if (serviceType === "chauffeur") {
        emailBody = `
          <h2>New Contact Form Submission - Chauffeur Service</h2>
          <hr/>
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Service Details:</h3>
          <p><strong>Service Type:</strong> Chauffeur</p>
          <p><strong>Specific Service:</strong> ${specificService || "Not specified"}</p>
          <p><strong>Pickup Location:</strong> ${pickupLocation || "Not specified"}</p>
          <p><strong>Drop-off Location:</strong> ${dropoffLocation || "Not specified"}</p>
          <p><strong>Pickup Date:</strong> ${pickupDate || "Not specified"}</p>
          <p><strong>Pickup Time:</strong> ${pickupTime || "Not specified"}</p>
          
          <h3>Message:</h3>
          <p>${message || "No message provided"}</p>
          
          <hr/>
          <p><em>This message was sent from the ASD Technology website contact form.</em></p>
        `;
      } else {
        emailBody = `
          <h2>New Contact Form Submission - Technology Service</h2>
          <hr/>
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Service Details:</h3>
          <p><strong>Service Type:</strong> Technology</p>
          <p><strong>Specific Service:</strong> ${specificService || "Not specified"}</p>
          
          <h3>Message:</h3>
          <p>${message || "No message provided"}</p>
          
          <hr/>
          <p><em>This message was sent from the ASD Technology website contact form.</em></p>
        `;
      }
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "info@asdtechnology.ca",
      to: process.env.SMTP_TO || "info@asdtechnology.ca",
      replyTo: email,
      subject: emailSubject,
      html: emailBody,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: String(error) },
      { status: 500 }
    );
  }
}
