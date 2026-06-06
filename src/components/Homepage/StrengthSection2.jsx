import { useState, useEffect } from "react";

const expertiseData = [
  {
    title: "Extensive Network",
    description:
      "Leverage our strong connections with government bodies, authorities, and travel agencies, ensuring smooth operations and fast access to market opportunities.",
    image: "/img/home-extensive-network.jpg",
  },
  {
    title: "Expert Team",
    description:
      "Our highly skilled and experienced professionals provide dedicated attention, handling all aspects of airline representation and management with precision.",
    image: "/img/home-expert-team.jpg",
  },
  {
    title: "Market Insight",
    description:
      "Benefit from our deep understanding of Indonesia's market, enabling airlines to tailor their strategies and capture growth in this dynamic region.",
    image: "/img/home-market-insight.jpg",
  },
  {
    title: "Accountability and Transparency",
    description:
      "We ensures precise and timely sales operations, managing airline passenger sales in Indonesia with full transparency. We guarantee that all sales profits are deposited directly to the airlines promptly, accurately, and without delays.",
    image: "/img/home-accountability.jpg",
  },
];

const ExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress when the activeIndex changes
    setProgress(0);

    // Interval to change the active index every 10 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % expertiseData.length);
    }, 10000);

    // Interval for the progress bar animation (100 ms updates for smoothness)
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 100); // 1% progress every 100ms for 10 seconds

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setProgress(0); // Reset the progress when the user clicks
  };

  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-5 flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-sky-50 py-3 lg:py-5 relative ${activeIndex === index ? "opacity-100" : "opacity-50"}`}
              onClick={() => handleClick(index)}
            >
              <div className="flex gap-10 pb-5 h-fit">
                <p className="text-2xl text-sky-600 pl-3">0{index + 1}</p>
                <div>
                  <h3
                    className={`text-2xl mb-1 ${activeIndex === index ? "text-sky-600" : ""}`}
                  >
                    {item.title}
                  </h3>
                  <p> {item.description}</p>
                </div>
              </div>
              {activeIndex === index && (
                <div className="absolute w-full top-0 h-1 bg-slate-200">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 transition-all ease-linear duration-[100ms]"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="lg:flex-1 max-w-[600px]  h-[320px] lg:h-auto  relative">
          {expertiseData.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 rounded-xl ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
