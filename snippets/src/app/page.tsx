import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Home </h1>
      <div className="flex items-center justify-between ">
        <h1>Snippet</h1>
        <Link href={"/snippet/new"}>
          <Button className="bg-red-100">New</Button>
        </Link>
      </div>
    </div>
  );
}
