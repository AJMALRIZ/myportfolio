import React from 'react'
import {default as logoC} from "./Bairuha Tech Logo.svg";
import "bootstrap/js/src/collapse.js";
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header() {
  return (
    <header className='headerArea'>
<nav variant="pills" class="navbar navbar-expand-lg  navbar-light ">
<div class="container headerNav">
<a href='#'  class="navbar-brand">
    <div class="row">
     <div class="col"><h2>Home</h2>
     </div>
     </div>
    </a>

    <button class="navbar-toggler"
    type='button'
    data-bs-toggle="collapse"
    data-bs-target="#navmenu"
    >
<span class="navbar-toggler-icon navbar-light">
</span>
    </button>

    <div class="collapse navbar-collapse" id="navmenu">
<ul class="navbar-nav nav-pills mb-3 ms-auto" id="pills-tab2" role="tablist">
        <li  class="nav-item" role="presentation">
        <button
      class="nav-link"
      id="pills-home-tab1"
      // data-mdb-toggle="pill"
      // data-mdb-target="#pills-home2"
      type="button"
      role="tab"
      aria-controls="pills-home"
      aria-selected="true"
   >
      About
    </button>
    </li>

    <li  class="nav-item" role="presentation">
        <button
      class="nav-link"
      id="pills-home-tab2"
      // data-mdb-toggle="pill"
      // data-mdb-target="#pills-home2"
      type="button"
      role="tab"
      aria-controls="pills-home"
      aria-selected="true"
   >
      My works
    </button>
    </li>

    <li  class="nav-item" role="presentation">
        <button
      class="nav-link"
      id="pills-home-tab3"
      // data-mdb-toggle="pill"
      // data-mdb-target="#pills-home2"
      type="button"
      role="tab"
      aria-controls="pills-home"
      aria-selected="true"
   >
      Contact
    </button>
    </li>

</ul>
    </div>
</div>
</nav>
    </header>
  )
}
