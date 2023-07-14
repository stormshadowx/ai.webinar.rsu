const SpeakerSection = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-8 bg-white w-screen md:h-screen h-auto p-[24px]">
            <h1 className="text-4xl md:text-6xl text-center font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Our Expert Guest Speakers</h1>
            <p className="text-center font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent leading-6 mt-4">As we embark on this exciting journey, let's learn more about our expert guest speakers, who will inspire and enlighten us with their transformative insights.</p>

            <div className="flex flex-col md:flex-row pt-16 w-auto">
                <div className="flex-col my-2 md:my mx-0 md:mx-4 justify-center items-start text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 p-8 shadow-lg">
                    <div className="h-[300px] w-full object-contain flex items-center justify-center ">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fpolitical-elections%2F50%2F48-512.png&f=1&nofb=1&ipt=4fde3b611b5251e90b49d10d2e93fef9642679d093a7a94031558b187bb38b77&ipo=images" width={200} height={200} style={{ objectFit: "cover" }} alt="speaker-profile" />
                    </div>
                    <p className="text-4xl">Mr. Voreh Uddom Pang</p>
                    <p className="text-lg">SWE and Founder of e-learning platform</p>
                </div>
                <div className="flex-col my-2 md:my mx-0 md:mx-4 justify-center items-start text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 p-8 shadow-lg">
                    <div className="h-[300px] w-full object-contain flex items-center justify-center ">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fpolitical-elections%2F50%2F48-512.png&f=1&nofb=1&ipt=4fde3b611b5251e90b49d10d2e93fef9642679d093a7a94031558b187bb38b77&ipo=images" width={200} height={200} style={{ objectFit: "cover" }} alt="speaker-profile" />
                    </div>
                    <p className="text-4xl">Mr. Voreh Uddom Pang</p>
                    <p className="text-lg">SWE and Founder of e-learning platform</p>
                </div>
            </div>
        </div>
    )
}
export default SpeakerSection;