(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{268:function(a,p,m){"use strict";m.r(p);var e=m(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,p=a.$createElement,m=a._self._c||p;return m("div",{staticClass:"content"},[m("h1",{attrs:{id:"array-methods"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#array-methods","aria-hidden":"true"}},[a._v("#")]),a._v(" Array Methods")]),a._v(" "),m("p",[a._v("Working with arrays")]),a._v(" "),m("ul",[m("li",[a._v("isArray")]),a._v(" "),m("li",[a._v("join")]),a._v(" "),m("li",[a._v("concat")]),a._v(" "),m("li",[a._v("spread syntax")])]),a._v(" "),m("p",[a._v("Methods that manipulate an array")]),a._v(" "),m("ul",[m("li",[a._v("push")]),a._v(" "),m("li",[a._v("pop")]),a._v(" "),m("li",[a._v("shift")]),a._v(" "),m("li",[a._v("unshift")]),a._v(" "),m("li",[a._v("slice")]),a._v(" "),m("li",[a._v("splice")]),a._v(" "),m("li",[a._v("reverse")]),a._v(" "),m("li",[a._v("sort")])]),a._v(" "),m("p",[a._v("Methods that search inside of an array")]),a._v(" "),m("ul",[m("li",[a._v("find()")]),a._v(" "),m("li",[a._v("findIndex()")]),a._v(" "),m("li",[a._v("includes")]),a._v(" "),m("li",[a._v("indexOf")]),a._v(" "),m("li",[a._v("lastIndexOf")])]),a._v(" "),m("p",[a._v("Methods that create a new array or value from an existing arrays")]),a._v(" "),m("ul",[m("li",[m("p",[a._v("concat")])]),a._v(" "),m("li",[m("p",[a._v("filter")])]),a._v(" "),m("li",[m("p",[a._v("foreach")])]),a._v(" "),m("li",[m("p",[a._v("map")])]),a._v(" "),m("li",[m("p",[a._v("reduce")])]),a._v(" "),m("li",[m("p",[a._v("isArray")])]),a._v(" "),m("li",[m("p",[a._v("join")])])]),a._v(" "),m("p",[a._v("An array is a list of items. An example of an array could be a grocery list.")]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/NRqmoR/?height=400&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"400",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/NRqmoR/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;NRqmoR&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("h2",{attrs:{id:"accessing-array-items"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#accessing-array-items","aria-hidden":"true"}},[a._v("#")]),a._v(" Accessing Array Items")]),a._v(" "),m("p",[a._v("Our list of groceries are grouped in an array that we assign to the variable groceries.")]),a._v(" "),m("p",[a._v("In this list every item in the array is assigned an order starting from 0 - Up. 0 will always be the first item in the array.")]),a._v(" "),m("p",[a._v('The first item in the groceries array is "Apples".  "Apples" index is 0. To print out a specific item in the array we can refer to the array with the index of the item.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/amOxXj/?height=400&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"400",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/amOxXj/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;amOxXj&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("h2",{attrs:{id:"accessing-the-last-item-of-the-array"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-last-item-of-the-array","aria-hidden":"true"}},[a._v("#")]),a._v(" Accessing the Last Item of the Array")]),a._v(" "),m("p",[a._v('If our list is growing and we are unsure of the total size of the Array we can check the length of the array to determine the last item\'s index. In this example we see the length of our groceries array is 4. Yogurt is the last item in the array at index 3. By subtracting 1 from the length of the array we determine the position of the last item. "Yogurt".')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/YGXrBb/?height=500&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"500",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/YGXrBb/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;YGXrBb&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("h2",{attrs:{id:"sorting-arrays"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#sorting-arrays","aria-hidden":"true"}},[a._v("#")]),a._v(" Sorting Arrays")]),a._v(" "),m("p",[a._v("We can also rearrange our arrays alphabetically.")]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/mAJYmP/?height=465&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"465",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/mAJYmP/"&amp;amp;amp;amp;amp;amp;amp;gt;mAJYmP&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v("We can then reverse the array order to sort it from Z-A.")]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/zKGQzZ/?height=465&theme-id=0&default-tab=result,js&embed-version=2",width:"300",height:"465",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/zKGQzZ/"&amp;amp;amp;amp;amp;amp;gt;zKGQzZ&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v("Working with numerical values does not sorting numerically, but alphabetically.")]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/jrPoGk/?height=465&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"465",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/jrPoGk/"&amp;amp;amp;amp;gt;jrPoGk&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v("We can then reverse the order from highest to lowest.")]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/zKGQEZ/?height=465&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"465",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/zKGQEZ/"&amp;amp;amp;gt;zKGQEZ&amp;amp;amp;lt;/a&amp;amp;amp;gt; by IMD (&amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;gt;@IMD&amp;amp;amp;lt;/a&amp;amp;amp;gt;) on &amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;gt;CodePen&amp;amp;amp;lt;/a&amp;amp;amp;gt;.')]),a._v(" "),m("h2",{attrs:{id:"adding-items-to-an-array"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#adding-items-to-an-array","aria-hidden":"true"}},[a._v("#")]),a._v(" Adding Items to an Array")]),a._v(" "),m("p",[a._v('To add an item to the end of our array we can use Array.push(item). In this example we add "Olives" to the end of our groceries array.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/yaNAAz/?height=400&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"400",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/yaNAAz/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;yaNAAz&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v('To add an item at the beginning of our array we can use Array.unshift(item). In this example we are adding "Olives" to the top of our groceries array.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/VKLNNO/?height=400&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"400",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/VKLNNO/"&amp;amp;amp;amp;amp;amp;amp;amp;gt;VKLNNO&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v("To add an item somewhere in between we need to use "),m("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"}},[a._v("Array.splice")]),a._v('(pos, item) to push an item into a specific position in the array. In this example we push "Olives" into the second position of the groceries array.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/BLNEZK/?height=400&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"400",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/BLNEZK/"&amp;amp;amp;amp;amp;amp;gt;BLNEZK&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v("If we have two arrays we can also combine those together. If there was another list of groceries we initially forgot to include we can "),m("a",{attrs:{href:"http://www.w3schools.com/jsref/jsref_concat_array.asp"}},[a._v("concatenate")]),a._v(" these arrays together for a complete grocery list.")]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/dpoLEL/?height=600&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"600",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/dpoLEL/"&amp;amp;amp;amp;amp;gt;dpoLEL&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("h2",{attrs:{id:"removing-items-from-an-array"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#removing-items-from-an-array","aria-hidden":"true"}},[a._v("#")]),a._v(" Removing Items from an Array")]),a._v(" "),m("p",[a._v('To remove the last item of the array we can use Array.pop(). The last item "Yogurt" was removed from the groceries array.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/gwpJOa/?height=450&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"450",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/gwpJOa/"&amp;amp;amp;amp;amp;amp;amp;gt;gwpJOa&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v('To remove the first item in the array we can use Array.shift(). The first item "Apples" was removed from the groceries array.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/XjbwJB/?height=450&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"450",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/XjbwJB/"&amp;amp;amp;gt;XjbwJB&amp;amp;amp;lt;/a&amp;amp;amp;gt; by IMD (&amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;gt;@IMD&amp;amp;amp;lt;/a&amp;amp;amp;gt;) on &amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;gt;CodePen&amp;amp;amp;lt;/a&amp;amp;amp;gt;.')]),a._v(" "),m("p",[a._v('To remove a specific item in the Array we use the Array.splice method. In this example we are removing the 3rd item from the groceries array. Unfortunately, we\'ve removed "Ice Cream".  The third Item occupies the second index. [0][1][2]')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/qadGdv/?height=465&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"465",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;amp;lt;a href="http://codepen.io/IMD/pen/qadGdv/"&amp;amp;gt;qadGdv&amp;amp;lt;/a&amp;amp;gt; by IMD (&amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;gt;@IMD&amp;amp;lt;/a&amp;amp;gt;) on &amp;amp;lt;a href="http://codepen.io"&amp;amp;gt;CodePen&amp;amp;lt;/a&amp;amp;gt;.')]),a._v(" "),m("p",[a._v('Looking up items in array There are many cases in which we might not know the position of the item in the array but we know what we are looking for. Let\'s take a look at how we would remove the value "Milk" from this array. First we will search for the value "Milk" in the array, this will return the position "Milk" is found.')]),a._v(" "),m("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/IMD/embed/GjJako/?height=500&theme-id=0&default-tab=js,result&embed-version=2",width:"300",height:"500",allowfullscreen:"allowfullscreen"}},[a._v('See the Pen &amp;lt;a href="http://codepen.io/IMD/pen/GjJako/"&amp;gt;GjJako&amp;lt;/a&amp;gt; by IMD (&amp;lt;a href="http://codepen.io/IMD"&amp;gt;@IMD&amp;lt;/a&amp;gt;) on &amp;lt;a href="http://codepen.io"&amp;gt;CodePen&amp;lt;/a&amp;gt;.')])])}],!1,null,null,null);p.default=t.exports}}]);