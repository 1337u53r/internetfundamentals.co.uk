// JavaScript Document

function loadGetStartedPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item2");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Get Started";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "All HTML5 pages have a basic HTML code structure that all web developers follow, feel free to use the HTML5 template shown below as your skeleton.";
	element.appendChild(newElement);

	newElement = document.createElement("b");
	newElement.innerHTML = "Basic HTML5 Template";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	var code = '<code><pre class="code-block"><code class="comments">&lt;!-- HTML5 declaration --&gt;</code>	<br>&lt;!DOCTYPE html&gt;<br><code class="comments">&lt;!-- Start of HTML5 document --&gt;</code><br>&lt;html&gt;<br>&lt;head&gt;<br>&#9;&lt;meta charset="utf-8"&gt;<br>&#9;&lt;title&gt;Page Title&lt;/title&gt;<br>&#9;&lt;link rel="stylesheet" href="css/stylesheet.css"&gt;<br>&#9;&lt;script src="js/external.js" type="text/javascript"&gt;&lt;/script&gt;<br>&lt;/head&gt;<br><br>&lt;body&gt;<br>&#9;&lt;div class="content-container"&gt;<br>&#9;&#9;&lt;h1&gt;This is a Heading&lt;/h1&gt;<br>&#9;&#9;&lt;p&gt;This is a paragraph.&lt;/p&gt;<br>&#9;&lt;/div&gt;<br><br>&#9;&lt;script&gt;<br>&#9;&#9;document.getElementById("demo").innerHTML = "Hello JavaScript!";<br>&#9;&lt;script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;<br><code class="comments">&lt;!-- End of HTML5 document --&gt;</code> </pre></code>';              
    
	$(".content-container").append(code);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "The DOCTYPE";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;!DOCTYPE html&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The code snippet shown above is the correct syntax for defining a HTML5 document.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "The 'html' element";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;html lang="en"&gt;<br>&lt;/html&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This defines the start and end of a HTML5 document.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "The 'head' element";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;head&gt;<br>&#9;&lt;meta charset="utf-8"&gt;<br>&#9;&lt;title&gt;Title of webpage&lt;/title&gt;<br>&lt;/head&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This element contains all the meta data about the webpage such as the character set , links for external stylesheets and external scripts used by the webpage. The 'title' element contains the name of the webpage, meta tags are mainly used for search engine optimisation (SEO).";
	element.appendChild(newElement);
	 
	newElement = document.createElement("b");
	newElement.innerHTML = "The 'body' element";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;body&gt;<br>&#9;&lt;div&gt;<br><br>&#9;&lt;/div&gt;<br>&lt;/body&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This 'body' element is where all visible content goes. The 'body' element is a parent element of all tags such as div, h1, p etc.";
	element.appendChild(newElement);
	
}


function loadBodyElementsPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item3");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "HTML Headings";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The h1 to h6 tags are used to define headings, h1 being the biggest and h6 being the smallest heading.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Example:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	var code = '<code><pre class="code-block">&lt;h1&gt;This is heading 1&lt;/h1&gt;<br>&lt;h2&gt;This is heading 2&lt;/h2&gt;<br>&lt;h3&gt;This is heading 3&lt;/h3&gt;<br>&lt;h4&gt;This is heading 4&lt;/h4&gt;<br>&lt;h5&gt;This is heading 5&lt;/h5&gt;<br>&lt;h6&gt;This is heading 6&lt;/h6&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Output:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block"><h1>This is heading 1</h1><br><h2>This is heading 2</h2><br><h3 style="color:white;">This is heading 3</h3><br><h4>This is heading 4</h4><br><h5>This is heading 5</h5><br><h6>This is heading 6</h6></pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "HTML Paragraphs";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The p tag is used to define new paragraphs.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Example:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;p&gt;Paragraph 1&lt;/p&gt;<br>&lt;p&gt;Paragraph 2&lt;/p&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Output:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block"><p>Paragraph 1</p><p>Paragraph 2</p></pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "HTML Links";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The a tag is used to define clickable hyperlinks. Hyperlinks are mainly used for navigation purposes, when a user clicks on a link the browser will take the user to the specified webpage.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Example:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;a href="https://example.com"&gt;Click Me!&lt;/a&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Output:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block"><a style="color: white" href="https://example.com">Click Me!</a></pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "HTML Images";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The img tag can be used to define and embed images in HTML webpages. The src attribute is the only mandatory attribute for this tag however it does have other attributes such as alt, width and height. The alt attribute is used to provide alternative text to describe the image, this is necessary for accessibility purposes. It's important to note the 'img' does not need a closing tag.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Example:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">&lt;img src="../resources/images/favicon.png" alt="W3Schools.com" width="50%"&gt;</pre></code>';
	$(".content-container").append(code);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Output:";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block"><img src="../resources/images/favicon.png" alt="W3Schools.com" width="30%"></pre></code>';
	$(".content-container").append(code);
	
	
	
}