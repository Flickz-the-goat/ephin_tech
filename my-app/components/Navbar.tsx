import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center w-full h-fit py-2 px-2 md:px-8 shadow-sm border-b border-black z-50 bg-[#FEFFF8]">
      <div className="relative object-contain w-[54px] h-[54px]">
        <Image
          src={"/nav-logo-black.png"}
          alt="Endorphin Technologies"
          fill
          className="w-auto"
          priority
        />
      </div>

      <div className="text-[#1e1e1e] space-x-4 italic hidden md:block">
        <Link href={"#model"} className="hover:underline">
          The Care Model{" "}
        </Link>
        <Link href={"#podcast"} className="hover:underline">
          The Insight Lab{" "}
        </Link>
        {
          // <Link href={"#"} className="hover:underline">About us </Link>
        }
      </div>

      <Link
        href={
          "https://app.centerfy.ai/v2/preview/MO4VVS4qKXVh2KNExPa5?notrack=true"
        }
        target="_blank"
      >
        {" "}
        <Button variant="primary">Book a call</Button>
      </Link>
    </nav>
  );
}
