---
layout: default
permalink: /short-stories/
title: Short Stories
category: short-stories
---

<div class="{{ page.title }}">

  <header class="ss-toc">
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

  </header>

  <div class="cf"></div>

  <section class="card__container">

    {% include card-ss.html %}

  </section> <!-- end section .container .card__container -->


</div>
