import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import './style.scss'
import { Button, ImageCarousel, LightRayBg } from '../../Shared/Components';
import { sampleSlides, serviceData } from './constant';

gsap.registerPlugin(SplitText);

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

      <section id='about_wrapper' ref={aboutRef} className='h-screen flex items-center justify-center bg-linear-to-r from-[#efdecd] to-[#C4A484]'>
        <ImageCarousel slides={sampleSlides} autoPlay={true} interval={4000} />
      </section>

      <section id='portfolio_wrapper' className='bg-linear-to-r from-[#efdecd] to-[#C4A484]'></section>

      <section id='service_wrapper' className='min-h-screen py-24 bg-neutral-900 text-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-primary-500 text-sm tracking-widest uppercase mb-2'>Our Expertise</h2>
            <p className='text-4xl md:text-5xl font-bold'>Signature Services</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {serviceData.map((service, index) => (
              <div key={index} className='relative h-[450px] overflow-hidden rounded-xl group cursor-pointer'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300' />

                <div className='absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end transition-transform duration-300'>
                  <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
                  <p className='text-gray-300 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden'>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage