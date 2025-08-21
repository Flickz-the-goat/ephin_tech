export default function ModelCard({
  video_src,
  title,
  desc,
}: {
  video_src: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-4 md:p-6 bg-[#1e1e1e] rounded-lg shadow-sm text-[#fefff8] w-fit h-fit flex flex-col items-center justify-center">
      <div className="max-h-[360px] max-w-[852px] md:min-w-[852px] overflow-hidden mb-4">
        <video
          src={video_src}
          autoPlay
          loop
          muted
            playsInline
          className="object-cover w-full h-full"
        ></video>
      </div>
      <div className="space-y-2 md:space-y-4">
        <h1 className="font-bold text-2xl md:text-4xl text-center">{title}</h1>
        <p className="italic font-light text-sm md:text-lg text-center">
          {desc}
        </p>
      </div>
    </div>
  );
}
