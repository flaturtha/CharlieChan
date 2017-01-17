---
layout: default2
permalink: /murderwiki/
title: MurderWiki
tagline: Learn about murder mysteries &hellip;
category: murderwiki
description: "Resources, definitions & articles about the murder mystery and crime genres. Author bios, background and history. Learn about murder mystery and crime fiction!"
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

  <section class="container card__container">

    {% include card-mw.html %}

  </section> <!-- end section .container .card__container -->

</div>
