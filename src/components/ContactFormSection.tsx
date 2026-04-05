import Link from "next/link";

import ContactForm from "./ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import SectionHeading from "./home/SectionHeading";

export default function ContactFormSection() {
  return (
    <div className="container max-w-6xl">
      <SectionHeading
        eyebrow="Get started"
        subtitle="Send us a message or reach out directly — we’ll help you book your free trial."
        title="Contact us"
      />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-red-600 bg-card shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Visit & call</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-zinc-300">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Phone
                </p>
                <Link
                  className="mt-1 inline-block font-medium text-zinc-100 hover:text-red-400 transition-colors"
                  href="tel:07540586726"
                >
                  07540 586726
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Email
                </p>
                <Link
                  className="mt-1 inline-block font-medium text-zinc-100 hover:text-red-400 transition-colors break-all"
                  href="mailto:contact@stalonebjj.co.uk"
                >
                  contact@stalonebjj.co.uk
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Location
                </p>
                <p className="mt-1 leading-relaxed text-zinc-300">
                  Matrix House, Friday Street
                  <br />
                  Chorley, PR6 0AA
                </p>
                <Link
                  className="mt-3 inline-flex text-sm font-medium text-red-500 hover:text-red-400"
                  href="https://www.google.com/maps/place/Unit+5,+Stalone+Brazilian+Jiu+Jitsu+Academy,+Matrix+house,+Friday+St,+Chorley+PR6+0AA/@53.654125,-2.6261,17z/data=!4m6!3m5!1s0x487b0c5d34f6f63b:0xc8d758223612b664!8m2!3d53.654125!4d-2.6261!16s%2Fg%2F11dftpyprz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps →
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-red-600 bg-zinc-950">
            <CardContent className="pt-6">
              <p className="text-sm leading-relaxed text-zinc-300">
                <span className="font-semibold text-red-500">New to BJJ?</span>{" "}
                Choose &quot;Fundamentals&quot; in the form and tell us a little
                about yourself — we&apos;ll get back to you with class times that
                suit you.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-7">
          <Card className="border-red-600 bg-card shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">
                Send a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm embedded />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
