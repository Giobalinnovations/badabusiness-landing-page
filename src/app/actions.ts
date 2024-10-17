'use server';

import { actionClient } from '@/lib/safe-action';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  profession: z
    .string()
    .min(2, { message: 'Profession must be at least 2 characters.' }),
  annualizedRevenue: z
    .string()
    .min(1, { message: 'Please enter an annualized revenue.' }),
  contact: z.string().regex(/^\d{10}$/, {
    message: 'Please enter a valid 10-digit phone number.',
  }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  state: z.string().min(2, { message: 'Please enter a valid state.' }),
});

export const submitContact = actionClient
  .schema(formSchema)
  .action(async ({ parsedInput }) => {
    if (!parsedInput) return { error: 'Invalid input' };

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'New Contact Form Submission',
        text: `
        New contact form submission:

        Name: ${parsedInput.name}
        Email: ${parsedInput.email}
        Telephone: ${parsedInput.contact}
        Profession: ${parsedInput.profession}
        Annualized Revenue: ${parsedInput.annualizedRevenue}
        State: ${parsedInput.state}
      `,
      };

      await transporter.sendMail(mailOptions);

      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return {
        success: false,
        error: 'Failed to submit contact form. Please try again.',
      };
    }
  });
