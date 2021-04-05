import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = props => {
  const [word, setWord] = useState();
  const onChange = e => {
    setWord(e.target.value);
  };
  return (
    <div className={style.root}>
      <Link to='/'>
        <img className={style.logo} src='./logo.png' />
      </Link>
      <form action='' className={style.form}>
        <input className={style.input_text} type='text' name='search' id='' placeholder='enter you want' onChange={onChange} />
        <Link to={`/search/${word}`}>
          <button className={style.button}>Search</button>
        </Link>
      </form>
    </div>
  );
};

export default memo(Navbar);
