"use client";

import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Cta1 from "@/components/sections/Cta1";
import Cta10 from "@/components/sections/Cta10";
import Cta2 from "@/components/sections/Cta2";
import Cta3 from "@/components/sections/Cta3";
import Cta4 from "@/components/sections/Cta4";
import Cta6 from "@/components/sections/Cta6";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

    const [activeTab, setActiveTab] = useState("experience");

    return (
        <>
            <Layout headerStyle={10} footerStyle={6} breadcrumbTitle="About Us">
                <div>
                    {/*===== VISION STARTS=======*/}
                    <div className="vission-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-top">
                                <div className="col-lg-6">
                                    <div className="vission-textarea">
                                        <h1 className="font-48 lineh-56 font-lora weight-600 color-29 margin-b20">The First Step To Every Solution Is First Escrow</h1>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b24">We understand that every case is unique. That's why we take the time to listen to your concerns and tailor our services to your specific situation, ensuring the best possible outcomes.</p>
                                        <div className="border7 margin-b20" />
                                        
                                        <div className="nav-section-area">
                                            {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link nav-btn1 ${activeTab === "experience" ? "active" : ""}`} onClick={() => setActiveTab("experience")} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                        Background
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link nav-btn1 ${activeTab === "service" ? "active" : ""}`} onClick={() => setActiveTab("service")} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                        My Services
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link nav-btn1 ${activeTab === "why" ? "active" : ""}`} onClick={() => setActiveTab("why")} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                        Why Us?
                                                    </button>
                                                </li>
                                            </ul> */}

                                            {/* TAB CONTENT */}

                                            <div className="tab-content">
                                                {activeTab === "experience" && (
                                                    <div className="tab-pane fade show active">
                                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                            With over 25 years of experience as a Certified Public Accountant and
                                                            a deep specialization in real estate and international taxation, I
                                                            bring unmatched expertise to every client served. Leading real estate
                                                            tax departments for the majority of my career, I have had extensive
                                                            involvement in complex transactions involving purchases, sales,
                                                            mergers, and restructurings. For 17 years, I’ve worked extensively
                                                            with large German funds, building tailored solutions to navigate
                                                            complex U.S. tax requirements and refund processes.
                                                            <br /><br />
                                                            My extensive background includes managing large volumes of tax
                                                            returns and refund checks for non-U.S. investors, ensuring accuracy,
                                                            compliance, and efficiency at scale. This unparalleled experience
                                                            empowers me to deliver the highest level of professional service,
                                                            reliability, and trust.
                                                        </p>

                                                    </div>
                                                )}

                                                {activeTab === "service" && (
                                                    <div className="tab-pane fade show active">

                                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                            We make it easy for non-U.S. investors to access funds from U.S.
                                                            tax refund paper checks. For a flat, transparent fee, we receive
                                                            and securely deposit your checks, then wire the proceeds to your
                                                            designated bank account. Our streamlined service removes the need
                                                            for a U.S. bank account and reduces high bank fees and delays.
                                                        </p>
                                                    </div>
                                                )}

                                            </div>


                                        </div>
                                        <Link href="/contact" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Get Started Now
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vissionimages">
                                        <img src="/assets/images/sectionimg/welcome-about.jpg" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-23 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>

                    {/* CTA SECTION */}
                    {/* <Cta10/> */}
                </div>
            </Layout>
        </>
    );
}