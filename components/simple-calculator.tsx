"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the CalculatorComponent function
export default function Calculator() {
  // State hooks for managing input numbers and the result
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // Handler for updating num1 state on input change
  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };

  // Handler for updating num2 state on input change
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };

  // Function to perform addition and set the result
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };

  // Function to perform subtraction and set the result
  const subtract = (): void => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };

  // Function to perform multiplication and set the result
  const multiply = (): void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };

  // Function to perform division and set the result
  const divide = (): void => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult("Error: Division by zero");
    }
  };

  // Function to perform module and set the result
  const modulus = (): void => {
    setResult((parseFloat(num1) % parseFloat(num2)).toString());
  };

  // Function to perform exponentation and set the result
  const expo = (): void => {
    setResult((parseFloat(num1) ** parseFloat(num2)).toString());
  };

  // Function to clear the inputs and result
  const clear = (): void => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  // JSX return statement rendering the calculator UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      {/* Center the calculator within the screen */}
      <Card className="w-full max-w-md p-6 dark:bg-gray-800 shadow-lg rounded-lg bg-[url('/img/p5.png')] bg-cover bg-top">
        {/* Card header with title */}
        <CardHeader>
          <CardTitle className="text-3xl font-mono bg-black text-yellow-400 text-center">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        {/* Card content including inputs, buttons, and result display */}
        <CardContent className="space-y-4">
          {/* Input fields for numbers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num1" className="text-yellow-300 text-center bg-gray-700 text-xl">Number 1</Label>
              <Input className="text-black text-left bg-blue-300 text-base font-bold"
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter a number"
                min={0}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2" className="text-yellow-300 text-center bg-gray-700 text-xl">Number 2</Label>
              <Input className="text-black text-left bg-blue-300 text-base font-bold"
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter a number"
                min={0}
              />
            </div>
          </div>
          {/* Buttons for arithmetic operations */}
          <div className="grid grid-cols-6 gap-2">
            <Button 
              variant="outline"
              className="text-white bg-blue-600 text-xl font-extrabold hover:bg-green-700"
              onClick={add}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="text-white bg-blue-600 text-xl font-extrabold hover:bg-green-700"
              onClick={subtract}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-white bg-blue-600 text-xl font-extrabold hover:bg-green-700"
              onClick={multiply}
            >
              x
            </Button>
            <Button
              variant="outline"
              className="text-white bg-blue-600 text-xl font-extrabold hover:bg-green-700"
              onClick={divide}
            >
              /
            </Button>

            <Button
              variant="outline"
              className="text-white bg-blue-600 text-xl font-extrabold hover:bg-green-700"
              onClick={modulus}
            >
              %
            </Button>

            <Button
              variant="outline"
              className="text-white bg-blue-600 text-xl font-extrabold hover:bg-green-700"
              onClick={expo}
            >
              **
            </Button>
          </div>

          {/* Display the result */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="result" className="text-xl font-mono bg-gray-900 text-yellow-400 text-center" >Result</Label>
            <Input
            className="text-2xl bg-gray-200 text-green-800 text-center font-bold h-16"
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
            />
          </div>
          {/* Clear button to reset inputs and result */}
          <Button variant="outline" className="w-full h-7 bg-blue-600 hover:bg-green-600 text-xl text-white font-bold" onClick={clear}>
            Clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}