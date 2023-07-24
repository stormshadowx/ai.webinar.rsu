import Link from "next/link";
import { useRouter } from "next/router";

const SpeakerSection = () => {

    const speakerList = [
        {
            id: 1,
            paths: "speaker1",
            speakerName: "Mr. Suwannit Chareen",
            position: "Senior Lecturer School of Computing Universiti Utara Malaysia",
            description: "Suwannit Chareen Chit is a Lecturer at the School of Computing, Universiti Utara Malaysia. He received his Masters degree from The University of Queensland in 2004, specializing in Computer Networks. He also holds a Bachelor degree from Universiti utara Malaysia in 2002. Currently, Suwannit is pursuing his Ph.D in Murdoch University, Australia. Suwannit has taught courses at both Undergraduate and Post-Graduate levels. He was also instrumental to setting up the ITU-UUM Centre of Excellence. Suwannit's research interest includes Energy-Efficient Communication Protocols and Wireless Communication Technologies. His current research focusses on energy-efficient mobile devices and Wireless sensor Networks. Suwannit is also passionate about Rural ICT Development.",
            profile: "/static/speaker/speaker1.png"
        },
        {
            id: 2,
            paths: "speaker2",
            speakerName: "Mr. Voreh Uddom Pang",
            position: "SWE and Founder of e-learning platform",
            description: "Mr. Uddom Pang is a 19-year-old Cambodian student pursuing a bachelor's degree in Computer Science in Australia. He embarked on his programming and new technologies content creation journey, starting with tutorials on how to develop tools for downloading YouTube videos using Python programming language. Over time, he gained experience in the programming field through internships and freelancing projects for small businesses. As his experience and audience grew, he launched his own e-learning website, https://www.uddompang.com/, offering beginner and intermediate programming courses. Due to the popularity of OPENAI's ChatGPT, which unfortunately lacked support for Cambodia, he made the decision to develop a similar AI tool himself, specifically for Cambodians in the Khmer language.",
            profile: "/static/speaker/speaker2.png"
        },
    ]
    const { query } = useRouter();

    return (
        <div className="flex flex-col items-center justify-start pt-8 bg-white w-screen md:h-auto h-auto p-[24px]">
            <h1 className="text-4xl md:text-6xl text-center font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Our Expert Guest Speakers</h1>
            <p className="text-center font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent leading-6 mt-4">As we embark on this exciting journey, let's learn more about our expert guest speakers, who will inspire and enlighten us with their transformative insights.</p>

            <div className="flex flex-col md:flex-row pt-12 md:pt-24">
                {
                    speakerList?.map((item, index) => {
                        return (
                            <Link href={`?tab=${item.paths}`} key={index} scroll={false} shallow={true}>
                                <div className={`${query?.tab === item.paths ? "border-[1px] border-white bg-gradient-to-r from-fuchsia-600 to-purple-600" : "border-[1px] border-purple-600 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent"} w-56 my-2 md:my-0 mx-0 md:mx-2 h-16 flex justify-center hover:opacity-[0.6] items-center cursor-pointer `}>{item.speakerName}</div>
                            </Link>
                        )
                    })
                }
            </div>
            {
                speakerList?.map((item, index) => {
                    return (
                        <div className={`${query?.tab === item.paths ? "flex" : "hidden"} flex-col-reverse md:flex-row justify-center mt-24 items-center w-full h-3/4`} key={index}>
                            <div className="w-full md:w-1/2 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                                <p className="text-4xl md:text-6xl font-bold pb-6 text-center leading-10">{item.speakerName}</p>
                                <p className="text-2xl md:text-4xl font-semibold pb-6 text-center leading-10">{item.position}</p>
                                <p className="text-xl md:text-2xl leading-10">{item.description}</p>
                            </div>
                            <div className="w-1/2 h-1/2 flex justify-center items-center ">
                                {/* <div className="w-[400px] h-[300px] flex justify-center items-end bg-gradient-to-r from-fuchsia-600 to-purple-600"> */}
                                <img src={item.profile} width={500} height={500} style={{ objectFit: "cover" }} alt="speaker-profile" />
                                {/* </div> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SpeakerSection;