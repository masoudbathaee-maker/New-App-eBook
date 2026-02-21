{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red193\green193\blue193;\red140\green211\blue254;\red24\green24\blue24;
\red202\green202\blue202;\red67\green192\blue160;\red194\green126\blue101;\red183\green111\blue179;\red212\green214\blue154;
\red70\green137\blue204;}
{\*\expandedcolortbl;;\cssrgb\c80000\c80000\c80000;\cssrgb\c61176\c86275\c99608;\cssrgb\c12157\c12157\c12157;
\cssrgb\c83137\c83137\c83137;\cssrgb\c30588\c78824\c69020;\cssrgb\c80784\c56863\c47059;\cssrgb\c77255\c52549\c75294;\cssrgb\c86275\c86275\c66667;
\cssrgb\c33725\c61176\c83922;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 const\cf2 \strokec2  \cf3 \strokec3 ebooks\cf2 \strokec2  \cf5 \strokec5 =\cf2 \strokec2  \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb4 \strokec6 elam\cf2 \strokec2 :[\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb4 \strokec6 title\cf2 \strokec2 :\cf7 \strokec7 "Elam History"\cf2 \strokec2 ,\cb1 \
\
\cf6 \cb4 \strokec6 pdf\cf2 \strokec2 :\cf7 \strokec7 "pdf/elam1.pdf"\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \}\cb1 \
\cb4 ],\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb4 \strokec6 persia\cf2 \strokec2 :[\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb4 \strokec6 title\cf2 \strokec2 :\cf7 \strokec7 "Persia Empire"\cf2 \strokec2 ,\cb1 \
\
\cf6 \cb4 \strokec6 pdf\cf2 \strokec2 :\cf7 \strokec7 "pdf/persia1.pdf"\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \}\cb1 \
\cb4 ],\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb4 \strokec6 neareast\cf2 \strokec2 :[\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb4 \strokec6 title\cf2 \strokec2 :\cf7 \strokec7 "Near East Studies"\cf2 \strokec2 ,\cb1 \
\
\cf6 \cb4 \strokec6 pdf\cf2 \strokec2 :\cf7 \strokec7 "pdf/near1.pdf"\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \}\cb1 \
\
\cb4 ]\cb1 \
\
\cb4 \}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb4 \strokec8 function\cf2 \strokec2  \cf9 \strokec9 goHome\cf2 \strokec2 ()\{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 location\cf2 \strokec2 .\cf9 \strokec9 reload\cf2 \strokec2 ()\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb4 \strokec8 function\cf2 \strokec2  \cf9 \strokec9 openCategory\cf2 \strokec2 (\cf3 \strokec3 cat\cf2 \strokec2 )\{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 let\cf2 \strokec2  \cf3 \strokec3 content\cf5 \strokec5 =\cf3 \strokec3 document\cf2 \strokec2 .\cf9 \strokec9 getElementById\cf2 \strokec2 (\cf7 \strokec7 "content"\cf2 \strokec2 )\cb1 \
\
\cf3 \cb4 \strokec3 content\cf2 \strokec2 .\cf6 \strokec6 innerHTML\cf5 \strokec5 =\cf7 \strokec7 ""\cf2 \cb1 \strokec2 \
\
\cf3 \cb4 \strokec3 ebooks\cf2 \strokec2 [\cf3 \strokec3 cat\cf2 \strokec2 ].\cf9 \strokec9 forEach\cf2 \strokec2 (\cf3 \strokec3 book\cf5 \strokec5 =>\cf2 \strokec2 \{\cb1 \
\
\cf3 \cb4 \strokec3 content\cf2 \strokec2 .\cf6 \strokec6 innerHTML\cf5 \strokec5 +=\cf7 \strokec7 `\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb4 \strokec5 <\cf3 \strokec3 div\cf2 \strokec2  \cf3 \strokec3 class\cf5 \strokec5 =\cf7 \strokec7 "card"\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 onclick\cf5 \strokec5 =\cf7 \strokec7 "readPDF('$\{book.pdf\}')"\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf10 \cb4 \strokec10 <h3>\cf2 \strokec2 $\{\cf3 \strokec3 book\cf2 \strokec2 .\cf6 \strokec6 title\cf2 \strokec2 \}\cf5 \strokec5 </\cf3 \strokec3 h3\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb4 \strokec5 </\cf3 \strokec3 div\cf5 \strokec5 >\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb4 \strokec7 `\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \})\cb1 \
\cb4 \}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb4 \strokec8 function\cf2 \strokec2  \cf9 \strokec9 readPDF\cf2 \strokec2 (\cf3 \strokec3 pdf\cf2 \strokec2 )\{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf3 \cb4 \strokec3 document\cf2 \strokec2 .\cf9 \strokec9 getElementById\cf2 \strokec2 (\cf7 \strokec7 "content"\cf2 \strokec2 )\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 .\cf3 \strokec3 innerHTML\cf5 \strokec5 =\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb4 \strokec7 `<iframe src="$\{pdf\}"></iframe>`\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb4 \}\cb1 \
\
}