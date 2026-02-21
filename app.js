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
// \uc0\u1604 \u1740 \u1587 \u1578  \u1705 \u1578 \u1575 \u1576 \u8204 \u1607 \u1575  \u1608  \u1605 \u1587 \u1740 \u1585  PDF \u1607 \u1575 \
const ebooks = \{\
  elam: [\
    \{ title: "Elam History", pdf: "./pdf/elam1.pdf" \}\
  ],\
  persia: [\
    \{ title: "Persia Empire", pdf: "./pdf/persia1.pdf" \}\
  ],\
  neareast: [\
    \{ title: "Near East Studies", pdf: "./pdf/near1.pdf" \}\
  ]\
\};\
\
// \uc0\u1576 \u1575 \u1586 \u1711 \u1588 \u1578  \u1576 \u1607  \u1589 \u1601 \u1581 \u1607  \u1575 \u1589 \u1604 \u1740 \
function goHome() \{\
  const content = document.getElementById("content");\
  content.innerHTML = '<h2>Welcome! Select a category to start reading.</h2>';\
\}\
\
// \uc0\u1606 \u1605 \u1575 \u1740 \u1588  \u1583 \u1587 \u1578 \u1607 \u8204 \u1576 \u1606 \u1583 \u1740  \u1705 \u1578 \u1575 \u1576 \u8204 \u1607 \u1575 \
function openCategory(cat) \{\
  const content = document.getElementById("content");\
  content.innerHTML = ""; // \uc0\u1582 \u1575 \u1604 \u1740  \u1705 \u1585 \u1583 \u1606  \u1605 \u1581 \u1578 \u1608 \u1575 \
\
  ebooks[cat].forEach(book => \{\
    content.innerHTML += `\
      <div class="card" onclick="readPDF('$\{book.pdf\}')">\
        <h3>$\{book.title\}</h3>\
      </div>\
    `;\
  \});\
\}\
\
// \uc0\u1576 \u1575 \u1586  \u1705 \u1585 \u1583 \u1606  PDF\
function readPDF(pdf) \{\
  const content = document.getElementById("content");\
  content.innerHTML = `<iframe src="$\{pdf\}"></iframe>`;\
\}}