// JavaScript Document

function loadAccessiblePage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item2");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	var childElement;
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Why Should Websites Be Accessible?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "According to article 9 of the United Nation’s CRPD (Convention on the Rights of Persons with Disabilities) accessing the internet is a basic human right for people with any kind of disability. This also includes people of older ages who may struggle to access certain websites with smaller font sizes but luckily web developers don’t have to worry about this since most modern browsers come with basic functionality to increase font size. Designing websites to be accessible should be second nature to developers since they also provide many benefits such as SEO improvements and mobile accessibility. Websites with improved search results have been proven to be more successful resulting in increased audience (due to higher traffic) and lower maintenance costs.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "There are many factors for a business case for website accessibility such as:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Social factors";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Technical factors";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Financial factors";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Legal and policy factors";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Social factors";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The aim is to provide equal opportunity for anyone with any device, disability or low literacy levels.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Technical factors";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is all about improving quality, development / maintenance time and server load. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Financial factors";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Improving accessibility can benefit businesses a lot in terms of financial income and losses. Improved SEO can bring new users (due to increased traffic) therefore resulting in higher income. Designing an accessible / universal website can reduce maintenance costs while support users of all platforms / devices. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Legal and policy factors";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Sometimes businesses are required by law to ensure that websites are fully accessible.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples:";
	element.appendChild(newElement);
	
	var table = document.createElement("table");
	table.id = "table";
	
	var tableBody = document.createElement("tbody");
	table.appendChild(tableBody);
	
	var tableRow = document.createElement("tr");
	var tableHeader = document.createElement("th");
	tableHeader.innerHTML = "Country Affected";
	tableRow.appendChild(tableHeader);
	tableHeader = document.createElement("th");
	tableHeader.innerHTML = "Name of Law / Legislation";
	tableRow.appendChild(tableHeader);
	tableBody.appendChild(tableRow);

	tableRow = document.createElement("tr");
	var tableData = document.createElement("td");
	tableData.innerHTML = "China";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Law on the Protection of Persons with Disabilities 1990";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "EU Countries ";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Web and Mobile Accessibility Directive";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "Finland";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Act on Electronic Services and Communication in the Public Sector";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "France";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Law N° 2005-102 Article 47";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "France";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Order of 29 April 2015 on the general accessibility framework for public administrations";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "Ireland";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "The Disability Act, 2005";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "Italy";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Law 9 January 2004, n. 4 'Provisions to support the access of disabled people to IT tools' (Stanca Law)";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "Japan";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Basic Act on the Formation of an Advanced Information and Telecommunications Network Society";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "United States";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Section 255 of the Telecommunications Act of 1996";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = "United States";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "21st Century Communications and Video Accessibility Act of 2010 (CVAA)";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	
	element.appendChild(table); 
	
}


function loadDevelopersPage() {
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
	newElement.innerHTML = "What Sould Developers Do To Make Websites Accessible?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "There are few ways web developers can ensure the websites they create are accessible, such as: adding alternative text in images, transcripts for audio and by making websites fully keyboard accessible.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Alternative Text for Images";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "In HTML, image tags have an optional “alt” attribute which can be used to provide a description for an image. By providing the alt text for an image it makes it easier to people with sight difficulty to get an idea of what’s on the website. This can be done using screen reader software which will read out loud whatever is on the website. As well as alt text, developers should also make use of the captains for all other multimedia content. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Keyboard-only Accessibility";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "By making a website fully accessible via a keyboard increases the overall accessibility of the website meaning that even people without access to a mouse can still use the website. This extends the functionality to the point where users can use assistive technologies such as speech input (via a desktop assistant such as Cortana) to control the elements of a website. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Audio Transcripts";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Another way of increasing accessibility is by providing audio transcripts for all audio elements of a website, this way users with hearing disabilities can read what was said in the recording.";
	element.appendChild(newElement);
	
}


function loadPrinciplesPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item4");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Accessibility Principles";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "To ensure that a website is fully accessible web developers must consider these three components: web content, user content and authoring tools. These three components work to together to provide a good user experience.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Web Content";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is any part of a website such as images, text and multimedia elements. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "User Agents";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This refers to any kind of software used by a user to access web content, this includes tools such as GUI browsers, media players and voice browsers.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Authoring Tools";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is basically refers to software packages  that allow users to create and manage content.  ";
	element.appendChild(newElement);
	
	
	
}