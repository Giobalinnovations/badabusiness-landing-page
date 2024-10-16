'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { submitForm } from '@/app/actions';

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
  agreeToPolicy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy.',
  }),
});

export default function HeroForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profession: '',
      annualizedRevenue: '',
      contact: '',
      name: '',
      email: '',
      state: '',
      agreeToPolicy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSubmitError(null);
    try {
      await submitForm(values);
      form.reset();
      // Show success message or redirect
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white p-8 h-full shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="truncate">Profession</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your profession" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="annualizedRevenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="truncate">Annualized Revenue</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your annualized revenue"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="truncate">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Enter 10-digit phone number"
                      {...field}
                      onChange={e => {
                        const value = e.target.value.replace(/\D/g, '');
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="truncate">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="truncate">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="truncate">State</FormLabel>
                  <FormControl>
                    <Input placeholder="California" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {submitError && <p className="text-red-500">{submitError}</p>}
          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
