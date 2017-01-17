---
layout: default2
permalink: /novels/
title: Novels
tagline: For a long weekend or day at the beach!
category: novels
description: "Perfect for that trip to the beach or curling up on the couch: murder mystery and crime novels. Buy one now and read wherever you are!"
---


<div class="{{ page.title }}">

  <header class="pagehead">
     <section class="pagetitle">
      
      <img class="hideonmobile" src="/assets/img/site/tmp12.svg" alt="Tales of Murder, for readers with time to kill!">

      <h1><span>{{ page.title }}</span></h1>
      <h2 style="font-size:0.875rem;background-color:#fffff0;padding:0.25rem;width:600px;max-width:90%;margin:0 auto 1rem;border-radius: 4px;text-align:center;color:#8b0000;">{{ page.description }}</h2>
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