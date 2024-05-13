import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DynamicPlayground() {
  return (
    <main className="container py-5">
      <div className="flex flex-col gap-2">
        Dynamic + ShadCN 🫶
        <div className="gap-2 flex">
          <Button asChild variant={"outline"}>
            <Link href="/dynamic">Dynamic playground</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/ui">UI playground</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
