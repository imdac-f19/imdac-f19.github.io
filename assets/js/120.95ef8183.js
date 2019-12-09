(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{302:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"using-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Methods")]),e._v(" "),a("h2",{attrs:{id:"using-createelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-createelement","aria-hidden":"true"}},[e._v("#")]),e._v(" Using "),a("code",[e._v("createElement()")])]),e._v(" "),a("p",[e._v("The proper way to create HTML with JavaScript is to use the "),a("code",[e._v("createElement()")]),e._v(" function. While best practice states that this is the preferred technique, due to it significantly better performance, it is also much more complex and difficult to use for novice developers. Furthermore, the real life benefits is marginal.")]),e._v(" "),a("h3",{attrs:{id:"creating-html-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-html-element","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating HTML Element")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("createElement()")]),e._v(" method creates an HTML element with a specified tag name. The new element will have all of the properties and methods of elements retrieved from the DOM. However, the new element will only exist in JavaScript, as it has yet to be inserted into the HTML.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" $about "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n$about"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'about.html'")]),e._v("\n$about"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("textContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'About'")]),e._v("\n")])])]),a("h3",{attrs:{id:"inserting-html-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inserting-html-element","aria-hidden":"true"}},[e._v("#")]),e._v(" Inserting HTML Element")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The techniques of inserting HTML elements will "),a("strong",[e._v("NOT")]),e._v(" with template literals discussed in the previous section.")])]),e._v(" "),a("p",[e._v("When using the "),a("code",[e._v("createElement()")]),e._v(", there are two common methods for inserting elements into HTML: "),a("code",[e._v("appendChild()")]),e._v(" and "),a("code",[e._v("insertBefore()")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"the-appendchild-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-appendchild-method","aria-hidden":"true"}},[e._v("#")]),e._v(" The "),a("code",[e._v("appendChild()")]),e._v(" method")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("appendChild()")]),e._v(" method adds a node to the end of a specified parent. With "),a("code",[e._v("appendChild()")]),e._v(" the parent element calls the method, and the new element is passed as a function parameter.")]),e._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"HTML Creation - Using appendChild()",src:"//codepen.io/IMD/embed/JzXgxw/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/IMD/pen/JzXgxw/"}},[e._v("HTML Creation - Using appendChild()")]),e._v(" by IMD\n  ("),a("a",{attrs:{href:"https://codepen.io/IMD"}},[e._v("@IMD")]),e._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),a("h4",{attrs:{id:"the-insertbefore-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-insertbefore-method","aria-hidden":"true"}},[e._v("#")]),e._v(" The "),a("code",[e._v("insertBefore()")]),e._v(" method")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("insertBefore()")]),e._v(" method will insert an element before a specified child of a specified parent. With "),a("code",[e._v("insertBefore()")]),e._v(" the parent element calls the method, and the new element is passed as the first function parameter and the child element to insert before will be the second element.")]),e._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"HTML Creation - Using insertBefore()",src:"//codepen.io/IMD/embed/ywJBLv/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/IMD/pen/ywJBLv/"}},[e._v("HTML Creation - Using insertBefore()")]),e._v(" by IMD\n  ("),a("a",{attrs:{href:"https://codepen.io/IMD"}},[e._v("@IMD")]),e._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")])])}],!1,null,null,null);t.default=s.exports}}]);