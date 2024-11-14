"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import "./word.css";

export default function WordAnimated({
  text,
  accentColor,
  textCenter = false
}: {
  text: string;
  accentColor?: string;
  textCenter?: boolean;
}) {
  const element = useRef(null);
  const [words, setWords] = useState<any>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start .85", "start .35"],
  });
  useEffect(() => {
    if (text) setWords(text.split(" "));
  }, []);

  return (
    <p
      ref={element}
      className="paragraph font-light"
      style={{ fontSize: "inherit", justifyContent: textCenter ? "center" : "left" }}

    >
      {words &&
        words.map((word: any, i: any) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              word={word}
              accentColor={accentColor}
            />
          );
        })}
    </p>
  );
}

function Word({
  word,
  range,
  progress,
  accentColor,
}: {
  word: string;
  range: any;
  progress: any;
  accentColor?: string;
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  if (word.startsWith("**")) {
    word = word.replace("**", "");
    return (
      <span className="word font-light text-2xl">
        <strong className="shadow font-medium text-inherit">{word}</strong>
        <motion.strong style={{ opacity }} className="text-inherit font-medium">
          {word}
        </motion.strong>
      </span>
    );
  }

  if (word.startsWith("--")) {
    word = word.replace("--", "");
    return (
      <span className="word font-light ">
        <strong className={"shadow text-inherit ${"}>{word}</strong>
        <motion.strong
          style={{ opacity }}
          className={`text-inherit ${accentColor && accentColor}`}
        >
          {word}
        </motion.strong>
      </span>
    );
  }

  if (word.startsWith("-*")) {
    word = word.replace("-*", "");
    return (
      <span className="word ">
        <strong className={"shadow font-medium text-inherit ${"}>{word}</strong>
        <motion.strong
          style={{ opacity }}
          className={`text-inherit font-medium ${accentColor && accentColor}`}
        >
          {word}
        </motion.strong>
      </span>
    );
  }

  return (
    <span className="word font-light ">
      <span className="shadow font-light text-inherit">{word}</span>
      <motion.span style={{ opacity }} className="text-inherit">
        {word}
      </motion.span>
    </span>
  );
}
