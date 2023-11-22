import Link from "next/link";

const fetchData = async () => {
  const url = `https://stuetzerbach.cognitio.de/api/collections/get/Page?token=6ccda160ab7f2a091ef159761bfc1b&filter[title_slug]=impressum`;
  const res = await fetch(url);
  const data = await res.json();
  return data.entries[0];
};

export default async function Impressum() {
  const data = await fetchData();

  return (
    <>
      <header className={`header relative flex  bg-cover py-8  bg-main `}>
        <div className=" left-0 top-0  flex w-full p-8 ">
          <Link
            href="/"
            className=" flex justify-center flex-row items-center gap-4"
          >
            <img src="/logo_bildmarke.png" alt="" className="h-24" />
            <img src="/logo.svg" alt="" className="h-16" />
          </Link>
        </div>

        <div
          className={`absolute bottom-0 z-10 h-56 max-h-[20vh] w-screen bg-cover bg-repeat-x mg-main`}
        ></div>
      </header>
      <main className="container mx-auto flex flex-col items-center justify-center p-4 pb-40 pt-32">
        <div className="lg:w-2/3">
          <h1 className="gap-3  font-main text-2xl text-gray-500  lg:text-5xl">
            {data.title}
          </h1>

          <h2 className="text-xlont-bold mt-4 text-left text-gray-700 lg:mt-8  ">
            {data.subline}
          </h2>

          {data.block.map(({ value }) => {
            return (
              <div
                key={value.text}
                className="prose mt-3 pt-3 leading-loose  text-gray-500 lg:prose-base"
                dangerouslySetInnerHTML={{ __html: value.text }}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
