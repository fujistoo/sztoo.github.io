(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(t,e,o){var content=o(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("56b15182",content,!0,{sourceMap:!1})},142:function(t,e,o){var content=o(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("0bc75440",content,!0,{sourceMap:!1})},143:function(t,e,o){var content=o(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("f06e6a00",content,!0,{sourceMap:!1})},161:function(t,e,o){"use strict";o(209);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("NavBar"),t._v(" "),o("Nuxt",{attrs:{"keep-alive":"","keep-alive-props":{max:5}}}),t._v(" "),o("PageFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:o(224).default,PageFooter:o(225).default})},166:function(t,e,o){o(167),t.exports=o(168)},209:function(t,e,o){"use strict";o(141)},210:function(t,e,o){var n=o(32)(!1);n.push([t.i,'html{background-color:#000;font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin-top:3vh;margin-left:10vw;margin-right:10vw;overflow-y:scroll;scroll-behavior:smooth}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:10px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:1vh 2vh}.button--green:hover{transition:appear 2s;color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=n},211:function(t,e,o){"use strict";o(142)},212:function(t,e,o){var n=o(32)(!1);n.push([t.i,".navbar{margin-top:25vh;margin-bottom:10vh;text-align:center}.navbar a.nuxt-link-exact-active{color:#00c58e;border-bottom:.5px solid}.navlinks{margin-left:1vw;margin-right:1vw;font-size:.75em;text-decoration:none;color:#fff;text-transform:uppercase}.navlinks:hover{color:#00c58e;border-bottom:.5px solid}",""]),t.exports=n},213:function(t,e,o){"use strict";o(143)},214:function(t,e,o){var n=o(32)(!1);n.push([t.i,".footer{margin:0 auto;position:relative;text-align:center;width:90%;left:0;bottom:0;padding-top:10vh}",""]),t.exports=n},224:function(t,e,o){"use strict";o.r(e);o(26),o(24),o(35);var n={data:function(){return{disableView:["index"],links:[{title:"home",link:"/"},{title:"work",link:"/work"},{title:"resume",link:"/resume"},{title:"contact",link:"/contact"}]}},computed:{visible:function(){return!this.disableView.includes(this.$route.name)}}},r=(o(211),o(17)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.visible?o("nav",{staticClass:"navbar"},t._l(t.links,(function(e,n){return o("router-link",{key:n,staticClass:"navlinks",attrs:{to:e.link,exact:""}},[t._v(t._s(e.title))])})),1):t._e()}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,o){"use strict";o.r(e);o(26),o(24),o(35);var n={data:function(){return{notShown:["index","test"]}},computed:{visible:function(){return!this.notShown.includes(this.$route.name)}}},r=(o(213),o(17)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"footer"})}),[],!1,null,null,null);e.default=component.exports}},[[166,20,1,21]]]);