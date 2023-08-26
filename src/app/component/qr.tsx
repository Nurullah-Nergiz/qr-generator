"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qr() {
   const [qr, setQr] = useState("");

   return (
      <>
         <input
            type="text"
            value={qr}
            onInput={({ target }) => setQr(target.value)}
         />
         <QRCode value={qr} />
      </>
   );
}
