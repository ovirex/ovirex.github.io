(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{297:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(48),{name:"AboutSection",data:function(){return{aboutInfo:{},resumesToShow:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$content("resumes").only(["resumes_list"]).fetch();case 3:r=e.sent,t.resumesToShow=r[0].resumes_list,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,e.next=13,t.$content("about_info").fetch();case 13:n=e.sent,t.aboutInfo=n[0],e.next=20;break;case 17:e.prev=17,e.t1=e.catch(10),console.error(e.t1);case 20:case"end":return e.stop()}}),e,null,[[0,7],[10,17]])})))()}}),c=r(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section pb-5"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 ml-auto order-2",attrs:{"data-aos":"fade-up"}},[r("h3",{staticClass:"h3 mb-4"},[t._v("Skills")]),t._v(" "),r("ul",{staticClass:"list-unstyled"},t._l(t.aboutInfo.skills,(function(e,n){return r("li",{key:n,staticClass:"mb-3"},[r("div",{staticClass:"d-flex mb-1"},[r("strong",[t._v(t._s(e.text))]),t._v(" "),r("span",{staticClass:"ml-auto"})]),t._v(" "),t._m(1,!0)])})),0)]),t._v(" "),r("div",{staticClass:"col-md-7 mb-5 mb-md-0",attrs:{"data-aos":"fade-up"}},[t.aboutInfo.hasOwnProperty("profile_pic")?r("p",[r("img",{staticClass:"img-fluid",attrs:{src:t.aboutInfo.profile_pic,alt:"Image"}})]):t._e(),t._v(" "),r("nuxt-content",{attrs:{document:t.aboutInfo}}),t._v(" "),r("p",t._l(t.resumesToShow,(function(e,n){return r("a",{key:n,staticClass:"readmore me-2",attrs:{href:e.resume_pdf,target:"blank"}},[t._v(t._s(e.text))])})),0)],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-5 align-items-end"},[r("div",{staticClass:"col-md-6",attrs:{"data-aos":"fade-up"}},[r("h2",[t._v("About Me")]),t._v(" "),r("p",{staticClass:"mb-0"},[t._v("\n          Here I’m gonna tell you a little about me, the tech I’ve worked with\n          and why hiring me would be the best decision of your life. 😉\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress custom-progress"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])}],!1,null,null,null);e.default=component.exports},313:function(t,e,r){"use strict";r.r(e);var n={name:"AboutPage",components:{AboutSection:r(297).default}},o=r(13),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("about-section")}),[],!1,null,null,null);e.default=component.exports}}]);