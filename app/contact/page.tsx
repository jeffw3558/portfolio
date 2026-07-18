import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />
      <ContactForm />
    </>
  );
}
