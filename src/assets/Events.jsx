import React from "react";
//import location from "../assets/svg/location.svg";
const events = [
    {
        name: "Auto Expo",
        status: "yellowm",
        desc: "See the rarest of the rarest. The luxury car collection of the state is displayed for you to enjoy.",
        location: "Osama Ground",
        time: "09:00",
    },
    {
        name: "Music Mania",
        status: "yellowm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "11:00",
    },
    {
        name: "Auto Expo",
        status: "greenm",
        desc: "See the rarest of the rarest. The luxury car collection of the state is displayed for you to enjoy.",
        location: "Osama Ground",
        time: "12:30",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "13:00",
    },
    {
        name: "Auto Expo",
        status: "redm",
        desc: "See the rarest of the rarest. The luxury car collection of the state is displayed for you to enjoy.",
        location: "Osama Ground",
        time: "15:00",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "17:30",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "19:30",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "21:30",
    },
];

const Events = () => {
    return (
        <div className="h-2/3 overflow-y-scroll scrollbar">
            {events.map((value, i) => (
                <div className="w-full flex gap-4 h-28">
                    <div className="flex items-start w-spx">
                        <h1 key={i} className="text-white font-bold font-grifter">
                            {value.time}
                        </h1>
                    </div>
                    <div className="flex flex-col h-28 justify-center items-center">
                        <div className={`w-3 h-3 bg-${value.status} rounded-xl`}></div>
                        <div className={`w-1 h-28 bg-${value.status}`}></div>
                    </div>
                    <div className="w-full">
                        <h1 className="text-white font-grifter font-bold text-xl">
                            {value.name}
                        </h1>
                        <h1 className="text-white font-pt-mono text-md">{value.desc}</h1>
                        <div className="flex gap-1">
                            <img className="w-4 h-4" src={location} alt="" />
                            <h1 className="text-bluem font-mont font-bold text-[12px]">
                                {value.location}
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Events;