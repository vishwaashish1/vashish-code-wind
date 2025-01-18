import DemoComponent from "@/components/DemoComponent";
import Layout from "@/components/Layout";
import React from "react";

const inputs: string[] = ["input-03", "input-04", "input-05", "input-06"];

const Inputs = () => {
  return (
    <Layout>
      <h1 className="mb-6 text-center text-3xl font-bold">Input example</h1>
      <p className="mx-auto max-w-2xl text-center text-muted-foreground">
        {" "}
        Examples demonstrating its flexibility, including integration with
        related components like Label and FormGroup for accessibility and
        structured layouts.
      </p>
      <div className="preview-code mt-12 grid grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-10  [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
        {inputs.map((componentName) => {
          return (
            <div key={componentName} className="group/item relative">
              <DemoComponent
                key={componentName}
                directory={"inputs"}
                componentName={componentName}
                className="flex w-full items-center justify-center"
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Inputs;
