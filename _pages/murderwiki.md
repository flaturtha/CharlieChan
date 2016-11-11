---
layout: default2
permalink: /murderwiki/
title: MurderWiki
tagline: Learn about murder mysteries &hellip;
category: murderwiki
---

<div class="{{ page.title }}">

  <header class="pagehead">
    <section class="pagetitle">
      <h1>{{ page.title }}</h1>
      <h2>{{ page.tagline }}</h2>
    </section> <!-- end div.pagetitle -->
    
    <section class="sortsearch">
      <div class="sort">
        <p>Sort by:</p>
        <ul>
          <li>Length <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
          <li>Author <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
          <li>Category <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
        </ul>
      </div>
      <div class="search">
        <!-- <p>Search by:</p> -->
        <p>{% include search.html %}</p>
      </div>
    </section> <!-- end div.searchsort -->

  </header>

  <div class="cf"></div>

  <section class="container card__container">

    {% include card-mw.html %}

  </section> <!-- end section .container .card__container -->

</div>
