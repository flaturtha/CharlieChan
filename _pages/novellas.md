---
layout: default2
permalink: /novellas/
title: Novellas
tagline: Find something good to read &hellip;
category: novellas
---

<div class="{{ page.title }}">

  <header class="pagehead">
   
    <section class="pagetitle">
      <h1>{{ page.title }}</h1>
      <h2>{{ page.tagline }}</h2>
      <h3 style="text-align: center;font-size: 1rem;">For a lazy Saturday afternoon!</h3>
    </section> <!-- end div.pagetitle -->

    <section class="smallnav">
    {% if page.url == "/" %}
    {% else %}
      {% include breadcrumbs.html %}
    {% endif %}

    <div style="margin-top:1rem;font-size:0.75rem;color:#8b0000;font-weight:bold;border-bottom:1px solid #8b0000;">SEARCH <i class="fa fa-search"></i></div>

    {% include showcart.html %}

    </section>
    
    <!-- include search.html %} -->

  </header>

  <div class="cf"></div>

  <section class="card__container">

    {% include card-novellas2.html %}

  </section> <!-- end section .container .card__container -->


</div>


