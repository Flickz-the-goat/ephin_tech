import Image from "next/image";

export default function TeamCard({
    name,
    position,
    description,
    img_url,
}: {
    name: string;
    position: string;
    description: string;
    img_url: string;
}) {
    return (
        <div className="space-y-2 mt-6 max-w-[350px]">
            <div className="mx-auto border border-[#fefff8] mb-4 w-[250px] h-[250px] relative rounded-full p-2 object-contain overflow-hidden">
                <Image src={img_url} alt="team-member" fill />
            </div>
            <h2 className="font-bold text-2xl">
                {name} /{" "}
                <span className="text-md md:text-lg font-medium">{position}</span>
            </h2>
            <p className="italic font-light text-md md:text-lg">{description}</p>
        </div>
    );
}
