"use client";
import * as React from "react";
import { useState } from "react";

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

import { meta } from "@/config";

import { ContactFormInfo } from "@/types/contact";

export function ContactForm() {
  const maxMessageLength = 1000;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const postToApi = async () => {
    const payload: ContactFormInfo = { name, email, message };

    if (name.length > 0 && email.length > 0 && message.length > 0) {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      alert(
        response.status === 200
          ? "Success, message has been sent!"
          : `Error! ${response.statusText}`
      );
    }
  };

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
        <form suppressHydrationWarning>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                id="mail"
                placeholder="john@doe.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">
                Message<span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Hello there!"
                className="h-32 max-h-72"
                maxLength={maxMessageLength}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p
                className={`text-sm ${
                  message.length > maxMessageLength * 0.9
                    ? "text-red-500"
                    : "text-muted-foreground"
                }`}
              >
                {message.length} / {maxMessageLength}
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-between">
        <Button onClick={postToApi}>Send</Button>
        <p className="text-sm uppercase text-muted-foreground">OR</p>
        <a href={`mailto:${meta.email}`}>Mail me!</a>
      </CardFooter>
    </Card>
  );
}
