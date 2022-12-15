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

<!-- The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium) organization, which is the standards organization for the web. 

For years browsers conformed to only a part of the specifications and developed their own extensions. That caused serious compatibility issues for web authors. Today most of the browsers more or less conform to the specifications. -->

The main functionality of a browser is to render and display webpages to the user. 

This involves sending a request to the web server associated with the URL, receiving the HTML code for the webpage, parsing the code, applying styles, executing any JavaScript code, and displaying the final rendered version of the page to the user. 

The browser also provides a user-friendly interface for the user to interact with the page and access other features such as bookmarking, history, and settings.

## (b). High Level Components of a browser

1. **User Interface (UI)** -  is the part of the browser that the user interacts with. It includes the visual elements of the browser, such as the address bar, tabs, and buttons. When the user enters an URL into the address bar, the user interface passes this information to the networking components, which establish a connection to the web server associated with the URL and send a request for the webpage.

2. **Browser Engine** - marshals actions between the UI and the rendering engine.

3. **Rendering Engine** - is responsible for rendering the content of the webpage. It uses parsers to analyze the HTML, CSS, and other code on the page and construct a tree-like structure known as the Document Object Model (DOM) tree. The DOM tree represents the content of the webpage in a hierarchical manner and allows the rendering engine to determine how the content should be displayed on the page.

4. **Networking** - The networking components are responsible for establishing a connection to the web server and sending and receiving data. When the user enters an URL into the address bar, the networking components use this information to establish a connection to the web server and send a request for the webpage. When the web server responds, the networking components receive the HTML code for the webpage and pass it to the rendering engine.

5. **UI Backend** - used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

6. **JavaScript Interpreter** - The script processors are responsible for executing any JavaScript code on the page. This can include functions that manipulate the content of the page, such as changing the styles of elements or interacting with the user. When the rendering engine encounters JavaScript code while constructing the DOM tree, it passes the code to the script processors to be executed.

7. **Data Storage** - This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

The rendering engine, script processors, and networking components all work together to provide the core functionality of the browser. The rendering engine uses the parsed HTML, CSS, and JavaScript code to construct the DOM tree and determine how the content should be displayed on the page. The script processors execute any JavaScript code, which may manipulate the styles and content of the page. The networking components establish a connection to the web server and receive the HTML code for the webpage, which is passed to the rendering engine.

<br/>
<div style="text-align:center"><img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650" alt="Browser Components"/></div>
<br/>

## (c). Rendering engine and its use

<!-- The responsibility of the rendering engine is to display the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension

The rendering engine will start getting the contents of the requested document from the networking layer. -->

The rendering engine is a component of a web browser that is responsible for rendering the content of a webpage. It uses parsers to analyze the HTML, CSS, and other code on the page and construct a tree-like structure known as the Document Object Model (DOM) tree. The DOM tree represents the content of the webpage in a hierarchical manner and allows the rendering engine to determine how the content should be displayed on the page.

The rendering engine is used to display the content of the webpage to the user in a user-friendly manner. It parses the HTML, CSS, and other code on the page and constructs the DOM tree, which represents the content and structure of the page in a way that the rendering engine can understand. The rendering engine then uses this information to determine the position and size of each element on the page, and finally draws the elements onto the screen using a process called painting. This allows the user to see the final, rendered version of the webpage.

<br/>
<div style="text-align:center"><img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=845" alt="Browser Components"/></div>
<br/>

<!-- The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. 

The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer. -->

<!-- 
<br/>
<div style="text-align:center"><img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=845" alt="Browser Components"/></div>
<br/> -->

## (d). Parsers

<!-- Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree. -->


<!-- 
### HTML Parser

The job of the HTML parser is to parse the HTML markup into a parse tree. -->

When a browser receives the HTML and CSS code for a webpage, it uses parsers to analyze the code and construct a tree-like structure known as the Document Object Model (DOM) tree. The DOM tree represents the content of the webpage in a hierarchical manner and allows the browser to determine how the content should be displayed on the page.

The process of parsing the HTML and CSS code involves breaking down the code into smaller pieces and analyzing each piece to determine its meaning and how it relates to other pieces of the code. The HTML parser uses the syntax of the HTML language to identify the different elements on the page, such as headings, paragraphs, and links. It then organizes these elements into a hierarchical structure that represents the content and structure of the page.

The CSS parser analyzes the styles defined in the CSS code and applies them to the elements in the DOM tree. This allows the browser to determine the appearance of each element on the page, such as its color, font, and size.

Parsing is important because it allows the browser to understand the content and structure of the webpage and determine how it should be displayed to the user. Without parsing, the browser would not be able to accurately render the content and styles of the page and the user would not be able to view the page as intended by the web developer.

## (e). Script Processors

Script processors are components of a web browser that are responsible for executing JavaScript code on a webpage. JavaScript is a programming language that is commonly used on the web to add interactivity and dynamic behavior to webpages. It allows web developers to create functions that manipulate the content and appearance of a page, and interact with the user.

When the rendering engine encounters JavaScript code while constructing the DOM tree, it passes the code to the script processors to be executed. The script processors analyze the code and execute it in the order in which it appears on the page. This can include functions that manipulate the styles and content of the page, or interact with the user through events such as clicking a button or hovering over an element.

Script processors are important because they allow web developers to add dynamic and interactive behavior to their pages. Without script processors, webpages would be static and unable to respond to user input or change their content and appearance.


## (f). Tree construction algorithm

Tree construction is a process that is used by a web browser to represent the content and structure of a webpage in a hierarchical manner. This is done using a tree-like structure known as the Document Object Model (DOM) tree.

The process of tree construction begins when the browser receives the HTML code for a webpage. The browser uses a parser to analyze the HTML code and identify the different elements on the page, such as headings, paragraphs, and links. It then organizes these elements into a hierarchical structure, with each element becoming a node in the tree. The root node of the tree represents the entire webpage, and each child node represents a specific element on the page.

Tree construction is important because it allows the browser to understand the content and structure of the webpage in a way that it can use to determine how the page should be displayed to the user. The DOM tree provides a representation of the page that the rendering engine can use to render the content and apply styles, and that JavaScript code can use to manipulate the page. Without tree construction, the browser would not be able to accurately render the content of the page.


## (g). Order of processing scripts

<!-- 1. **Scripts** - The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a ```<script>``` tag. The parsing of the document halts until the script has been executed

2. **Speculative parsing** - While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved

3. **Style sheets** - Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing -->

When a browser processes the HTML, CSS, and JavaScript code on a webpage, it follows a specific order to ensure that the page is rendered correctly. The order of script processing is as follows:

1. The HTML code is parsed and the DOM tree is constructed based on the HTML elements on the page.
2. The CSS code is parsed and used to apply styles to the elements in the DOM tree.
3. The JavaScript code is executed, which may manipulate the styles and content of the page.

This order is important because it ensures that the styles are applied to the correct elements on the page and that any JavaScript code can manipulate the correct styles and content. If the order were reversed, the JavaScript code would not have access to the correct styles and the page may not be rendered correctly.

## (h). Layout and Painting

<!-- ### Layout

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
5. outline -->

After the browser has parsed the HTML, CSS, and JavaScript code on a webpage and constructed the DOM tree, it uses a process called layout to determine the position and size of each element on the page. This process involves calculating the position of each element based on its relationship to other elements in the DOM tree, and the styles applied to it.

Once the layout has been determined, the browser uses a process called painting to draw the elements onto the screen and display the final version of the webpage to the user. This involves drawing each element onto a canvas, which is then displayed to the user.

The processes of layout and painting are important because they allow the browser to accurately render the content and styles of the webpage and display it to the user in a user-friendly manner. Without these processes, the content of the page would not be positioned correctly and the user would not be able to see the intended layout of the page.