//root/src/components/HomeBanner.tsx
// HomeBanner.tsx

import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src="/cloud_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav className="absolute top-0 right-0 z-40 pt-4 pr-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="text-2xl font-bold text-white">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="text-2xl font-bold text-white">Projects</Link>
          </li>
          <li>
            <Link href="/experience" className="text-2xl font-bold text-white">Experience</Link>
          </li>
          <li>
            <Link href="/contact" className="text-2xl font-bold text-white">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="custom-shape-divider-bottom-1689790044 absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HomeBanner;
