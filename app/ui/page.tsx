import Link from "next/link";
import Playground from "./playground";

export default function UiPlayground() {
  return (
    <main className="container py-5">
      <Link href="/">Home</Link>
      <Playground />
    </main>
  );
}
