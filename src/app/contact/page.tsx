import { FC } from "react";

import { ContactForm } from "@/components";

const Contact: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full mx-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
