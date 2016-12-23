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
    
    <!-- include search.html %} -->

  </header>

  <div class="cf"></div>

  <section class="container card__container">

    {% include card-mw.html %}

  </section> <!-- end section .container .card__container -->

</div>
