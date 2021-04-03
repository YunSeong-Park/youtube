import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = props => {
  return (
    <div className={style.root}>
      <Link to='/'>
        <img className={style.logo} src='./logo.png' />
      </Link>
      <form action='' className={style.form}>
        <input
          className={style.input_text}
          type='text'
          name='search'
          id=''
          placeholder='enter you want'
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
