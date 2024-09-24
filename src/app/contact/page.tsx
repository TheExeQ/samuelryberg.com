import { FC } from "react";

import { ContactForm } from "@/components";

const Contact: FC = () => (
  <div className="relative min-h-screen">
    <div className="absolute inset-0 -z-10 flex h-auto w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
    <div className="flex h-screen items-center justify-center">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
