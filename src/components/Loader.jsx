import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="">
          <div className="w-24"></div>
          <img src="/assets/Loader.svg" alt="Carregando..." />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
