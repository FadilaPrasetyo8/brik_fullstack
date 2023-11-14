import { DetailProduct } from "../../components/detail-product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../features/dataSlice";
import { useParams, useSearchParams } from "react-router-dom";

export const DetailProductPages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: Something went wrong!</div>;
  }

  return <DetailProduct data={data} />;
};
