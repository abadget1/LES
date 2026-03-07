import Link from "next/link"


export default function Header6({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/logo9.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage3 homepage5 homepage6">
                                        <ul>
                                            <li><Link href="/" className="font-nunito font-16 weight-600 color-1">Home</Link>
                                            </li>
                                            <li><Link href="/about" className="font-nunito font-16 weight-600 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="/servicev2" className="font-ks font-16 weight-500 color">Services</Link></li>

                                            <li><Link href="/contact1" className="font-nunito font-16 weight-600 color-1">Contact</Link>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1">
                                             <div className="contact-3 d-lg-block d-none">
                                        <div className="shecdule-btn1">
                                            <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions10">Book an
                                                Appointment <span><img src="/assets/images/icons/arrowben.svg" alt="" /></span></Link>
                                        </div>
                                    </div>
                                            {/* <div className="first-name-input header3">
                                                <select name="country" id="country" className="country-area">
                                                    <option value={1} data-display="Eng" className="font-nunito weight-600">Eng
                                                    </option>
                                                    <option value>Ban</option>
                                                    <option value>Span</option>
                                                    <option value>Hindi</option>
                                                    <option value>Tamil</option>
                                                    <option value>Turkey</option>
                                                </select>
                                            </div> */}
                                            {/* <div className="theme-btn-3">
                                                <img src="/assets/images/icons/phoneheader1.png" alt="" className="imgicon" />
                                                <div className="phonr6-area">
                                                    <p className="font-16 lineh-16 color-h5 weight-400 font-nunito margin-b8">Free
                                                        Consultation</p>
                                                    <Link href="/tel:123-456-7890" className="font-nunito font-18 lineh-18 weight-600 color-h5">123-456-7890</Link>
                                                </div>
                                            </div> */}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
