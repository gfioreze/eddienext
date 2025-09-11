export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Ermmm you forgot to fill required fields...",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    console.log("Contact form submission:", { name, email, message });

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Thank you for your message! I'll get back to you as soon as I can :)",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
