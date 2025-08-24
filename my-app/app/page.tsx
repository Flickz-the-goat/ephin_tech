import Navbar from "@/components/Navbar";
import ExtraInfo from "@/sections/ExtraInfo";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Model from "@/sections/Model";
import Podcast from "@/sections/Podcast";
import Team from "@/sections/Team";

export default function Home() {
    return (
        <main className="text-white relative overflow-hidden">
            <Navbar />
            <Hero/> 
            <ExtraInfo />
            <Model/>
            <Podcast />
            <Team />
            <Footer />
        </main>
    );
}
