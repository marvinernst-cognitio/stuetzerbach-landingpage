import ContentItem from "components/ContentItem";

const BASE_PATH = "https://stuetzerbach.cognitio.de";
const TOKEN = "6ccda160ab7f2a091ef159761bfc1b";

const fetchData = async () => {
  const res = await fetch(
    `${BASE_PATH}/api/singletons/get/Landingpage?token=${TOKEN}`
  );
  const data = await res.json();
  return {
    ...data,
  };
};

export default async function Page() {
  const data = await fetchData();

  return (
    <>
      <header
        className="header relative flex min-h-screen bg-main bg-gradient-to-t from-main-500 to-main-300 bg-cover pt-16  lg:pt-32"
        style={{
          backgroundImage: `linear-gradient(#719751fa, #576749f0) , url(${BASE_PATH}/storage/uploads${data.image.path})`,
        }}
      >
        <div className="container z-20 mx-auto max-w-6xl">
          <div className="flex flex-row  pt-16 lg:justify-between">
            <div className="relative flex w-full flex-col px-4 lg:w-2/3 lg:px-8 items-center">
              <div className=" self-start items-center flex flex-col w-full">
                <img
                  src={"/logo_bildmarke.png"}
                  className=" mb-8 md:relative h-64"
                  height={221}
                  alt=""
                  width={109}
                  style={{
                    aspectRatio: 109 / 221,
                  }}
                />
                <div className="lg:h-8"></div>
                <img
                  src="/logo.svg"
                  width={532}
                  height={154}
                  alt=""
                  className="relative w-[80%] "
                />
              </div>

              <p
                className="mt-6 text-center  font-sans text-sm leading-loose text-white lg:mt-10 lg:text-left lg:text-base"
                dangerouslySetInnerHTML={{ __html: data.subline }}
              />

              <div className="mb-8 mt-10 flex flex-col items-center lg:flex-row">
                <a
                  href="#download"
                  className="mb-8 rounded-full bg-white px-8 py-4 text-main lg:mb-0 lg:mr-8 "
                >
                  Jetzt downloaden
                </a>
                <a href="#tutorial" className="text-white">
                  Wie nutze ich die App?
                </a>
              </div>
            </div>
            <div className=" hidden items-end justify-end  text-right  lg:flex">
              <img
                src="/mockup.png"
                alt=""
                width={369}
                height={611}
                className="max-h-full max-w-[300px] rotate-6"
              />
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 544.44 44.498"
          className="w-full absolute -bottom-1 z-10"
        >
          <g transform="translate(0 -0.012)">
            <path
              id="Pfad_120"
              data-name="Pfad 120"
              d="M544.44,44.51V15.9c-20.53,10.48-59,30.28-96.22,1.22-25.93-20.24-33.92-10-45.3-.66-3.69,3.64-8.63,5.62-14.06,6.56h0c-21.54,3.73-52.08-6.45-71.83-12.61C290.66,2.19,245.76-9,247.13,12.23c.58,8.88,5.06,15.27,2.66,19-2.28,3.55-10.9,4.43-26.38.14-10.6-2.94-19-8.37-29.23-11.18h-.06c-11.94-3.14-26.8-2.67-49.86,10.29C115.16,46.82,97.14,12.73,71.33,4.41,56.81-.27,33.82-5.07,0,15.72V44.51Z"
              fill="#fff"
            />
          </g>
        </svg>
      </header>
      <main>
        <section id="tutorial" className="py-12 after:lg:py-32">
          <div className="container mx-auto flex max-w-6xl ">
            <div className="flex items-center justify-between px-8 lg:flex-row lg:px-0">
              <div className="mr-24 hidden w-full flex-col px-8 lg:flex lg:w-1/2">
                <img
                  src="/mockup_2.png"
                  className="max-w-[400px]"
                  alt="Mockup"
                />
              </div>
              <div className="flex flex-col justify-end lg:w-1/2">
                {data.tutorial.map(({ component, settings }, index) => (
                  <ContentItem key={index} type={component} data={settings} />
                ))}
                <div className="h-24"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="relative lg:mt-24">
          <div
            className="bg-main-400 pb-56 pt-48"
            style={{
              backgroundImage: `linear-gradient(#719751fa, #576749f0) , url(${BASE_PATH}/storage/uploads${data.image.path})`,
            }}
          >
            <div className="container mx-auto flex max-w-6xl flex-col ">
              <div className="flex flex-col justify-between  px-8 xl:px-0">
                {data.download.map(({ component, settings }, index) => (
                  <ContentItem
                    key={index}
                    type={component}
                    data={settings}
                    light
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-col  px-8 lg:flex-row xl:px-0">
                <a
                  title="App im Google PlayStore anzeigen"
                  target="_blank"
                  href={data.androidStoreLink}
                  rel="noreferrer"
                  className="mb-8 lg:mb-0 lg:mr-4"
                >
                  <img
                    src="/google-play-badge.png"
                    alt="Google PlayStore Button"
                    className=" h-[60px] w-auto"
                  />
                </a>
                <a
                  title="App im Appstore anzeigen"
                  target="_blank"
                  href={data.iosStoreLink}
                  rel="noreferrer"
                >
                  <img
                    src="/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg"
                    alt="Appstore Button"
                    className=" h-[60px] w-auto"
                  />
                </a>
              </div>
            </div>
            <svg
              viewBox="0 0 544.44 44.498"
              preserveAspectRatio="none"
              className="w-full h-16 absolute -bottom-1 z-10 object-fill "
            >
              <g transform="translate(0 -0.012)">
                <path
                  id="Pfad_120"
                  data-name="Pfad 120"
                  d="M544.44,44.51V15.9c-20.53,10.48-59,30.28-96.22,1.22-25.93-20.24-33.92-10-45.3-.66-3.69,3.64-8.63,5.62-14.06,6.56h0c-21.54,3.73-52.08-6.45-71.83-12.61C290.66,2.19,245.76-9,247.13,12.23c.58,8.88,5.06,15.27,2.66,19-2.28,3.55-10.9,4.43-26.38.14-10.6-2.94-19-8.37-29.23-11.18h-.06c-11.94-3.14-26.8-2.67-49.86,10.29C115.16,46.82,97.14,12.73,71.33,4.41,56.81-.27,33.82-5.07,0,15.72V44.51Z"
                  fill="#fff"
                />
              </g>
            </svg>
            <svg
              viewBox="0 0 544.44 44.498"
              preserveAspectRatio="none"
              className="w-full absolute -top-1 h-16 -scale-y-100 -scale-x-100  z-10"
            >
              <g transform="translate(0 -0.012)">
                <path
                  d="M544.44,44.51V15.9c-20.53,10.48-59,30.28-96.22,1.22-25.93-20.24-33.92-10-45.3-.66-3.69,3.64-8.63,5.62-14.06,6.56h0c-21.54,3.73-52.08-6.45-71.83-12.61C290.66,2.19,245.76-9,247.13,12.23c.58,8.88,5.06,15.27,2.66,19-2.28,3.55-10.9,4.43-26.38.14-10.6-2.94-19-8.37-29.23-11.18h-.06c-11.94-3.14-26.8-2.67-49.86,10.29C115.16,46.82,97.14,12.73,71.33,4.41,56.81-.27,33.82-5.07,0,15.72V44.51Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
