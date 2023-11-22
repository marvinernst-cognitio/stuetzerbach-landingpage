import Link from "next/link";
import React from "react";

export default function Nav({
  lang,
  onChangeLang,
}: {
  lang: string;
  onChangeLang: (lang: string) => void;
}) {
  return (
    <nav id='navbar-main' className='fixed top-0 z-50 w-full bg-white'>
      <div className='lg:pl:0container mx-auto flex flex-row items-center py-3 pl-8'>
        <div className='flex flex-row items-center'>
          <Link href='/'>
            <a className='navbar-brand'>
              <img src='images/logo.jpg' alt='' className='w-[240px]' />
            </a>
          </Link>
          <a
            href='http://www.deutschland-nederland.eu/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='ml-10 h-16 flex-1 object-contain'
              src='/icon/141023-Foerderhinweis_ohneWebsite.png'
              alt=''
            />
          </a>
        </div>
        <ul className='ml-auto flex flex-row items-center justify-center'>
          <li className='hidden h-16 items-center px-6 text-[#4d4d4d] hover:bg-main hover:text-white lg:flex '>
            <Link
              className='flex h-full items-center justify-center leading-none'
              href='/#funktionen'
            >
              Funktionen
            </Link>
          </li>
          <li className='hidden h-16 items-center px-6 text-[#4d4d4d] hover:bg-main hover:text-white lg:flex '>
            <a
              className=' flex h-full items-center justify-center leading-none'
              href='#screenshots'
            >
              Screenshots
            </a>
          </li>
          <li className='lg:mr:0 mr-4 ml-4'>
            <a
              onClick={() => {
                onChangeLang(lang === "de" ? "nl" : "de");
              }}
            >
              <img
                className='h-8'
                alt=''
                src={lang === "de" ? "/icon/flag_nl.png" : "/icon/flag_de.png"}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
