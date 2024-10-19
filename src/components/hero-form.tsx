'use client';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useAction } from 'next-safe-action/hooks';
import { toast } from '@/hooks/use-toast';
import { submitContact } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  profession: z
    .string()
    .min(2, { message: 'Profession must be at least 2 characters.' }),
  annualizedRevenue: z.string().min(1, {
    message: 'Please select an annualized revenue range.',
  }),
  contact: z.string().regex(/^\d{10}$/, {
    message: 'Please enter a valid 10-digit phone number.',
  }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  state: z.string().min(2, { message: 'Please enter a valid state.' }),
});

export default function HeroForm() {
  const router = useRouter();
  const { execute, status } = useAction(submitContact, {
    onSuccess(data) {
      if (data?.data?.success) {
        toast({
          variant: 'success',
          title: 'Success',
          description: 'Your message has been sent successfully!',
        });
        form.reset();
        router.push('/thank-you');
      }
      if (data?.data?.error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: data?.data?.error ?? 'Failed to send message',
        });
      }
    },
    onError(error) {
      console.error('Submit error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profession: '',
      annualizedRevenue: '',
      contact: '',
      name: '',
      email: '',
      state: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values);
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
                      <SelectItem value="10_-_30_lakhs">
                        10 - 30 lakhs
                      </SelectItem>
                      <SelectItem value="10_lakhs_to_50_lakhs">
                        10 lakhs to 50 lakhs
                      </SelectItem>
                      <SelectItem value="1_cr._to_5_cr.">
                        1 cr. to 5 cr.
                      </SelectItem>
                      <SelectItem value="5_cr.+">5 cr.+</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <Input placeholder="your name" {...field} />
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
                    <Input placeholder="yourname@example.com" {...field} />
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
                    <Input placeholder="Delhi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
            disabled={status === 'executing'}
          >
            {status === 'executing' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
