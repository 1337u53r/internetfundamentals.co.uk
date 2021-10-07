// JavaScript Document

function loadIPSecurityPage() {
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
	newElement.innerHTML = "IP Security";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "IPsec is a network protocol suite that was created (by the IETF) to provide a method of secure communication across IP networks. IPsec operates on network layer of the OSI reference model, it’s main purpose is to protect the confidentiality and integrity of all data flowing through a network (achieved by encrypting all sensitive traffic). IPsec is one of the many protocols used to protect VPNs (Virtual Private Networks) and provides a way of protecting against session hijacking.  IPsec provides two services to protect information: AH and ESP. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "IPsec Services";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Authentication Header (AH)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is way of authenticating the sender of data by looking for changes and also provides other authentication services. This method used only for authenticating IP traffic and this is done by computing a cryptographic hash. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Encapsulating Security Payload (ESP)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is used to authenticate information as well a method of encrypting data. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[2];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "IPsec Modes";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Tunnel Mode";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is the default mode used in IPsec and in this mode the entire IP packet is protected. This is done by taking the entire packet and wrapping it using IPsec (by encrypting it and adding a new IP header). Unlike transport mode tunnel mode encrypts both the data and the header of a packet. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Transport Mode";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This mode is mainly used to provide end-to-end communication between hosts (for example a client and server). It’s important to note transport mode only encrypts the data held in a packet.";
	element.appendChild(newElement);
	
}


function loadPKIPage() {
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
	newElement.innerHTML = "What is Public Key Infrastructure?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "PKI is a Public Key asymmetric cryptosystem / infrastructure used to “manage and distribute keys” (CEH v9: Certified Ethical Hacker Version 9 Study Guide n.d.) in order to assure the recipient that any data sent over a network such as the internet is securely exchanged (between the sender & the recipient).  This framework allows “IT systems to have a high level of information confidentiality through strong data encryption and high level of confidence” (CEH v9: Certified Ethical Hacker Version 9 Study Guide n.d.). A high level of confidence is retained by using authentication with digital certificates and digital signatures. PKI isn’t required for secure data exchange (which is needed in order to retain confidentiality) but however is required for authentication or verifying the identity of the party sending the data. Any data exchanged over the internet relies on PKI for security (Confidentiality & Authentication) to confirm the legitimacy of party sending the data. With PKI anyone can send confidential information to another party by using the Public Key however this message can only be decrypted using a private key which only the recipient has access to. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Elements of a PKI System";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "PKI systems use a Digital Certificate (credential) to authenticate and identify a user, device or service. This is however not the same as a Digital Signature; a digital signature is a unique digital thumbprint used to identity a user or organisation whereas a Digital Certificate is issued by a CA to verify the identity of the certificate owner. In order to verify this a hash function is used re-create & compare the hash(es) to see if it matches with the original sender’s hash, this means that the integrity of information can be checked and validated. If the data has been tampered the hashes would be different therefore meaning that Confidentiality is not preserved. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "The elements included in a PKI system:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Certificate Authority (CA) also known as the trusted party, this 'acts as the root of trust' and allows us to identify the identity of a user, service or device. This is used to manage the lifecycle of digital certificates.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Registration Authority also known as a subordinate CA are used to 'issue certificates for specific uses permitted by the root'. This can accept requests, verify a person’s identity and pass information to the CA.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Certificate Database used to store certificate requests, issued certificates & revoked certificates.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Certificate store is used to store certificates and private keys locally on a local computer.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[2];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "PKI - Non-Repudiation";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Non-repudiation is one of four concepts (Confidentiality, Authentication, Integrity and Non-repudiation) in Public Key Infrastructure (PKI). Non-repudiation is basically the assurance that someone cannot deny something (actions). This means that the creator or author of a message cannot deny their actions after a message has been sent. PKI achieves this through the usage of digital signatures meaning that every time a message is sent a digital signature is attached to the message linking the author / creator. A digital signature is an authentication method used to prevent the tampering of data during transmission. When a message is sent a digital signature is used to encrypt a message using the author’s private key. So, if the data/message was indeed tampered with it would reflect the digital signature of the message. A digital signature is generated using a hashing algorithm however the level of security depends on the security of the private key used to sign it. Non-repudiation is also maintained by attaching a timestamp, providing a trail of when the message was sent / received.  In order to establish non-repudiation, it’s important to note that the private key must be securely stored at all times, otherwise the security is broken. ";
	element.appendChild(newElement);
	
}


function loadCryptographyEncryptionPage() {
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
	newElement.innerHTML = "What is Cryptography?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Cryptography is the science of reading or writing secret messages or codes using encryption (the use of codes and ciphers). Humans have been some form of encryption for a very long time to send messages and to communicate with other countries. It’s only in the recent decades cryptography has advanced from “classic cryptography” to “modern cryptography”; this is because of the recent advancements in “electrical and electromechanical machines”. Modern cryptography emerged from electromechanical rotor cipher machines such as the Enigma machine which was used by the German military during World War 2 to send encrypted messages. Since then computers have evolved and the need for cryptography have become essential for areas like information security. Modern day applications rely on cryptography to keep for data safe from unauthorised users. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Examples of old cryptographic encryption techniques include:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Morse code";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Caesar code";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Roman code";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Examples of modern cryptographic encryption techniques include:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "AES code";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "RSA code";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Blowfish code";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Cryptography in Information Security";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Cryptography is essential because it provides the five basic elements of information security:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ol");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Confidentiality: encryption is used to prevent unauthorised access confidential information. Using encryption means that all of our data could be scrambled into meaningless text meaning that we can limit the impacts of a future cyber-attacks. By using encryption, we can slow down the process of unauthorised users getting hold of confidential information.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Authentication: cryptography is vital for authentication and storing credentials safely and prevents spoofing and forgeries. ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Data Integrity: cryptographic hashing allows us to check if data has been tampered.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Non-repudiation:  assurance that someone cannot deny something (actions).";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Access Control: process of restricting access in order retain confidentiality and to prevent unauthorised access to information systems. We can use cryptography to implement strong authentication methods, we can also encrypt our data meaning that only the right person with the right key can access this data.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[2];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "What is Encryption and how does it work?";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Encryption is the process of converting plain text (or a message) into cipher text (random and meaningless text). ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Types of Encryption:";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "There are three types of encryption methods:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ol");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Symmetric Key Encryption or Private Key Encryption";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Asymmetric or Public Key Encryption";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Hashing";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "All encryption methods have an encryption and decryption key (except hashing). Symmetric Key encryption uses the same encryption and decryption key (private key) meaning that both parties must have the same key to communicate. One other method of encryption is Public Key Encryption; Public Key Encryption uses a Public key and Private key. The other way of encrypting a file is by using a method called “Hashing”; hashing is the process of creating a “unique and fixed-length signature for a message or data set”. Because each “hash” is unique to a specific message it means that it can be used to track data tampering. Hashing is the only method of encryption that cannot be decrypted, this is what allows us to check files or data for modification. Hashing however is not considered to be a encryption but rather a process of encryption.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Modern day encryption algorithms and cryptographic systems use the Public Key encryption method; this uses a public key and a private key to encrypt files (these encryption keys (public and private) are stored in a keychain). When encrypting a file a public key is used to encrypt the file and a private is used to decrypt the file. The public key is freely available to anyone whereas the  private key should only be accessible and be used by the recipient.";
	element.appendChild(newElement);
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/encrypted.svg";
	newElement.className = "image";
	newElement.style.width = "50%";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[3];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Encryption Algorithms";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Examples of Encryption Algorithms";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "AES 512";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Bcrypt / Blowfish";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "RSA";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "AES 512";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "AES 512 also known as the “Advanced Encryption Standard 512” is an example of a popular, modern symmetric encryption algorithm. The “512” represents the key lengths that it supports. Because this algorithm is symmetric it means that it does not use public and private keys but instead a shared key.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Secure (Most)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Supports larger key sizes";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Fast in both hardware and software";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Harder to implement";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Not ubiquitous";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Bcrypt / Blowfish";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Bcrypt is a hashing algorithm based on the Blowfish encryption algorithm designed by Bruce Schneier. Blowfish is an asymmetric encryption algorithm meaning that it uses a private key and a public key.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Strong";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Quick (Speed of algorithm)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Supports longer key lengths (up to 448 bits)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Consumes a lot of RAM";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Long setup time";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Can only be used for software";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "RSA";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "RSA is an asymmetric encryption algorithm; it works by factoring the product of two prime numbers but however still uses a public and private key. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Advantages:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Fast and simple ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Easier to implement than most encryption algorithms ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Easier to understand";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Widely used";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Disadvantages:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Speed: not as fast as symmetric encryption algorithms";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Slow key generation";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Vulnerable to GCD attack (Common factor attack) if poorly implemented";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[4];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Drawbacks and Disadvantages of Encryption";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Although Cryptography has many advantages it also has many drawbacks which cause problems in a business.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Here are a couple of examples:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Can be misused: modern malwares’ such as Ransomware are specifically designed to use cryptography and encryption to encrypt files for malicious reasons. This can be a pain for businesses as they usually require a them to pay a ransom in order get the decryption key to unlock the files. ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Prevents high availability: high availability is an important aspect of information security using cryptography means that high availability cannot be ensured.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Accessibility: using cryptography means that accessibility can be difficult even for a legitimate user.";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Prone to vulnerabilities: using cryptography doesn’t protect against vulnerabilities. Poorly designed cryptographic systems are just as vulnerable if not designed properly ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
}

function loadProtocolsPage() {
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
	newElement.innerHTML = "Secure Shell (SSH)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SSH which stands for Secure Shell is very much like Telnet however it’s a lot more evolved and was designed with security in mind. SSH is only found on Linux and UNIX systems and it lies on the application layer of the TCP/IP stack. Much like Telnet SSH once connected to a remote host, SSH provides a way of controlling a remote host via a virtual terminal. SSH uses the client/server model to initiate sessions meaning that users have be authenticated using correct credentials. The SSH suite include the following: slogin, SSH and SCP (Secure Copy). It’s also important to note that SSH operates on the TCP port 22 by default. Over the years SSH has evolved from SSH1 to SSH2 providing many security improvements.";
	element.appendChild(newElement);
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "SSH Suite";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "SFTP (SSH File Transfer Protocol)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SFTP which stands for SSH File Transfer Protocol is an extension of the SSH (Secure Shell) protocol found on the application layer of the TCP/IP model. Although it is built on top of SSH, it is a separate protocol in its right. SFTP has many security advantages over the standard the File Transfer Protocol and was indeed developed to provide a secure way of sending data (files) between two (networked) hosts on an unsecure network. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The command-line command for initiating an SFTP session is shown below. Replace 'username@hostname' with appropriate details.";
	element.appendChild(newElement);
	
	var code = '<code><pre class="code-block">sftp username@hostname</pre></code>';              
	$(".content-container").append(code);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "SFTP uses the SSH2 encryption algorithm to authenticate and establish SFTP connections. STFP can be found on most modern desktop operating system command-lines or third-party tools (such as CyberDuck and WINSCP). Essentially SFTP is a secure alternative to FTP and unlike FTP, SFTP operates on the SSH port 22. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Slogin (Secure login)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Slogin which stands for secure login is a computer authentication method using SSH. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Slogin (Secure login)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is a method which allows users to securely copy files over from one host to another over an SSH connection. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "The command-line syntax for copying files via an SSH connection is shown below.";
	element.appendChild(newElement);
	
	code = '<code><pre class="code-block">scp [options] username1@source_hostname:directory/filename1 <br>username2@destination_hostname:directory/filename</pre></code>';              
	$(".content-container").append(code);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "RADIUS";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "RADIUS which stands for Remote Authentication Dial-in User Service is networking protocol (IETF RFC 2865) developed by Livingston Enterprises, Inc to provide a method of authentication (as well as authorization and accounting). It’s used in computer systems and network equipment to check whether a dial-in user has access to that certain device. RADIUS uses the client/server model and it basically allows remote access servers to communicate with a central server to ensure that a dial-in user has access rights to access the requested system. The RADIUS protocol also provides a way for companies to store user profiles in a database so that other remote access servers can access it. This means that a company can setup a policy and administer all access from one network point making it easier for them to keep track of network usage and other important info. RADIUS increases security by preventing all unauthorized access in networks while providing a centralised method of authentication. It’s important to note that RADIUS is most commonly used by Internet Service Providers (ISPs) for managing DSL networks. RRAS which stands for Routing and Remote Access Service is a Microsoft API and server software which can be used as a RADIUS client to communicate with RADIUS servers. NAS (Network Access Server) can also be used to operate as a RADIUS client. All communications between a RADIUS client and RADIUS server is encrypted. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[2];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "TACACS";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "TACACS which stands for Terminal Access Controller Access Control System is network encryption protocol used to provide authentication in Unix and Linux systems. It’s defined in the IETF’s RFC 1492 and can be thought as an older alternative to the RADIUS access control protocol. TACACS operates by checking whether a user has access to network/database by communicating between a remote server and the authentication server. Both TACACS and XTACACS has been replaced by their successor TACACS+ however it’s important to note that TACACS+ is a completely new protocol in its right (making it incompatible with TACACS or XTACACS). TACACS+ uses TCP therefore making it more reliable/secure than RADIUS which uses UDP. The older TACACS protocol operates on the port 49 by default. Both TACACS and TACACS+ were both developed by Cisco making them a Cisco proprietary protocol. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[3];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "CHAP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "CHAP which stands for Challenge Handshake Authentication Protocol is an authentication protocol used over the Point-to-Point (PPP) protocol. CHAP has been defined in IETF’s RFC 1994 standard and can be thought of as a more secure procedure than Password Authentication Procedure (PAP). Unlike PAP CHAP doesn’t send the password in clear text but instead in the form of an encrypted hash known as a challenge. CHAP operates by authenticating a user to a network entity such as a ISP or server. CHAP is most commonly used to provide an added layer of security, it does this by sending a challenge (MD5 hash) to the client. This client then uses a hashing algorithm or function to calculate the value and if the value matches the value sent by the server the user/client is allowed/given access (otherwise the session is terminated). CHAP provides protection against attacks such as the playback attack.";
	element.appendChild(newElement);
	
	newElement = document.createElement("img");
	newElement.src = "../resources/images/CHAP.svg";
	newElement.className = "image";
	newElement.style.width = "50%";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[4];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "EAP";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "EAP which stands for Extensible Authentication Protocol is an authentication protocol/framework used in the Point-to-Point protocol and wireless networks. It’s defined in IETF’s RFC 3748 / 2284 standard and supports a range of authentication methods such as public key encryption, certificates and tokens. It operates by sending authentication user request to a WLAN through an Access Point. The server’s “authenticator” then requests the transceiver for client ID verification and if the identity is verified then the session is authenticated. EAP plays an important role in protecting wireless networks (802.1X), Ethernet LANs and VPNs. LEAP (Lightweight Extensible Authentication Protocol) is an EAP framework developed by Cisco based on MS-CHAP and only uses passwords. LEAP proved to be very unpopular resulting in Cisco, Microsoft and RSA Security developing a new framework called PEAP (Protected Extensible Authentication Protocol). ";
	element.appendChild(newElement);
}

function loadTrafficSniffingPage() {
	"use strict";
	loader();
	var idleItem = document.getElementById("item1");
	idleItem.className = "sideNavChildItem";
	var activeItem = document.getElementById("item6");
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
	newElement.innerHTML = "Traffic Sniffing";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Traffic sniffing also known as packet sniffing is the process of intercepting and capturing all incoming and outgoing packets transmitted over a network. Packet sniffing is a technique used by both IT network professionals and by hackers/malicious users. This can be done using a packet analyser/sniffer, a network utility which allows users to automate the process. Packet analysers can be used to capture packets on any network interface such as Ethernet, WiFi and even Bluetooth. Traffic sniffing is used by network professionals as a way of debugging, monitoring and diagnosing network issues. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Packet Analysers (Sniffers / Network Protocol Analysers)";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Network Protocol Analysers also known as Sniffers are used to capture and scan traffic flowing through a network. A Sniffer has the ability to intercept and capture packets, this process is also known as a Man-In-The-Middle Attack by information security professionals. In a business network environment network administrators use sniffers to sort through traffic (this can be both protected and unprotected traffic) to troubleshoot an issue or find out what is slowing down a network. Sniffers however can be a disadvantage, if used unethically these can be used to perform Man-In-The-Middle attacks such as: taking over authenticated sessions, modifying / manipulating data and remotely executing authorised commands. This is why it’s important to ensure that networks are protected against this. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Examples of Sniffers:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Wireshark";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Tcpdump";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Cain &amp; Abel";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "NetworkMiner";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Kismet";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Windump";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Ntop";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "They all have their advantages and unique features however Wireshark is the most popular and has become an industry standard for both network security professionals and hackers. This is because Wireshark has the ability to intercept and capture data sent through all communication channels (which use communication protocols).";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Communication Protocols:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "HTTP (HyperText Transfer Protocol): Used for the World Wide Web, this protocol defines how webpages / messages are formatted, transmitted and displayed in a browser. Vulnerable to sniffing. ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "HTTPS (HyperText Transfer Protocol Secure): Exactly the same as HTTP but isn’t vulnerable to sniffing.  ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "SMTP (Simple Mail Transfer Protocol): This is the standard for emails, also vulnerable to sniffing. ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "FTP (File Transfer Protocol): Used to send and received files on a network, also vulnerable to sniffing.  ";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Key Functions of a Packet Analyser:";
	element.appendChild(newElement);
	
	newElement = document.createElement("ul");
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Used to analyse network performance issues (such as bandwidth)";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Used to monitor unauthorised hacking attempts or monitor unusual connections";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	childElement = document.createElement("li");
	childElement.innerHTML = "Used to reverse-engineer communication issues";
	newElement.appendChild(childElement);
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Monitoring Networks Using Sniffers";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Although there are many powerful and open-source Network Protocol Analysers Wireshark has become the most popular one this is due to how well it functions and the vast of protocols it supports. Wireshark is also one of the few network Sniffers that provides a GUI by default while supporting all three major operating system platforms. In a business network environment Wireshark may be used by network administrators to identify performance problems and sometimes a business hires an external network security expert (like an “Ethical Hacker”) who also uses Wireshark to do a security audit. For e.g. if a network administrator wants to troubleshoot and find out what application is causing the network to slow down he might leave Wireshark running for a given period of time (promiscuous mode) and then use this information to find a fix. Wireshark can also be used to find security issues for example: if let’s say an employee’s email was compromised and the organisation wanted to find out how this happened they might hire an ethical hacker to try and recreate the scenario.  ";
	element.appendChild(newElement);
	
	newElement = document.createElement("b");
	newElement.innerHTML = "Protecting Against Packet Sniffing Attacks";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "Network administrators can protect networks against packet sniffing attacks by ensuring that all sensitive data sent over the network is encrypted. This can be done by enforcing encrypted communication protocols such as HTTPS (SSL / TLS), SFTP and SSH.";
	element.appendChild(newElement);
	
}


function loadAttacksPage() {
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
	newElement.innerHTML = "FTP Bounce Attack";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "This is an attack affecting FTP servers and was discovered in 1995. FTP Bounce attack works by taking advantage of passive mode FTP and sending the server the command to initiate a data session. This leads to the server sending the data elsewhere (wherever the attacker wants). Modern FTP servers are protected against this particular attack therefore it’s quite rare. ";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A FTP bounce attack is carried out by using the source (attacker) machine to send a PORT command with the IP address and port number of the destination machine. This tricks the FTP server to send the files to the destination machine instead of the source machine.";
	element.appendChild(newElement);
	
	newElement = document.createElement("div");
	newElement.className = "content-container";
	mainContent.appendChild(newElement);
	
	element = document.getElementsByClassName("content-container")[1];
	element.innerHTML = "";
	
	newElement = document.createElement("h3");
	newElement.innerHTML = "Smurf Attack";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A Smurf attack is a type of DDoS (Distributed Denial of Service) attack, it works by flooding a victim (server) with a flood of ICMP packets. This essentially overloads the server and forces it to go offline and become unavailable. Although this quite an uncomplicated attack it is known to be a very destructive attack especially if the victim is a web server. Sometimes attackers use Denial of Service attacks as a way of causing a distraction for some other future or ongoing attack. It’s important to note that DoS and DDoS have slightly different meanings, DoS is carried out by one computer whereas DDoS is carried out by a group of (zombie) computers. Most of the time DDoS attacks are carried out by zombie means which have already been exploited meaning that they are part of a botnet. Botnets are usually controlled by attackers from a command and control system to flood victims and take down that host.";
	element.appendChild(newElement);
	
	newElement = document.createElement("p");
	newElement.innerHTML = "A Smurf attack works by spoofing the attacker IP into the victim IP and sending a PING command/request to all the computers on the subnet. This trick those machines into thinking that the PING request actually came from the victim machine resulting in all those machines sending back a PING response essentially causing a DDoS attack.";
	element.appendChild(newElement);
	
	
}
