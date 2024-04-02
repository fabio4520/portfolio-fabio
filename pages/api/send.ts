import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import EmailTemplate from '../../components/email/email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY_RESEND);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      throw new Error("Bad Request");
    }

    const { data, error } = await resend.emails.send({
      from: 'portfolioFabio <onboarding@resend.dev>',
      to: [process.env.NEXT_PUBLIC_TO_EMAIL_RESEND || 'fabioleofc@gmail.com'],
      subject: 'Portafolio Fabio',
      react: EmailTemplate({ name, email, subject, message })
    });

    if (error) {
      res.status(400).json(error);
    } else {
      res.status(200).json({ message: "Datos enviados exitosamente" });
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
