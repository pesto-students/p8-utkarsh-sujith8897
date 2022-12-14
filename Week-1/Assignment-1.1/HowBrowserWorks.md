# How Web Works

## 1. What will happen when we enter a URL in browser

When a user enters a URL in the browser (ex:- https://www.google.com):

The browser goes to the DNS server, and then finds the actual address of the site which is known as IP address.
They are special numbers look like ex:- 142.250.191.46 (google's IP address).
You can directly access the site using the IP address. But it's not very easy to remember these numbers, especially when you need to access a number of sites.

Then browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.

If the server approves the client's request, the server sends the client a "200 OK" message, which means "It can access the site", and then starts sending the site's files to the browser as a series of small chunks called data packets.

The browser assembles the small chunks into a complete web page and displays it to you.

## (a). Browser's main functionality

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium) organization, which is the standards organization for the web. 

For years browsers conformed to only a part of the specifications and developed their own extensions. That caused serious compatibility issues for web authors. Today most of the browsers more or less conform to the specifications.

## (b). High Level Components of a browser

1. **User Interface (UI)** - this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

2. **Browser Engine** - marshals actions between the UI and the rendering engine.

3. **Rendering Engine** - responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

4. **Networking** - for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

5. **UI Backend** - used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

6. **JavaScript Interpreter** - Used to parse and execute JavaScript code.

7. **Data Storage** - This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

<br/>
<div style="text-align:center"><img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650" alt="Browser Components"/></div>
<br/>

## (c). Rendering engine and its use

The responsibility of the rendering engine is to display the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension

The rendering engine will start getting the contents of the requested document from the networking layer.

<br/>
<div style="text-align:center"><img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=845" alt="Browser Components"/></div>
<br/>

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. 

The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.


<br/>
<div style="text-align:center"><img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=845" alt="Browser Components"/></div>
<br/>

## (d). Parsers

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

### HTML Parser

The job of the HTML parser is to parse the HTML markup into a parse tree.


## (f). Tree construction algorithm


## (g). Order of processing scripts

1. **Scripts** - The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a ```<script>``` tag. The parsing of the document halts until the script has been executed

2. **Speculative parsing** - While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved

3. **Style sheets** - Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing

## (h). Layout and Painting

### Layout

When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout.

HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. 

Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.

### Painting

In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.

- Painting oder

1. background color
2. background image
3. border
4. children
5. outline

