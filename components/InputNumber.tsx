"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent } from "react";

function InputNumber() {
  const [value, setValue] = useState(0.0);

  const handleIncrease = () => {
    setValue((prevValue) => parseFloat((prevValue + 0.01).toFixed(2)));
  };

  const handleDecrease = () => {
    setValue((prevValue) => {
      const newValue = prevValue - 0.01;
      return newValue >= 0 ? parseFloat(newValue.toFixed(2)) : prevValue;
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (newValue >= 0) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex bg-input rounded-md h-[42px] border-[1px] border-secondary">
      <Button
        onClick={handleDecrease}
        className="flex justify-center items-center rounded-r-none rounded-l-md bg-transparent w-[56px]"
      >
        <svg
          width="14"
          height="2"
          viewBox="0 0 14 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.5999 1L1.3999 1L12.5999 1Z" fill="#898587" />
          <path
            d="M12.5999 1L1.3999 1"
            stroke="#898587"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      <Input
        className="flex justify-center items-center text-center grow border-none rounded-none text-secondary-foreground bg-transparent"
        type="number"
        value={value.toFixed(2)}
        step="0.01"
        onChange={handleChange}
      ></Input>
      <Button
        onClick={handleIncrease}
        className="flex justify-center items-center rounded-l-none rounded-r-md bg-transparent w-[56px]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.0001 8.00156H1.6001H8.0001Z" fill="#898587" />
          <path
            d="M8.0001 1.60156V8.00156M8.0001 8.00156V14.4016M8.0001 8.00156H14.4001M8.0001 8.00156H1.6001"
            stroke="#898587"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}

export default InputNumber;
