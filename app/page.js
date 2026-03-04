
import Layout from "@/components/layout/Layout"
import About10 from "@/components/sections/About10"
import Client6 from "@/components/sections/Client6"
import Contact5 from "@/components/sections/Contact5"
import Cta10 from "@/components/sections/Cta10"
import Service13 from "@/components/sections/Service13"
import Service14 from "@/components/sections/Service14"
import Welcome6 from "@/components/sections/Welcome6"
export default function Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={10}>
                <Welcome6 />
                <About10 />
                <Service14 />
                <Client6 />
                <Service13 />
                <Contact5 />
                <Cta10 />
            </Layout>
        </>
    )
}