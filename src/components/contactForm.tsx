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

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const postToApi = async () => {
    const payload = {name, email, message}
    await fetch('/api/contact', {method: 'POST', body: JSON.stringify(payload)})
  }
  
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
              <Input id="name" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input id="mail" placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">
                Message<span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Hello there!"
                className="h-32 max-h-72"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-between">
        <Button onClick={postToApi}>Send</Button>
        <p className="text-sm text-muted-foreground uppercase">OR</p>
        <a href="mailto:samuel.ryberg@gmail.com">Mail me!</a>
      </CardFooter>
    </Card>
  );
}
