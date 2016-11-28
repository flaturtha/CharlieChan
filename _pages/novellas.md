---
layout: default2
permalink: /novellas/
title: Novellas
tagline: Find something good to read &hellip;
category: novellas
---

<div class="{{ page.title }}">

  <header class="pagehead">
    
<!-- end    <section class="breadcrumbs">
      <p class="xsmall"><span class="underline">Home</span> > <span class="bold">Short Stories</span></p>  
    </section>  div.breadcrumbs -->
    
    <section class="pagetitle">
      <h1>{{ page.title }}</h1>
      <h2>{{ page.tagline }}</h2>
      <h3 style="text-align: center;font-size: 1rem;">For a lazy Saturday afternoon!</h3>
    </section> <!-- end div.pagetitle -->
    
    <section class="sortsearch hidden">
      <div class="sort">
        <p>Sort by:</p>
        <ul>
          <li>Length <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
          <li>Author <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
          <li>Genre <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
        </ul>
      </div>
      <div class="search">
        <p>Search by:</p>
        <p>{% include search.html %}</p>
      </div>
    </section> <!-- end div.searchsort -->

  </header>

  <div class="cf"></div>

  <section class="card__container">

    {% include card-novellas.html %}

  </section> <!-- end section .container .card__container -->


</div>


<!-- <header class="ss-toc">
    <div class="top">
      <h1>Short Stories</h1>
      <h2>Table of Contents</h2>
      <p>Find something to read &hellip;</p>
    </div>

    <div class="sortsearch">
      <div class="search">
        <p>Search by:</p>
        <p>{% include search.html %}</p>
      </div>
      <div class="sort">
        <p>Sort by:</p>
      <ul>
        <li>Length</li>
        <li>Author</li>
        <li>Genre</li>
      </ul>
      </div>
    </div>

  </header> -->