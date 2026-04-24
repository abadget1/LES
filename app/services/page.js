
import Layout from "@/components/layout/Layout"
import Cta10 from "@/components/sections/Cta10"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={10} footerStyle={6} breadcrumbTitle="Our Services">
                <div>
                    <div className="servicev1-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 m-auto">
                                    <div className="servicev1-textarea margin-b60 text-center">
                                        <h3 className="font-16 font-lora weight-600 color-29 lineh-32">
                                            We make it easy for non-U.S. investors to access funds from U.S. tax refunds. For a flat, transparent fee, we receive your tax refunds and wire the proceeds to your designated bank account. Our streamlined service removes the need for a U.S. bank account and reduces high bank fees and delays. Fast, secure, and hassle-free—so you can access your money with confidence.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">U.S. Tax Refund Check Processing</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1 img">
                                                    <img src="/assets/images/sectionimg/services-img.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Check Receiving & Secure Deposit</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/services-img2.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">International Wire Transfers</h1>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Funds are wired directly to your designated international bank account after clearance.</p>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/services-img3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Secure Fund Handling</h1>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Professional management of funds with security and compliance measures throughout the transaction.</p>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/services-img4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Cross-Border Payment Facilitation</h1>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Simplified financial transactions between the United States and international banking systems.</p>
                                                    <br/>
                                                    </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/services-img5.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/*===== SERVCEV2 END=======*/}
                </div>

            </Layout>
        </>
    )
}