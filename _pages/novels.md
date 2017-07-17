---
layout: default2
permalink: /novels/
title: Novels
tagline: For a long weekend or day at the beach!
category: novels
description: "4 hour read time &amp; longer"
---


<div class="{{ page.title }}">

  <header class="pagehead">

    <h3 class="page_title">{{ page.title | upcase }} :: <span style="font-size:18px;">{{ page.description }}</span></h3>
    
    {% include smallnav.html %}
    
  </header>

  <div class="cf"></div>

  <section class="card__container wrap">

    {% include card-novels.html %}

  </section> <!-- end section .container .card__container -->

</div>