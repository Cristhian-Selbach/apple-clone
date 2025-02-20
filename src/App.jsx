import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <button
      onClick={() => {
        notExists();
      }}
    >
      Break the world
    </button>
  );
  return (
    <>
      <main className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
        <Highlights></Highlights>
        <Model></Model>
      </main>
    </>
  );
};

export default Sentry.withProfiler(App);
