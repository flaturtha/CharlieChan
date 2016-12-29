---
layout: default2
permalink: /novels/
title: Novels
tagline: For a long weekend or day at the beach!
category: novels
---


<div class="{{ page.title }}">

  <header class="pagehead">
     <section class="pagetitle">
      
      <img class="hideonmobile" src="/assets/img/site/tmp12.svg" alt="Tales of Murder, for readers with time to kill!">

      <h1><span>{{ page.title }}</span></h1>
      <!-- <p><span >{{ page.tagline }}</span></p> -->
      <!-- <p style="text-align: center;font-size: 1rem;">For a long weekend or day at the beach!</p> -->
    </section> <!-- end div.pagetitle --> 
    
    {% include smallnav.html %}
    
  </header>

  <div class="cf"></div>

  <section class="card__container wrap">

    {% include card-novels.html %}

  </section> <!-- end section .container .card__container -->

</div>