import React from "react";
import ResultCards from "../../components/ResultCards";
export const runtime = 'edge'; // Directly export the runtime

export default async function resultPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {



  const { id } = await params
  // const searchParams = useSearchParams();
  // if (!searchParams) {
  //   return <div>Loading...</div>;
  // }
  // const id = searchParams.get('id');

  const getData = async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/main/submit?id=${id}`)
    const data = await response.json(); 
    return data;
  };

  
  const data = await getData();
  if (!data) {
    return <div>Error happened...</div>;

  } 
  return (
    <>
        <div className="col-span-12">
          <ResultCards cardsData={data}/>
        </div>
    </>
  );
};

