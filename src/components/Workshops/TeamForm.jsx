/* eslint-disable no-unused-vars */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/motion-checkbox";


const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  designation: z.string().min(2, { message: "Designation is required." }),
  company: z.string().min(2, { message: "Company name is required." }),
  terms: z.boolean().refine((val) => val === true, {
  }),
});

export default function TeamForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      designation: "",
      company: "",
      terms: false,
    },
  });
  const { control, handleSubmit } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const [notsubmitted, setIsNotSubmitted] = useState(false);

  const onSubmit = async (data) => {
  //   // if (!domainsLoaded) {
  //   //   form.setError("email", { type: "manual", message: "Please wait until the page is fully loaded." });
  //   //   return;
  //   // }

  //   // const emailDomain = data.email.split("@")[1]?.toLowerCase();
  //   // if (!emailDomain || blockedDomains.includes(emailDomain)) {
  //   //   form.setError("email", { type: "manual", message: "Enter a business email." });
  //   //   return;
  //   // }

    setIsLoading(true);

    const formattedData = {
      ...data
    };

    // console.log(data);

    try {
      const res = await fetch("/api/workshopform", {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 7000);
      // console.log(data)
      form.reset();
    } catch (error) {
      setIsNotSubmitted(true);
      setTimeout(() => setIsNotSubmitted(false), 7000);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className=" overflow-hidden h-fit max-md:pb-[10%] max-sm:pb-0" id="formoem">
      <div className="w-full h-full ">
        <div className="w-full flex flex-col gap-[2vw]  max-md:px-[2vw] fadeup">
          <Form {...form}>
            <form
              autoComplete="off"
              className="space-y-[1vw] max-sm:space-y-[4vw] max-md:space-y-[4vw]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.05vw] pl-[2vw] bg-white/5 border border-white/20 rounded-full placeholder:text-[#CACACA] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]"
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
                    <FormControl>
                      <Input
                        placeholder="Business Email*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.05vw] pl-[2vw]  bg-white/5 border border-white/20 rounded-full placeholder:text-[#CACACA] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]"
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
                    <FormControl>
                      <Input
                        placeholder="Designation*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.05vw] pl-[2vw]  bg-white/5 border border-white/20 rounded-full placeholder:text-[#CACACA] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]"
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
                    <FormControl>
                      <Input
                        placeholder="Company Name*"
                        autoComplete="off"
                        {...field}
                        className="placeholder:text-[1.05vw] pl-[2vw]  bg-white/5  border border-white/20 rounded-full placeholder:text-[#CACACA] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]"
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
                    <FormControl>
                      <PhoneInput
                        placeholder="Phone Number*"
                        defaultCountry="IN"
                        international
                        {...field}
                        className="placeholder:text-[1.05vw] placeholder:text-[#CACACA] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex gap-[1vw] justify-start  ">
                <FormField
                  control={control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="">
                      <div className="flex items-center justify-center max-md:gap-[3vw] max-sm:gap-3 gap-3 pl-[0.5vw]">
                         <Checkbox id="checkbox-teamform"  aria-label="checkbox"
                          checked={field.value}
                          onCheckedChange={field.onChange}  className="data-[state=checked]:bg-[#f16b0d] mt-[0.5vw]    max-md:scale-[1.5] max-sm:scale-[1] max-md:mt-[2vw] cursor-pointer max-md:rounded-[0.5vw] border-white/60" />
                        {/* <Checkbox
                          aria-label="checkbox"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className=" max-md:scale-[1.5] max-sm:scale-[1] max-md:mt-[2vw] cursor-pointer max-md:rounded-[0.5vw]"
                        /> */}
                        <label className="text-[1.15vw] mt-2   text-[#CACACA] max-sm:text-[3.5vw] max-md:text-[2.7vw] max-md:mt-5">
                          I agree to{" "}
                          <a href="/privacy-policy" className="border-b border-white/40 hover:border-primary-2 duration-300 ease-in transition-all">
                            Privacy Policy{" "}
                          </a>{" "}
                          and{" "}
                          <a href="/terms-and-conditions" className="border-b border-white/40 hover:border-primary-2 duration-300 ease-in transition-all">
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
                type="submit"
                aria-label="submit form"
                className="cursor-pointer mt-[3vw] pb-[3vw] max-sm:mt-[10vw] max-sm:pb-[8vw] max-md:mt-[4vw] px-0 "
              >
                <div
                  className={` relative inline-flex items-center h-[4vw] min-w-[10vw] px-[2vw] gap-3 rounded-full overflow-hidden text-white-200 group max-sm:h-fit max-sm:py-[4vw] max-sm:px-[6vw] max-sm:min-w-[30vw] max-md:px-[4.5vw] max-md:py-[3vw] max-md:h-fit max-sm:gap-[4vw] `}
                >
                  <span
                    className={`bg-foreground rounded-full h-2 w-2 max-sm:w-[2.5vw] max-sm:h-[2.5vw] z-[1] `}
                  ></span>
                  <div className="overflow-clip leading-[1.4] mt-[-4px] max-sm:mt-0 z-[1]">
                    <p
                      className={`text-[1.145vw] leading-[1.4] buttonTextShadow max-sm:text-[4vw] max-md:text-[2.7vw] `}
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
                <p className="text-white text-sm mt-2">
                  ✅ Form submitted successfully!
                </p>
              )}

              {notsubmitted && (
                <p className="text-red-600 text-sm mt-2">
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
