---
layout: default2
permalink: /bookstore/
title: Bookstore
tagline: Buy something good to read &hellip;
category: bookstore
---

<div class="{{ page.title }}">

	<header class="pagehead">
    
    <section class="pagetitle">
      <h1>{{ page.title }}</h1>
      <h2>{{ page.tagline }}</h2>
    </section> <!-- end div.pagetitle -->
    
    <section class="sortsearch hidden">
      
      {% include sort.html %}

      <div class="search">
        <p>Search by:</p>
        <p>{% include search.html %}</p>
      </div>
    </section> <!-- end div.searchsort -->

  </header>

  <div class="placeholder__div" style="height: 3000px;border:1px solid hotpink;">
    <!-- <h3 style="text-align:center;margin-top: 3rem;">BIG BLANK BOX</h3> -->

   

  </div>


</div>
