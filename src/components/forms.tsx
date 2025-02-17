"use client";
import React from "react";
import { Form, Input, Select, SelectItem, Checkbox, Button } from "@heroui/react";

export default function FormComponent() {
  const [password, setPassword] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState<Record<string, any> | null>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationBehavior="native"
      validationErrors={errors}
      onSubmit={(data) => {
        setSubmitted(data);
        console.log("Form Data:", data);
      }}
      onReset={() => setSubmitted(null)}
    >
      <div className="flex flex-col gap-3 max-w-md">
        <Input
            className="border-1 "
            isRequired
            label="Name"
            labelPlacement="outside"
            name="name"
            />


        <Input
        className="border-1 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) return "Please enter your email";
            if (validationDetails.typeMismatch) return "Please enter a valid email address";
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          type="email"
        />

        <Input
        className="border-1 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        
          isRequired
          errorMessage={errors.password}
          label="Password"
          labelPlacement="outside"
          name="password"
          
          type="password"
          value={password}
          onValueChange={(value) => setPassword(value ?? "")}
        />

        <Select isRequired label="Country" labelPlacement="outside" name="country" placeholder="Select country">
          <SelectItem key="ar" value="ar">
            Argentina
          </SelectItem>
          <SelectItem key="us" value="us">
            United States
          </SelectItem>
          <SelectItem key="ca" value="ca">
            Canada
          </SelectItem>
          <SelectItem key="uk" value="uk">
            United Kingdom
          </SelectItem>
          <SelectItem key="au" value="au">
            Australia
          </SelectItem>
        </Select>

        <Checkbox
          isRequired
          classNames={{ label: "text-small" }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}
