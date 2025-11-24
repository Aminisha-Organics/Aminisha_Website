import { Suspense } from "react";

export const metadata = {
  title: "Contact Us | Aminisha Organics LLP",
  description:
    "Get in touch with Aminisha Organics LLP. Contact us for product inquiries, partnerships, technical details, or general support.",
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