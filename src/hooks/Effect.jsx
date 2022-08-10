import React, { useEffect } from "react";
// import somePlugin from "plugin";

export const Effect = () => {
  // useEffect(function initPlugin() {
  //   somePlugin.init();
  //   return () => {
  //     somePlugin.destroy();
  //   };
  // }, []);

  useEffect(() => {
    const handler = () => {};
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return <div></div>;
};
