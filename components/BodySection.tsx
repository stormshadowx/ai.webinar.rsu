import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
const BodySection = () => {
    const handleType = (count: number) => { }
    const handleDone = () => { }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-fuchsia-600 to-purple-600">
            <h1 className="w-5/6 h-[200px] md:h-[120px] mt-[100px] md:mt-[100px] md:w-4/6 text-5xl md:text-6xl font-thin">
                <Typewriter
                    words={['AIvolution: Journey into the future of work']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
            </h1>
            <p className='w-5/6 md:pt-[24px] pt-0 md:w-4/6 md:text-lg text-xs leading-8 text-white'>Join our upcoming webinar on the transformative power of AI in the future of work. Discover how AI can streamline processes, create new job opportunities, and reshape industries. Our expert speaker will share invaluable insights on leveraging revolutionary AI technology in your work field, providing guidance as we navigate the exciting path toward the future of work.</p>
            <p className='w-5/6 md:pt-[24px] pt-4 md:w-4/6 md:text-lg text-xs leading-8 text-white'>Don't miss this opportunity to gain expert knowledge and explore the potential of AI in shaping your professional landscape and earn our e-certificate. Scan Registration QR code below to secure your spot!.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 pt-4 md:pt-24">
                <div className='flex flex-col items-center py-2 px-4 md:px-8'>
                    <div className="w-[36px] h-[36px] bg-white flex items-center justify-center">
                        <img src="/static/calendar.png" />
                    </div>
                    <div className="py-2 text-xs text-center">August 3rd, 2023</div>
                </div>
                <div className='flex flex-col items-center py-2 px-4 md:px-8'>
                    <div className="w-[36px] h-[36px] bg-white flex items-center justify-center">
                        <img src="/static/calendar.png" />
                    </div>
                    <div className="py-2 text-xs text-center">Starting from 3pm</div>
                </div>
                <div className='flex flex-col items-center py-2 px-4 md:px-8'>
                    <div className="w-[36px] h-[36px] bg-white flex items-center justify-center">
                        <img src="/static/calendar.png" />
                    </div>
                    <div className="py-2 text-xs text-center">Zoom Meeting</div>
                </div>
                <div className='flex flex-col items-center py-2 px-4 md:px-8'>
                    <div className="w-[36px] h-[36px] bg-white flex items-center justify-center">
                        <img src="/static/calendar.png" />
                    </div>
                    <div className="py-2 text-xs text-center">Students of RIC ICT</div>
                </div>
            </div>
        </div>
    )
}
export default BodySection;