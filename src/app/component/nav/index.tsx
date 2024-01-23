import Link from "next/link";

export default function Nav() {
   return (
      <nav className="w">
         <Link href="/" className="bx bx-home text-2xl">
            Home
         </Link>
      </nav>
   );
}
