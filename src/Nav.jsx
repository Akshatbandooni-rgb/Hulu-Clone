import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setFetchUrl }) {
  return (
    <div className="nav">
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchTrending);
        }}
      >
        Trending
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchTopRated);
        }}
      >
        Top Rated
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchActionMovies);
        }}
      >
        Action
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchComedyMovies);
        }}
      >
        Comedy
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchHorrorMovies);
        }}
      >
        Horror
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchRomanceMovies);
        }}
      >
        Romance
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchMystery);
        }}
      >
        Mystery
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchSciFi);
        }}
      >
        Sci-Fi
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchWestern);
        }}
      >
        Western
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchAnimation);
        }}
      >
        Animation
      </h3>
      <h3
        onClick={() => {
          setFetchUrl(requests.fetchTV);
        }}
      >
        TV
      </h3>
    </div>
  );
}

export default Nav;
