"use client";

import React, { useEffect, useRef, useState } from "react";
import Content from "./Content";
import Copy from "../Animations/Copy";
import { formatDate } from "@/lib/datetime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BlogContentWp = ({ post }) => {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [modifiedHtml, setModifiedHtml] = useState(post?.content || "");
  const [toc, setToc] = useState([]); // [{ id, title }]
  const contentRef = useRef(null); // scope all queries to the article content
  // console.log(post);
  // Change this to match your sticky header total height
  const getHeaderOffset = () => {
    // If you have a fixed header, measure it here:
    // const header = document.querySelector('[data-sticky-header]')
    // return header ? header.offsetHeight : 0
    return 100; // default offset; tweak as needed
  };

  const slugify = (str) =>
    (str || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/&.+?;/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  // Build TOC from h2 and inject ids + scroll-margin-top
  useEffect(() => {
    if (!post?.content || typeof window === "undefined") return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, "text/html");
    const h2s = Array.from(doc.querySelectorAll("h2"));

    const ids = new Set();
    const items = h2s.map((h2) => {
      const title = (h2.textContent || "").trim();
      let id = h2.getAttribute("id") || slugify(title) || "section";
      let unique = id;
      let n = 2;
      while (ids.has(unique)) unique = `${id}-${n++}`;
      ids.add(unique);
      h2.setAttribute("id", unique);
      // ensure perfect landing despite sticky headers
      h2.setAttribute("style", `scroll-margin-top:${getHeaderOffset()}px;`);
      return { id: unique, title };
    });

    setToc(items);
    setModifiedHtml(doc.body.innerHTML || post.content);

    if (items.length) {
      const intro = items.find((t) =>
        t.title.toLowerCase().includes("introduction")
      );
      setActiveSection(intro ? intro.title : items[0].title);
    }
  }, [post?.content]);

  // GSAP ScrollTriggers bound to headings in our content only
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!toc.length || !contentRef.current) return;

    const triggers = [];
    toc.forEach(({ id, title }) => {
      const el = contentRef.current.querySelector(`#${CSS.escape(id)}`);
      if (!el) return;
      const trig = ScrollTrigger.create({
        trigger: el,
        start: "-400% top",
        end: "bottom top",
        onEnter: () => setActiveSection(title),
        onEnterBack: () => setActiveSection(title),
      });
      triggers.push(trig);
    });

    return () => triggers.forEach((t) => t.kill());
  }, [toc, modifiedHtml]);

  // Scroll to EXACT pixel position of the target <h2>
  const handleScrollTo = (id) => {
    if (typeof window === "undefined" || !contentRef.current) return;
    const target = contentRef.current.querySelector(`#${CSS.escape(id)}`);
    if (!target) return;

    const headerOffset = getHeaderOffset();
    const y =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    setActiveSection(target.textContent?.trim() || id);

    gsap.to(window, {
      duration: 1.2,
      scrollTo: y,
      ease: "power2.inOut",
      autoKill: false,
    });
  };

  return (
    <section
      id="content"
      className="h-fit relative max-md:flex-col bg-[#FEFEFE] container flex w-full pr-[5vw]"
    >
      {/* Info strip */}
      <div className="h-fit absolute max-md:relative max-sm:py-[15vw] max-md:!pt-[0vw] max-md:pb-[10vw] max-md:w-full w-fit blog-info">
        <div className="flex flex-wrap items-center max-md:items-start max-md:justify-between max-md:flex-row-reverse gap-y-[2.5vw] max-md:gap-y-[5vw]">
          <div className="text-[1.05vw] max-sm:text-[4vw] max-md:text-[3vw] space-y-[.8vw] w-[50%] max-md:w-[40%]">
            <Copy>
              <p className="text-background max-md:font-normal font-medium">
                Publication Date
              </p>
            </Copy>
            <Copy>
              <p className="text-[#626262]">{formatDate(post.date)}</p>
            </Copy>
          </div>
          <div className="text-[1.05vw] max-sm:text-[4vw] max-md:text-[3vw] space-y-[.8vw] w-[50%] max-md:w-[40%]">
            <Copy>
              <p className="text-background max-md:font-normal font-medium">
                Category
              </p>
            </Copy>
            <Copy>
              {post.categories.map((category,id) => (
                <p className="text-[#626262]" key={id}>{category.name}</p>
              ))}
            </Copy>
          </div>
          <div className="text-[1.05vw] max-sm:text-[4vw] max-md:text-[3vw] space-y-[.8vw] w-[50%] max-md:w-[40%]">
            <Copy>
              <p className="text-background max-md:font-normal font-medium">
                Reading Time
              </p>
            </Copy>
            <Copy>
              <p className="text-[#626262]">10 min</p>
            </Copy>
          </div>
          <div className="text-[1.05vw] max-sm:text-[4vw] max-md:text-[3vw] space-y-[.8vw] w-[50%] max-md:w-[40%]">
            <Copy>
              <p className="text-background max-md:font-normal font-medium">
                Author Name
              </p>
            </Copy>
            <Copy>
              <p className="text-[#626262]">Sandeep khuperkar</p>
            </Copy>
          </div>
        </div>
      </div>

      {/* TOC */}

      <div className="space-y-[2vw] sticky top-[15%] mt-[15vw] max-md:hidden h-full w-[50%] pr-[5vw]">
        {toc[0] && (
          <>
            <Copy>
              <p className="text-[1.05vw] max-sm:text-[4vw] max-md:text-[3vw] text-background font-medium">
                Table of Contents
              </p>
            </Copy>
            <div
              data-lenis-prevent
              className="w-fit overflow-y-scroll h-fit max-h-[55vh] max-md:hidden rounded-[2vw] border border-black/10 drop-shadow-lg shadow-background bg-white p-[1vw] fadeup"
            >
              <ul className="flex flex-col items-start h-full gap-[1.5vw] list-disc p-[2vw]">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`text-[1.05vw] max-sm:text-[4vw] max-md:text-[3vw] cursor-pointer transition-all duration-300 hover:text-primary-2 ${
                      activeSection === item.title
                        ? "text-primary-2"
                        : "text-background"
                    }`}
                    title={item.title}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Content (scoped for queries) */}
      <div className="h-full w-full flex justify-end text-background">
        <div
          id="Introduction"
          className="w-full border-b h-full"
          ref={contentRef}
        >
          <Content content={modifiedHtml} />
        </div>
      </div>
    </section>
  );
};

export default BlogContentWp;
