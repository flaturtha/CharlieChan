---
layout: default
permalink: /short-stories/
title: Short Stories
---

<div class="wrap {{ page.title }}">

    <!-- README IF STATEMENT -->
    {% if site.readtime %}
      {% if site.wpm %}
        {% assign readtime = page.wordcount | divided_by:site.wpm %}
      {% else %}
        {% assign readtime = page.wordcount | divided_by:180 %}
      {% endif %}
    {% endif %}

  <section class="container card__container">

    {% include card.html %}

  </section> <!-- end section .container .card__container -->

</div>
