import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "About",
    path: "/about",
  },
  {
    id: 3,
    text: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link
            className="btn btn-ghost link link-primary no-underline"
            key={index}
            to={link.path}
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
