"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {sendMail} from '../lib/actions/mailer.action'
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "./ui/textarea"


export default function ContactForm() {


  const formSchema = z.object({
    username: z.string().min(3, {
      message: "write your name correctly.",
    }),
    email: z.string().email().min(6, {
      message: "Enter a valid email.",
    }),
    comment: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      comment: "",
    },
  })



  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Send a POST request to Formspree with JSON data
      const response = await fetch("https://formspree.io/f/xbjvpozd", {
        method: "POST",
        body: JSON.stringify({
          values,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        // If the request was successful, show an alert
        alert("Form submitted successfully!");
      } else {
        // If the request was not successful, show an error alert
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <Input placeholder="Enter your Name" className=" bg-black dark:bg-white outline-none border-0 border-b-4 border-b-primary  rounded-none focus:outline-none focus:" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input placeholder="Enter your valid Email" className=" bg-black dark:bg-white outline-none border-0 border-b-4 border-b-primary  rounded-none focus:outline-none focus:" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>How can i help you</FormLabel> */}
              <FormControl>
                <Textarea placeholder="Your text here! " className=" bg-black dark:bg-white outline-none border-0 border-b-4 border-b-primary  rounded-none focus:outline-none focus:" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={'outline'} className="bg-transparent rounded-none border-2 hover:bg-primary hover:text-white hover:border-primary">Submit</Button>
      </form>
    </Form>
  )
}
