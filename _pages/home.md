---
layout: default2
permalink: /
title: Home
category: home
---

<div class="{{ page.title }} homepage" style="padding-top: 175px;">

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

<!--   <div class="bookstore">
    <h2>BOOKSTORE</h2>
      <ul>
        <li><img class="bookimg" src="https://placehold.it/80x100?text=1" alt=""></li>
        <li><img class="bookimg" src="https://placehold.it/80x100?text=2" alt=""></li>
        <li><img class="bookimg" src="https://placehold.it/80x100?text=3" alt=""></li>
        <li><img class="bookimg" src="https://placehold.it/80x100?text=4" alt=""></li>
      </ul>
  </div> -->

 <div class="hp__ssteasers">
  <h2>SHORT STORIES &hellip;</h2>
   {% include ss_teasers.html %}
  </div>

</div> <!-- end div homepage -->

