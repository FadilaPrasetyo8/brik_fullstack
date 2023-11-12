import { useEffect, useState } from "react";
import { ListPorduct } from "../../components/list-product";
import { getProductApi } from "../../api";

export const ListProductPages = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductApi().then((res) => setProduct(res));
  }, []);

  console.log(product);

  return (
    <>
      <div className="max-w-[87.5rem] mx-auto">
        <div className="flex gap-3 flex-wrap justify-center">
          {product.map((data) => (
            <ListPorduct data={data} />
          ))}
        </div>
      </div>
    </>
  );
  //   return <ListPorduct />;
};
