// npm modules

/*
import {v4 as uuidv4} from 'uuid';

console.log(uuidv4());
*/

import generateJoke from "./generake.joke";
import "./styles/main.scss";
import bell from "./assets/bell.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = bell;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
