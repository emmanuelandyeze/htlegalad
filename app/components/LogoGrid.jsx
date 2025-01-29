import Image from "next/image";

const logos = [
  "/images/cl1.png",
  "/images/cl2.png",
  "/images/cl3.png",
  "/images/cl4.png",
  "/images/cl5.png",
  "/images/client1.jpg",
  "/images/emd.png",
  "/images/coachli.png",
  "/images/creditaffairs.png",
  "/images/t7.png",
  "/images/solab.png",
  "/images/designchics.png",
  "/images/igitcredit.png",
  "/images/preshella.png",
  "/images/ojimah.png",
  "/images/unlugar.png",
  "/images/buildgems.png",
  "/images/gabbyshair.png",
];

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6 items-center justify-items-center">
      {logos.map((src, index) => (
        <Image key={index} src={src} alt="Company logo" width={120} height={60} className="object-contain" />
      ))}
    </div>
  );
};

export default LogoGrid;
