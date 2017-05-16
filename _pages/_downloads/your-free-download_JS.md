---
layout: default2
permalink: /downloads/your-free-download/
title: Your FREE Download
category: download
---

<script>
    function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}
  </script>


<div class="{{ page.title }}">

  <header class="pagehead">
     <section class="pagetitle">
      <img class="hideonmobile" src="/assets/img/site/tmp12.svg" alt="Tales of Murder, for readers with time to kill!">
      <h1><span>{{ page.title }}</span></h1>
    </section> <!-- end div.pagetitle --> 
    
  </header>

  <section class="page-intro">
    <div class="trf__main">
      <!-- <h3 class="intro">Thanks for requesting your Enjoy the story.</h3> -->

      <div class="download-instructions">
        <dl class="trf__dl">
          <dt>Step 1&#058;</dt>
          <dd>Choose your preferred format:<br>(Kindle or ePub 3.0)</dd>
          <dt>Step 2&#058;</dt>
          <dd>Click the appropriate button below&nbsp;the&nbsp;description to download &amp; enjoy.</dd>
        </dl>

        <div class="download__smallprint">
          <p>NOTE: On desktop, clicking the buttons will open the download dialog box. On mobile devices, they will activate the download, which, once complete will allow you to open the file in your preferred app.</p>
        </div>
      </div>

    </div> <!-- end div container -->
  </section>
  
  <section class="intro">
    <div class="freebie">
      <img src="{{ short-stories.image }}" alt="{{ short-stories.title }} by {{ short-stories.author }}">
      <div class="freebie__inner">
        <p id="books__title"></p>
        <p id="books__author"></p>
        <p class="etr">READ TIME: {{ short-stories.etr }}</p>
        <p>{{ short-stories.description }}</p>

        <div style="margin-top: 2rem;" class="book__buttons">
          <a href="{{ short-stories.kindle }}" rel="nofollow" class="add-to-cart">KINDLE</a>
          
          <a href="{{ short-stories.epub }}" rel="nofollow" class="add-to-cart">ePUB</a>
        </div>

        <p style="margin-top: 2rem;text-align:center;text-transform:uppercase;" class="book__price">Enjoy your story!</p>

      </div>
    </div>
  </section> <!-- end section intro -->

<script>
  var urlParams = new URLSearchParams(window.location.search);

  // console.log(urlParams.get('title'));
  // console.log(urlParams.toString());
  var title = (urlParams.getAll('title'));
      title = title.toString();

      author = (urlParams.getAll('author'));
      author = author.toString();

  document.getElementById("books__title").innerHTML = title;
  document.getElementById("books__author").innerHTML = "By" author;  


  

</script>

</div>