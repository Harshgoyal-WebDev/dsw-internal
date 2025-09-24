/* eslint-disable no-unused-vars */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  designation: z.string().min(2, { message: "Designation is required." }),
  company: z.string().min(2, { message: "Company name is required." }),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    // Add this
    message: "You must agree to the terms and conditions",
  }),
});

export default function PilotForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      designation: "",
      company: "",
      message: "",
      terms: false,
    },
  });
  const { control, handleSubmit } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const [notsubmitted, setIsNotSubmitted] = useState(false);

  // const onSubmit = async (data) => {
  //   // if (!domainsLoaded) {
  //   //   form.setError("email", { type: "manual", message: "Please wait until the page is fully loaded." });
  //   //   return;
  //   // }

  //   // const emailDomain = data.email.split("@")[1]?.toLowerCase();
  //   // if (!emailDomain || blockedDomains.includes(emailDomain)) {
  //   //   form.setError("email", { type: "manual", message: "Enter a business email." });
  //   //   return;
  //   // }

  //   setIsLoading(true);

  //   const formattedData = {
  //     ...data
  //   };

  //   // console.log(data);

  //   try {
  //     const res = await fetch("/api/pilotform", {
  //       method: "POST",
  //       body: JSON.stringify(formattedData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!res.ok) throw new Error("Failed to send message");

  //     setIsSubmitted(true);
  //     setTimeout(() => setIsSubmitted(false), 7000);
  //     // console.log(data)
  //     form.reset();
  //   } catch (error) {
  //     setIsNotSubmitted(true);
  //     setTimeout(() => setIsNotSubmitted(false), 7000);
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <section className="mobile:pt-0 overflow-hidden" id="formoem">
      <div className="w-full h-full mobile:p-0 tablet:p-[6.5vw]">
        <div className="w-full flex flex-col gap-[2vw] mobile:gap-[5vw] tablet:w-full mobile:px-[3vw] max-md:px-[2vw] mobile:py-[5vw] fadeup">
          <Form {...form}>
            <form
              autoComplete="off"
              className="space-y-[1vw] max-sm:space-y-[4vw] max-md:space-y-[4vw]"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-sm uppercase font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      Full name*
                    </label> */}
                    <FormControl>
                      <Input
                        placeholder="Name*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.15vw] pl-[2vw] bg-white/5 border !border-[#B0B0B080] rounded-full placeholder:text-[#CACACA] max-md:placeholder:text-[2.7vw] max-sm:placeholder:text-[3.5vw] max-md:pl-[5vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-sm font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      EMAIL*
                    </label> */}
                    <FormControl>
                      <Input
                        placeholder="Business Email*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.15vw] pl-[2vw]  bg-white/5 border !border-[#B0B0B080] rounded-full placeholder:text-[#CACACA] max-md:placeholder:text-[2.7vw] max-sm:placeholder:text-[3.5vw] max-md:pl-[5vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-md font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      COMPANY NAME*
                    </label> */}
                    <FormControl>
                      <Input
                        placeholder="Designation*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.15vw] pl-[2vw]  bg-white/5 border !border-[#B0B0B080] rounded-full placeholder:text-[#CACACA] max-md:placeholder:text-[2.7vw] max-sm:placeholder:text-[3.5vw] max-md:pl-[5vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-md font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      COMPANY NAME*
                    </label> */}
                    <FormControl>
                      <Input
                        placeholder="Company Name*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.15vw] pl-[2vw]  bg-white/5  border !border-[#B0B0B080] rounded-full placeholder:text-[#CACACA] max-md:placeholder:text-[2.7vw] max-sm:placeholder:text-[3.5vw] max-md:pl-[5vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-md uppercase font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      Phone Number*
                    </label> */}
                    <FormControl>
                      <PhoneInput
                        placeholder="Phone Number*"
                        defaultCountry="IN"
                        international
                        {...field}
                        className="placeholder:text-[1.15vw] placeholder:text-[#CACACA] max-md:placeholder:text-[2.7vw] max-sm:placeholder:text-[3.5vw] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    {/* <label className="block text-md font-medium mb-1 tablet:text-[1.2vw] mobile:text-[3.5vw]">
                      MESSAGE*
                    </label> */}
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.15vw] pl-[2vw] pt-[1vw]  bg-white/5 border !border-[#B0B0B080] rounded-[2vw] placeholder:text-[#CACACA] max-md:placeholder:text-[2.7vw] max-sm:placeholder:text-[3.5vw]  max-md:pl-[5vw] max-sm:pt-[3vw] max-md:rounded-[5vw] max-md:pt-[2vw]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex gap-[1vw] justify-start mobile:justify-start mobile:items-start mobile:gap-3 tablet:block tablet:w-4/5 ">
                <FormField
                  control={control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="">
                      <div className="flex items-center justify-center max-md:gap-[5vw] max-sm:gap-3 gap-3 tablet:gap-1 pl-[0.5vw]">
                        <Checkbox
                          aria-label="checkbox"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mobile:mt-[2vw] max-md:scale-[1.5] max-sm:scale-[1] tablet:mt-[2vw] cursor-pointer max-md:rounded-[0.5vw]"
                        />
                        <label className="text-[1.15vw] mt-2   text-[#CACACA] max-md:text-[3.5vw] max-md:mt-5">
                          I agree to{" "}
                          <a href="/" className="border-b border-[#CACACA]">
                            Privacy Policy{" "}
                          </a>{" "}
                          and{" "}
                          <a href="/" className="border-b border-[#CACACA]">
                            Terms and Conditions
                          </a>
                          .
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                // type="submit"
                aria-label="submit form"
                className="cursor-pointer mt-[3vw] pb-[3vw] max-md:pb-[8vw] max-md:mt-[8vw] px-0"
              >
                <div
                  className={` relative inline-flex items-center h-[4vw] min-w-[10vw] px-[2vw] gap-3 rounded-full overflow-hidden text-white-200 group max-md:h-fit max-md:py-[3vw] max-md:px-[4.5vw] max-md:min-w-[20vw] max-md:gap-[2vw] `}
                >
                  <span
                    className={`bg-foreground rounded-full h-2 w-2 max-sm:w-[2.5vw] max-sm:h-[2.5vw] max-md:w-[1vw] max-md:h-[1vw] z-[1] `}
                  ></span>
                  <div className="overflow-clip leading-[1.4] mt-[-4px] max-md:mt-0 z-[1]">
                    <p
                      className={`text-[1.145vw] leading-[1.4] buttonTextShadow max-sm:text-[4vw] max-md:text-[3vw] `}
                    >
                      {" "}
                      {isLoading ? "Sending..." : "Submit"}
                    </p>
                  </div>
                  <span
                    className={`absolute inset-0 group-hover:scale-95 transition-transform duration-500 bg-gradient-to-r from-primary-2 to-primary-3 rounded-full`}
                  />
                </div>
              </Button>
              {submitted && (
                <p className="text-white text-md mt-2">
                  ✅ Form submitted successfully!
                </p>
              )}

              {notsubmitted && (
                <p className="text-red-600 text-md mt-2">
                  ❌ Error sending message. Please try again.
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
