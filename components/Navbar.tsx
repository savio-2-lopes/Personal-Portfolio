import { useState, useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
        <span
          className="mx-2 text-lg cursor-pointer hover:border-b-4 hover:hover:text-gray-500"
          onClick={() => setActive(name)}
        >
          {name}
        </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/resume") setActive("Resume");
    else if (pathname === "/certifications") setActive("Certifications");
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
        <div className="container lg:px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-xl border-b-4 lg:text-2xl">{active}</span>
            <button
              className="
                cursor-pointer 
                text-xl leading-none px-3 py-1 
                border border-solid 
                border-transparent
                rounded bg-transparent 
                block lg:hidden 
                outline-none 
                focus:outline-none 
                mobile-menu-button"
              type="button"
            >
              <img
                src="/images/icons/bar.svg"
                width={20}
                height={20}
                alt="Icon Bar"
              />
            </button>
          </div>

          <div className="lg:flex hidden flex-grow items-center text-right justify-items-end">
            <ul className="flex text-base flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavItem
                  active={active}
                  setActive={setActive}
                  name="About"
                  route="/"
                />
              </li>
              <li className="nav-item">
                <NavItem
                  active={active}
                  setActive={setActive}
                  name="Resume"
                  route="/resume"
                />
              </li>
              <li className="nav-item">
                <NavItem
                  active={active}
                  setActive={setActive}
                  name="Publications"
                  route="/publi"
                />
              </li>
              <li className="nav-item">
                <NavItem
                  active={active}
                  setActive={setActive}
                  name="Projects"
                  route="/projects"
                />
              </li>
              <li className="nav-item">
                <NavItem
                  active={active}
                  setActive={setActive}
                  name="Certifications"
                  route="/certifications"
                />
              </li>
            </ul>
          </div>

          <div className="hidden mobile-menu mt-4 w-screen">
            <div className="flex text-center justify-center">
              <ul className="flex text-base flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item mt-2 text-center">
                  <NavItem
                    active={active}
                    setActive={setActive}
                    name="About"
                    route="/"
                  />
                </li>
                <li className="nav-item mt-2 text-center">
                  <NavItem
                    active={active}
                    setActive={setActive}
                    name="Resume"
                    route="/resume"
                  />
                </li>
                <li className="nav-item mt-2 text-center">
                  <NavItem
                    active={active}
                    setActive={setActive}
                    name="Publications"
                    route="/publi"
                  />
                </li>
                <li className="nav-item mt-2 text-center">
                  <NavItem
                    active={active}
                    setActive={setActive}
                    name="Projects"
                    route="/projects"
                  />
                </li>
                <li className="nav-item mt-2 text-center">
                  <NavItem
                    active={active}
                    setActive={setActive}
                    name="Certifications"
                    route="/certifications"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <script src="/scripts/custom.js"></script>
    </>
  );
};

export default Navbar;
