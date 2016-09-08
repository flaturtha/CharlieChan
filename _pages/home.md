---
layout: home
permalink: /
title: Home
---

<div class="{{ page.title }} homepage">

  <div class="featuredss">
    <!-- <h2>FEATURED SHORT STORY</h2> -->
    <div class="blog-index">
      {% assign post = site.short-stories.first %}
      {% assign content = short-stories.content %}
      {% include post_detail.html %}
    </div>
  </div>

  <div class="murderwiki">
  <h2>MURDERWIKI ARTICLES</h2>
    <div class="blog-index">
      {% assign post = site.murderwiki.first %}
      {% assign content = murderwiki.content %}
      {% include mw_detail.html %}
    </div>
  </div>

  <div class="trf">
  <h2>THE RED FILE</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, assumenda nemo expedita illo commodi. Temporibus velit facere atque quisquam repudiandae non provident, natus autem quia laudantium optio minima.</p>
  </div>

  <div class="bookstore">
  <h2>BOOKSTORE</h2>
   <ul>
    <li><img class="bookimg" src="https://placehold.it/80x100?text=1" alt=""></li>
    <li><img class="bookimg" src="https://placehold.it/80x100?text=2" alt=""></li>
    <li><img class="bookimg" src="https://placehold.it/80x100?text=3" alt=""></li>
    <li><img class="bookimg" src="https://placehold.it/80x100?text=4" alt=""></li>
  </ul>
  </div>

  <div class="stories">
  <h2>STORIES BY Length, Author, Genre</h2>
   <ul>
    <li><img class="storyimg length" src="https://placehold.it/50x10?text=Length" alt=""></li>
    <li><img class="storyimg author" src="https://placehold.it/50x10?text=Author" alt=""></li>
    <li><img class="storyimg genre" src="https://placehold.it/50x10?text=Genre" alt=""></li>
  </ul>
  </div>

</div>
