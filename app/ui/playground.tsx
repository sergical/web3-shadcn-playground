import { ComboboxDemo } from "./combobox-demo";
import { SwitchDemo } from "./switch-demo";

export default function Playground() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Playground</h1>
      <div className="flex flex-col gap-10 mt-5">
        <ComboboxDemo />
        <SwitchDemo />
      </div>
    </>
  );
}
