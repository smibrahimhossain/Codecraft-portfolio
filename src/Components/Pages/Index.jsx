import React, { useState } from 'react'

import videoBG from './../../assets/artistic-video.mp4'
import titleShape from './../../assets/title-shape.svg'
import hero from './../../assets/hero-image.png'
import heroIcon1 from './../../assets/icon-hero-img-1.svg'
import heroIcon2 from './../../assets/icon-hero-img-2.svg'
import logo1 from './../../assets/client-logo-1.svg'
import logo2 from './../../assets/client-logo-2.svg'
import logo3 from './../../assets/client-logo-3.svg'
import logo4 from './../../assets/client-logo-4.svg'
import logo5 from './../../assets/client-logo-5.svg'
import logo6 from './../../assets/client-logo-6.svg'
import about1 from './../../assets/about-img-1.jpg'
import about2 from './../../assets/about-img-2.jpg'
import aboutCircle from './../../assets/about-more-circle.svg'
import aboutIcon1 from './../../assets/icon-about-agency-1.svg'
import aboutIcon2 from './../../assets/icon-about-agency-2.svg'
import aboutClient from './../../assets/author-image.jpg'
import btnArrow from './../../assets/btn-arrow.svg'
import service1 from './../../assets/service-image-1.jpg'
import service2 from './../../assets/service-image-2.jpg'
import service3 from './../../assets/service-image-3.jpg'
import serviceIcon1 from './../../assets/icon-service-item-1.svg'
import serviceIcon2 from './../../assets/icon-service-item-2.svg'
import serviceIcon3 from './../../assets/icon-service-item-3.svg'
import whatIcon1 from './../../assets/icon-what-we-1.svg'
import whatIcon2 from './../../assets/icon-what-we-2.svg'
import whatIcon3 from './../../assets/icon-what-we-3.svg'
import whatIcon4 from './../../assets/icon-what-we-4.svg'
import expertiseIcon1 from './../../assets/icon-expertise-1.svg'
import expertiseIcon2 from './../../assets/icon-expertise-2.svg'
import expertise from './../../assets/expertise-image.png'
import icon from './../../assets/icon-pricing-1.svg'


import author1 from './../../assets/author-1.jpg'
import author2 from './../../assets/author-2.jpg'
import author3 from './../../assets/author-3.png'



import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

import faqimage1 from './../../assets/our-faqs-image-1.jpg'
import faqimage2 from './../../assets/our-faqs-image-2.jpg'
import needhelp from './../../assets/icon-need-help.svg'






function Index() {

    const [openIndex, setopenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setopenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "what services do freelancers offer?",
            answer: "You can browse freelancer profiles, review their portfolios, and reach out to discusss your project "
        },
        {
            question: "How do I hire a freelancer?",
            answer: "You can browse freelancer profiles, review their portfolios, and reach out to discusss your project "
        },
        {
            question: "what are the payment mathods available?",
            answer: "You can browse freelancer profiles, review their portfolios, and reach out to discusss your project "
        },
        {
            question: "Can I negotiate the price?",
            answer: "You can browse freelancer profiles, review their portfolios, and reach out to discusss your project "
        },
    ]


    return (
        <>
        <h1>Ibrahim</h1>
            {/* Hero BG video  */}
            <div className="video-bg">
                <video muted autoPlay loop playsInline>
                    <source src={videoBG} type="video/mp4" />
                </video>
            </div>
            {/* Hero  */}
            <div className="container">
                <div className="hero position-absolute">
                    <div className="hero-content text-center">
                        <div className="section-title">
                            <h5><img src={titleShape} className='img-fluid me-2' alt="" />Welcome to my freelance Solutions</h5>
                            <h1>Hire Top Professional to <br />Transform Your <span>Ideas into Reality</span></h1>
                        </div>
                        <div className="hero-image mt-5">
                            <img src={hero} className='img-fluid' alt="" />
                            <div className="floting-img">
                                <div className="floting-img-1">
                                    <img src={heroIcon1} className='img-fluid' alt="" />
                                </div>
                                <div className="floting-img-2">
                                    <img src={heroIcon2} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="floting-text">
                                <span>Web Developer</span>
                                <span>Graphics Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* marquee logo  */}
            <div className="hero-marquee position-absolute">
                <marquee behavior="alternate" direction="">
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                </marquee>
            </div>

            {/* About  */}
            <div className="large-section position-relative pt-5  fix">
                <div className="container about-wrapper my-5 py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex about-main-img gap-3">
                                <img src={about1} className='img-fluid rounded' alt="" />
                                <div className="d-flex flex-column gap-4 about-sec-image">
                                    <img src={aboutCircle} className='img-fluid about-small-img1' alt="" />
                                    <img src={about2} className='img-fluid rounded about-small-img2' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h5><img src={titleShape} className='img-fluid me-2' alt="" />Welcome to my Freelance Solutions</h5>
                                    <h1>Driving <span>growth</span> through smarter SEO</h1>
                                </div>
                                <div className="d-flex about-info-text justify-content-between align-items-center py-3" style={{ borderBottom: '1px solid #3d3f3c' }}>
                                    <h6><img src={titleShape} className='img-fluid me-3' alt="" />Client-Centric Approach</h6>
                                    <h6><img src={titleShape} className='img-fluid me-3' alt="" />Seamless Communication</h6>
                                </div>
                                <div className="d-flex about-info-text justify-content-between align-items-center py-5" style={{ borderBottom: '1px solid #3d3f3c' }}>
                                    <div className="d-flex">
                                        <img src={aboutIcon1} className='img-fluid me-3' alt="" />
                                        <h4>Dedicated to Client Success</h4>
                                    </div>
                                    <div className="d-flex">
                                        <img src={aboutIcon2} className='img-fluid me-3' alt="" />
                                        <h4>Affordable Service with Quaility</h4>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-3">
                                    <div className="about-client d-flex gap-3">
                                        <div className="about-client-img">
                                            <img src={aboutClient} className='img-fluid rounded-circle' alt="" />
                                        </div>
                                        <div className="about-client-info">
                                            <h5 className='fw-bold'>Sarah Mitchell</h5>
                                            <h5 className='m-0'>Marketing Director</h5>
                                        </div>
                                    </div>
                                    <div className="btn-1">
                                        <button className="btn">More About</button>
                                        <img src={btnArrow} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* serives */}
                <div className="service section  py-5">
                    <div className="container my-5 py-5">
                        <div className="row section-head py-5">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h5><img src={titleShape} className='img-fluid me-2' alt="" />Services</h5>
                                    <h1>Our Popular <span>Services</span></h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p>Explore my range of in-demand services designed to deliver exceptional results and meet your unique </p>
                                <div className="btn-1">
                                    <button className="btn">See All Services</button>
                                    <img src={btnArrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 pt-5">
                            {/* card-1 */}
                            <div className="col-lg-4">
                                <div className="ser-card h-100">
                                    <div className="section-image">
                                        <img src={service1} className='card-img-top' alt="" />
                                    </div>
                                    <div className="ser-card-body">
                                        <div className="ser-icon mb-3 ">
                                            <img src={serviceIcon1} alt="" />
                                        </div>
                                        <h5 className="sar-card-title">E-commerce Management </h5>
                                        <p className="ser-card-text">Streaming your online store, optimizing and product listings.</p>
                                    </div>
                                    <div className="read-more d-flex align-items-center justify-content-center">
                                        <button type='button'>Read More <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* card-2 */}
                            <div className="col-lg-4">
                                <div className="ser-card h-100">
                                    <div className="section-image">
                                        <img src={service2} className='card-img-top' alt="" />
                                    </div>
                                    <div className="ser-card-body">
                                        <div className="ser-icon mb-3 ">
                                            <img src={serviceIcon2} alt="" />
                                        </div>
                                        <h5 className="sar-card-title">E-commerce Management </h5>
                                        <p className="ser-card-text">Streaming your online store, optimizing and product listings.</p>
                                    </div>
                                    <div className="read-more d-flex align-items-center justify-content-center">
                                        <button type='button'>Read More <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* card-3 */}
                            <div className="col-lg-4">
                                <div className="ser-card h-100">
                                    <div className="section-image">
                                        <img src={service3} className='card-img-top' alt="" />
                                    </div>
                                    <div className="ser-card-body">
                                        <div className="ser-icon mb-3 ">
                                            <img src={serviceIcon3} alt="" />
                                        </div>
                                        <h5 className="sar-card-title">E-commerce Management </h5>
                                        <p className="ser-card-text">Streaming your online store, optimizing and product listings.</p>
                                    </div>
                                    <div className="read-more d-flex align-items-center justify-content-center">
                                        <button type='button'>Read More <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="large-section2 position-relative py-5  ">
                {/* what we do  */}
                <div className="container what-we-do">
                    <div className="row section-head py-5">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h5><img src={titleShape} className='img-fluid me-2' alt="" />What I DO</h5>
                                <h1>Empowering success <span>freelance Solutions</span></h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>Empowering your business with expert freelance solutions tailored to your unique needs From creative and content writing to digital marketing development, we provide high-quality services yhat drive success</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* card 1 */}
                        <div className="col-lg-6 service-wrap">
                            <div className="service-card">
                                <div className="service-icon mb-4">
                                    <img src={whatIcon1} className='img-fluid' alt="" />
                                </div>
                                <h5>Content Creation</h5>
                                <p>crafting comelling, SEO-frindly content that resonates with audience From blogs to website copy,we deliver engaging</p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="col-lg-6">
                            <div className="service-card">
                                <div className="service-icon mb-4">
                                    <img src={whatIcon2} className='img-fluid' alt="" />
                                </div>
                                <h5>Content Creation</h5>
                                <p>crafting comelling, SEO-frindly content that resonates with audience From blogs to website copy,we deliver engaging</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="col-lg-6">
                            <div className="service-card">
                                <div className="service-icon mb-4">
                                    <img src={whatIcon3} className='img-fluid' alt="" />
                                </div>
                                <h5>Content Creation</h5>
                                <p>crafting comelling, SEO-frindly content that resonates with audience From blogs to website copy,we deliver engaging</p>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="col-lg-6">
                            <div className="service-card">
                                <div className="service-icon mb-4">
                                    <img src={whatIcon4} className='img-fluid' alt="" />
                                </div>
                                <h5>Web Designing</h5>
                                <p>crafting comelling, SEO-frindly content that resonates with audience From blogs to website copy,we deliver engaging</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-black text-white position-relative">
                <div className="container">
                    <div className="position-relative overflow-hidden rounded-5 banner-container">
                        <div className="position-relative d-flex flex-column justify-content-center-start h-100 z-2">
                            <div className="section-title banner-title p-5 mb-5">
                                <h3 className='fw-bold mb-2 text-uppercase'>Videos</h3>
                                <h1 className='display-4 fw-normal'>Showing Success through Dynamic
                                    <span className='fw-bold'>Videos</span></h1>
                            </div>
                            <div className="play-btn">
                                <i className="bi bi-play-fill"></i>
                            </div>
                            <div className="position-absolute bottom-0 start-0 end-0 py-4 text-white fw-medium d-flex flex-wrap justify-content-center gap-4 border-top border-white border-opacity-25">
                                <div><i className='bi bi-check-circle-fill mb-2' style={{ color: '#bff747' }}></i>Client Success Stories Action</div>
                                <div><i className='bi bi-check-circle-fill mb-2' style={{ color: '#bff747' }}></i>Transforming Idea Into visual</div>
                                <div><i className='bi bi-check-circle-fill mb-2' style={{ color: '#bff747' }}></i>Creative Freelance Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Expertise */}
            <div className="large-section">
                <div className="container my-5 py-5 Expertise-section">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h5><img src={titleShape} className='img-fluid me-2' alt="" />Our Expertise</h5>
                                <h1>Maximizing Vlaue Through Freelancing <span>Expertise</span></h1>
                            </div>

                            <div className="row mt-4 g-3">
                                <div className="col-md-6">
                                    <div className="expertise-box">
                                        <div className="expertise-icon mb-4">
                                            <img src={expertiseIcon1} />
                                        </div>
                                        <h5 className='fw-bold mb-3'>Quality Assurance</h5>
                                        <p className="mb-0">Freelances are commited and delivering top quality work  </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="expertise-box">
                                        <div className="expertise-icon mb-4">
                                            <img src={expertiseIcon2} />
                                        </div>
                                        <h5 className='fw-bold mb-3'>Scalable Workfource</h5>
                                        <p className="mb-0">Freelances are commited and delivering top quality work  </p>
                                    </div>
                                </div>
                                <div className="btn-1">
                                    <button className='btn'>See all Services</button>
                                    <img src={btnArrow} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-xl-0">
                            <img src={expertise} className='img-fluid' />
                        </div>
                    </div>
                </div>
                {/* pricing  */}
                <section className="py-5 text-white">
                    <div className="container">
                        <div className="row section-head py-5">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h5> <img src={titleShape} alt="" className="img-fluid me-2" />Pricing Plan</h5>
                                    <h1>Flexible <span>pricing</span> plan</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p>our flexible pricing plans are design to meet diverse needs, offering customized solution that fit </p>
                                <div className="btn-1">
                                    <button className='btn'>Contact Me</button>
                                    <img src={btnArrow} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 mt-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card pricing-item text-white bg-dark h-100 rounded-4 border-0 position-relative overflow-hidden">
                                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "var(--seconday-color)", opacity: "0.4", zIndex: "-1" }}></div>
                                        <div className="card-body z-2 p-4 d-flex flex-column justify-content-between">
                                            <div className="pricing-header d-flex align-items-center mb-4">
                                                <div className="icon-box me-4 d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style={{ height: "60", width: "60" }}>
                                                    <img src={icon} alt="icon" className='img-fluid' />
                                                </div>
                                                <div className="pricing-price">
                                                    <h2 className='fw-bold mb-0 '>$29 <sub className='fs-6'>/Per Month</sub></h2>
                                                </div>
                                            </div>
                                            <h4 className="text-white fs-5 fw-bold text-capitalize mb-3">Regular Plan</h4>
                                            <div className="pricing-body bg-black rounded-4 p-4 mb-4">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Hourly and fixed rates
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Dedicated freelancer support
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Expart Consultion Include
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30 }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Flexiable payment plans
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="#" className="btn btn-highlighted w-100">Get Started </a>
                                        </div>
                                    </div>
                                </div>

                                {/* standard Plan  */}
                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card pricing-item text-white bg-dark h-100 rounded-4 border-0 position-relative overflow-hidden">
                                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "var(--seconday-color)", opacity: "0.4", zIndex: "-1" }}></div>
                                        <div className="card-body z-2 p-4 d-flex flex-column justify-content-between">
                                            <div className="pricing-header d-flex align-items-center mb-4">
                                                <div className="icon-box me-4 d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style={{ height: "60", width: "60" }}>
                                                    <img src={icon} alt="icon" className='img-fluid' />
                                                </div>
                                                <div className="pricing-price">
                                                    <h2 className='fw-bold mb-0 '>$39 <sub className='fs-6'>/Per Month</sub></h2>
                                                </div>
                                            </div>
                                            <h4 className="text-white fs-5 fw-bold text-capitalize mb-3">Standard Plan</h4>
                                            <div className="pricing-body bg-black rounded-4 p-4 mb-4">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Hourly and fixed rates
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Dedicated freelancer support
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Expart Consultion Include
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30 }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Flexiable payment plans
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="#" className="btn btn-highlighted w-100">Get Started </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Premium Plan  */}
                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card pricing-item text-white bg-dark h-100 rounded-4 border-0 position-relative overflow-hidden">
                                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "var(--seconday-color)", opacity: "0.4", zIndex: "-1" }}></div>
                                        <div className="card-body z-2 p-4 d-flex flex-column justify-content-between">
                                            <div className="pricing-header d-flex align-items-center mb-4">
                                                <div className="icon-box me-4 d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style={{ height: "60", width: "60" }}>
                                                    <img src={icon} alt="icon" className='img-fluid' />
                                                </div>
                                                <div className="pricing-price">
                                                    <h2 className='fw-bold mb-0 '>$49 <sub className='fs-6'>/Per Month</sub></h2>
                                                </div>
                                            </div>
                                            <h4 className="text-white fs-5 fw-bold text-capitalize mb-3">Premium Plan</h4>
                                            <div className="pricing-body bg-black rounded-4 p-4 mb-4">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Hourly and fixed rates
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Dedicated freelancer support
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30, borderBottom: "1px solid #ffffff1a" }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Expart Consultion Include
                                                    </li>
                                                    <li className="position-relative mb-4 pb-3" style={{ paddingLeft: 30 }}>
                                                        <i className="fa-solid fa-circle-dot position-absolute" style={{ top: 2, left: 0, color: "#bff747" }}></i> Flexiable payment plans
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="#" className="btn btn-highlighted w-100">Get Started </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center text-success mt-5 gap-4 fs-6">
                            <div className="text-white"><i className="bi bi-calendar-check me-2" style={{ color: "#bff747" }}></i>Get 30 days free trail</div>
                            <div className="text-white"><i className="bi bi-cash-coin me-2" style={{ color: "#bff747" }}></i>No any hidden fees pay</div>
                            <div className="text-white"><i className="bi bi-clock me-2" style={{ color: "#bff747" }}></i>You can cancel anytime</div>
                        </div>
                    </div>
                </section>

            </div>
            <div className="large-section test-section position-relative pt-5">
                {/* testimonial */}
                <div className="container py-5 text-white">
                    <div className="d-flex justify-content-between align-center mb-4">
                        <div className="container mb-5">
                            <div className="row section-head py-5">
                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <h5> <img src={titleShape} alt="" className="img-fluid me-2" />Testimonials</h5>
                                        <h1>what our  <span>clients says</span></h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-start justify-content-lg-end  align-items-end">
                                    <div className="btn-1">
                                        <button className='btn'>Contact Me</button>
                                        <img src={btnArrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* swiper slider */}
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2000
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="tst-item rounded-4 p-4 h-100 position-relative">
                                <div className="mb-3 d-flex align-items-center gap-2">
                                    <div style={{ color: '#BFF747' }}>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                    </div>
                                    <span className="fw-semibold">5.0</span>
                                </div>
                                <h5 className="fw-bold">Professinal and Friendly</h5>
                                <p className="text-white-80" style={{ lineHeight: '1.7rem' }}>the team transformed our brand's onlin e presence with crearivity and precision. The results exceeded our experctations! Thier digital marketing strategies helped reach a broader adience and significantly boosted our sales</p>
                                <hr className='test-info-line w-100' />

                                <div className="d-flex align-items-center gap-3">
                                    <img src={author1} className='img-fluid rounded-circle' width='50' height='50' alt="" />
                                    <div >
                                        <h6 className='mb-0 fw-bold text-white fs-4'> Dani Watson</h6>
                                        <h6 className='text-white fs-6'> Managing Director</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tst-item rounded-4 p-4 h-100 position-relative">
                                <div className="mb-3 d-flex align-items-center gap-2">
                                    <div style={{ color: '#BFF747' }}>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                    </div>
                                    <span className="fw-semibold">5.0</span>
                                </div>
                                <h5 className="fw-bold">Professinal and Friendly</h5>
                                <p className="text-white-80" style={{ lineHeight: '1.7rem' }}>the team transformed our brand's onlin e presence with crearivity and precision. The results exceeded our experctations! Thier digital marketing strategies helped reach a broader adience and significantly boosted our sales</p>
                                <hr className='test-info-line w-100' />

                                <div className="d-flex align-items-center gap-3">
                                    <img src={author1} className='img-fluid rounded-circle' width='50' height='50' alt="" />
                                    <div >
                                        <h6 className='mb-0 fw-bold text-white fs-4'> Dani Watson</h6>
                                        <h6 className='text-white fs-6'> Managing Director</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="tst-item rounded-4 p-4 h-100 position-relative">
                                <div className="mb-3 d-flex align-items-center gap-2">
                                    <div style={{ color: '#BFF747' }}>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                        <i className="fa-solid fa-star fs-5 me-2"></i>
                                    </div>
                                    <span className="fw-semibold">5.0</span>
                                </div>
                                <h5 className="fw-bold">Professinal and Friendly</h5>
                                <p className="text-white-80" style={{ lineHeight: '1.7rem' }}>the team transformed our brand's onlin e presence with crearivity and precision. The results exceeded our experctations! Thier digital marketing strategies helped reach a broader adience and significantly boosted our sales</p>
                                <hr className='test-info-line w-100' />

                                <div className="d-flex align-items-center gap-3">
                                    <img src={author1} className='img-fluid rounded-circle' width='50' height='50' alt="" />
                                    <div >
                                        <h6 className='mb-0 fw-bold text-white fs-4'> Dani Watson</h6>
                                        <h6 className='text-white fs-6'> Managing Director</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>

                {/* Faq */}
                <div className="py-5 text-white my-5 position-relative">
                    <div className="container">
                        <div className="row align-items-center justify-content-between w-100">
                            <div className="col-lg-6 mb-lg-0 mb-5 text-start position-relative">
                                <div className="d-inlin-block rounded-4 overflow-hidden shadow mb-3">
                                    <img src={faqimage1} alt="" className='img-fluid rounded-4' />
                                </div>
                                <div className="mt-5 help-box-main ">
                                    <div className="help-box p-4 overflow-hidden position-relative z-1 py-3 rounded-4 fw-bold d-inline-flex align-items-center gap-3 fs-5"
                                        style={{ backgroundColor: '#c5f237', color: '#000', maxWidth: '270px',bottom:'437px' }}
                                    >
                                        <img src={needhelp} alt="" />
                                        need Help? Ask!
                                    </div>
                                </div>
                                <div className="section-image d-inline-block rounded-4 overflow-hidden shadow mt-3 faq-image2 ">
                                    <img src={faqimage2} className='img-fluid rounded-4' alt="" />
                                </div>
                            </div>

                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div className="section-title faq-title mb-5 ">
                                    <h5> <img src={titleShape} alt="" className="img-fluid me-2" />FAQ</h5>
                                    <h1>Get Your <span>Answers</span></h1>
                                </div>

                                <div className="accordion accordion-flush" id='faqAccordion'>
                                    {faqData.map((Item, index) => (
                                        <div className="accordion-item bg-dark text-white border-0 mb-2 rounded" key={index}>
                                            <div className="accordion-header d-flex align-items-center px-2">
                                                <button
                                                    className={`accordion-button faq-btn border-light bg-dark text-white ${openIndex === index ? '' : 'collapsed'}`}
                                                    type='button'
                                                    onClick={() => toggleAccordion(index)}
                                                    style={{ width: '100%' }}
                                                >
                                                    {Item.question}
                                                    <i
                                                        className={`bi ms-auto fs-5 ${openIndex === index ? 'bi-dash-lg' : 'bi-plus-lg'}`}
                                                    ></i>
                                                </button>
                                            </div>
                                            <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                                                <div className="accordion-body">
                                                    {Item.answer}
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Index