import { Link } from "react-router-dom";

export const ListPorduct = ({ datas }) => {
  return (
    <Link to={datas._id} className="max-w-sm w-52 mt-5 rounded-lg flex flex-col ">
      <img className="rounded-lg h-64 w-full object-cover" src={datas.images} alt="" />
      <div className="text-center">
        <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-black">{datas.title}</h5>
      </div>
    </Link>
  );
};
