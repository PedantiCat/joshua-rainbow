(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BTho:function(t,e,a){"use strict";var i=a("HAuM"),l=a("hh1v"),n=[].slice,s={},r=function(t,e,a){if(!(e in s)){for(var i=[],l=0;l<e;l++)i[l]="a["+l+"]";s[e]=Function("C,a","return new C("+i.join(",")+")")}return s[e](t,a)};t.exports=Function.bind||function(t){var e=i(this),a=n.call(arguments,1),s=function(){var i=a.concat(n.call(arguments));return this instanceof s?r(e,i.length,i):e.apply(t,i)};return l(e.prototype)&&(s.prototype=e.prototype),s}},DIc5:function(t,e,a){"use strict";var i=a("Vz6O");a.n(i).a},Vz6O:function(t,e,a){},iyQ6:function(t,e,a){"use strict";a.r(e);a("wLYn"),a("R5XZ");var i={metaInfo:{title:"Home"},data:function(){return{displayed_tile:0,gallery_interval:null}},methods:{next:function(){var t=this.$page.allFrontPage.edges[0].node.featured_pages.length;this.displayed_tile=(this.displayed_tile+1)%t,this.resetInterval()},prev:function(){var t=this.$page.allFrontPage.edges[0].node.featured_pages.length;this.displayed_tile=(this.displayed_tile-1+t)%t,this.resetInterval()},resetInterval:function(){this.gallery_interval&&clearInterval(this.gallery_interval),this.gallery_interval=setInterval(function(){this.displayed_tile=(this.displayed_tile+1)%this.$page.allFrontPage.edges[0].node.featured_pages.length}.bind(this),1e4)}},mounted:function(){this.displayed_tile=0,this.resetInterval()},destroyed:function(){clearInterval(this.gallery_interval)}},l=(a("DIc5"),a("KHd+")),n=null,s=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("main",{staticClass:"main"},[a("ul",{staticClass:"featured-pages-ul"},t._l(t.$page.allFrontPage.edges[0].node.featured_pages.entries(),(function(e){var i=e[0],l=e[1];return a("li",{directives:[{name:"show",rawName:"v-show",value:t.displayed_tile==i||null==t.displayed_tile,expression:"displayed_tile==i || displayed_tile==null"}],key:l.title,staticClass:"featured-pages-li"},[a("div",{staticClass:"image-cont"},[a("g-link",{attrs:{to:l.link,tabindex:"-1"}},[a("g-image",{staticClass:"featured-page-cover",attrs:{src:l.cover_image,alt:l.title}})],1)],1)])})),0),a("div",{staticClass:"bottom-bar"},[null!=t.gallery_interval?a("button",{staticClass:"prev",on:{click:t.prev}},[a("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px"}},[a("line",{attrs:{x1:"0%",y1:"50%",x2:"100%",y2:"50%"}}),a("line",{attrs:{x1:"0%",y1:"50%",x2:"50%",y2:"100%"}}),a("line",{attrs:{x1:"0%",y1:"50%",x2:"50%",y2:"0%"}})]),a("span",{staticClass:"link"},[t._v("Prev")])]):t._e(),a("g-link",{staticClass:"featured-page-link link",attrs:{to:t.$page.allFrontPage.edges[0].node.featured_pages[t.displayed_tile].link}},[t._v("\n        "+t._s(t.$page.allFrontPage.edges[0].node.featured_pages[t.displayed_tile].title)+"\n      ")]),null!=t.gallery_interval?a("button",{staticClass:"next",on:{click:t.next}},[a("span",{staticClass:"link"},[t._v("Next")]),a("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px"}},[a("line",{attrs:{x1:"0%",y1:"50%",x2:"100%",y2:"50%"}}),a("line",{attrs:{x1:"100%",y1:"50%",x2:"50%",y2:"100%"}}),a("line",{attrs:{x1:"100%",y1:"50%",x2:"50%",y2:"0%"}})])]):t._e()],1)])])}),[],!1,null,"48e9a2d2",null);"function"==typeof n&&n(s);e.default=s.exports},wLYn:function(t,e,a){a("I+eb")({target:"Function",proto:!0},{bind:a("BTho")})}}]);