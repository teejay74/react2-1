(this["webpackJsonpreact2-1"]=this["webpackJsonpreact2-1"]||[]).push([[0],{11:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var r=s(1),o=s.n(r),n=s(3),a=s.n(n),i=(s(9),s(4)),c=s(0);function g(e){var t=e.filters,s=e.selected,r=e.onSelectFilter,o=function(e){r(e.target.textContent)};return Object(c.jsx)("div",{className:"Filters",children:t.map((function(e){return Object(c.jsx)("button",{className:s===e?"Filter selected":"Filter",onClick:o,children:e},e)}))})}function m(e){var t=e.projects,s=0;return Object(c.jsx)("div",{className:"Projects",children:t.map((function(e){return s+=1,Object(c.jsx)("img",{className:"Image",src:e.img,alt:"img"},s)}))})}function l(){var e=[{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",category:"Flayers"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",category:"Flayers"}],t=["All"];e.forEach((function(e){t.includes(e.category)||t.push(e.category)}));var s=Object(r.useState)("All"),o=Object(i.a)(s,2),n=o[0],a=o[1];return Object(c.jsxs)("div",{className:"Portfolio",children:[Object(c.jsx)(g,{filters:t,selected:n,onSelectFilter:function(e){!function(e){a(e)}(e)}}),Object(c.jsx)(m,{projects:"All"===n?e:e.filter((function(e){return e.category===n}))})]})}s(11);var u=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l,{})})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,r=t.getFID,o=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),r(e),o(e),n(e),a(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.07211286.chunk.js.map