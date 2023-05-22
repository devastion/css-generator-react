import { NavLink } from "react-router-dom";

const navLinks: { [key: string]: string } = {
  "Border Radius": "/border-radius",
  "Box Shadow": "/box-shadow",
  "Text Shadow": "/text-shadow",
  RGBA: "/rgba",
  "Font Face": "/font-face",
  "Multiple Columns": "/multiple-columns",
  "Box Resize": "/box-resize",
  "Box Sizing": "/box-sizing",
  Outline: "/outline",
  Transition: "/transition",
  Transform: "/transform",
};

const navLinksProd: { [key: string]: string } = {
  "Border Radius": "/css-generator-react/border-radius",
  "Box Shadow": "/css-generator-react/box-shadow",
  "Text Shadow": "/css-generator-react/text-shadow",
  RGBA: "/css-generator-react/rgba",
  "Font Face": "/css-generator-react/font-face",
  "Multiple Columns": "/css-generator-react/multiple-columns",
  "Box Resize": "/css-generator-react/box-resize",
  "Box Sizing": "/css-generator-react/box-sizing",
  Outline: "/css-generator-react/outline",
  Transition: "/css-generator-react/transition",
  Transform: "/css-generator-react/transform",
};

export const Navigation = () => {
  const links = import.meta.env.MODE === "production" ? navLinksProd : navLinks;
  return (
    <div>
      <NavLink to={import.meta.env.MODE === "production" ? "/css-generator-react/" : "/"}>
        <h1 className="text py-2 text-center text-xl font-bold text-black">CSS Generator</h1>
      </NavLink>
      <ul className="scrollbar-hide flex gap-5 overflow-scroll whitespace-nowrap text-black md:flex-wrap">
        {Object.keys(links).map((key, index) => {
          return (
            <NavLink key={index} to={links[key]} className={({ isActive }) => (isActive ? "text-blue" : "")}>
              <li>{key}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
