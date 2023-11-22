import React from "react";

import { useQuery } from "react-query";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

const fetchData = async () => {
  const url = `https://stuetzerbach.cognitio.de/api/collections/get/Page?token=6ccda160ab7f2a091ef159761bfc1b&filter[title_slug]=impressum`;
  const res = await fetch(url);
  const data = await res.json();
  return data.entries[0];
};

export default function Impressum(props) {
  // const [data, setData] = useState<null | any>(null);
  const { data } = useQuery("impressum", fetchData, {
    initialData: props.data,
  });
  if (!data) {
    return <Loader />;
  }
  return (
    <Layout title={data.title} subline={data.subline}>
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
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
};
