import React, { useState, useEffect } from "react";

const ImageCarousel = ({ slides, autoPlay = true, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-full overflow-hidden shadow-2xl flex items-center justify-center">
            {slides.map((slide, index) => (
                <div
                    key={`bg-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(20px)",
                        transform: "scale(1.1)",
                        zIndex: 0,
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-black/40 z-10" />

            <div className="relative z-20 w-full container mx-auto h-full flex items-center justify-center p-8">
                {slides.map((slide, index) => (
                    <div
                        key={`content-${index}`}
                        className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        {/* Slide Image */}
                        <div className="w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Slide Text */}
                        <div className="w-full md:w-1/2 text-white flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 drop-shadow">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handlePrev}
                className="absolute left-4 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none"
                aria-label="Previous Slide"
            >
                ❮
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none"
                aria-label="Next Slide"
            >
                ❯
            </button>

            <div className="absolute bottom-4 z-30 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={`dot-${index}`}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;