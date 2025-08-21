"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const options = [
    "What is cia labs?",
    "How do i join it?",
    "Full form of cia labs",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      if (inputValue.trim()) {
        // Redirect to search page with the input value as query parameter
        router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
      }
    }, 700);

    console.log("submitted:", inputValue);
  };

  const handleOptionClick = (optionText: string) => {
    setInputValue(optionText);
    // Small delay to ensure the input is filled before submitting
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }, 100);
  };

  return (
    <div className="h-auto flex flex-col justify-center items-center">
      <h2 className="mb-12 text-3xl text-center font-semibold sm:text-5xl dark:text-white text-black">
        Ask Anything About Us.
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        value={inputValue}
        ref={formRef}
      />
      {/* Options */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 mx-auto w-full sm:max-w-[545px]">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="whitespace-nowrap opacity-60 hover:opacity-100 hover:cursor-pointer transition-all text-xs flex py-2 items-center rounded-full border border-solid bg-transparent border-black/40 dark:border-white/40 px-3 leading-none"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}


export function PlaceholdersAndVanishInputDemoNotext() {
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const options = [
    "What is cia labs?",
    "How do i join it?",
    "Full form of cia labs",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      if (inputValue.trim()) {
        // Redirect to search page with the input value as query parameter
        router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
      }
    }, 700);

    console.log("submitted:", inputValue);
  };

  const handleOptionClick = (optionText: string) => {
    setInputValue(optionText);
    // Small delay to ensure the input is filled before submitting
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }, 100);
  };

  return (
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        value={inputValue}
        ref={formRef}
      />
  );
}