import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Filled Input</Label>
        <Input id={id} placeholder="Enter text here" variant="filled" />
      </div>
    </div>
  );
};

const title = "Filled input with label";
const react = `
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
const id = useId()
  return (
    <div className="space-y-1">
        <Label htmlFor={id}>Filled Input</Label>
        <Input id={id} placeholder="Enter text here" variant="filled" />
    </div>
  );
};
`;
export { InputDemo, react, title };

