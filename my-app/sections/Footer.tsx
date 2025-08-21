import Image from "next/image";

export default function Footer(){
    return (
    <section className="bg-[#fefff8] text-[#1e1e1e] flex justify-between items-center md:px-8 px-4">
            <div className="relative w-[54px] h-[54px]">
                <Image fill src={"/nav-logo-black.png"} alt="logo"/>
            </div>
            <div>
                <p className="text-md italic">@Privacy Policy Endorphin Technologies</p>
            </div>
    </section>
    )
}
