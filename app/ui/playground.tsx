import { SheetDemo } from "./sheet.demo";
import { ToastDemo } from "./toast-demo";

export default function Playground() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Playground</h1>
      <div className="flex flex-col gap-10 mt-5">
        <div className="w-80 flex gap-4">
          <SheetDemo />
          <ToastDemo />
        </div>
      </div>
    </>
  );
}
