import Qr from "@/component/qr";
export default function Home() {
   console.clear();

   return (
      <>
         <h1 className="mb-3 flex items-center text-3xl border-b border-gray-500">
            <i className="bx bx-chevron-right text-blue-500 font-black"></i>
            Qr Code Generator
         </h1>

         <section className="">
            <ul className="max-w-xs w-full py-2 px-3 shadow shadow-current">
               <h2 className="mb-3">Create QR Code</h2>
               <li className="w-full py-2 px-3  my-2 rounded-md  ">
                  <label className="q">
                     url <br />
                     <input
                        type="text"
                        placeholder="https://nurullahnergiz.com/"
                        className="w-full py-1 px-2  border  rounded-md outline-none"
                     />
                  </label>
               </li>
               <li className="w-full py-2 px-3 my-2  rounded-md  ">
                  type
                  <span className="flex items-center gap-3">
                     <label>
                        <input
                           type="radio"
                           name="type"
                           value="svg"
                           className="mr-2"
                        />
                        SVG
                     </label>
                     <label>
                        <input
                           type="radio"
                           name="type"
                           value="base64"
                           className="mr-2"
                        />
                        Base64
                     </label>
                  </span>
               </li>
               <li className="w-full py-2 px-3 bg-white flex flex-row-reverse">
                  <button className="ml-auto px-3 py-2 inline-block bg-blue-500 text-white rounded-md shadow-md ">
                     Generate
                  </button>
               </li>
            </ul>
            <div className="w">
               {/* {qrCodeImage ? <img src={qrCodeImage} alt="QR Code Image" /> : null} */}
               {/* <h2>SVG Format</h2>
            <button onClick={copy} disabled={!qrInput}>
               Copy
            </button> */}
            </div>
         </section>
      </>
   );
}
