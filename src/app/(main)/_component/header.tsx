import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-background shadow-md">
      <div className="flex items-center justify-between px-4 py-1">
        <h1 className="text-lg font-semibold">관심상품</h1>
        <Button variant="ghost" size="icon">
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
