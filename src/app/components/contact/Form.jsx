"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY, limitRate: { throttle: 5000 } }
      )
      .then(
        () => {
          toast.success("Message sent successfully! I will get back to you soon.", { id: toastId });
        },
        () => {
          toast.error("Failed to send your message. Please try again later.", { id: toastId });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Umair",
      from_name: data.name,
      reply_to: data.email,
      message: data.Message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required.", maxLength: 80 })}
          className="w-full p-2 rounded-[8px] text-black/80 border border-black/40"
        />
        {errors.name && <span className="inline-block self-start text-red-600">{errors.name.message}</span>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
          className="w-full p-2 rounded-[8px] text-black/80 border border-black/40"
        />
        {errors.email && <span className="inline-block self-start text-red-600">{errors.email.message}</span>}

        <textarea
          placeholder="Message"
          rows={5}
          {...register("Message", { required: "Message should be between 50-1000 characters.", maxLength: 1000, minLength: 50 })}
          className="w-full p-2 rounded-[8px] text-black/80 border border-black/40"
        />
        {errors.Message && <span className="inline-block self-start text-red-600">{errors.Message.message}</span>}

        <input
          value="Send Message"
          type="submit"
          className="text-sm sm:text-xl px-6 py-2 md:px-10 md:py-4 rounded-[8px] font-normal md:font-bold hover:bg-white hover:text-black/90 duration-150 bg-background border border-black/30 border-solid backdrop:blur-sm text-foreground cursor-pointer capitalize"
        />
      </form>

      <div className="custom-bg !border-black/30 px-4 sm:px-6 lg:px-10 py-2 rounded-xl mt-4">
        <p className="text-xs sm:text-sm lg:text-lg text-black/90">
          If the contact form isn&#39;t working, feel free to reach out via email.
        </p>
        <h2 className="text-black font-semibold text-xs sm:text-sm lg:text-lg">Email: umairnawaz7228@gmail.com</h2>
      </div>
    </>
  );
}