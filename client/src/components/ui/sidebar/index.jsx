import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { createElement } from "react";

export const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(window.innerWidth > 1280 && true);
  const Menus = [
    { icon: BsBoxSeam, name: "Product", href: "products" },
    { icon: BsBoxSeam, name: "Add Product", href: "add-product" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-60" : "w-0"
        }  duration-300 bg-gray-800 fixed xl:sticky top-0 h-screen`}
      >
        <button
          className={`${open && "float-right" ? "text-white" : "text-black"} p-4`}
          onClick={() => setOpen(!open)}
        >
          <GiHamburgerMenu />
        </button>
        <ul className={`${!open && "scale-0"} space-y-1 font-medium`}>
          <span className="text-slate-300 text-xl m-4 ">Categories</span>
          {Menus.map((menu, i) => (
            <li key={i}>
              <a
                href={menu.href}
                className="flex items-center p-2 lg:p-4 lg:text-xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span>{createElement(menu.icon, { className: "", size: "24px" })}</span>
                <span className={` ml-3`}>{menu.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 h-screen flex-1 overflow-auto">{children}</div>
    </div>
  );
};
