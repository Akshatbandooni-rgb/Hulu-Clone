import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./Header.css";

function Header() {
  return (
    // BEM Naming Convention
    <div className="header">
      <div className="header__icons">
        {/* Icons Here */}
        <div className="header__icon header__icon--selected">
          <HomeIcon className="header__icon " />
          <p>HOME</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon className="header__icon" />
          <p>TRENDING</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon className="header__icon" />
          <p>LIVE</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon className="header__icon" />
          <p>LIBRARY</p>
        </div>
        <div className="header__icon">
          <SearchIcon className="header__icon" />
          <p>SEARCH</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon className="header__icon" />
          <p>ACCOUNT</p>
        </div>
      </div>

      <img
        src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        alt="Hulu Logo"
        className="header__logo"
      ></img>
    </div>
  );
}

export default Header;
