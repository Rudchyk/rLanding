rLanding
========

Scripts for landing

Version
----
1.0

License
----
MIT

Installation
--------------

###Step 1: Link required files

First and most important, the jQuery library needs to be included (no need to download - link directly from Google). Next, download the package from this site and link the rLanding SCSS file (for the theme) and the rLanding Javascript file.

```html
<!-- jQuery library (served from Google) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<!-- jQuery Mouse Wheel Plugin library -->
<script src="js/jquery.mousewheel.min.js"></script>
<!-- rLanding Javascript file -->
<script src="js/rLanding.min.js"></script>
<!-- rLanding CSS file -->
<link href="css/source/rLanding.css" rel="stylesheet">
<!-- rLanding SCSS file -->
@import "scss/source/rLanding.scss";
```

###Step 2: Create HTML markup

Create a `<div class="container-wrap">` element, with a `<section>` for each slide. `class="slide-wrapper"` is required attribute.

```html
<div class="container-wrap">
    <section id="first-slide" class="slide-wrapper" data-tip="First Slide"></section>
    <section id="second-slide" class="slide-wrapper" data-tip="Second Slide"></section>
    <section id="third-slide" class="slide-wrapper" data-tip="Third Slide"></section>
    <section id="four-slide" class="slide-wrapper" data-tip="Four Slide"></section>
    and more...
</div><!--end container-wrap-->
```

###Step 3: Styles
For default script create navigation:
```html
<nav id="sidenav">
    <a class="linknav active" href="#first-slide" title="top-wrapper">
        <i class="radio"></i>
    </a>
    <a class="linknav" href="#second-slide" title="more-wrapper">
        <i class="radio"></i>
    </a>
    <a class="linknav" href="#third-slide" title="number-wrapper">
        <i class="radio"></i>
    </a>
    <a class="linknav" href="#four-slide" title="bug-wrapper">
        <i class="radio"></i>
    </a>
</nav>
```
Where href its id value and title its data-tip value.

###[Demo](http://viking-r.pp.ua/rLanding/)