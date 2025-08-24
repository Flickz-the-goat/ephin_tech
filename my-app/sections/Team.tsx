import SectionWrapper from "@/components/SectionWrapper"
import TeamCard from "@/components/TeamCard"

export default function Team(){
    const members = [
        {
            id: 0,
            name: "Akash Maharaj",
            position: "CEO",
            description: "Akash Maharaj, CEO of Endorphin Technologies, is a visionary leader driving innovation in healthcare technology and digital transformation.",
            img_src: "/team1.jpg"
        },
        {
            id: 1,
            name: "Brian Kristin",
            position: "Lead Tech Advisor",
            description: "Brian Kristin, Lead Technology Advisor of Endorphin Technologies, drives cutting-edge innovation in healthcare technology solutions.",
            img_src: "/team2.jpg",
        }
    ]
    return (
    <SectionWrapper className={"text-[#FEFFF8] bg-[#1E1E1E]"}>
        <div className="max-w-7xl mx-auto text-center px-5 space-y-4" id="team">
            <h1 className="text-4xl md:text-5xl font-bold ">Our Team</h1>
            <p className="italic text-md md:text-lg font-light">Our team is founded on strong principles, ready to take your business to the next level</p>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    {
                        members.map((member) => {
                            return (
                            <TeamCard name={member.name} description={member.description} position={member.position} img_url={member.img_src} key={member.id}/>
                            )
                        })
                    }
           </div>
        </div>
    </SectionWrapper>
    )
}
