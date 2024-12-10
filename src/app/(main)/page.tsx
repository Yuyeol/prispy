import Header from "@/app/(main)/_component/header";
import Card from "@/app/(main)/_component/card";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Card
        brandName="브랜드명"
        productName="상품명"
        startPrice={50000}
        currentPrice={50000}
      />
    </div>
  );
}
