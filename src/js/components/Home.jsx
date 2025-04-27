import React, { useState, useEffect } from "react";
import SecondsCounter from "../components/SecondsCounter.jsx";

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // limpieza
  }, []);

  return (
    <>
      <SecondsCounter seconds={seconds} />
    </>
  );
};

export default Home;