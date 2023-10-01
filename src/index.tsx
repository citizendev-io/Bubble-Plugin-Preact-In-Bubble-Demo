import "vite/modulepreload-polyfill";
import register from "preact-custom-element";
import Input from "./Input";
const MentionInput = (props) => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default MentionInput;

if (!customElements.get("mentions-input")) {
  register(MentionInput, "mentions-input", [
    "properties",
    "instance",
    "bubbleContext",
  ]);
}
