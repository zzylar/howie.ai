import Link from "next/link";
// This component is for future use of a navigation bar
const Nav = () => {
  return (
    <>
      <header className="fixed top-0 right-0 z-50 flex justify-end px-6 py-4 bg-white w-full">
    <nav>
      <ul className="flex gap-4">
        <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
        <li><Link href="/projects" className="hover:text-gray-600">Projects</Link></li>
        <li><Link href="/experience" className="hover:text-gray-600">Experience</Link></li>
        <li><Link href="/chat" className="hover:text-gray-600">Chat</Link></li>
      </ul>
    </nav>
  </header>
    </>
  );
};

export default Nav;
