import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle className="mx-auto mb-2 text-2xl font-bold">
          Contact Me!
        </CardTitle>
        <CardDescription>
          I am always open to new opportunities and projects. Feel free to
          contact me!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input id="mail" placeholder="john@doe.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">
                Message<span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Hello there!"
                className="h-32 max-h-72"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}
