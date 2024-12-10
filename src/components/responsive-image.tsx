import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface IProps {
  src: string;
  alt: string;
  objectFit: string;
  aspectRatio: number;
  className?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  objectFit,
  aspectRatio,
  className,
}: IProps) {
  return (
    <div className={cn("w-full h-fit overflow-hidden", className)}>
      <AspectRatio ratio={aspectRatio}>
        <Image src={src} alt={alt} fill objectFit={objectFit} />
      </AspectRatio>
    </div>
  );
}
