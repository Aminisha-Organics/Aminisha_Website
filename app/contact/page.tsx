import { Suspense } from "react";

export const metadata = {
  title: "Contact Aminisha Organics LLP | Persulfate Manufacturer in India",
  description:
    "Contact Aminisha Organics LLP for inquiries about Sodium Persulfate (SPS), Ammonium Persulfate(APS) and technical specifications. India's trusted persulfate manufacturer.",
  keywords: [
    "contact Aminisha Organics",
    "persulfate manufacturer India",
    "Sodium Persulfate supplier",
    "Ammonium Persulfate manufacturer",
    "chemical manufacturer contact",
    "industrial chemical supplier India",
    "Aminisha Organics phone number",
    "Aminisha Organics email"
  ],
  alternates: {
    canonical: "https://aminishaorganics.com/contact",
  },
};

import Contact from "./contact";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  );
}