"use client";
import React from "react";
import { motion } from "framer-motion";

function extractAndRemoveListItems(html: string) {
  // const parser = new DOMParser();
  // const doc = parser.parseFromString(html, "text/html");
  // const ulElements = doc.getElementsByTagName("ul");
  // const listItems: string[] = [];

  // while (ulElements.length > 0) {
  //   const ulElement = ulElements[0];
  //   if (!ulElement) {
  //     return null;
  //   }
  //   const liElements = ulElement?.getElementsByTagName("li");
  //   if (liElements) {
  //     for (let j = 0; j < liElements.length; j++) {
  //       const el = liElements[j];
  //       if (el) {
  //         if (el.textContent) {
  //           listItems.push(el.textContent);
  //         }
  //       }
  //     }
  //   }
  //   ulElement.remove();
  // }

  return { listItems: [], html };
}

export default function ContentItem({
  type,
  data,
  light,
}: {
  type: string;
  data: {
    text: string;
    image: { path: string };
  };
  light?: boolean;
}) {
  if (type === "heading") {
    const text = data.text.replace(/`([^`]+)`/g, "<b>$1</b>");

    return (
      <motion.h1
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, transition: { delay: 0.1 } }}
        className={`mb-8 text-3xl  uppercase tracking-wide  lg:text-4xl ${
          light ? "text-white" : "text-main"
        }`}
      >
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </motion.h1>
    );
  }
  if (type === "text") {
    const newHtmlData = extractAndRemoveListItems(data.text);
    return (
      <>
        {newHtmlData?.html && (
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.15, duration: 0.751 },
            }}
            className={`leading-loose ${
              light && "text-white"
            } prose-li:list-outside prose-li:list-disc prose-ul:pl-4`}
            dangerouslySetInnerHTML={{ __html: newHtmlData.html }}
          />
        )}
        {newHtmlData?.listItems.map((item: string) => (
          <motion.div key={item} className="mb-5 flex flex-row items-center">
            <div className="shrink-0 mr-3 h-6 w-6 rounded-full bg-main" />
            <div className={`${light && "text-white"}`}>{item}</div>
          </motion.div>
        ))}
      </>
    );
  }
  if (type === "image") {
    return <img src={`https://hamm.cognitio.de/${data?.image?.path}`} alt="" />;
  }

  return null;
}
