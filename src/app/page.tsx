import Qr from "./component/qr";
export default function Home() {
   return (
      <div className="h-full flex flex-col justify-center items-center gap-4">
         <h1 className="text-3xl">Qr Code Generator</h1>
         <Qr />
      </div>
   );
}
