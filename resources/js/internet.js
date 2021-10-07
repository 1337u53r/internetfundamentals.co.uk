// JavaScript Document

function loadOSIReferenceModelPage() {
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
	newElement.innerHTML = "OSI Reference Model";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The OSI (Open Systems Interconnection) reference model is a standard created and used for host-to-host, peer-to-peer and point-to-point communications. A ‘host’ also referred to as nodes is a network device connected to a network; this is possible because of its network interface controller (NIC). Each host connected to a certain will have its own MAC address and IP address; the MAC address is a permanent / unique hardware address which represents a device on a network, the prefix of a MAC address usually represents the manufacturer of the device. The IP address on the other hand can be statically assigned (static IP) or set configured automatically via DCHP; every device is required to have a unique internal IP when connected to a network. The OSI reference model was created by the International Standards Organization (ISO) in 1984 to standardize networks. This model was designed to provide a standard for vendors / manufacturers to follow when creating network devices so that it supports host-to-host, peer-to-peer and point-to-point communication. This standard is known as the ISO/IEC 7498-1 and it basically outlines how host information should be stored and what needs to be done when data is sent from one computer (host) to another. This is important as this maintains a standard making it easier for vendors to create TCP/IP devices / products. It’s also important to note that this is extremely vital for ensuring interoperability; this provides a way of seamlessly transferring information between computers on a network disregarding the vendor or operating system.  The OSI Model can be used by network technicians to diagnose common network issues in a network.";
	
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "OSI Layers";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The OSI model consists of the following seven layers:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ol");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Physical Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Data Link Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Network Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Transport Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Session Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Presentation Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Application Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Each layer has different responsibilities and functions which are essential for handling data transmission.";
	element.appendChild(newElement);
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/OSILayers.svg";
	newElement.className = "image";
	newElement.style.width = "40%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The image above shows the OSI 7 Layer Model and what each layer is responsible for. Each layer also uses a number of protocols which has a standard assigned to it which specifies and defines how the protocol should work.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 1: Physical Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is the lowest level of OSI Model and is responsible for carrying data across the physical hardware in a network, it does this by transporting individual bits from one node to another. This is handled by the Network Interface Controller (NIC) and its drivers.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of physical hardware devices / components include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Ethernet cables";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Connectors";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Hubs";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Ethernet (This uses the IEEE 802.3 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Token Ring (This uses the IEEE 802.5 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Wireless (This uses the IEEE 802.11b/g/n/ac standards)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 2: Data Link Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for transmitting and providing a reliable transfer of data across a link. It is also responsible for fetching and receiving data from the Physical layer as well as physical addressing. It achieves this by transporting frames from one node to another. The Data Link Layer has two sublayers: MAC (Media Access Control) and LLC (Logical Link Layer). Media Access Controls allows data to be given to the NIC and also controls access to the media via Token passing and CSMA/CD (Carrier Sense Multiple Access / Collision Detection). This layer is where network devices such as switches operate.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Ethernet (This uses the IEEE 802.3 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Point-to-Point Protocol / PPP (This uses the IETF RFC 1661 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 3: Network Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for IP Address handling and routing information through the network which allows systems to communicate. After this it extracts the IP from TCP/IP. This layer is responsible for ensuring the delivery of individual packets from the source host to the destination host. IP Address is an example of a Network Address, this is responsible for transferring data across subnets and is used by routers for port-forwarding. This layer is where network devices such as routers operate.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "IP / Internet Protocol (This uses the IETF RFC 791 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "ICMP / Internet Control Message Protocol (This uses the IETF RFC 792 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 4: Transport Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for transporting data from one point to another on a network. It uses the Transmission Control Protocol (TCP) for error handling such as making sure no data is lost in transit or preventing duplicate packets. This basically means that this layer is responsible for ensuring the delivery of a message from one process to another. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "TCP / Transmission Control Protocol (This uses the IETF RFC 793 standard) ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "UDP / User Diagram Protocol (This uses the IETF RFC 768 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 5: Session Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Responsible for establishing, maintaining / managing and terminating communication sessions / connections between devices or applications. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "HTTP / HyperText Transfer Protocol (This uses the IETF RFC 7540 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SMTP / Simple Mail Transfer Protocol (This uses the IETF RFC 2821 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "FTP / File Transfer Protocol (This uses the IETF RFC 959 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 6: Presentation Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for data formatting, it formats the data in way the receiving application can read it (raw form such as Unicode or ASCII text). It is also able to encrypt and decrypt data as well as ensuring compatibility. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "HTTP / HyperText Transfer Protocol (This uses the IETF RFC 7540 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SMTP / Simple Mail Transfer Protocol (This uses the IETF RFC 2821 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "FTP / File Transfer Protocol (This uses the IETF RFC 959 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 7: Application Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for user interaction, it provides network services to application processes for end-user applications such as Email and FTP. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include: ";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "HTTP / HyperText Transfer Protocol (This uses the IETF RFC 7540 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SMTP / Simple Mail Transfer Protocol (This uses the IETF RFC 2821 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "FTP / File Transfer Protocol (This uses the IETF RFC 959 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);	
	
}

function loadTCPIPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item3");
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
	newElement.innerHTML = "TCP/IP Model";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The TCP/IP also known as the DARPA Model was developed by DARPA (a U.S. government agency which created ARPANET). ARPANET (Advanced Research Projects Agency Network) was the first computer network to implement and use the TCP/IP Model / Protocol suite. ARPANET was created to achieve the purpose of providing high-speed network communication between two supercomputers located at two different regions in the United States. As a result, early communication Protocols such as Telnet and FTP (File Transfer Protocol) were created to send data across the ARPANET. Later on, as ARPANET developed two additional Protocols were created: TCP and IP. TCP (Transmission Control Protocol) was created in 1974 to solve the issue of building a reliable network capable of sending data via host-to-host data transfer service. After this came IP (Internet Protocol) which was created in 1981 to providing an addressing standard and a way of routing packets between interconnected networks. Since 1983 the TCP/IP has now become a standard / basic communication protocol for the Internet and private networks. One thing that differentiates the TCP/IP Model from the OSI Model is the number of layers they have. The TCP/IP Model consists of four layers: Application Layer, Transport Layer, Internet Layer and Network Interface Layer. Despite this each of TCP/IP layers correspond with the OSI Model Layers.";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "TCP/IP Layers";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The model consists of four layers:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ol");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Network Access (Network Interface) Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Transport Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Internet Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Application Layer";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/TCPIPLayers.svg";
	newElement.className = "image";
	newElement.style.width = "25%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The image above shows the four layers of the TCP/IP Model. Just like the OSI Model each of the layers use Protocols (same as OSI Model) which also has an assigned standard.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 1: Network Interface Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is the lowest layer of the TCP/IP Model and is responsible for the functions such as:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Mapping IP Addresses to physical MAC Addresses";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Using Protocols to send data (physical transmission)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Encapsulation of IP packets into frames for data transmission";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Controls how data is sent through a network";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Ethernet (This uses the IEEE 802.3 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Token Ring (This uses the IEEE 802.5 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 2: Internet Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for functions such as addressing, packaging and routing of IP Diagrams.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "IP / Internet Protocol (This uses the IETF RFC 791 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "ARP / Address Resolution Protocol (This uses the IETF RFC 826 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "ICMP / Internet Control Message Protocol (This uses the IETF RFC 792 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 3: Transport Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is responsible for the transmission of data, it does this by ensuring that the Application Layer is given a session and also provides communication session management. This layer uses two main Protocols: TCP and UDP. TCP was designed to be reliable, it does this by making sure data is sent properly (carries out checks to make sure data was received and not lost in transit). UDP was however designed a way of simply sending data, meaning that there are no validation checks to make sure data was received at the destination.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "TCP / Transmission Control Protocol (This uses the IETF RFC 793 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "UDP / User Diagram Protocol (This uses the IETF RFC 768 standard)";
	newElement.appendChild(childElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer 4: Application Layer";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This layer is simply responsible for ensuring that applications have access to services running on other layers. It is also responsible for defining what Protocols are used by applications for data exchange.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of the Protocols used in this layer include:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "HTTP / HyperText Transfer Protocol (This uses the IETF RFC 7540 standard)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SMTP / Simple Mail Transfer Protocol (This uses the IETF RFC 2821 standard)";
	newElement.appendChild(childElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "FTP / File Transfer Protocol (This uses the IETF RFC 959 standard)";
	newElement.appendChild(childElement);
	
}

function loadOSITCPIPRelationshipPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item4");
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
	newElement.innerHTML = "OSI &amp; TCP/IP Relationship";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The diagram below shows how the TCP/IP Model corresponds to the OSI Model.";
	element.appendChild(newElement);
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/OSITCPIPRelationship.svg";
	newElement.className = "image";
	newElement.style.width = "50%";
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("br");
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Layer Relationships";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Layer 1 of the TCP/IP Model corresponds with Layers 1, 2 and 3 of the OSI Model. ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Layer 2 of the TCP/IP Model corresponds with Layers 4 of the OSI Model.";
	newElement.appendChild(childElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Layer 3 of the TCP/IP Model corresponds with Layers 5 of the OSI Model.";
	newElement.appendChild(childElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Layer 4 of the TCP/IP Model corresponds with Layers 6 and 7 of the OSI Model.";
	newElement.appendChild(childElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "All corresponding layers of the TCP/IP Model use the same Protocol (and standard assigned to each Protocol) as the OSI Model.";
	element.appendChild(newElement);
}

function loadDNSPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item5");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "What is DNS?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A Domain Name System is a system which stores / assigns hostnames to IP addresses on the internet. It’s like a phonebook containing a collection of IP addresses and their corresponding hostnames. Without domain name systems internet users would not be able to access websites such as Google without entering a host IP address. Domain name systems were designed to be scalable and to help with ease of access. When a user enters a hostname such as example.com into their browser, it looks for a response from a recursive DNS server (ISPs host these) and if it does not respond it then contacts the domain’s root nameserver for the host IP address. ";
	element.appendChild(newElement);

}

function loadNameserverPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item6");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Nameservers";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "What are nameservers?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A name server is a server responsible for translating and linking (mapping) domain host names into IP addresses. For example the domain name example.com is mapped to 93.184.216.34.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Usage:";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "In terms of web hosting nameservers are extremely crucial to get a website up and running. In order to connect a web hosting account to a domain, users have to provide one or two nameservers of the web hosting company and enter these details into the domain configuration page. This allows users to buy and manage a domain at one website and have web hosting account elsewhere. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Example:";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "If a user wanted to buy a domain from namecheap.com (because it was cheaper perhaps) but had a web hosting account on GoDaddy they can (providing correct nameserver details were provided). For this scenario the user would have to find the DNS management section on the GoDaddy website and provide the following nameserver details:";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "dns1.namecheaphosting.com";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "dns2.namecheaphosting.com";
	element.appendChild(newElement);
	
}


function loadDNSRecordsPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item7");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "DNS Records";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "A Records";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A records are used to assign Fully Qualified Domain Names (FQDN) to an IP address. But doing this you can map a subdomain (or a prefix of a domain) to an IP address. By doing this it ensures that the URL www.example.com maps to the same web server containing content for example.com. It also allows users to add a subdomain such as mail.example.com and point it for a separate IP address hosting a mail server.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "CNAME Records";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "CNAME records are used to link alias together. For example you can create an alias named email.example.com and link it so it maps mail.example.com.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "MX Records";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "MX records are used for domains which have a connected mail server, these records tell the mail server how to deliver the information. ";
	element.appendChild(newElement);
	
}

function loadDomainHostingPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item8");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Domain Hosting";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Domain hosting websites allow users to buy desired domain names. Domain hosting / registration websites are often referred to as registrars. Registering a domain names essentially just allows a user to hold a space on the internet. ";
	element.appendChild(newElement); 
}

function loadWebHostingPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item9");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Web Hosting";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Web hosting is the part required for hosting content on a certain domain. Not having any content on a domain makes it useless, adding content to the domain is what makes it a “website”. Web hosting accounts / plans can be bought from web hosting companies such as GoDaddy and Bluehost. By paying a monthly / annual fee users are allocated a fixed amount of storage space, bandwidth, processing power etc. Paid web hosting accounts tend to fall under one of two categories, “Shared hosting” and “Dedicated hosting”. Shared hosting is when a website shares the same server as multiple other websites. This means that this server will be used to host multiple client websites, so if this server goes down essentially a group of websites go offline. Dedicated hosting is when clients are given their own individual server with an allocated IP address and non-shared system resources.";
	element.appendChild(newElement); 
}


function loadTLDDomainsPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item10");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "TLD Domains";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Domain names are split up into two categories TLDs and SLDs. Most domains are controlled and administered by a number of different operators. ICANN is at the top of chain, they are responsible for coordinating the internet’s naming system (to further expand and evolve the internet). Each domain extension has its own operator / administrator, this authority is given to these organizations by ICANN via a registry agreement. Examples of domain operators include: Verisign, Public Interest Registry, Nominet etc.";
	element.appendChild(newElement); 
	
	var table = document.createElement("table");
	table.id = "table";
	
	var tableBody = document.createElement("tbody");
	table.appendChild(tableBody);
	
	var tableRow = document.createElement("tr");
	var tableHeader = document.createElement("th");
	tableHeader.innerHTML = "Domain extension";
	tableRow.appendChild(tableHeader);
	tableHeader = document.createElement("th");
	tableHeader.innerHTML = "Registry responsible for administration";
	tableRow.appendChild(tableHeader);
	tableBody.appendChild(tableRow);

	tableRow = document.createElement("tr");
	var tableData = document.createElement("td");
	tableData.innerHTML = ".com";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Verisign";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".org";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Public Interest Registry";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".net";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Verisign";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".co.uk";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Nominet";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".co.uk";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Nominet";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".org.uk";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Nominet";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".gov.uk";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Nominet &sol; NAC &sol; HM Government Cabinet Office";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	tableRow = document.createElement("tr");
	tableData = document.createElement("td");
	tableData.innerHTML = ".ac.uk";
	tableRow.appendChild(tableData);
	tableData = document.createElement("td");
	tableData.innerHTML = "Jisc &sol; JANET";
	tableRow.appendChild(tableData);
	tableBody.appendChild(tableRow);
	
	element.appendChild(table); 
	
}

function loadLANPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item11");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "LAN";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "LAN stands for Local Area Network; it’s a collection of computers and network devices running on an internal network. Most LAN networks tend to use the star topology however there are other alternatives and each has its benefits and drawbacks.";
	element.appendChild(newElement); 
}

function loadPhysicalTopologiesPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item12");
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
	newElement.innerHTML = "Physical Network Topologies";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A network topology is the arrangement of all the elements (geometrical layout of workstations) in a network, this also includes nodes and physical connecting lines.";
	element.appendChild(newElement); 
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Bus Network";
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/busNetwork.svg";
	newElement.className = "image";
	newElement.style.width = "40%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Consists of workstations arranged together in a linear fashion using just one backbone (cable). Every workstation is directly connected to every other workstation on the network.";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Inexpensive, cheaper than other alternatives";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Easy to implement";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Requires less resources (cable length) ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Connected via a single line (cable) meaning that if this breaks the whole connection breaks";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Harder to troubleshoot problems";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "The more client devices in this network, the slower the network";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Requires terminators on both ends of the cable, these absorb signals so they aren’t reflected down the line";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Ring Network";
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/ringNetwork.svg";
	newElement.className = "image";
	newElement.style.width = "40%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Consists of workstations (client) all connected in a closed-loop arrangement (ring). Every workstation is indirectly connected to every other via the closed loop arrangement however every adjacent pairs are connected directly to each other. When a message has to be sent each packet has to be sent around the ring until it reaches the recipient.";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Fast data transmission";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Data is transmitted only in one direction which reduces packet collisions meaning less packet loss ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Doesn’t require a central management device ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "More client workstations can be added to the network without compromising the performance of the network";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "If one workstation fails, the whole network fails";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Less secure as data is sent around the loop meaning data can be intercepted";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Data transmission can be very slower than other alternatives because data has to sent around the loop";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Requires more expensive hardware";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Star Network";
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/starNetwork.svg";
	newElement.className = "image";
	newElement.style.width = "50%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Consists of workstations all connected in a star arrangement which connects to a central switch, hub or workstation (like a server). Every workstation is indirectly connected to every other via the central device (switch, hub or server).";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Reliable, if one workstation fails the backbone (being the switch, hub or workstation) keeps the whole network stays intact ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Clients can easily be managed by a centralized device (being a switch, hub or workstation)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Very expensive compared to alternatives ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Harder to implement";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Tree Network";
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/treeNetwork.svg";
	newElement.className = "image";
	newElement.style.width = "98%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This network topology consists of two or more “star networks” arranged and connected together in a bus network fashion.";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Enables communication between two networks ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "If one client workstation fails, then none of the other ones are affected ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Relies on the main backbone (cable), so if it breaks the whole network breaks and will not be able to communicate with other networks ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Very difficult to troubleshoot";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Full Mesh Network";
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("br");
	element.appendChild(newElement); 
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/meshNetwork.svg";
	newElement.className = "image";
	newElement.style.width = "70%";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This network topology consists of workstations and network devices which are directly interconnected with each other, these are most commonly used for wireless networks. There are two types of mesh networks: Full mesh and partial mesh. In a full mesh topology, every workstation is directly connected to every other workstation on the network. And in a partial mesh topology some workstations are directly connected to every other workstation on the network and some are connected to the ones that transmit and transfer more data.";
	element.appendChild(newElement); 
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Robust, so even if a switch fails the network still stays intact because there is still another possible route data can travel through";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Easy to diagnose a problem / fault";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement); 
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Expensive";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Requires a lot of wiring";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
}


function loadLogicalTopologiesPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item13");
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
	newElement.innerHTML = "Logical Network Topologies";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The term “logical” basically refers to the nature of how signals act and behave in a network from one node to another. Unlike physical network topologies logical network topologies don’t take into account the physical interconnections of the devices (the physical structure of the devices in the network). In a logical network topology network equipment such as routers and switches are responsible for controlling the way data passes through the network from one node to another (device), this is why we refer to this as “logical”. So essentially a logical network topology emulates and creates a network architecture inside of a physical network topology. Even though a logical network topology can be programmed to emulate any network architecture it still runs on a physical network. There are two common network topologies logical topologies use: Bus topology and Ring topology.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Token Ring";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This consists of workstations which are all arranged and connected in a ring or star topology. In this arrangement the signal only travels in one direction which is carried by a “token” from one node to another. In this topology only the host with the token can send data, tokens are then released after the recipient has successfully received the data. This method ensures that there is no data collision in a network.";
	element.appendChild(newElement);

}


function loadFTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item14");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "FTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "File Transfer Protocol which is most commonly abbreviated as FTP is an internet protocol found on the application layer of the TCP/IP stack. It was created in 1971 and has become the de-facto standard for file transfer (RFC 959). The File Transfer Protocol is a set of rules which define how files should be transferred (on the internet) from one host to the other. FTP uses a client/server model meaning that a server is responsible for storing data (files) and in order to retrieve this data an FTP client is necessary. FileZilla is an example of a popular FTP client used by users all around the world. In order to connect to an FTP server credentials are needed; usernames (can be anonymous) and passwords. By default, FTP operates on the TCP ports 20/21 (default control port) however it is possible to customize this and assign an unassigned port number. FTP allows clients to carry out basic task such as: download files, copy files between directories on the FTP server, upload files to the FTP server, delete files and rename files. In terms of web hosting, web developers are known to use FTP clients such as FileZilla to push updates (they do this by replacing the existing files on the web host). Every time a user logs in to the FTP server, the server initiates a client session. Users can also connect to FTP servers through the command-line interface, this provides a way of quickly transferring files between the computer to the host server. Most modern web browser also come with a basic FTP client allowing users to easily download the files they need.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The command-line command to connect to an FTP host/server is shown below. Replace 'ftp.empire.gov' with desired host or IP address.";
	element.appendChild(newElement);
	
	var code = '<code><pre class="code-block">ftp ftp.empire.gov</pre></code>';              
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "It’s important to note most modern web development tools such as Dreamweaver come with a built-in FTP client.";
	element.appendChild(newElement);
	
}


function loadTFTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item15");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "TFTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "TFTP which stands for Trivial File Transfer Protocol is an internet protocol much like FTP however it is designed to be a lot more simplified. TFTP (defined in RFC 1350 standard) was developed in the 1970s to provide a way of transferring files between computers that lacked hardware resources such as: disk space and memory (RAM). A good example of hardware device that employs TFTP is a router, since older routers lacked memory they used TFTP as a way of retrieving firmware updates. Much like FTP, SFTP also uses the client/server model to initiate connections (sessions). TFTP uses the UDP (User Datagram Protocol) found in the transport layer of the TCP/IP stack for transferring data between hosts. TFTPD32 is a good example of a TFTP client with a GUI however command-lines found on the three major desktop operating systems also come with it (or at least a way of enabling it). Unlike FTP TFTP operates on the UDP port 69 for establishing sessions. It’s also important to note that TFTP only works on the Local Area Network (LAN) since it uses UDP for transport data. The fact that it uses UDP also implies that any data transferred between hosts using TFTP will be unencrypted. ";
	element.appendChild(newElement);
	
}


function loadSFTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item16");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "SFTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SFTP which stands for SSH File Transfer Protocol is an extension of the SSH (Secure Shell) protocol found on the application layer of the TCP/IP model. Although it is built on top of SSH, it is a separate protocol in its right. SFTP has many security advantages over the standard the File Transfer Protocol and was indeed developed to provide a secure way of sending data (files) between two (networked) hosts on an unsecure network. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Command-line command for initiating an SFTP session is shown below. Replace 'username@empire.gov' with appropriate details.";
	element.appendChild(newElement);
	
	var code = '<code><pre class="code-block">sftp username@empire.gov</pre></code>';              
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SFTP uses the SSH2 encryption algorithm to authenticate and establish SFTP connections. STFP can be found on most modern desktop operating system command-lines or third-party tools (such as CyberDuck and WINSCP). Essentially SFTP is a secure alternative to FTP and unlike FTP, SFTP operates on the SSH port 22.";
	element.appendChild(newElement);
	
}

function loadSMTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item17");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "SMTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SMTP which stands for Simple Mail Transfer Protocol is an internet protocol found on the application layer of the TCP/IP stack. SMTP provides a simple way of emails, ‘sendmail’ is a great example of SMTP mail server found on all UNIX systems. SMTP operates on the TCP port 25 (by default) however ports include 465 and 587 (were added to combat spam). SMTP is the underlying protocol used in most mail servers to provide a way of sending emails. The most up to date version of SMTP is defined in RFC 5321 (created and maintained by IETF). In simple terms SMTP is basically a set of commands which define how emails should be sent from one mail server to the other. ";
	element.appendChild(newElement);
	
}

function loadPOP3Page() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item18");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "POP3";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "POP3 is one of the two protocols that can be used for receiving emails. It stands for Post Office Protocol 3 and uses the client/server model and was designed to delete any mail on the mail server as soon as it has been downloaded by the user. Unlike SMTP POP3 is only used for receiving emails therefore sits on receiving end. It is important to note that POP3 only allows for emails to be viewed on one device and all emails are stored locally on the device. POP3 uses port 110 and 995 by default; 110 for encrypted mail and 995 for receiving encrypted mail / securely.";
	element.appendChild(newElement);
	
}


function loadIMAPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item19");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "IMAP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "IMAP is an alternative to POP3 and is also used for receiving emails, IMAP has many improvements/features over POP3 (such as the ability to organize mail into separate folders). IMAP stands for Internet Message Access Protocol and sits on the application layer on the TCP/IP model. IMAP is the de-facto standard for receiving emails as it provides many improvements/features over POP3 such as: emails can be viewed on multiple devices; all emails are stored on a server and all emails are kept on the server. IMAP operates on ports 143 and 993; 143 for all unencrypted emails and 993 for all encrypted emails.";
	element.appendChild(newElement);
	
}

function loadHTTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item20");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "HTTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The HyperText Transfer Protocol is an internet protocol found in the application layer of the TCP/IP stack. HTTP was also created by Sir Tim Berners-Lee as part of the WWW. HTTP was created to provide a way for retrieving linked resources from across the web. HTTP is basically a set of rules which define how data such as images, videos, texts and other media types should be transferred across the internet. When creating websites, it’s important to note that web servers are essentially HTTP servers waiting for http requests to be handled (also known as a daemon) and a browser is essentially a HTTP client which interprets any data downloaded from that web server. HTTP clients such as browsers have the ability to understand and read a HTML file and display this information in real-time to the user. So when a user clicks on a HTML element such as a hyperlink, the HTTP client (your browser) transfer HTTP request back and forth between the client and the web server. HTTP has also gone through many iterations however the latest version is HTTP/2. It’s important to note that standard HTTP operates on port 80.";
	element.appendChild(newElement);
	
}

function loadHTTPSPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item21");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "HTTPS";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "HTTPS (HyperText Transfer Protocol Secure) is the most up to date and recommended protocol; it is built on top of HTTP (HTTPS was designed with purely security in mind). All traffic sent via HTTPS is protected using either TLS or SSL protocols/certificates and unlike HTTP HTTPS operates on port 443.";
	element.appendChild(newElement);
	
}

function loadTelnetPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item22");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Telnet";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Telnet which stands for telecommunication/terminal network is a network protocol which lies on the application layer of the TCP/IP model and it provides a way of accessing remote hosts/computers. It’s an old protocol which was used on the ARPANET as a way of controlling remote hosts. Telnet is a simple way of connecting two hosts on a TCP/IP network, this is done by connecting a telnet client to a telnet server. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Telnet command to connect to a telnet server is shown below.";
	element.appendChild(newElement);
	
	var code = '<code><pre class="code-block">telnet host port</pre></code>';              
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "As soon as the client connects to the host, the client’s terminal will become a virtual terminal interface for the host connected to; allowing users to remotely control the computer via a command-line interface. Telnet is present all three major operating systems however it is important to note that all telnet sessions are less secure than SSH connections since telnet uses a shared key. Telnet was one of the first standards to be standardized by IETF; it’s define in RFC 854. It’s important to note that telnet operates on port 23. Telnet has been replaced by SSH its successor due to issues and vulnerabilities such as network sniffing. ";
	element.appendChild(newElement);
	
}

function loadSSHPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item23");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "SSH";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SSH which stands for Secure Shell is very much like Telnet however it’s a lot more evolved and was designed with security in mind. SSH is only found on Linux and UNIX systems and it lies on the application layer of the TCP/IP stack. Much like Telnet SSH once connected to a remote host, SSH provides a way of controlling a remote host via a virtual terminal. SSH uses the client/server model to initiate sessions meaning that users have be authenticated using correct credentials. The SSH suite include the following: slogin, SSH and SCP (Secure Copy). It’s also important to note that SSH operates on the TCP port 22 by default. Over the years SSH has evolved from SSH1 to SSH2 providing many security improvements.";
	element.appendChild(newElement);
	
}

function loadRDPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item24");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "RDP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "RDP is another example of a remote technology / network protocol used for connecting to remote hosts. RDP stands for Remote Desktop Protocol and allows users to connect another host on the LAN or WAN. It’s extremely useful for an IT environment to help with troubleshooting or any other issue regarding tech support. Unlike Telnet and SSH RDP provides an actual way of controlling a remote host’s desktop through a GUI. This means that users can control anything on the remote host’s screen using a keyboard and mouse. It’s also important to note that RDP operates on the TCP/UDP port 3389.";
	element.appendChild(newElement);
	
}


function loadSNMPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item25");
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
	newElement.innerHTML = "SNMP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SNMP stands for Simple Network Management Protocol and sits on the application layer of the TCP/IP model. The protocol is a set of rules which define how to manage networks and has been defined in RFC 1157.";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Operation and Features:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Allows us to carry out polling (usually via a “GET” request) and traps";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Uses an object’s unique Object Identifier to get the destination";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Has the ability to pull / query data from a system but has a hierarchy structure";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Made up of three components: SNMP Manager, SNMP Agent and a MIB";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "SNMP Versions:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ol");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SMMPv1: Did not include any security measures and used default community strings";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SNMPv2: Security measures were added and backward compatible with SNMPv1";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SNMPv3: Latest version, provides authentication and privacy";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
		
}


function loadNTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item26");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "NTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "NTP which stands for Network Time Protocol is a networking protocol found on the application layer of the TCP/IP stack. The latest NTP which is version 4 has been defined in RFC 5905 and it uses the UDP port 123. Computers all around the world connect to NTP servers to retrieve the real-time local time using UTC. This way computers can keep in sync and will not have to be reconfigured when the clocks go back or forth. NTP servers are really important for mission critical applications for organizations such as banks. A slight delay or error can cause issues unaccounted for.";
	element.appendChild(newElement);
	
}

function loadTLSPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item27");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "TLS";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "TLS which stands for Transport Layer Security is one of the encryption protocols used in HTTPS for data encryptions to protect web traffic. TLS is considered to be the successor of SSL since it is more secure and a lot more efficient. TLS can also be used to secure emails between the sender and the recipient. TLS consists of two sub protocols knows as the TLS Handshake Protocol and the TLS Record Protocol.";
	element.appendChild(newElement);
	
}


function loadDNSPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item28");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "DNS";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A Domain Name System is a system which stores / assigns hostnames to IP addresses on the internet. It’s like a phonebook containing a collection of IP addresses and their corresponding hostnames. Without domain name systems internet users would not be able to access websites such as Google without entering a host IP address. Domain name systems were designed to be scalable and to help with ease of access. When a user enters a hostname such as example.com into their browser, it looks for a response from a recursive DNS server (ISPs host these) and if it does not respond it then contacts the domain’s root nameserver for the host IP address. It’s important to note that DNS operates on port 53.";
	element.appendChild(newElement);
	
}


function loadDHCPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item29");
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
	newElement.innerHTML = "DHCP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "DHCP which stands for Dynamic Host Configuration Protocol is a network management protocol found on the application layer of the TCP/IP model. DHCP provides an automatic way of assigning IP addresses to new hosts wishing to connect to a network. DHCP uses the client/server model and it provides benefits such as reduced network administration (since IP addresses don’t have to be manually assigned) and reliability. DHCP servers are often found in routers and access points by default eliminating the need to manually assigning IP addresses (which saves a lot of time). ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "How does a DHCP server work?";
	element.appendChild(newElement);
	
	
	newElement = document.createElement("ol");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Client computer connects to a network / successfully authenticates";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Client computer sends a broadcast request to the router (DISCOVER / DHCPDISCOVER) which basically looks for a DHCP server";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "If a DHCP server responds, the client is assigned an IP address ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Client is successfully connected to the network with a valid local IP address";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "If your computer isn’t connected to a network the built-in DHCP client assigns the computer a random IP address. DHCP operates on the UDP port 67 on the DHCP server and port 68 on the DHCP client.";
	element.appendChild(newElement);
	
}

function loadSIPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item30");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "SIP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SIP which stands Session Initiation Protocol is a communications protocol which application layer of the TCP/IP stack. SIP is a protocol used in VoIP (Voice over IP) calls, it’s basically responsible for connecting, monitoring and disconnecting calls. SIP clients usually use either TCP or UDP on ports 5060 (unencrypted) and 5061 (encrypted). It’s used in applications such as WhatsApp, Skype and Messenger.";
	element.appendChild(newElement);
	
}

function loadRTPPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item31");
	activeItem.className = "sideNavActiveChildItem";
	
	var mainContent = document.getElementsByClassName("content")[0];
	
	$('.content-container').remove();
	
	var newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	var element = document.getElementsByClassName("content-container")[0];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "RTP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "RTP which stands for Real-time Transport Protocol is a network protocol which sits on the application layer of the TCP/IP stack. RTP is a set of rules which define how audio and video should be sent over the internet, this can be found in RFC 1889. RTP is most commonly used in telephony and operates on a range of ports. ";
	element.appendChild(newElement);
	
}