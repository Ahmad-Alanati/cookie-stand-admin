import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer";

export default function Home() {
  // State to store the cookie stand data
  const [cookie, setCookie] = useState([]);

  // Function to add a new cookie stand
  const submitHandler = (event) => {
    event.preventDefault();

    // Create a new cookie stand object
    const newCookie = {
      id: Math.random().toString(36).substring(7), // Generate a unique ID
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    // Update the cookie stands state with the new cookie stand
    setCookie([...cookie, newCookie]);

    // Reset the form fields
    event.target.reset();
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main handler={submitHandler} cookie={cookie}/>
      <Footer />
    </>
  );
}
