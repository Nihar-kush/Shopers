import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ response1, setProducts }) {
  const [query, setQuery] = useState("");

  function searchHandler(e) {
    e.preventDefault();
    if (query !== "") {
      const filteredProducts = response1.filter((item) => {
        return item.title.toLowerCase().startsWith(query.toLowerCase());
      });
      setProducts(filteredProducts);
    } else {
      setProducts(response1);
    }

    setQuery("");
  }
  return (
    <div className="container  sticky-top ">
      <nav className="navbar navbar-expand-lg bg-dark rounded-bottom">
        <div className="container">
          <a className="navbar-brand text-light fst-italic fw-bold" href="/">
            Shopper
          </a>
          <span
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="navbar-toggler-icon text-light "
              role="button"
            />
          </span>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <form className="d-flex mx-auto" onSubmit={(e) => searchHandler(e)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-light">Search</button>
            </form>
            <div className="d-flex gap-4 text-light mx-auto">
              <a href="#" className="fs-4 text-light focus-none">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="#" className="fs-4 text-light focus-none">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a href="#" className="fs-4 text-light focus-none">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
