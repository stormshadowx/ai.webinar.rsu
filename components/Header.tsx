import Link from "next/link";
import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion";

const Header = () => {
    const targetDate: Date = new Date('2023-08-03T23:59:59');
    const calculateTimeDifference = (): number => {
        const currentDate: Date = new Date();
        return targetDate.getTime() - currentDate.getTime();
    };
    const [timeLeft, setTimeLeft] = useState<number>(calculateTimeDifference());

    useEffect(() => {
        const countdownInterval: NodeJS.Timeout = setInterval(() => {
            const timeDifference: number = calculateTimeDifference();

            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                return;
            }

            setTimeLeft(timeDifference);
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, []);

    const formatTime = (time: number): string => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    const days: number = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const { scrollYProgress } = useScroll();

    return (
        <div className="flex justify-between items-center w-full h-24 p-[24px] fixed bg-white text-black shadow-md">
            <Link href="/">
                <div className="w-[100px] h-[48px]">
                    <img src="/static/logo.png" alt="logo" />
                </div>
            </Link>
            <div className="flex items-center justify-center">
                <div className="px-4 md:text-lg text-xs font-thin bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                    {days} days, {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
                </div>
                <div className="w-[100px] h-[44px] flex justify-center items-center cursor-pointer text-white bg-gradient-to-r from-fuchsia-600 to-purple-600">
                    <p>Register</p>
                </div>
            </div>
        </div>
    )
}
export default Header;