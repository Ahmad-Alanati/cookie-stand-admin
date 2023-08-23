import { useState } from "react";
import CookieStandAdmin from "@/components/CookieStandAdmin"

export default function Home() {
  const [cookie, setCookie] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const newCookie = {
      id: Math.random().toString(36).substring(7),
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    setCookie([...cookie, newCookie]);

    event.target.reset();
  };

  return (
    <>
      <CookieStandAdmin handler={submitHandler} cookie={cookie}/>
    </>
  );
}
