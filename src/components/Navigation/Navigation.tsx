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

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="text py-2 text-center text-xl font-bold text-black">CSS Generator</h1>
      </NavLink>
      <ul className="scrollbar-hide flex gap-5 overflow-scroll whitespace-nowrap text-black md:flex-wrap">
        {Object.keys(navLinks).map((key, index) => {
          return (
            <NavLink key={index} to={navLinks[key]} className={({ isActive }) => (isActive ? "text-blue" : "")}>
              <li>{key}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
