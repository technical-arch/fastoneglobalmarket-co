import { useEffect } from "react";

const WheelSpin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-30e80f2c-09c7-4ba7-a9bf-026c05025341" data-elfsight-app-lazy></div>
  );
};

export default WheelSpin;