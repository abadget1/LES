import Link from "next/link"
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-header mobile-header-4 d-block d-lg-none homepagesmall">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/images/logo/logo7.png" alt="" /></Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logoicons-area">
                    <div className="logos">
                        <img src="/assets/images/logo/logo7.png" alt="" />
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li className="has-sub hash-has-sub">
                            <Link href="/" className="font-ks font-18 weight-600 color">Home</Link>
                        </li>
                        <li className="has-sub hash-has-sub">
                            <Link href="/about" className="font-ks font-18 weight-600 color">About</Link>
                        </li>
                        <li className="has-sub hash-has-sub">
                            <Link href="/services" className="font-ks font-18 weight-600 color">Services</Link>
                        </li>
                        <li className="has-sub hash-has-sub">
                            <Link href="/contact" className="font-ks font-18 weight-600 color">Contact Us</Link>
                        </li>

                    </ul>
                    <div className="allmobilesection">
                        <Link href="/contact" className="font-ks font-18 lineh-18 weight-700 color mobilemenubtn">Get Started</Link>
                        <div className="single-footer single-footer-menu single-footer4">
                            <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Contact Info</h3>
                            <div className="footer4-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <img src="/assets/images/icons/phone5.svg" alt="" />
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="/tel:(770)-883-3721" className="font-ks font-16 lineh-26 weight-500 color-21">(770)-883-3721</Link>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <img src="/assets/images/icons/email4.svg" alt="" />
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="/mailto:info@lanoisescrowservice.com" className="font-ks font-16 lineh-26 weight-500 color-21">info@lanoisescrowservice.com</Link>
                                    </div>
                                </div>
                                <div className="single-footer single-footer-menu single-footer4">
                                    <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Our Location</h3>
                                    <div className="contact-info-single">
                                        <div className="contact-info-icon">
                                            <img src="/assets/images/icons/location2.png" alt="" />
                                        </div>
                                        <div className="contact-info-text">
                                            <Link href="/mailto:info@lanoisescrowservice.com" className="font-ks font-16 lineh-26 weight-500 color-21">
                                            3255 Lawrenceville Suwanee Road<br /> Suite P, PMB 1040 <br/>Suwanee, GA 30024-6599</Link>
                                        </div>
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
