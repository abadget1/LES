
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function About10() {
    return (
        <>

            <div className="about10-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about10-images" data-aos="zoom-out" data-aos-duration={1200}>
                                <img src="/assets/images/sectionimg/aboutauthor1.png" alt="" />
                                <div className="experiance-area" data-aos="fade-left" data-aos-duration={1200}>
                                    <h1 className="font-44 font-lora weight-600 color margin-b10"><CounterUp count={15} />
                                    </h1>
                                    <p className="font-ks lineh-16 font-16 weight-500 color">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about10-textarea" data-aos="fade-right" data-aos-duration={1000}>
                                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">About
                                    Us</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24" data-aos="fade-right" data-aos-duration={1200}>Secure Transactions Start Here</h1>
                                <p className="font-ks lineh-26 weight-500 color-p10 font-16 margin-b30">
                                   We believe every transaction deserves clarity, protection, and confidence. Our escrow services are built around safeguarding both parties from start to finish — ensuring funds, documents, and 
                                   expectations are handled with precision and integrity. You’ll never be uncertain about where your money stands or what the next step is. 
                                   We communicate clearly, operate transparently, and prioritize accountability at every stage.

                                </p>
                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="about10list">
                                            <ul>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16 d-inline-block margin-b">
                                                    <span><i className="fa-solid fa-check" /></span> Trusted Title & Escrow Services</li>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16"><span><i className="fa-solid fa-check" /></span> Secure Digital Escrow Solutions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="about10list">
                                            <ul>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16 d-inline-block margin-b">
                                                    <span><i className="fa-solid fa-check" /></span> Transaction Risk Management</li>
                                                <li className="font-16 font-ks weight-600 color-p3 lineh-16 d-inline-block"><span><i className="fa-solid fa-check" /></span>Compliance & Regulatory Assurance</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="divarea" data-aos="fade-up" data-aos-duration={1200}>
                                        <Link href="/about" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts">Learn
                                            more <span><img src="/assets/images/icons/arrowben.svg" alt="" className="ts" /></span></Link>
                                        <div>
                                            <div className="callicon ts">
                                                <div className="textcall-icon ts">
                                                    <img src="/assets/images/icons/callicon.svg" alt="" className="ts" />
                                                </div>
                                                <div className="textcall ts">
                                                    <p className="font-14 weight-500 color-p10 font-ks margin-b12 ts">Call Us Now
                                                    </p>
                                                    <Link href="/tel:123-456-7860" className="font-16 lineh-16 weight-700 colorhp3 ts">123-456-7860</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
