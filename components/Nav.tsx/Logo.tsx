import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 lg:gap-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="h-10 w-auto object-cover lg:h-12"
      />

      <p className="text-white font-semibold text-xl lg:text-3xl">Axies</p>
    </div>
  );
}
