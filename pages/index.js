import Head from "next/head";
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/auth"
import useResource from "@/hooks/useResource";
import Main from "@/components/Main";

export default function Home() {
  const { user, login, token } = useAuth() // destructuring 

  const {response,createResource,deleteResource} = useResource()
  function loginformhundeler(event) {
    event.preventDefault();
    const username = event.target.username.value
    const password = event.target.password.value
   login(username, password)
    
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const newCookie = {
      id: response.length + 1,
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minCustomersPerHour.value),
      maximum_customers_per_hour: parseInt(event.target.maxCustomersPerHour.value),
      average_cookies_per_sale: parseFloat(event.target.avgCookiesPerSale.value),
    };
    
    createResource(newCookie)
    
    event.target.reset();
  };
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main user={user} loginformhundeler={loginformhundeler} handeler={submitHandler} cookie={response}  deletData={deleteResource}/>
      </div>
      <Footer cookieStands={response} />

    </>
  );
}


