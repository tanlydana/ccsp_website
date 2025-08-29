"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Ghost } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Features, heroSlides, HeroSlide, Feature } from "@/constant/constant";
import ParticlesHero from "./ParticleBackground";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// ------------------- Props -------------------
interface HeroProps {
  slides?: HeroSlide[];
  features?: Feature[];
}

// ------------------- Component -------------------
const Hero: React.FC<HeroProps> = ({
  slides = heroSlides,
  features = Features,
}) => {
  return (
    <div className="container min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-8 my-32 md:my-28 lg:my-0">
      <ParticlesHero/>
      {/* Left Content */}
      <div className="space-y-8 mt-12 lg:mt-0">
        <div className="text-header">
          <Typewriter
            options={{
              strings: ["Empowering Students", "Building Future Leaders", "Community Impact"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>

        <p className="subtext">
          We equip rural students with essential skills and confidence through
          comprehensive programs in STEM, technology, English, and critical thinking.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature: Feature, idx: number) => (
            <div key={idx} className="card flex flex-col items-center p-4">
              <feature.icon className={`w-8 h-8 ${feature.color} mb-2`} />
              <span className="text-sm font-medium text-shadow-amber-50 text-center">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <Link href="/us">
          <Button variant="ghost" className="bg-[#B22234]/60 w-40 h-full  p-4 rounded-full text-base">
            Learn more <ChevronRightIcon />
          </Button>
        </Link>
      </div>

      {/* Right Content (Swiper) */}
      <div className="relative w-full lg:mt-0 md:px-8 lg:px-0 px-0">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-white",
            bulletClass: "swiper-pagination-bullet !bg-slate-300",
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          className="w-full h-[350px] rounded-2xl shadow-2xl relative z-10 overflow-hidden"
        >
          {slides.map((slide: HeroSlide, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[350px]">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm opacity-90">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Hero;
