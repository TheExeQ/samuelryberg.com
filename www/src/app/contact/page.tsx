import { FC } from "react";

import { ContactForm } from "@/components";
import BackgroundGrid from "@/components/background-grid";

const Contact: FC = () => (
  <div className="relative min-h-screen">
    <BackgroundGrid />
    <div className="flex h-screen items-center justify-center">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
