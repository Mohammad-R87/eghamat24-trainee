import {css, unsafeCSS} from "lit";

export const custom = css `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito";
  font-size: 14px;
}

body {
    background-color: #fafdfb;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Nunito', 'Segoe UI', arial;
    color: #6c757d;
}

a {
  text-decoration: none !important;
}

ul {
  list-style: none;
}

nav {
  padding: 20px;
}
nav i {
  font-size: 25px;
}
nav .router a {
  border: 2px solid #6777ef;
  border-radius: 3px;
  color: #6c757d;
  padding: 5px 20px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
}
nav .router .router-link-active, nav .router .router-link-exact-active {
  background-color: #6777ef !important;
  color: #fff;
}

.item {
  border-radius: 3px;
  cursor: default;
}

.border-success {
  border-left: 5px solid #22c55e !important;
}

.border-danger {
  border-left: 5px solid #fc544b;
}

.pointer {
  cursor: pointer;
}

#error {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #fc544b;
  box-shadow: 0 6px 10px #fd9b96;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 16px 30px;
  position: fixed;
  z-index: 1;
  right: 30px;
  bottom: 20px;
  font-size: 16px;
}

#success {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #63ed7a;
  box-shadow: 0 6px 10px #a8f5b4;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 16px 30px;
  position: fixed;
  z-index: 1;
  right: 30px;
  bottom: 20px;
  font-size: 16px;
}

#error.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
#error.show i {
  font-size: 20px;
}

#success.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
#success.show i {
  font-size: 20px;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 20px;
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 20px;
    opacity: 1;
  }
}
@-webkit-keyframes fadeout {
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
@keyframes fadeout {
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
.disabled {
  text-decoration: line-through;
}

@keyframes task_animation {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.task_animation {
  -webkit-animation: task_animation 0.2s cubic-bezier(0, 0, 0.2, 1) forwards;
  animation: task_animation 0.2s cubic-bezier(0, 0, 0.2, 1) forwards;
}

.scroll {
  overflow-y: scroll;
  max-height: 510px;
}

.filter {
  filter: blur(2px);
}

.card .card-header .btn:not(.note-btn) {
  border-radius: 0.25rem !important;
}


/*# sourceMappingURL=custom.css.map */

`

;