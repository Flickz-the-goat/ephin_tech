import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="min-h-screen min-w-screen bg-[#FEFFF8] text-[#1E1E1E] flex gap-4">
            <div className="flex-2/3 flex flex-col justify-center space-y-8 text-[#1e1e1e] pl-0 md:pl-8">
                <h1 className="font-extrabold text-center md:text-left text-5xl md:text-6xl lg:text-8xl">
                    ENDORPHIN
                    <h1 className="font-extrabold text-center md:text-left text-5xl md:text-6xl lg:text-8xl">
                        TECHNOLOGIES
                    </h1>
                </h1>
                <p className="italic md:text-2xl text-center md:text-left">
                    Technology, Strategy, Velocity
                </p>
                <Button variant="secondary">Book a call</Button>
            </div>
            <div className="z-0 flex-1/2 hidden md:block min-h-full overflow-hidden">
                <video
                    src={"/videos/hero-video.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={"/hero-image.png"}
                    className="w-full h-full object-cover"
                ></video>
            </div>
        </section>
    );
}
