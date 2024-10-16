'use server';

import { z } from 'zod';

const formSchema = z.object({
  profession: z.string().min(1),
  annualizedRevenue: z.string().min(1),
  contact: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  state: z.string().min(2),
  agreeToPolicy: z.boolean(),
});

export async function submitForm(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    throw new Error('Invalid form data');
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // If everything is successful, you can return some data or just resolve
  return { success: true };
}
