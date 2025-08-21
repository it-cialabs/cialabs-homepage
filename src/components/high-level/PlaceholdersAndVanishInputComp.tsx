"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
  const placeholders = [
    "Where is cia labs located?",
    "What is the full form of cia labs?",
    "What is community day",
    "is there an interview for joining",
    
  ];
export function PlaceholdersAndVanishInputDemo() {
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  

  const options = [
    "What is cia labs?",
    "How do i join it?",
    "What do people do at cia labs?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Dynamically set timeout based on input length
    const baseTimeout = 700;
    const maxTimeout = 1800;
    const maxLength = "What do people do at cia labs?".length;
    const minLength = "How do i join it?".length;
    const inputLen = inputValue.trim().length;

    // Linear interpolation between min and max timeout
    let timeout = baseTimeout;
    if (inputLen > minLength) {
      const ratio = Math.min((inputLen - minLength) / (maxLength - minLength), 1);
      timeout = Math.round(baseTimeout + (maxTimeout - baseTimeout) * ratio);
    }

    setTimeout(() => {
      if (inputValue.trim()) {
        // Redirect to search page with the input value as query parameter
        router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
      }
    }, timeout);

    console.log("submitted:", inputValue, "timeout:", timeout);
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
      <h2 className="mb-8 text-3xl text-center font-semibold sm:text-5xl dark:text-white text-black">
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
        setInputValue("")
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