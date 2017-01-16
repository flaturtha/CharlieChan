---
layout: home
permalink: /
title: Home
category: home
---

{% include jsonld_home.html %}


<div class="{{ page.title }} homepage">


  <!-- NOVELS -->
  {% include novels_detail.html %}
    
  <!-- NOVELLAS -->
  {% include novellas_detail.html %}

  {% include optin4.html %}

  <!-- SHORT STORIES -->
  {% include short-stories_detail.html %}

  <!-- MURDERWIKI -->
  {% include mw_detail.html %}

  {% include optin4.html %}


</div> <!-- end div homepage -->

