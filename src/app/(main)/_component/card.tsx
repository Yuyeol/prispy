import ResponsiveImage from "@/components/responsive-image";

interface IProps {
  brandName: string;
  productName: string;
  startPrice: number;
  currentPrice: number;
}

export default function Card({
  brandName,
  productName,
  startPrice,
  currentPrice,
}: IProps) {
  return (
    <div className="flex w-full p-4">
      <ResponsiveImage
        src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
        alt="product thumbnail"
        objectFit="cover"
        aspectRatio={1}
        className="rounded-lg w-24"
      />
      <div className="ml-4">
        <div className="text-sm text-gray-500">{brandName}</div>
        <div className="mb-2">{productName}</div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm text-gray-400 line-through">
            {startPrice}원
          </span>
        </div>
        <div className="flex items-center gap-1">
          {currentPrice}원
          <span
            className={`px-1 rounded-full border text-xs bg-white ${
              currentPrice > startPrice
                ? "text-red-400 border-red-400"
                : "text-blue-400 border-blue-400"
            }`}
          >
            {currentPrice > startPrice
              ? `▲ ${((currentPrice - startPrice) / startPrice) * 100}%`
              : `▼ ${((startPrice - currentPrice) / startPrice) * 100}%`}
          </span>
        </div>
      </div>
    </div>
  );
}
