import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, website } = body;

    // Honeypot check
    if (website) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validation
    const errors: string[] = [];
    if (!name?.trim()) errors.push('Name is required');
    if (!email?.trim()) errors.push('Email is required');
    if (!message?.trim()) errors.push('Message is required');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push('Please enter a valid email address');
    }
    if (phone && !/^[\d\s\-().+]{7,20}$/.test(phone.trim())) {
      errors.push('Please enter a valid phone number');
    }

    if (errors.length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email via Resend
    const resendKey = import.meta.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Menco Motorsports <contact@mencomotorsports.com>',
          to: 'tucksdieselservices@yahoo.com',
          subject: `New Contact: ${service || 'General Inquiry'} from ${name.trim()}`,
          text: [
            `New contact form submission!`,
            ``,
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            `Phone: ${phone?.trim() || 'Not provided'}`,
            `Service: ${service || 'General Inquiry'}`,
            ``,
            `Message:`,
            message.trim(),
          ].join('\n'),
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ success: false, errors: ['Something went wrong. Please try again or call (337) 288-6226.'] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
