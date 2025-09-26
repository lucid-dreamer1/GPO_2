import React from "react";
import loadingVideo from "../assets/videoLogo.mp4"; // percorso del tuo video

const Loading = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 9999,
      overflow: "hidden",
      backgroundColor: "#000", // sfondo nero mentre il video carica
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <video
        src={loadingVideo}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </div>
  );
};

export default Loading;
