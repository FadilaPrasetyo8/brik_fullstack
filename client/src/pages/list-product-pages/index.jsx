import { useEffect, useState } from "react";
import { ListPorduct } from "../../components/list-product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/dataSlice";

export const ListProductPages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const [counter, setCouter] = useState(1);

  console.log(counter);

  useEffect(() => {
    dispatch(fetchData(counter));
  }, [dispatch, counter]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: Something went wrong!</div>;
  }

  const prevPage = () => {
    setCouter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const nextPage = () => {
    setCouter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <div className="max-w-[87.5rem] mx-auto">
        <div className="flex gap-3 flex-wrap justify-center">
          {data.map((datas) => (
            <ListPorduct datas={datas} />
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button
            type="button"
            onClick={prevPage}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={nextPage}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

{
}
