import ModelCard from "@/components/ModelCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function Model() {
  return (
    <SectionWrapper className={" bg-[#FEFFF8] text-[#1E1E1E] "}>
      <div
        id="model"
        className="mx-auto max-w-7xl px-5 space-y-8 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
          The <span className="text-[#86bc25] underline">CARE</span> Model
        </h1>

        <div className="space-y-4">
          <ModelCard
            video_src="/videos/capture-video.mp4"
            poster_src="/capture-image.png"
            title="C - Capture"
            desc="Have a personal AI secretary to answer and book appointments 24/7."
          />
          <ModelCard
            video_src="/videos/automate-video.mp4"
            poster_src="/automate-image.png"
            title="A - Automate"
            desc="Let our AI agents do your boring tasks."
          />
          <ModelCard
            video_src="/videos/retain-video.mp4"
            poster_src="retain-image.png"
            title="R - Retain"
            desc="Personalize recalls and reminders to reduce no‑shows and boost loyalty."
          />
          <ModelCard
            poster_src="elevate-image.png"
            video_src="/videos/elevate-video.mp4"
            title="E - Elevate"
            desc="Turn practice data into insights that improve chair utilization and revenue."
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
