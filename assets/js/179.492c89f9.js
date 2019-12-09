(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{361:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[a._m(0),a._v(" "),t("Lynda",{attrs:{id:"611204",citation:"skoglund"}}),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.php.net/manual/en/language.variables.basics.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("PHP variables"),t("OutboundLink")],1),a._v(", like JavaScript Variables, are used to store values of different types, like: strings, numbers, and booleans. Variables in PHP are loose type, which means you not need to set the datatype when declaring the variable.")]),a._v(" "),a._m(1),a._v(" "),t("p",[a._v("In PHP, when defining a variable, variables must adhere to certain naming conventions. Below are are some general rules when naming variables:")]),a._v(" "),t("ul",[a._m(2),a._v(" "),a._m(3),a._v(" "),a._m(4),a._v(" "),t("li",[a._v("Variable names cannot contain spaces")]),a._v(" "),t("li",[a._v("Variable names are case-sensitive")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://php.net/manual/en/reserved.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("Reserved words"),t("OutboundLink")],1),a._v(" cannot be used as variable names")])]),a._v(" "),t("p",[a._v("The following example is a list of valid and unique variable names. Each name will create a new variable.")]),a._v(" "),a._m(5),a._m(6),a._v(" "),t("p",[a._v("While it is possible to create many different names for variables, there are best practice conventions for how variables should be named to avoid confusion and mistakes. Take for instance the example above, notice that the word 'item' is used three different time. Because variable names are case-sensitive, each variable is actually a different variable. But it could be confusing when one we might one.")]),a._v(" "),t("p",[a._v("The following is a short list of guidelines when naming variables.")]),a._v(" "),a._m(7),a._v(" "),a._m(8),a._v(" "),t("p",[a._v("To retrieve the value stored inside of a PHP Variable, you simple call the variable name.")]),a._v(" "),a._m(9),a._m(10),a._v(" "),a._m(11),a._m(12),a._v(" "),a._m(13),a._v(" "),a._m(14),t("div",{staticClass:"try"},[t("p",[t("a",{attrs:{href:"https://repl.it/@eisenbm/php-variables",target:"_blank",rel:"noopener noreferrer"}},[a._v("Try it yourself on Repl.it"),t("OutboundLink")],1)])])],1)},[function(){var a=this.$createElement,e=this._self._c||a;return e("h1",{attrs:{id:"php-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP Variables")])},function(){var a=this.$createElement,e=this._self._c||a;return e("h2",{attrs:{id:"naming-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming Variables")])},function(){var a=this.$createElement,e=this._self._c||a;return e("li",[this._v("All variable names must start with a dollar sign ("),e("code",[this._v("$")]),this._v(")")])},function(){var a=this.$createElement,e=this._self._c||a;return e("li",[this._v("The dollar sign must be followed by a letter or an underscore ("),e("code",[this._v("_")]),this._v(")")])},function(){var a=this.$createElement,e=this._self._c||a;return e("li",[this._v("Variable names can contain letters, numbers, underscores, or dashes ("),e("code",[this._v("-")]),this._v(")")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// valid variable names")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"Item 1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Item")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"Item 2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ITEM")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"Item 3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$myVariable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"My first variable"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$my_variable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"My second variable"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$my_variable3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"My third variable"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// valid, but discouraged")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$book")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_book")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$__book")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])])])},function(){var a=this.$createElement,e=this._self._c||a;return e("h2",{attrs:{id:"naming-conventions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming conventions")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ol",[t("li",[t("em",[t("strong",[a._v("Be consistent")])]),a._v(". Choose a name convention and stick with it.")]),a._v(" "),t("li",[t("em",[t("strong",[a._v("Be descriptive")])]),a._v(". A variable name should describe the nature of value of the variable")]),a._v(" "),t("li",[t("em",[t("strong",[a._v("Be concise")])]),a._v(". Long variable names are difficult to write and can lead to errors")]),a._v(" "),t("li",[t("em",[t("strong",[a._v("Avoid confusing characters")])]),a._v(". Characters like the dash ("),t("code",[a._v("-")]),a._v(") or underscore ("),t("code",[a._v("_")]),a._v(") can be easily misread.")])])},function(){var a=this.$createElement,e=this._self._c||a;return e("h2",{attrs:{id:"using-php-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-php-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Using PHP Variables")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// gives $var a value")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// outputs 10")]),a._v("\n")])])])])},function(){var a=this.$createElement,e=this._self._c||a;return e("p",[this._v("To change the value of a variable, call the variable name followed by an equal sign ("),e("code",[this._v("=")]),this._v(") and the desired value.")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// gives $var a value")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// outputs 10")]),a._v("\n \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"<br>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// gives the $var a new value")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// outputs 100")]),a._v("\n")])])])])},function(){var a=this.$createElement,e=this._self._c||a;return e("h2",{attrs:{id:"deleting-a-php-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-php-variable","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting a PHP Variable")])},function(){var a=this.$createElement,e=this._self._c||a;return e("p",[this._v("If you ever want to delete a variable there is a function called "),e("code",[this._v("unset()")]),this._v(" that will let you destroy a variable.")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" \n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// deletes $var")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("unset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// notice stating $var is undefined")]),a._v("\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);