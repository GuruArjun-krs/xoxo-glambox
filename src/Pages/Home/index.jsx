import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import './style.scss'
import { Button, ImageCarousel } from '../../Shared/Components';

gsap.registerPlugin(SplitText);

const sampleSlides = [
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    title: "Bridal Elegance",
    description: "Flawless, long-lasting makeup looks designed to make your special day truly unforgettable.",
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    title: "Editorial & Avant-Garde",
    description: "Bold colors, high-fashion concepts, and creative artistry for magazine shoots and runway shows.",
  },
  {
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    title: "Red Carpet Glamour",
    description: "Sophisticated contouring, glowing skin, and striking eyes tailored for high-profile events.",
  },
];

const HomePage = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let splitSubtitle = new SplitText(subtitleRef.current, { type: "chars" });
      let splitTitle = new SplitText(titleRef.current, { type: "chars" });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(splitSubtitle.chars, {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
      })
        .from(splitTitle.chars, {
          y: '100%',
          opacity: 0,
          duration: 0.8,
          stagger: 0.03,
        }, "-=0.6")
        .from(btnRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6");
      gsap.from(aboutRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about_wrapper');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id='main_wrapper' className='h-screen main_wrapper__bg'>
        <div className='h-screen flex container mx-auto px-4 items-center'>
          <div className='flex flex-col gap-3'>
            <div className='overflow-hidden'>
              <h1 ref={subtitleRef} className='text-primary-500 style_text_semibold'>Makeup Artist</h1>
            </div>
            <div className='overflow-hidden'>
              <h1 ref={titleRef} className='text-white font-bold text-6xl!'>
                CEBA CHANDRA LEELA
              </h1>
            </div>
            <div ref={btnRef} className='py-2'>
              <Button title='About' size='md' variant='primary' customStyle='w-[200px]' handleClick={scrollToAbout} />
            </div>
          </div>
        </div>
      </section>

      <section id='about_wrapper' ref={aboutRef} className='flex items-center justify-center bg-linear-to-r from-[#efdecd] to-[#C4A484]'>
        <ImageCarousel slides={sampleSlides} autoPlay={true} interval={4000} />
      </section>

      <section id='portfolio_wrapper' className='bg-linear-to-r from-[#efdecd] to-[#C4A484]'></section>
      <section id='service_wrapper' className='bg-linear-to-r from-[#efdecd] to-[#C4A484]'></section>
    </>
  )
}

export default HomePage