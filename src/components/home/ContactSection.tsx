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
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import ContactForm from "../ContactForm";

interface FormValues {
  name: string;
  number: string;
  class: string;
  email: string;
  info: string;
}

export default function ContactSection() {
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

  return (
    <section className="px-8 py-4 w-full" id="contact-form">
      <h2 className="text-2xl font-bold text-center">CONTACT US</h2>
      <ContactForm />
    </section>
  );
}
