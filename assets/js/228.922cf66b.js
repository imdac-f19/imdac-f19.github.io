(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{410:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),o("div",{staticClass:"watch"},[o("p",[o("a",{attrs:{href:"https://www.linkedin.com/learning/programming-foundations-fundamentals-2011/writing-pseudocode",target:"_blank",rel:"noopener noreferrer"}},[e._v('Watch "Writing pseudocode" on LinkedIn Learning'),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("When we think about programming, we often focus on languages, syntax, and the code. But these are just tools that used to complete the purpose of a program, which is to solve a problem. Problem solving is a crucial part of the programming process, and can be a pain point for some developers. We may know what we want to do, but what are the steps to get it done. Well, one way to overcome this hurdle, is to use pseudocode.")]),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("Pseudocode is an informal high-level description of a program, written in plain English. Pseudocode is much like creating an outline before writing a paper. It serves as a guideline for how to write the program.")]),e._v(" "),o("p",[e._v("There is no standards for writing pseudocode, but well written pseudocode should be understood by any one with even a basic understanding of programming. By writing pseudocode, we can ignore all the restrictions of the code and focus only on the problem. We can walk through the program defining the structure and identifying problems without ever writing a single line of code.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("So, we can see that even this relatively simple game is beginning to have a lot of requirements, and we can use pseudocode to map it all out. So, we will start by laying out the basic structure of the problem.")]),e._v(" "),e._m(4),o("p",[e._v("Now we can list what items will be in inventory and what requirements need to be tracked.")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),o("p",[e._v("At this point, we may have noticed a problem with our actions. For example, the player may try to buy a sword or make wood. This is a logic problem in our structure, but we can still fix it in pseudocode.")]),e._v(" "),e._m(10),o("p",[e._v("Now, we have a blue print to logical structure of our game, and we can start programming.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"pseudocode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pseudocode","aria-hidden":"true"}},[this._v("#")]),this._v(" Pseudocode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-is-pseudocode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-pseudocode","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Pseudocode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"writing-pseudocode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-pseudocode","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing Pseudocode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Let's assume we are creating a blacksmith game where the player will use wood and ore to make weapons, which in turn can be sold for gold. The player will be able to execute a "),t("code",[this._v("buy")]),this._v(" action to buy wood and ore, and a "),t("code",[this._v("make")]),this._v(" action to make different weapons. However, the player must meet certain requirements to successfully complete these actions. For example, the player must have enough gold to buy wood or enough ore to make the sword.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("create inventory object\ncreate requirements object\n\ncreate buy action\n\ncreate make action \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("create inventory object\n  gold\n  wood\n  ore\n  axes\n  swords\n\ncreate requirements object\n  gold for wood\n  gold for ore\n  wood for axes\n  ore for axes\n  wood for swords\n  ore for swords\n\ncreate buy action\n\ncreate make action \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next we will add the logic for the "),t("code",[this._v("buy")]),this._v(" action. The player will be able to provide which item they wish to buy, from there we must check if the player has enough gold and provide the appropriate response.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("create inventory object\n  gold\n  wood\n  ore\n  axes\n  swords\n\ncreate requirements object\n  gold for wood\n  gold for ore\n  wood for axes\n  ore for axes\n  wood for swords\n  ore for swords\n\ncreate buy action (item)\n  if gold in inventory is greater than the item's requirement of gold\n      subtract the item's requirement of gold from the gold in inventory\n      increase the number of item in the inventory\n      respond that the player has bought the item\n  else \n      respond that the player does not have enough gold\n\ncreate make action \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now let's do the same for the "),t("code",[this._v("make")]),this._v(" action.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("create inventory object\n  gold\n  wood\n  ore\n  axes\n  swords\n\ncreate requirements object\n  gold for wood\n  gold for ore\n  wood for axes\n  ore for axes\n  wood for swords\n  ore for swords\n\ncreate buy action (item)\n  if gold in inventory is greater than the item's requirement of gold\n      subtract the item's requirement of gold from the gold in inventory\n      increase the number of item in the inventory\n      respond that the player has bought the item\n  else \n      respond that the player does not have enough gold\n\ncreate make action (item)\n  if wood in inventory is greater than the item's requirement of wood AND\n    ore in inventory is greater than the item's requirement of ore\n      subtract the item's requirement of wood from the wood in inventory\n      subtract the item's requirement of ore from the ore in inventory\n      increase the number of item in the inventory \n      respond that the player has made the item\n  else\n      respond that player does not have enough resources to make the item\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("create inventory object\n  gold\n  wood\n  ore\n  axes\n  swords\n\ncreate requirements object\n  gold for wood\n  gold for ore\n  wood for axes\n  ore for axes\n  wood for swords\n  ore for swords\n\ncreate buy action (item)\n  if item is an item that can be bought\n      if gold in inventory is greater than the item's requirement of gold\n          subtract the item's requirement of gold from the gold in inventory\n          increase the number of item in the inventory\n          respond that the player has bought the item\n      else \n          respond that the player does not have enough gold\n  else \n      respond that the player cannot buy that item\n\ncreate make action (item)\n  if item is an item that can be made\n      if wood in inventory is greater than the item's requirement of wood AND\n        ore in inventory is greater than the item's requirement of ore\n          subtract the item's requirement of wood from the wood in inventory\n          subtract the item's requirement of ore from the ore in inventory\n          increase the number of item in the inventory \n          respond that the player has made the item\n      else\n          respond that player does not have enough resources to make the item\n  else\n      respond that the player cannot make that item\n")])])])}],!1,null,null,null);t.default=r.exports}}]);