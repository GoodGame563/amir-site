gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.main-body-full-size',
        content: '.main-body-content-full-size',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })
    gsap.fromTo('.hero-section-2', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section-2',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    // Изменено значение start для hero-section-3 на 'top center'
	gsap.fromTo('.hero-section-3', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section-3',
            start: 'top -150%',  // Начало исчезновения
            end: '2250',        // Конец исчезновения
            scrub: true
        }
    })
    gsap.fromTo('.hero-section-4', 
        { opacity: 1 }, 
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section-4',
            start: 'top -450%',  // Начало исчезновения, когда верх элемента дойдет до середины экрана
            end: '6000',        // Конец исчезновения через 1000 пикселей после начала
            scrub: true,
          }
        })
    // Замедляем исчезновение изображений слева и справа
    const leftAndRightFadeEnd = '1000';  // Увеличенное значение для медленного исчезновения

    gsap.fromTo('.left4', { opacity: 0 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.left4',
            start: 'center',
            end: leftAndRightFadeEnd,
            scrub: true
        }
    })
    gsap.fromTo('.left1', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.left1',
            start: 'center',
            end: leftAndRightFadeEnd,
            scrub: true
        }
    })
    
    gsap.fromTo('.left2', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.left2',
            start: 'center',
            end: '1000',
            scrub: true
        }
    })

    gsap.fromTo('.left3', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.left3',
            start: 'center',
            end: '1000',
            scrub: true
        }
    })

    gsap.fromTo('.right4', { opacity: 0 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.right4',
            start: 'center',
            end: leftAndRightFadeEnd,
            scrub: true
        }
    })
    gsap.fromTo('.right1', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.right1',
            start: 'center',
            end: leftAndRightFadeEnd,
            scrub: true
        }
    })
    gsap.fromTo('.right2', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.right2',
            start: 'center',
            end: '950',
            scrub: true
        }
    })

    gsap.fromTo('.right3', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.right3',
            start: 'center',
            end: '1000',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: -50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        });
    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-100',
                scrub: true
            }
        });
    });

}
