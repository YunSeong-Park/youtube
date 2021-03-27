import React from "react";
import style from "./navbar.module.css";

const Navbar = props => {
  return (
    <div className={style.root}>
      <a>
        <img className={style.logo} src="./logo.png" />
      </a>
      <form action="" className={style.form}>
        <input
          className={style.input_text}
          type="text"
          name="search"
          id=""
          placeholder="enter you want"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
