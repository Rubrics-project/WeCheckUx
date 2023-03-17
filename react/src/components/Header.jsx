import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";
import unlogged from '../assets/unloggedUserIcone.svg';
import logged from '../assets/loggedIcon.svg'

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="flex  justify-between p-2 bg-color-grey-bg">
      <Nav/>
      <a href="/" className="flex content-center"><img src={logo} alt="Icon Create Rubric"></img></a>
      {isAuthenticated ? (
        <a href="#" className="flex content-center"><img src={logged} alt="Icon Create Rubric"></img></a>
      ) : (
        <a href="#" className="flex content-center"><img src={unlogged} alt="Icon Create Rubric"></img></a>
      )
      }
    </div>
  );
}
