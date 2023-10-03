import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const formSchema = z.object({
    username: z.string().min(3, {
      message: "Write your name correctly.",
    }),

    email: z.string().email().min(6, {
      message: "Enter a valid email.",
    }),
    comment: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/xbjvpozd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("Form submitted successfully!")
        form.reset({});
      } else {
        toast.error("Form submission failed. Please try again later.")
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.")
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your Name"
                    className="bg-black dark:bg-white outline-none border-0 border-b-4 border-b-primary rounded-none focus:outline-none focus:"
                    {...field}
                  />
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
                <FormControl>
                  <Input
                    placeholder="Enter your valid Email"
                    className="bg-black dark:bg-white outline-none border-0 border-b-4 border-b-primary rounded-none focus:outline-none focus:border-0"
                    {...field}
                  />
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
                <FormControl>
                  <Textarea
                    placeholder="Your text here!"
                    className="bg-black dark:bg-white outline-none border-0 border-b-4 border-b-primary rounded-none focus:outline-none focus:"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={'outline'}
            className="bg-transparent rounded-none border-2 hover:bg-primary hover:text-white hover:border-primary"
          >
            Submit
          </Button>
        </form>
      </Form>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  );
}
