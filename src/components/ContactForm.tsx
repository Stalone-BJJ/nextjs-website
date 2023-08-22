"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

interface FormValues {
  name: string;
  number: string;
  class: string;
  email: string;
  info: string;
}

export default function ContactForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { reset } = useForm();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      number: "",
      class: "Fundamentals Class",
      email: "",
      info: "",
    },
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      const emailResponse = await fetch("/api/send-email", {
        body: JSON.stringify({ ...formData }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const emailJson = (await emailResponse.json()) as {
        message: string;
        success: boolean;
      };

      if (emailJson.success) {
        setShowSuccessMessage(true);
      }

      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return !showSuccessMessage ? (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a class..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="All Levels Class">All Levels</SelectItem>
                  <SelectItem value="Fundamentals Class">
                    Fundamentals
                  </SelectItem>
                  <SelectItem value="Kids Class">Kids</SelectItem>
                  <SelectItem value="Womens Only Class">Womens Only</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Which class are you interested in?
              </FormDescription>
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
              <FormDescription>
                What you&apos;d like us to call you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="07123 456789" {...field} />
              </FormControl>
              <FormDescription>
                The number best to reach you on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@email.com" {...field} />
              </FormControl>
              <FormDescription>So that we can get back to you.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Info / Questions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Feel free to provide more information or ask any questions here."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can leave this blank if you&apos;d like.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" variant="secondary">
          Submit
        </Button>
      </form>
    </Form>
  ) : (
    <div className="space-y-2 text-sm">
      <h3 className="mt-2 text-center text-xl font-bold italic text-red-600">
        THANK YOU FOR YOUR INTEREST
      </h3>
      <p>
        We&apos;ve received your request and will be in touch with you shortly.
      </p>
      <p>
        Please ensure to check your spam folder if you haven&apos;t received an
        email within 24 hours.
      </p>
      <p>
        If you still haven&apos;t received an email please contact us directly
        at{" "}
        <p>
          <Link
            className="underline decoration-red-600 decoration-2 hover:text-gray-400"
            href="mailto:contact@stalonebjj.co.uk"
          >
            contact@stalonebjj.co.uk
          </Link>
        </p>{" "}
        or you can call us on{" "}
        <Link
          className="underline decoration-red-600 decoration-2 hover:text-gray-400"
          href="tel:07540586726"
        >
          07540 586726
        </Link>
        .
      </p>
    </div>
  );
}
