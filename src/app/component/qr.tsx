"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qr() {
   const [qr, setQr] = useState("");

   return (
      <>
         <input
            type="text"
            placeholder="https://nurullahnergiz.com/"
            onChange={(e) => {
               setQr(e.target.value);
            }}
            value={qr}
         />
         <QRCode value={qr} />
      </>
   );
}
