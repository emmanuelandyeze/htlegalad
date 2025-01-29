import Image from "next/image";

const logos = [
  "/images/cl1.png",
  "/images/cl2.png",
  "/images/cl3.png",
  "/images/cl4.png",
  "/images/cl5.png",
  "/images/client1.jpg",
  "/images/client2.jpg",
  "/images/client3.jpg",
  "/images/client4.jpg",
 "/images/client5.jpg",
 "/images/client6.jpg",
  "/images/client7.jpg",
  "/images/client8.jpg",
];

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8 p-6 items-center justify-items-center">
      {logos.map((src, index) => (
        <Image key={index} src={src} alt="Company logo" width={120} height={60} className="object-contain" />
      ))}
    </div>
  );
};

export default LogoGrid;
