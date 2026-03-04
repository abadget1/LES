
import Link from "next/link"

export default function Client6() {
    return (
        <>

            <div className="client10-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="client10-header text-center margin-b60">
                                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">How It
                                    Works</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24s">The Escrow Process</h1>
                            </div>
                        </div>
                    </div>
                    <div className="worksall-section-area">
                        <img src="/assets/images/elementor/elementor67.png" alt="" className="elementors67" />
                        <div className="row">
                            <div className="col-lg-3" data-aos="zoom-in" data-aos-duration={1000} data-aos-easing="linear">
                                <div className="client10-boxarea text-center">
                                    <div className="client10-icon margin-b20 ts">
                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elemnetors64 keyframe3" />
                                        <div className="service10-icon ts">
                                            <img src="/assets/images/icons/group11.svg" alt="" className="ts" />
                                        </div>
                                        <div className="numbericon ts">
                                            <p className="font-16 lineh-24 font-ks weight-700 color r ts">1</p>
                                        </div>
                                    </div>
                                    <Link href="/servicemiddle" className="font-lora font-20 lineh-20 weight-600 colorhp3 ts d-inline-block margin-b">Agreement Setup</Link>
                                    <p className="font-ks font-16 lineh-26 weight-500 color-p10 ts">
                                        We establish escrow terms based on the signed agreement between all parties, outlining
                                        <br /> payment conditions, timelines, and release requirements.</p>
                                </div>
                            </div>
                            <div className="col-lg-3" data-aos="zoom-out" data-aos-duration={1200} data-aos-easing="linear">
                                <div className="client10-boxarea text-center positionboxarea">
                                    <div className="client10-icon margin-b20 ts">
                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elemnetors64 keyframe3" />
                                        <div className="service10-icon ts">
                                            <img src="/assets/images/icons/group10.svg" alt="" className="ts" />
                                        </div>
                                        <div className="numbericon ts">
                                            <p className="font-16 lineh-24 font-ks weight-700 color r ts">2</p>
                                        </div>
                                    </div>
                                    <Link href="/servicemiddle" className="font-lora font-20 lineh-20 weight-600 colorhp3 ts d-inline-block margin-b">Funds Secured</Link>
                                    <p className="font-ks font-16 lineh-26 weight-500 color-p10 ts">
                                        The buyer deposits funds into a secure escrow account. We verify receipt
                                        <br /> and notify all involved parties.</p>
                                </div>
                            </div>
                            <div className="col-lg-3" data-aos="zoom-in" data-aos-duration={1400} data-aos-easing="linear">
                                <div className="client10-boxarea text-center">
                                    <div className="client10-icon margin-b20 ts">
                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elemnetors64 keyframe3" />
                                        <div className="service10-icon ts">
                                            <img src="/assets/images/icons/group9.svg" alt="" className="ts" />
                                        </div>
                                        <div className="numbericon ts">
                                            <p className="font-16 lineh-24 font-ks weight-700 color r ts">3</p>
                                        </div>
                                    </div>
                                    <Link href="/servicemiddle" className="font-lora font-20 lineh-20 weight-600 colorhp3 ts d-inline-block margin-b">
                                       Conditions Verified</Link>
                                    <p className="font-ks font-16 lineh-26 weight-500 color-p10 ts">
                                        All contractual obligations—such as inspections, documentation, or<br />
                                         delivery milestones—are reviewed and confirmed.</p>
                                </div>
                            </div>
                            <div className="col-lg-3" data-aos="zoom-in" data-aos-duration={1600} data-aos-easing="linear">
                                <div className="client10-boxarea text-center positionboxarea">
                                    <div className="client10-icon margin-b20 ts">
                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elemnetors64 keyframe3" />
                                        <div className="service10-icon ts">
                                            <img src="/assets/images/icons/group8.svg" alt="" className="ts" />
                                        </div>
                                        <div className="numbericon ts">
                                            <p className="font-16 lineh-24 font-ks weight-700 color r ts">4</p>
                                        </div>
                                    </div>
                                    <Link href="/servicemiddle" className="font-lora font-20 lineh-20 weight-600 colorhp3 ts d-inline-block margin-b">
                                    Funds Released</Link>
                                    <p className="font-ks font-16 lineh-26 weight-500 color-p10 ts">
                                        Once all terms are satisfied, funds are securely disbursed to the<br />
                                         appropriate party and the transaction is officially closed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
