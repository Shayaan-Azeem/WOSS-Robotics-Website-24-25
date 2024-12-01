// import Link from "next/link";
// import { NavbarItem } from "./NavbarItem";
// import Image from "next/image";
// import { useRouter } from "next/router";

// interface Props {
//   className?: string;
// }

// export const Navbar = (props: Props) => {
//   const navbarItems = [
//     { title: "About", path: "/about" },
//     // { title: "BuildLog", path: "/about" },
//     { title: "History", path: "/history" },
//     { title: "Sponsors", path: "/sponsors" },
//     { title: "Contact Us", path: "/contact" },
//   ];

//   const router = useRouter();
//   const currentPath = router.pathname;

//   return (
//     <>
//       <div
//         className={`${props.className} flex flex-col mt-10 space-y-2 text-gray-300`}
//       >
//         <div className="flex-wrap md:flex justify-center items-center md:pr-0 md:pl-0 pr-10 pl-10 transition delay-50 hover:text-gray-500">
//           <Link href="/" legacyBehavior>
//             <a>
//               <Image
//                 className="md:mr-5 mr-1 md:mb-0 mb-3 logo6070 px-2"
//                 src="/yellowWildcatsLogo.png"
//                 alt="Wildcats Logo"
//                 width="40"
//                 height="40"
//                 priority={true}
//                 quality={1}
//               />
//             </a>
//           </Link>

//           {navbarItems.map(
//             (item: { title: string; path: string }, key: number) => {
//               const isActive = item.path === currentPath;

//               return (
//                 <Link href={item.path} legacyBehavior key={key}>
//                   <a>
//                     <NavbarItem title={item.title} isActive={isActive} />
//                   </a>
//                 </Link>
//               );
//             }
//           )}
//         </div>
//       </div>
//     </>
//   );
// };





// version with hamburger
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  className?: string;
}

export const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const navbarItems = [
    { title: "About", path: "/about" },
    { title: "History", path: "/history" },
    { title: "Sponsors", path: "/sponsors" },
    { title: "Contact Us", path: "/contact" },
  ];

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <nav className={`bg-black text-white ${props.className}`}>
        <div className="flex justify-between items-center px-4 py-2 md:py-4">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a>
              <Image
                className="logo6070"
                src="/yellowWildcatsLogo.png"
                alt="Wildcats Logo"
                width="40"
                height="40"
                priority={true}
                quality={1}
              />
            </a>
          </Link>

          {/* Hamburger Icon */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-4">
            {navbarItems.map(
              (item: { title: string; path: string }, key: number) => {
                const isActive = item.path === currentPath;

                return (
                  <Link href={item.path} legacyBehavior key={key}>
                    <a>
                      <NavbarItem title={item.title} isActive={isActive} />
                    </a>
                  </Link>
                );
              }
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col items-center bg-black text-white md:hidden">
            {navbarItems.map(
              (item: { title: string; path: string }, key: number) => {
                const isActive = item.path === currentPath;

                return (
                  <Link href={item.path} legacyBehavior key={key}>
                    <a
                      className="block py-2 px-4 hover:bg-gray-700 w-full text-center"
                      onClick={() => setIsOpen(false)} // Close menu on click
                    >
                      <NavbarItem title={item.title} isActive={isActive} />
                    </a>
                  </Link>
                );
              }
            )}
          </div>
        )}
      </nav>
    </>
  );
};
