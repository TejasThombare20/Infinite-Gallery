
import { fetchdata } from "@/services/fetchData";

import Loading from "@/components/Loading";
import Skeleton from "@/components/Skeleton";

const page = async () => {
  const data = await fetchdata(1);
  console.log("data in page", data);

  return (
    <main className="sm:p-16 py-16 flex  flex-col gap-10 ">
      <h2 className="text-3xl text-white font-bold ">Explore Gallery</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data ? data : <Skeleton/>}
      </section>
      <Loading />
    </main>
  );
};

export default page;
