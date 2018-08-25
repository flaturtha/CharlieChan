---
layout: home2
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

   <!-- include optin6.html %} -->

  <!-- NOVELETTES -->
  {% include novelettes_detail.html %}

  <!-- SHORT STORIES -->
  {% include short-stories_detail.html %}

  <!-- MURDERWIKI -->
  {% include mw_detail.html %}

  <!-- include optin5.html %} -->

</div> <!-- end div homepage -->

