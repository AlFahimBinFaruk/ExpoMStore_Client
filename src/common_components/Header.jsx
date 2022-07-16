import { useState } from "react";

const Header = () => {
  const [commonRoutes, setCommonRoutes] = useState([
    {
      name: "categories",
      link: "/",
    },
    {
      name: "products",
      link: "/",
    },
    {
      name: "search",
      link: "/",
    },
    {
      name: "cart",
      link: "/",
    },
    {
      name: "my account",
      link: "/",
    },
  ]);
  return (
    <div className="text-center py-4">
      <h3 className="text-muted fst-italic">ExpoMStore</h3>
      <div className="routes d-flex justify-content-center mt-4">
        {commonRoutes.map((i) => {
          return (
            <h5>
              <a href="" className="mx-3 text-capitalize">
                {i.name}
              </a>
            </h5>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
