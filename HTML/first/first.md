## What is HTML?
-> HTML (hyper text markup language) which is used to define the Strcutre of out web page

## <head>
 element contains metadata and resources related to the web page, such as <title>, <meta>, <link>, <style>, and <script>.

## <title>
 defines the title of the web page, which is displayed in the browser tab.

## <meta>
 provides metadata/information about the web page, such as character encoding, viewport settings, and description.

## <UTF-8>
 UTF-8 in HTML is a way of encoding text so the browser can correctly display all characters, symbols, and emojis from different languages.

## <Encoding>
 means converting text into a proper format of bytes so that computers and browsers can understand and display it correctly.

## <link>
 is used to connect the HTML document with external resources, such as CSS files and favicons.

## <style> is used to write CSS directly inside an HTML document.

## <script> is used to include or write JavaScript, which can make a web page interactive and dynamic.

## We call HTML a “document”
-> HTML is called a document because an HTML file describes the structure and content of a web document, such as headings, paragraphs, images, links, lists, etc

## HTML Elements?
-> An HTML element generally consists of an opening tag, content, and closing tag, and it can also have attributes.
    <h1>       → Opening tag
    Hello      → Content
    </h1>      → Closing tag

## HTML attributes?
HTML attributes provide additional information or configuration for an HTML element.

## what is URL?
-> URL (Uniform Resource Locator) is the address of a resource on the internet.It tells the browser where the resource is located and how to access it.

https:www.example.com:443/product/101?category=mobile

[protocol]  → https: Protocol defines the rules for how the client and server communicate and how data is exchanged.

[hostname]  → example.com -> Hostname identifies the host/server you want to communicate with.

[port] → 443 -> A port number is a logical number that helps the OS identify which service should receive a network request on a server.

[pathname]  → /products/101 -> Pathname identifies the specific resource or route on the server that you want to access.

[Query_parameter] → ?category=mobile&sort=price -> Query parameters provide additional information to the server to customize, filter, search, sort, or control a request.

You enter:
    https://facebook.com
            ↓
    Browser reads hostname:
    facebook.com
            ↓
    DNS(Domain Name System) finds its IP address
            ↓
    Browser connects to that server
            ↓
    Facebook server responds

## What is www?
-> WWW = World Wide Web
-> It is a system that allows us to access and share web pages/resources over the internet using URLs and HTTP/HTTPS.

## type of URL
1. absolute -> An absolute URL contains the complete address of a resource, including the protocol, hostname, and path when applicable.
2. Relative -> A relative URL specifies a resource relative to the current page/location, without including the complete protocol and hostname.

## HTML heading Tags
-> HTML provides six heading levels, from <h1> to <h6>, used to define headings and subheadings.

## Paragraph
-> <p> is used to define a paragraph of text.


## Void elements
-> Void elements are HTML elements that do not have closing tags or child content.
-> <hr> => horizon line (used to seprate the content)
-> <br> => defines a line break

-> <pre> => display the content as written in html code 


## semantic 
-> Semantic HTML uses elements whose names clearly describe the meaning and purpose of their content.
    <header>
    <nav>
    <main>
    <section>
    <article>
    <footer>

## <br> vs <Strong>
-> <br> => Creates a line break.

-> <strong> => highlight the text (semantic)

## <i> vs <em>
->  <i> </i> italic (non semantic tag)
-> <em></em> display text in italic(smeantic tags)

## HTML abbrevation tags
-> <abbr> => <abbr> is used to represent an abbreviation or acronym.
