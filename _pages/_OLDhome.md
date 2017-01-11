---
layout: default2
permalink: /oldhome/
title: Home
category: home
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


 <div class="hp__ssteasers">
  <h2>SHORT STORIES &hellip;</h2>
   {% include ss_teasers.html %}
  </div>

</div> <!-- end div homepage -->

