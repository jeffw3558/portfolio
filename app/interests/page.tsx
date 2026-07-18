import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import InterestsCarousel from "@/components/interests";

export const metadata: Metadata = {
  title: "Interests",
};

export default function InterestsPage() {
  return (
    <>
      <PageHeader title="Interests" />
      <InterestsCarousel />
    </>
  );
}
