---
layout: home
permalink: /
title: Home
category: home
---

{% include jsonld_home.html %}


<div class="{{ page.title }} homepage">

  <div style="text-align:center;color:#fffff0;background-color:#242424;margin:-2rem 0 2rem 0;padding:2rem;" class="hidden">
    <h1>READ <em>ANYTHING</em></h1>
    <h2>IN AS LITTLE AS 5 MINUTES PER DAY</h2>
    <h4>Your time is limited &hellip; especially for special activities you love, like reading a great story. Not any more!</h4>
    <p>Find a story you want to read, and get it in <em>serial</em> format &hellip; with new installments delivered every day.</p>
    <ul>
      <li>NOVELETTES &mdash; 5-min per day installments</li>
      <li>NOVELLAS &mdash; 10-min per day installments</li>
      <li>NOVELS &mdash; up to 30-min per day installments</li>
    </ul>
  </div>


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

