import { useEffect, useState } from "react";
import { ListPorduct } from "../../components/list-product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/dataSlice";

export const ListProductPages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: Something went wrong!</div>;
  }

  return (
    <>
      <div className="max-w-[87.5rem] mx-auto">
        <div className="flex gap-3 flex-wrap justify-center">
          {data.map((datas) => (
            <ListPorduct datas={datas} />
          ))}
        </div>
      </div>
    </>
  );
};

{
}
