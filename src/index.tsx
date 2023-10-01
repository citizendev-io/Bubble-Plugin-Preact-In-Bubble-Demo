import "vite/modulepreload-polyfill";
import {
  BubblePreactComponent,
  registerComponent,
  useBubbleState,
} from "@citizendev/bubble-preact-base";

// Fill in the shapes of the Bubble element fields here
type DemoFields = {
  name: string;
};

// Fill in the shapes of the Bubble element states here
type DemoStates = {
  value: string;
  focused: boolean;
};

// Events should be a union type of strings, for example: "event1" | "event2"
type DemoEvents = "changed" | "focused";

const DemoElement: BubblePreactComponent<
  DemoFields,
  DemoStates,
  DemoEvents
> = ({ instance, bubbleContext, properties }) => {
  const [value, setValue] = useBubbleState(instance, "value", "");
  const [focused, setFocused] = useBubbleState(instance, "focused", false);

  const handleChange = (event: React.TargetedEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    setValue(target.value);
    instance?.triggerEvent?.("changed");
  };

  return (
    <div>
      <div>Hello</div>
      <input
        onChange={handleChange}
        onFocus={() => {
          setFocused(true);
          instance?.triggerEvent("focused");
        }}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default DemoElement;

registerComponent(DemoElement, "mentions-input");
