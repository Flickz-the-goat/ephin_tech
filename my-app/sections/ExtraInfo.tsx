export default function ExtraInfo() {
    return (
        <section className="min-w-screen px-5 mt-6 bg-[#FEFFF8] text-[#1E1E1E] ">
            <div className="mx-auto max-w-6xl bg-[#1e1e1e] text-[#FEFFF8] py-4 px-2 md:px-8 flex flex-col lg:flex-row gap-4 lg:text-left text-center">
                <div className="space-y-4 flex-1">
                    <h1 className="text-5xl lg:text-7xl font-extrabold">
                        BUILD
                        <br />
                        WHAT&apos;S
                        <br />
                        NEXT
                    </h1>
                    <p className="italic font-light text-md lg:text-lg">
                        We automate your business, so you can focus on what matters
                    </p>
                </div>

                <div className="h-[300px] overflow-hidden flex-1 border border-[#fefff8] rounded-lg">
                    <video
                        src={"/videos/info-video.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={"/info-image.png"}
                        className="object-contain"
                    ></video>
                </div>
            </div>
        </section>
    );
}
