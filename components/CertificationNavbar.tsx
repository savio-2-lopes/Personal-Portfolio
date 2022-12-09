import { FunctionComponent } from "react";
import { CategoryCertification } from "../types";

export const NavItem: FunctionComponent<{
  value: CategoryCertification | "todos";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-black";
  if (active === value) className += " text-black";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const CertificationNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="todos" {...props} />
      <NavItem value="Cibersegurança" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Scrum" {...props} />
      <NavItem value="Laravel" {...props} />
      <NavItem value="LGPD" {...props} />
    </div>
  );
};

export default CertificationNavbar;
