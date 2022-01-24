import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext, useStateContext } from "../../contexts";
import { useThemeContext } from "../../contexts/themeContext";
import { logoutHandler } from "../axios/axios.loginSignUp.handler";
import { LeftNav, Toast } from "../index";
import "./navBar.css";
export function NavBar() {
  const {
    state: { toast },
    dispatch
  } = useStateContext();
  const { theme, themeColor, themeChanger } = useThemeContext();
  const [hamBug, setHambug] = useState(false);
  const {
    authState: { userName, login },
    authDispatch
  } = useAuthContext();
  return (
    <>
      <nav style={themeColor} className="navbar">
        {toast && <Toast />}
        <div className="nav-hambug" onClick={() => setHambug((flag) => !flag)}>
          <div className="hambug-icon">
            <svg
              className={theme === "light" ? "svg-img-black" : "svg-img"}
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
          <NavLink to="/" className="nav-icon">
            <span className="nav-link">FT</span>
            <h2>FinTube</h2>
          </NavLink>
        </div>
        <div className="navbar-right">
          <div className="navbar-login">
            <Link to={login ? "/profile" : "/login"}>
              <svg
                className={theme === "light" ? "svg-img-black" : "svg-img"}
                fill="currentcolor"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z"></path>
              </svg>
              <h6>{userName}</h6>
            </Link>
          </div>
          {login && (
            <button
              className="btn-logout-mobile-only"
              onClick={() => logoutHandler(authDispatch, dispatch)}
            >
              <svg
                className="btn-logout-mobile-only"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          )}

          {theme === "light" ? (
            <button
              className="navbar-theme"
              onClick={() => themeChanger("dark")}
            >
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path
                  d="M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              className="navbar-theme"
              onClick={() => themeChanger("light")}
            >
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path
                  d="M3.55 18.54l1.41 1.41l1.8-1.79l-1.42-1.42M11 22.45h2V19.5h-2m1-14a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.66l1.8 1.79l1.41-1.41l-1.79-1.8m1.79-12.28l-1.41-1.41l-1.8 1.79l1.42 1.42M13 .55h-2V3.5h2m-9 7H1v2h3m2.76-7.66l-1.8-1.79l-1.41 1.41l1.79 1.8l1.42-1.42z"
                  fill="white"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </nav>
      {hamBug && <LeftNav />}
    </>
  );
}
