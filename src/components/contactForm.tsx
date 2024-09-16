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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Contact Me!</CardTitle>
        <CardDescription>
          Send a message and I will reach out to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name*</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">Email*</Label>
              <Input id="name" placeholder="example@mail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Role">Role</Label>
              <Select>
                <SelectTrigger id="Role">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
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
