---
layout: home
permalink: /
title: Home
---

<div class="{{ page.title }} homepage">

  <div class="featuredss">
    <h2>FEATURED SHORT STORY</h2>
    <div class="blog-index">
      {% assign post = site.short-stories.first %}
      {% assign content = short-stories.content %}
      {% include featuredss.html %}
    </div>
  </div> <!-- end div featuredss -->

  <div class="cf"></div>

  <div>
    <div class="hp__murderwiki">
      <h2>MURDERWIKI ARTICLES</h2>
      {% include mw_detail.html %}
    </div> <!-- end div murderwiki -->

    <!-- <div class="cf"></div> -->

    <div class="hp__trf">
      <h2>THE RED FILE &mdash; <span>Current Issue</span></h2>
      {% include trf_detail.html %}
    </div>
  </div>


</div> <!-- end div homepage -->

