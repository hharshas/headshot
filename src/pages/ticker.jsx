import Ticker from "react-ticker";
import SkullImage from "../assets/bear.webp";
import { Section } from "../App";

export const featuredData = [
    "https://images.pexels.com/photos/8296191/pexels-photo-8296191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://wallpapers.com/images/featured-full/pure-black-background-py9pa0f1mlsscm9s.jpg",
]

export const TickerPage = () => {
  const [firstUrl, secondUrl] = featuredData;
  const tickerTexts = [
    {
      text: "MISFITS REBELS NON-CONFORMISTS MAVERICKS ODDBALLS WEIRDOS",
      speed: 17,
    },
    {
      text: "MISFITS REBELS NON-CONFORMISTS MAVERICKS ODDBALLS WEIRDOS",
      speed: 19,
    },
    {
      text: "MISFITS REBELS NON-CONFORMISTS MAVERICKS ODDBALLS WEIRDOS",
      speed: 16,
    },
    {
      text: "MISFITS REBELS NON-CONFORMISTS MAVERICKS ODDBALLS WEIRDOS",
      speed: 18,
    },
    {
      text: "MISFITS REBELS NON-CONFORMISTS MAVERICKS ODDBALLS WEIRDOS",
      speed: 15,
    },
    {
      text: "MISFITS REBELS NON-CONFORMISTS MAVERICKS ODDBALLS WEIRDOS",
      speed: 18,
    },
  ];
  return (
    <div className="h-screen w-screen relative">
        <img
            src={secondUrl}
            className="absolute h-screen w-screen"
            alt="passion"
        />
        <Section>
            <div className="relative">
              <img
                src={SkullImage}
                className="absolute sm:top-[1vw] top-[55vw] sm:left-[30vw] z-10 sm:w-[43vw] w-[100vw] h-auto"
                alt="skullimage"
                id="skullimage"
              />
              <div className="absolute h-screen w-screen text-yellow-300 otffont font-extrabold sm:text-[45px] text-[20px] transform -rotate-2 ">
                {tickerTexts.map(({ text, speed }, index) => (
                  <div className="moving-text-background">
                    <Ticker offset="run-in" speed={speed}>
                      {({ index }) => <span>{text}</span>}
                    </Ticker>
                  </div>
                ))}
                {tickerTexts.map(({ text, speed }, index) => (
                  <div className="moving-text-background">
                    <Ticker offset="run-in" speed={speed}>
                      {({ index }) => <span>{text}</span>}
                    </Ticker>
                  </div>
                ))}
              </div>
            </div>
        </Section>
    </div>
  );
};
