## HTML LINK
<a> (anchor) is used to create a hyperlink that allows users to navigate from one resource/page to another.
<a href="https://example.com" target="_blank" title="Visit Example">
  Visit Website
</a>

## link to email Address
mailto: creates a link that opens the user's default email application with the email address filled in.
<a href="mailto:abc@gmail.com">Send Email</a>

## HTML IMAGES(void element)
-> <img> is used to embed an image in a web page.
-> <img src="image.jpg" alt="A mountain" width="200" height="100">

## HTML image MAP
-> An image map allows you to define multiple clickable areas on a single image, where each area can link to a different destination.

<img src="world.jpg" usemap="#worldmap">

<map name="worldmap">
<area shape="rect" coords="0,0,100,100" href="/india">
<area shape="circle" coords="200,100,50" href="/usa">
</map>


## <picture> 
<picture> allows you to provide multiple image sources so the browser can choose an appropriate image based on conditions such as screen size, resolution, or supported image format.

<picture>
<source media="(max-width: 600px)" srcset="mobile.jpg">
<source media="(min-width: 601px)" srcset="desktop.jpg">
<img src="desktop.jpg" alt="Example image">
</picture>

## favicon
-> A favicon is a small icon associated with a website, commonly displayed in the browser tab and bookmarks.
-> placed in the head tag
<link rel="icon" href="/favicon.ico">

