"use client";

import QRCode from "qrcode";
import { useState, useMemo, useEffect } from "react";

export default function Qr() {
   const [qrInput, setQrInput] = useState(" ");
   const [qrCodeText, setQrCodeText] = useState("");
   const [qrCodeImage, setQrCodeImage] = useState("");

   useEffect(() => {
      QRCode.toDataURL(qrInput ?? " ").then((url: string) => {
         setQrCodeImage(url);
      });

      QRCode.toString(qrInput ?? " ").then((url: string) => {
         setQrCodeText(url);
      });
   }, [qrInput]);

   const copy = async () => {
      await navigator.clipboard.writeText(qrCodeText);
      setQrInput(" ");
   };

   return (
      <>
         <input
            type="text"
            placeholder="https://nurullahnergiz.com/"
            onChange={(e) => {
               setQrInput(e.target.value);
            }}
            value={qrInput.trim()}
         />
         {qrCodeImage ? <img src={qrCodeImage} alt="QR Code Image" /> : null}
         <h2>SVG Format</h2>
         <button onClick={copy} disabled={!qrInput}>
            Copy
         </button>
      </>
   );
}
