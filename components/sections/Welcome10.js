
import Link from "next/link"

export default function Welcome10() {
    return (
        <>

            <div className="welcome10-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header10-textarea" data-aos="zoom-out" data-aos-duration={1000}>
                                <span className="font-ks lineh-16 weight-500 color aboutspan font-16 d-inline-block margin-b24">
                                    Secure Refund Processing for Global Investors
                                </span>
                                <h1 className="font-lora font-48 lineh-54 weight-600 color margin-b24" data-aos="fade-right" data-aos-duration={1000}>Your Trusted Financial Solutions Partner</h1>
                                <p className="font-ks font-16 weight-500 color opacity2 lineh-26">
                                    Welcome to Lanois Escrow Service, where we make receiving your U.S. tax refunds
                                    simple, secure, and stress-free. Tailored to meet the needs of non-U.S. investors, our
                                    trusted service ensures your refunds are delivered seamlessly and without hassle.
                                    </p>    
                                <div className="div" data-aos="fade-up" data-aos-duration={1200}>
                                    <Link href="/contact" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts">
                                        Contact Us<span><img src="/assets/images/icons/arrowben.svg" alt="" className="ts" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-5">
                            <div className="welcome-bgarea" data-aos="zoom-in" data-aos-duration={1000}>
                                <div className="welcome-ellips" data-aos="zoom-out" data-aos-duration={1200}>
                                    <img src="/assets/images/background/homepagewelbg.png" alt="" className="homewelbg keyframe3" />
                                    <div className="elips-icon">
                                        <img src="/assets/images/icons/export4.svg" alt="" />
                                    </div>
                                </div>
                                <div className="welcomeellips-icon">
                                    <div className="ellipsarea1">
                                        <div className="exportellips">
                                            <img src="/assets/images/icons/export5.svg" alt="" />
                                        </div>
                                        <img src="/assets/images/elementor/elementor61.png" alt="" className="elementor60 keyframe3" />
                                    </div>
                                </div>
                                <div className="welcomeellips-icon1">
                                    <div className="ellipsarea2">
                                        <div className="exportellips">
                                            <img src="/assets/images/icons/export6.svg" alt="" />
                                        </div>
                                        <img src="/assets/images/elementor/elementor61.png" alt="" className="elementor60 keyframe3" />
                                    </div>
                                </div>
                                <div className="welcomeellips-icon2">
                                    <div className="ellipsarea3">
                                        <div className="exportellips">
                                            <img src="/assets/images/icons/export7.svg" alt="" />
                                        </div>
                                        <img src="/assets/images/elementor/elementor61.png" alt="" className="elementor60 keyframe3" />
                                    </div>
                                </div>
                                <div className="welcomeellips-icon3">
                                    <div className="ellipsarea4">
                                        <div className="exportellips">
                                            <img src="/assets/images/icons/export8.svg" alt="" />
                                        </div>
                                        <img src="/assets/images/elementor/elementor61.png" alt="" className="elementor60 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
