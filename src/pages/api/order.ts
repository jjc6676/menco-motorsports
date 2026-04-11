import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { itemId, name, phone, size, quantity, website } = body;

    // Honeypot check - bots fill this hidden field
    if (website) {
      return new Response(JSON.stringify({ success: true, ref: 'MM-000000-000' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validation
    const errors: string[] = [];
    if (!name?.trim()) errors.push('Name is required');
    if (!phone?.trim()) errors.push('Phone is required');
    if (!itemId?.trim()) errors.push('Item is required');
    if (phone && !/^[\d\s\-().+]{7,20}$/.test(phone.trim())) {
      errors.push('Please enter a valid phone number');
    }

    if (errors.length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate order reference: MM- + base36 timestamp + 3 random chars
    const ts = Date.now().toString(36).toUpperCase();
    const rand = Math.random().toString(36).substring(2, 5).toUpperCase();
    const ref = `MM-${ts}-${rand}`;

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
          from: 'Menco Motorsports <orders@mencomotorsports.com>',
          to: 'tucksdieselservices@yahoo.com',
          subject: `New Merch Order: ${ref}`,
          text: [
            `New merch order received!`,
            ``,
            `Order Ref: ${ref}`,
            `Item: ${itemId}`,
            `Size: ${size || 'N/A'}`,
            `Quantity: ${quantity || 1}`,
            ``,
            `Customer: ${name.trim()}`,
            `Phone: ${phone.trim()}`,
            ``,
            `Customer will pick up at the shop.`,
          ].join('\n'),
        }),
      });
    }

    return new Response(JSON.stringify({ success: true, ref }), {
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
