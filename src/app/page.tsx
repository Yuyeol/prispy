import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background">
      <div className="container flex h-14 items-center justify-between px-4">
        <h1 className="text-lg font-semibold">관심상품</h1>
        <Button variant="ghost" size="icon">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="sr-only">필터</span>
        </Button>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <div className="">
      <Header />
    </div>
  );
}
