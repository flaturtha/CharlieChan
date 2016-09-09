---
layout: default
permalink: /murderwiki/
title: MurderWiki
---

<div class="{{ page.title }}">

  <header class="ss-toc">
    <div class="top">
      <h1>MurderWiki</h1>
      <h2>Murder &amp; crime in literature </h2>
      <p>A look at the how and why of murder mystery &amp; crime fiction</p>
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

  <section class="container card__container">

    {% include card-mw.html %}

  </section> <!-- end section .container .card__container -->

</div>
