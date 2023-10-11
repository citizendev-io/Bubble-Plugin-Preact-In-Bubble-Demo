import {
  BubblePreactComponent,
  registerComponent,
} from "@citizendev/bubble-preact-base";
import * as React from "preact/compat";
import { useState } from "preact/compat";
import "vite/modulepreload-polyfill";

// Fill in the shapes of the Bubble element fields here
type DemoFields = {
  name: string;
};

// Fill in the shapes of the Bubble element states here
type DemoStates = {};

// Events should be a union type of strings, for example: "event1" | "event2"
type DemoEvents = never;

const DemoElement: BubblePreactComponent<
  DemoFields,
  DemoStates,
  DemoEvents
> = ({ instance, bubbleContext, properties }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default DemoElement;

registerComponent(DemoElement, "mentions-input");
