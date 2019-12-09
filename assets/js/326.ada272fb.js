(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{508:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The following documentation comes directly from the "),s("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuex.vuejs.org"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("NOTE:")]),t._v(" We will be using ES2015 syntax for code examples for the rest of the docs. If you haven't picked it up, "),s("a",{attrs:{href:"https://babeljs.io/docs/learn-es2015/",target:"_blank",rel:"noopener noreferrer"}},[t._v("you should"),s("OutboundLink")],1),t._v("!")])]),t._v(" "),s("p",[t._v("After "),s("a",{attrs:{href:"https://vuex.vuejs.org/installation.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("installing"),s("OutboundLink")],1),t._v(" Vuex, let's create a store. It is pretty straightforward - just provide an initial state object, and some mutations:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("Using store state in a component simply involves returning the state within a computed property, because the store state is reactive. Triggering changes simply means committing mutations in component methods.")]),t._v(" "),s("p",[t._v("Here's an example of the "),s("a",{attrs:{href:"https://jsfiddle.net/n9jmu5v7/1269/",target:"_blank",rel:"noopener noreferrer"}},[t._v("most basic Vuex counter app"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Next, we will discuss each core concept in much finer details, starting with "),s("router-link",{attrs:{to:"./state.html"}},[t._v("State")]),t._v(".")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuex")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scrimba"},[e("a",{attrs:{href:"https://scrimba.com/p/pnyzgAP/cMPa2Uk",target:"_blank",rel:"noopener noreferrer"}},[this._v("Try this lesson on Scrimba")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("At the center of every Vuex application is the "),e("strong",[this._v("store")]),this._v('. A "store" is basically a container that holds your application '),e("strong",[this._v("state")]),this._v(". There are two things that make a Vuex store different from a plain global object:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.")])]),this._v(" "),e("li",[e("p",[this._v("You cannot directly mutate the store's state. The only way to change a store's state is by explicitly "),e("strong",[this._v("committing mutations")]),this._v(". This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-simplest-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-simplest-store","aria-hidden":"true"}},[this._v("#")]),this._v(" The Simplest Store")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Make sure to call Vue.use(Vuex) first if using a module system")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now, you can access the state object as "),e("code",[this._v("store.state")]),this._v(", and trigger a state change with the "),e("code",[this._v("store.commit")]),this._v(" method:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'increment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 1")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Again, the reason we are committing a mutation instead of changing "),e("code",[this._v("store.state.count")]),this._v(" directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.")])}],!1,null,null,null);e.default=n.exports}}]);