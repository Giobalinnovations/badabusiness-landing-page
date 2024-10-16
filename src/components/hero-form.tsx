'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { submitForm } from '@/app/actions';

const formSchema = z.object({
  profession: z.string().min(1, { message: 'Please select a profession.' }),
  annualizedRevenue: z
    .string()
    .min(1, { message: 'Please select an annualized revenue range.' }),
  contact: z.string().min(1, { message: 'Please select a contact method.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  state: z.string().min(2, { message: 'Please enter a valid state.' }),
  agreeToPolicy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy.',
  }),
});

export function HeroForm() {
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
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-bold text-[#2A3342] mb-6">
        Get a free preview
      </h2>
      <p className="text-[#4B5563] mb-6">
        Get a taste of our guides, templates, and resources, absolutely free.
      </p> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your profession" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="annualizedRevenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annualized Revenue</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-100k">$0 - $100k</SelectItem>
                    <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                    <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                    <SelectItem value="1m+">$1M+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="California" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreeToPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the{' '}
                    <a href="#" className="text-[#F59E0B] hover:underline">
                      privacy policy
                    </a>
                    .
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          {submitError && <p className="text-red-500">{submitError}</p>}
          <Button
            type="submit"
            className="w-full bg-[#F59E0B] text-[#2A3342] hover:bg-[#D97706]"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Get Started'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
