/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  let pronoun = ["the", "our", "mines", "yours", "this", "his", "her"];
  let adj = [
    "great",
    "big",
    "alert",
    "small",
    "curious",
    "fast",
    "secure",
    "unsecure",
    "alive"
  ];
  let noun = [
    "jogger",
    "racoon",
    "nerd",
    "geek",
    "network",
    "developer",
    "coder",
    "platform"
  ];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let div = document.createElement(`div`);
        div.innerText = `
          ${pronoun[p]}${adj[a]}${noun[n]}.com
          ${pronoun[p]}${adj[a]}${noun[n]}.net
          ${pronoun[p]}${adj[a]}${noun[n]}.org
          ${pronoun[p]}${adj[a]}${noun[n]}.edu
        `;
        document.body.appendChild(div);
      }
    }
  }
};
