---
layout: home
permalink: /
title: Home
category: home
---

<div class="{{ page.title }} homepage">

  <section class="latestrelease">
    <h2>LATEST RELEASE</h2>
    <p>Just released!!</p>
  </section> <!-- end section latestrelease -->

  <section class="hp__mw">
    <header>
      <h2>MURDERWIKI</h2>
      <a href="/murderwiki">Browse Articles &raquo;</a>
    </header>
    <p>Learn about the murder mystery &amp; crime genre</p>
    <div class="hp__murderwiki">
      {% include mw_detail.html %}
    </div>
  </section>


  <section>
    <h2>SHORT STORIES</h2>
    <p>stories that take less than an hour to read</p>
  </section>


  <section>
    <h2>NOVELLAS</h2>
    <p>stories that take an hour or so to read</p>
  </section>


  <section>
    <h2>NOVELS</h2>
    <p>stories that take several hours to read</p>
  </section>

</div> <!-- end div homepage -->

