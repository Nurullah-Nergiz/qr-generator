export default function Footer() {
   return (
      <footer className="flex justify-between items-center gap-4">
         <p className="">&copy; 2024 Nurullah Nergiz. All rights reserved.</p>
         <div className="flex items-center justify-end">
            <a
               href="mailto:nurullah@nergiz.me"
               className="bx bx-envelope px-3 py-2 hover:text-primary"></a>
            <a
               href="https://www.linkedin.com/in/nurullah-nergiz/"
               target="_blank"
               className="bx bxl-linkedin px-3 py-2 hover:text-primary"></a>
            <a
               href="https://github.com/Nurullah-Nergiz/"
               target="_blank"
               className="bx bxl-github px-3 py-2 hover:text-primary"></a>
            <a
               href="https://github.com/Nurullah-Nergiz/"
               target="_blank"
               className="bx bxl-medium px-3 py-2 hover:text-primary"></a>
            <a
               href="https://twitter.com/nurullahNergiz_"
               target="_blank"
               className="bx bxl-twitter px-3 py-2 hover:text-primary"></a>
            <a
               href="https://www.instagram.com/nurullahnergiz_/"
               target="_blank"
               className="bx bxl-instagram px-3 py-2 hover:text-primary"></a>
         </div>
      </footer>
   );
}
