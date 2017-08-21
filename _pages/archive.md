---
layout: default2
title: Email Archives
permalink: /email-archives-page/
---

<section class="archive-short-stories-list">
	
  {% assign shorts = site.short-stories | reverse %}
	{% for short-stories in shorts %}

		<!-- README IF STATEMENT -->
		{% if site.readtime %}
		  {% if site.wpm %}
		    {% assign readtime = short-stories.wordcount | divided_by:site.wpm %}
		  {% else %}
		    {% assign readtime = short-stories.wordcount | divided_by:180 %}
		  {% endif %}
		{% endif %}
  	
  	{% highlight html noindent %}
  	<!-- START HERE -->
  	<h1>CASEFILES</h1>
  	<p>{{ short-stories.date | date:"%a, %b %d, %Y" }}<br>CASEFILE NUMBER: {{ short-stories.casefileNumber }}<br><span style="display:block;" class="opub__ss"><em>{{ short-stories.opub }}</em> | {{ short-stories.opubdate }} {% if short-stories.opubissue %} | {{ short-stories.opubissue }} {% endif %}</span></p>

  	<hr>

		<img src="{{ site.url }}{{ short-stories.image }}" alt="{{ short-stories.title }} {% if short-stories.author %}by {{ short-stories.author }}{%else%}{{ short-stories.series }}{% endif %}" style="float:left;max-width:25%;margin:10px 10px 10px 10px;">

		<a href="{{ site.url}}{{ short-stories.url }}"><h2>{{ short-stories.title | upcase }}</h2></a>
		<h3>{% if short-stories.author %}by {{ short-stories.author }}{%else%}{{ short-stories.series }}{% endif %}</h3>
		<p style="margin:0 0 0 0;font-style:italic;" >(<span class="etr" style="display:inline;">{% if site.readtime %}{% if readtime > 60 %}{% assign readtime_hours = readtime | divided_by: 60 %}{% assign readtime_minutes = readtime | modulo:60 %}{% if readtime_hours > 1 and readtime_hours < 2 %}1 hour{% else %}<span class="hour">{{ readtime_hours }}</span> hr{% endif %}{% if readtime_minutes < 1 %}{% elsif readtime_minutes > 1 and readtime_minutes < 1.5 %} and 1 minute {% elsif readtime_minutes > 1.5 %} and <span class="time">{{ readtime_minutes }}</span> min{% endif %}{% else %}{% if readtime < 1 %}Less than 1 minute {% elsif readtime > 1 and readtime < 1.5 %}1 minute {% elsif readtime > 1.5 %}<span class="time">{{ readtime }}</span> min {% endif %}{% endif %}{% endif %}</span> read)</p>

		<p>{{ short-stories.excerpt }}</p>

		<hr>

		<p>{{ short-stories.tease }}</p>

		<a href="{{ site.url}}{{ short-stories.url }}?utm_source=drip&utm_medium=email&utm_campaign={{ broadcast.name | url_encode }}&utm_content={{ email.subject | url_encode }}" style="border: 1px solid #8b0000;border-radius: 5px;font-size: 14px;padding:10px 20px 10px 20px;background-color:#8b0000;color:#fffff0;margin-right:20px;">READ {{ short-stories.title | upcase }}</a>
		
		{% raw %}
		<p style="margin:32px 0 0 0;">{{ snippets.atticus_signature }}</p>

		<p>PS &mdash; looking for something else to read? Check out <a href="https://www.talesofmurder.com/short-stories/?utm_source=drip&utm_medium=email&utm_campaign={{ broadcast.name | url_encode }}&utm_content={{ email.subject | url_encode }}">Short Stories</a>, <a href="https://www.talesofmurder.com/novellas/?utm_source=drip&utm_medium=email&utm_campaign={{ broadcast.name | url_encode }}&utm_content={{ email.subject | url_encode }}">Novellas</a> or <a href="https://www.talesofmurder.com/novels/?utm_source=drip&utm_medium=email&utm_campaign={{ broadcast.name | url_encode }}&utm_content={{ email.subject | url_encode }}">Novels</a>!</p>
		{% endraw %}
		<!-- END HERE -->
		{% endhighlight %}
		
  {% endfor %}

</section>