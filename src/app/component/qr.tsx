"use client";

import QRCode from "qrcode";
import { useState, useEffect } from "react";

export default function Qr() {
   const [qrInput, setQrInput] = useState(" ");
   const [qrCodeText, setQrCodeText] = useState("");
   const [qrCodeImage, setQrCodeImage] = useState("");

   // useEffect(() => {
   //    QRCode.toDataURL(qrInput ?? " ").then((url: string) => {
   //       setQrCodeImage(url);
   //    });

   //    QRCode.toString(qrInput ?? " ").then((url: string) => {
   //       setQrCodeText(url);
   //    });
   // }, [qrInput]);

   const copy = async () => {
      await navigator.clipboard.writeText(qrCodeText);
      setQrInput(" ");
   };

   return <></>;
}
