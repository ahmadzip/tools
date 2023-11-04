import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaFilePdf, FaTiktok } from 'react-icons/fa6';
import { MdPictureAsPdf } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <section className="py-24 flex items-center min-h-screen justify-center">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg text-font font-medium leading-8 text-blue">FREE ONLINE TOOLS</p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">ALL IN ONE WEBSITE</h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, magna at ultricies cursus, risus felis vulputate quam, vitae aliquam libero quam sed nunc. </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="#" className="transform rounded-md bg-button px-5 py-3 font-medium text-white transition-colors hover:translate-y-[-2px] hover:shadow-lg">
              Api Documentation
            </Link>
            {/* <a href="#" className="transform rounded-md border border-border px-5 py-3 font-medium text-font transition-colors hover:translate-y-[-2px] hover:shadow-lg">
              Request a demo
            </a> */}
          </div>
        </div>
      </section>
      <div className="grid grid-cols-4 gap-1 justify-between items-center mx-auto max-w-screen-xl mt-2">
        <Link href="/office/imagepdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaFilePdf className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/socialmedia/tiktok">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaTiktok className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">TIKDOK DOWNLOADER</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/margepdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <MdPictureAsPdf className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">MARGE PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/excelpdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaReact className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/excelpdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaReact className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/excelpdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaReact className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/excelpdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaReact className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/excelpdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaReact className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
        <Link href="/office/excelpdf">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10 text-font">
            <div>
              <FaReact className="w-20 h-20" />
            </div>
            <h3 className="font-bold mt-2 ">IMAGE TO PDF</h3>
            <div className="mt-4 font-light">
              <p> Non irure nulla aliqua qui velit consequat nostrud nisi ad veniam veniam aute non. </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
