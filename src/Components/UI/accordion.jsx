"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("text-background", className)}
      {...props} />
  );
}

function AccordionTrigger({
  className,
  index,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between  text-[1.2vw] transition-all outline-none pt-14 mb-5 relative ",
          className
        )}
        {...props}>
        {children}
        <div className="absolute top-0 left-0 max-sm:top-[10%]">
          <p className="text-background text-[1vw] max-md:text-[1.5vw] font-body max-sm:text-[3.4vw]">00{index + 1}</p>
        </div>
        <div className="flex cursor-pointer flex-col absolute top-0 right-0 gap-[-0.5rem] rotate-0">
          <ChevronDownIcon
            className="text-muted-foreground transition-transform duration-200 group-data-[state=closed]:rotate-0 origin-center group-data-[state=open]:rotate-180 pointer-events-none size-4 shrink-0 translate-y-0.5" />
          <ChevronDownIcon 
            className="text-muted-foreground transition-transform duration-200 group-data-[state=closed]:rotate-0 origin-center group-data-[state=open]:rotate-180 pointer-events-none size-4 shrink-0 translate-y-[-0.5rem]" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up text-background data-[state=open]:animate-accordion-down overflow-hidden text-[1vw]"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
