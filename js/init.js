var sourcePath = "";

if (head.browser.ie && head.browser.version < 9) {
    head.load(sourcePath+"js/html5.js");
}

head.js(
    sourcePath+"js/jquery-1.10.2.min.js",
    sourcePath+"js/jquery.mousewheel.min.js",
    // sourcePath+"js/rLanding.js",
    sourcePath+"js/rLanding.min.js"
);