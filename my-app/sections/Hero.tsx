import Button from "@/components/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen min-w-screen bg-[#FEFFF8] text-[#1E1E1E] flex gap-4">
            <div className="flex-2/3 flex flex-col justify-center space-y-8 text-[#1e1e1e] pl-0 md:pl-8">
                <h1 className="font-extrabold text-center md:text-left text-5xl md:text-6xl lg:text-8xl">
                    ENDORPHIN <span className="block">TECHNOLOGIES</span>
                </h1>
                <p className="italic md:text-2xl text-center md:text-left">
                    Technology, Strategy, Velocity
                </p>
                <Link href={"https://app.centerfy.ai/v2/preview/MO4VVS4qKXVh2KNExPa5?notrack=true"} target="_blank" className="flex items-center">
                <Button variant="secondary">Book a call</Button>
                </Link>
            </div>
            <div className="z-0 flex-1/2 hidden md:block min-h-full overflow-hidden">
                <video
                    src={"/videos/hero-video.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="hero-img.png"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
