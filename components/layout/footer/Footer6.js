import Link from "next/link"

export default function Footer6() {
    return (
        <>
            <div className="footer3-section-area6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer4-all-area footer6 section-padding15">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="footer-3logo">
                                            <img src="/assets/images/logo/logo9.png" alt="" />
                                            <p className="font-nunito font-16 lineh-26 color-nuni margin-t margin-b24">At Lanois Escrow Service, our mission is to deliver trust, security, and peace of mind in every transaction. We are dedicated to providing investors with a seamless, and reliable solution for managing their U.S. tax refunds—because your confidence is our highest priority.</p>
                                        </div>
                                        {/* <div className="social3-links-area list5area">
                                            <ul>
                                                <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Quick Links</h1>
                                            <ul>
                                                <li><Link href="/about" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">About
                                                    Us</Link></li>
                                                <li><Link href="/services" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">
                                                    Services</Link></li>
                                                <li><Link href="/contact" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Legal</h1>
                                            <ul>
                                                <li><Link href="/#" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">Privacy Policy</Link></li>
                                                <li><Link href="/#" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">Terms & Conditions</Link></li>
                                                <li><Link href="/#" className="font-nunito font-16 lineh-16 color-nuni weight-600 margin-t d-inline-block">FAQ</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contcat4-footer">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Get In Touch
                                            </h1>
                                            <div className="location-icon4 margin-t32">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/email5.png" alt="" />
                                                </div>
                                                <Link href="/mailto:info@lanoisescrowservice.com" className="font-nunito font-16 lineh-24 weight-600 color-nuni">info@lanoisescrowservice.com</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="imgge5">
                                                    <img src="/assets/images/icons/location4.svg" alt="" />
                                                </div>
                                                <Link href="#" className="font-nunito font-16 lineh-24 weight-600 color-nuni">
                                                3255 Lawrenceville Suwanee Rd <br /> Suite P, PMB 1040 <br /> Suwanee, GA 30024</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/phone7.svg" alt="" />
                                                </div>
                                                <Link href="/tel:770-883-3721" className="font-nunito font-16 lineh-24 weight-600 color-nuni">770-883-3721</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="border7" />
                            <div className="copyright4 text-center">
                                <p className="font-16 font-nunito color-28 weight-500 ">Copyright {new Date().getFullYear()} © Consalt Finance Consultant,
                                    Designed by Fleexstudio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor41.png" alt="" className="elementor-1" />
                <img src="/assets/images/elementor/elementor42.png" alt="" className="elementors8" />
            </div>

        </>
    )
}
