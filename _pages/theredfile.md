---
layout: default2
permalink: /the-red-file/
title: The Red File
tagline: The weekly digest of murder
category: the-red-file
---

<div class="{{ page.title }}">
	
	<header class="pagehead">
    
<!-- end    <section class="breadcrumbs">
      <p class="xsmall"><span class="underline">Home</span> > <span class="bold">Short Stories</span></p>  
    </section>  div.breadcrumbs -->
    
    <section class="pagetitle">
      <h1>{{ page.title }}</h1>
      <h2>{{ page.tagline }}</h2>
    </section> <!-- end div.pagetitle -->
    
    <section class="sortsearch hidden">
      <div class="sort">
        <p>Sort by:</p>
        <ul>
          <li>Date <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
          <li>Serialized Novel <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
          <li>Featured Short Story <i class="fa fa-caret-down" aria-hidden="true"></i><i class="fa fa-caret-up" aria-hidden="true"></i></li>
        </ul>
      </div>
      <div class="search">
        <p>Search by:</p>
        <p>{% include search.html %}</p>
      </div>
    </section> <!-- end div.searchsort -->

  </header>

  {% include card-trf.html %}

</div>
