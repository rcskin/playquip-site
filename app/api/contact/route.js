export async function POST(req) {
  try {
    const requestData = await req.json();

    // Check if the request is from the WishList enquiry form
    if (requestData.items) {
        const { items, enquiry, userDetails } = requestData;

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "Playquip Enquiry",
            email: process.env.BREVO_SENDER_EMAIL,
          },
          to: [
            { email: process.env.BREVO_RECIPIENT_EMAIL, name: "Playquip Team" },
          ],
          subject: "New Wish List Request",
          htmlContent: `
           <p><strong>Name:</strong> ${userDetails.name}</p>
              <p><strong>Email:</strong> ${userDetails.email}</p>
              <p><strong>Wishlist Items:</strong></p>
    <ul>
      ${items.map((item) => `<li>${item.title}</li>`).join("")}
    </ul>
    <p><strong>Customer Notes:</strong></p>
    <p>${enquiry}</p>
            `,
        }),
      });

      if (!response.ok) {
        return new Response(
          JSON.stringify({ message: "Failed to send enquiry email." }),
          { status: 500 }
        );
      }

      return new Response(
        JSON.stringify({ message: "Enquiry sent successfully!" }),
        { status: 200 }
      );
    }

    // Handle regular contact form submission
    const { name, email, message } = requestData;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: name, email: process.env.BREVO_SENDER_EMAIL },
        to: [
          { email: process.env.BREVO_RECIPIENT_EMAIL, name: "Playquip Team" },
        ],
        replyTo: { email, name },
        subject: "New Contact Form Submission",
        htmlContent: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          `,
      }),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ message: "Failed to send contact email." }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Server error. Try again later." }),
      { status: 500 }
    );
  }
}
