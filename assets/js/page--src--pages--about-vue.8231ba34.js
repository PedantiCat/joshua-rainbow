(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BTho:function(t,s,a){"use strict";var n=a("HAuM"),i=a("hh1v"),e=[].slice,r={},l=function(t,s,a){if(!(s in r)){for(var n=[],i=0;i<s;i++)n[i]="a["+i+"]";r[s]=Function("C,a","return new C("+n.join(",")+")")}return r[s](t,a)};t.exports=Function.bind||function(t){var s=n(this),a=e.call(arguments,1),r=function(){var n=a.concat(e.call(arguments));return this instanceof r?l(s,n.length,n):s.apply(t,n)};return i(s.prototype)&&(r.prototype=s.prototype),r}},GO3y:function(t,s,a){},IbHg:function(t,s,a){},Th3F:function(t,s,a){"use strict";var n=a("IbHg");a.n(n).a},ejl7:function(t,s,a){"use strict";var n=a("GO3y");a.n(n).a},odGf:function(t,s,a){"use strict";a.r(s);a("wLYn"),a("sMBO"),a("R5XZ");var n={props:["user","api_key","refresh_rate"],data:function(){return{track:null,album:null,artist:null,nowplaying:null,err:null}},mounted:function(){this.getMostRecentTrack(),setInterval(function(){this.getMostRecentTrack()}.bind(this),this.refresh_rate)},methods:{getMostRecentTrack:function(){this.axios.get("https://ws.audioscrobbler.com/2.0/?format=json",{params:{method:"user.getrecenttracks",user:this.user,limit:1,api_key:this.api_key}}).then(function(t){this.artist=t.data.recenttracks.track[0].artist["#text"],this.album=t.data.recenttracks.track[0].album["#text"],this.track=t.data.recenttracks.track[0].name,this.nowplaying=!!t.data.recenttracks.track[0]["@attr"]&&t.data.recenttracks.track[0]["@attr"].nowplaying}.bind(this)).catch(function(t){console.log("Listening-to widged went wrong :(\n",t),this.err=t}.bind(this))}}},i=(a("Th3F"),a("KHd+")),e={metaInfo:{title:"About"},components:{ListeningTo:Object(i.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return null==t.err&&null!=t.track?a("div",{staticClass:"listening-to"},[a("svg",{class:{"headphones-icon":!0,live:t.nowplaying},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px"}},[a("line",{attrs:{x1:"16.6%",y1:"83.3%",x2:"16.6%",y2:"40%","stroke-width":"2px"}}),a("line",{attrs:{x1:"16.6%",y1:"40%",x2:"16.6%",y2:"16.6%"}}),a("line",{attrs:{x1:"16.6%",y1:"16.6%",x2:"83.3%",y2:"16.6%"}}),a("line",{attrs:{x1:"83.3%",y1:"16.6%",x2:"83.3%",y2:"40%"}}),a("line",{attrs:{x1:"83.3%",y1:"40%",x2:"83.3%",y2:"83.3%","stroke-width":"2px"}}),a("circle",{attrs:{id:"circle",cx:"50%",cy:"61.65%",r:"15%",stroke:"rgba(0,0,0,0)",fill:"rgba(0,0,0,0)"}})]),a("span",{staticClass:"title"},[t._v("\n    "+t._s(t.nowplaying?"Currently Listening To:":"Last Listened To:")+" \n  ")]),a("span",{staticClass:"track"},[a("g-link",{staticClass:"link",attrs:{to:"https://www.last.fm/music/"+t.artist.split(" ").join("+")}},[t._v("\n            "+t._s(t.artist)+"\n    ")]),a("span",{staticClass:"sep"},[t._v("-")]),a("g-link",{staticClass:"link",attrs:{to:("https://www.last.fm/music/"+t.artist+"/"+t.album+"/"+t.track).split(" ").join("+")}},[t._v("\n            "+t._s(t.track)+"\n    ")])],1)]):t._e()}),[],!1,null,"0115833c",null).exports}},r=(a("ejl7"),null),l=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Layout",[a("main",{staticClass:"main"},[a("div",{staticClass:"about-cont"},[a("div",{staticClass:"cover-image-cont"},[a("g-image",{staticClass:"cover-image",attrs:{alt:"A photograph of Josh",src:t.$page.allAbout.edges[0].node.cover_image}})],1),a("div",{staticClass:"info-cont"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$page.allAbout.edges[0].node.name))]),a("p",{staticClass:"bio"},[t._v(t._s(t.$page.allAbout.edges[0].node.bio))]),a("ul",{staticClass:"social-links"},t._l(t.$page.allAbout.edges[0].node.social_links,(function(s){return a("li",{key:s.link,staticClass:"social-li"},[a("g-link",{staticClass:"social-link link",attrs:{to:s.link}},[t._v(t._s(s.platform))])],1)})),0),a("listening-to",{staticClass:"listening-to",attrs:{api_key:"c49513b422b272720a73dc8c4c4d398d",user:"theteacat",refresh_rate:"30000"}})],1)])])])}),[],!1,null,"f3f066e6",null);"function"==typeof r&&r(l);s.default=l.exports},wLYn:function(t,s,a){a("I+eb")({target:"Function",proto:!0},{bind:a("BTho")})}}]);