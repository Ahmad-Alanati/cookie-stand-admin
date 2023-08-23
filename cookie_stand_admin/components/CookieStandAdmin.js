import Head from "next/head";
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer";

export default function CookieStandAdmin(props) {
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header/>
            <Main handler={props.handler} cookie={props.cookie}/>
            <Footer cookie={props.cookie}/>
        </>
    )
}