"use client";

import QRCode from "qrcode";
import { useState, useMemo } from "react";

export default function Qr() {
   const [qrInput, setQrInput] = useState(" ");
   const [qrCodeText, setQrCodeText] = useState("");
   const [qrCodeImage, setQrCodeImage] = useState("");

   useMemo(() => {
      QRCode.toDataURL(qrInput).then((url: string) => {
         setQrCodeImage(url);
      });

      QRCode.toString(qrInput).then((url: string) => {
         setQrCodeText(url);
      });
   }, [qrInput]);

   return (
      <>
         <input
            type="text"
            placeholder="https://nurullahnergiz.com/"
            onChange={(e) => {
               setQrInput(e.target.value);
            }}
            value={qrInput}
         />

         <img src={qrCodeImage} alt="QR Code Image" />
         <h2>SVG Format</h2>
         <span>{qrCodeText}</span>
      </>
   );
}
