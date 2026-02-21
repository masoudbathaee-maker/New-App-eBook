{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red193\green193\blue193;}
{\*\expandedcolortbl;;\cssrgb\c80000\c80000\c80000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
// app.js\
\
// ----- \uc0\u1583 \u1575 \u1583 \u1607 \u8204 \u1607 \u1575 \u1740  \u1705 \u1578 \u1575 \u1576 \u8204 \u1607 \u1575  -----\
const ebooks = \{\
  elam: [\
    \{ title: "Elam History", file: "./pdf/elam1.pdf" \}\
  ],\
  persia: [\
    \{ title: "Persia Empire", file: "./pdf/persia1.pdf" \}\
  ],\
  neareast: [\
    \{ title: "Near East Studies", file: "./pdf/near1.pdf" \}\
  ]\
\};\
\
// ----- \uc0\u1705 \u1575 \u1585 \u1576 \u1585 \u1575 \u1606  \u1604 \u1608 \u1705 \u1575 \u1604  (\u1576 \u1585 \u1575 \u1740  \u1587 \u1575 \u1583 \u1607 \u8204 \u1587 \u1575 \u1586 \u1740 ) -----\
let users = JSON.parse(localStorage.getItem("users")) || [];\
\
// ----- \uc0\u1604 \u1575 \u1711 \u1740 \u1606  \u1608  \u1579 \u1576 \u1578  \u1606 \u1575 \u1605  -----\
function showLogin() \{\
  document.getElementById("loginModal").style.display = "block";\
\}\
\
function closeLogin() \{\
  document.getElementById("loginModal").style.display = "none";\
\}\
\
function login() \{\
  const username = document.getElementById("loginUsername").value;\
  const password = document.getElementById("loginPassword").value;\
  const user = users.find(u => u.username === username && u.password === password);\
  if (user) \{\
    document.getElementById("loginModal").style.display = "none";\
    document.getElementById("loginBtn").style.display = "none";\
    document.getElementById("welcomeMsg").style.display = "inline";\
    document.getElementById("username").innerText = username;\
    alert("Login successful!");\
  \} else \{\
    alert("Invalid username or password.");\
  \}\
\}\
\
function register() \{\
  const username = document.getElementById("loginUsername").value;\
  const password = document.getElementById("loginPassword").value;\
  if (!username || !password) \{\
    alert("Enter username and password");\
    return;\
  \}\
  if (users.find(u => u.username === username)) \{\
    alert("Username already exists!");\
    return;\
  \}\
  users.push(\{ username, password \});\
  localStorage.setItem("users", JSON.stringify(users));\
  alert("Registration successful! Now login.");\
\}\
\
// ----- \uc0\u1576 \u1575 \u1586  \u1705 \u1585 \u1583 \u1606  \u1583 \u1587 \u1578 \u1607 \u8204 \u1576 \u1606 \u1583 \u1740  -----\
function openCategory(cat) \{\
  const content = document.getElementById("content");\
  content.innerHTML = "";\
  ebooks[cat].forEach(book => \{\
    content.innerHTML += `\
      <div class="card" onclick="readBook('$\{book.file\}')">\
        <h3>$\{book.title\}</h3>\
      </div>\
    `;\
  \});\
\}\
\
// ----- \uc0\u1580 \u1587 \u1578 \u1580 \u1608 \u1740  \u1705 \u1578 \u1575 \u1576 \u8204 \u1607 \u1575  -----\
function searchBooks() \{\
  const term = document.getElementById("searchInput").value.toLowerCase();\
  const content = document.getElementById("content");\
  content.innerHTML = "";\
\
  Object.keys(ebooks).forEach(cat => \{\
    ebooks[cat].forEach(book => \{\
      if (book.title.toLowerCase().includes(term)) \{\
        content.innerHTML += `\
          <div class="card" onclick="readBook('$\{book.file\}')">\
            <h3>$\{book.title\}</h3>\
          </div>\
        `;\
      \}\
    \});\
  \});\
\}\
\
// ----- \uc0\u1576 \u1575 \u1586  \u1705 \u1585 \u1583 \u1606  \u1601 \u1575 \u1740 \u1604  PDF/EPUB \u1583 \u1585  ReadiumJS -----\
function readBook(file) \{\
  const content = document.getElementById("content");\
  content.innerHTML = `\
    <iframe src="./readium/index.html?file=$\{file\}" style="width:100%; height:600px; border:none;"></iframe>\
  `;\
\}\
\
// ----- \uc0\u1576 \u1575 \u1586 \u1711 \u1588 \u1578  \u1576 \u1607  \u1589 \u1601 \u1581 \u1607  \u1575 \u1589 \u1604 \u1740  -----\
function goHome() \{\
  const content = document.getElementById("content");\
  content.innerHTML = '<h2>Welcome! Select a category or search for a book.</h2>';\
\}}