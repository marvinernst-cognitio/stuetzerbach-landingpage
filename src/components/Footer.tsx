import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center justify-center px-16 py-8">
      <div className="bg-white p-8 ">
        <div className="">
          <div className="flex items-center justify-center flex-col">
            <div className=" text-center text-xs leading-5 mb-4">
              Das Projekt „Steigerung Erlebniswert Glas- und Heimatmuseum durch
              die Einbindung moderner Medien“ wird gefördert durch das Thüringer
              Ministerium für Umwelt, Energie und Naturschutz
            </div>
            <a href="https://umwelt.thueringen.de/" target="_blank">
              <img
                src="/logos/umwelt_ministerium.png"
                className="h-16 w-auto object-contain"
                alt="Logo Thüringer Ministerium für Umwelt, Energie und Naturschutz"
              />
            </a>
          </div>
          <div className="my-10 h-[1px] w-full bg-gray-300"></div>

          <div className="my-4 h-24 gap-8 flex flex-row items-center justify-center">
            <a
              href="https://www.biosphaerenreservat-thueringerwald.de/"
              target="_blank"
            >
              <img
                src="/logos/brtw.png"
                className="h-20"
                alt="Logo Biosphärenreservat Thüringerwald"
              />
            </a>
            <a href="https://www.ilmenau.de/" target="_blank">
              <img
                src="/logos/stadt_ilmenau.png"
                className="h-20 object-contain"
                alt="Logo Stadt Ilmenau"
              />
            </a>

            <a href="https://www.stuetzerbach.de/" target="_blank">
              <img
                className="h-20 object-contain"
                src="/logos/gemeinde_stuetzerbach.png"
                alt="Logo Gemeine Stützerbach"
              />
            </a>
            <a href="" target="_blank">
              <img
                src="/logos/heimat_museum.png"
                className="h-20 self-center"
                alt="Logo Heimatmuseum Stützerbach"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-end justify-center lg:w-2/3">
        <Link
          href={"/impressum"}
          className="mx-3 text-gray-400"
          title="Zur Seite Impressum wechseln"
        >
          Impressum
        </Link>
        <Link
          href="/datenschutz"
          title="Zur Seite Datenschutz wechseln"
          className="mx-3 text-gray-400"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
