(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{480:function(e,t,n){},485:function(e,t,n){},491:function(e,t,n){"use strict";var i=n(1),r=n(81).find,s=n(154),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("find")},492:function(e,t,n){"use strict";n(480)},493:function(e,t,n){"use strict";n.r(t);n(7);var i=n(507),r=n(494),s=n(474);function a(e,t){if("group"===t.type){var n=t.path&&Object(s.e)(e,t.path),i=t.children.some((function(t){return"group"===t.type?a(e,t):"page"===t.type&&Object(s.e)(e,t.path)}));return n||i}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:r.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var e=function(e,t){for(var n=0;n<t.length;n++){var i=t[n];if(a(e,i))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return Object(s.e)(this.$route,e.regularPath)}}},l=n(77),u=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,i){return t("li",{key:i},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:i===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):t("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},494:function(e,t,n){"use strict";n.r(t);n(7),n(491),n(42),n(152),n(107);var i=n(474);function r(e,t,n,i,r){var s={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),e("RouterLink",s,n)}function s(e,t,n,a,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var u=Object(i.e)(a,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[r(e,n+"#"+t.slug,t.title,u,t.level-1),s(e,t.children,n,a,o,l+1)])})))}var a={functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,a=n.$page,o=(n.$site,n.$route),l=n.$themeConfig,u=n.$themeLocaleConfig,p=t.props,c=p.item,d=p.sidebarDepth,h=Object(i.e)(o,c.path),f="auto"===c.type?h||c.children.some((function(e){return Object(i.e)(o,c.basePath+"#"+e.slug)})):h,b="external"===c.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,c.path,c.title||c.path):r(e,c.path,c.title||c.path,f),v=[a.frontmatter.sidebarDepth,d,u.sidebarDepth,l.sidebarDepth,1].find((function(e){return void 0!==e})),m=u.displayAllHeaders||l.displayAllHeaders;return"auto"===c.type?[b,s(e,c.children,c.basePath,o,v)]:(f||m)&&c.headers&&!i.d.test(c.path)?[b,s(e,Object(i.c)(c.headers),c.path,o,v)]:b}},o=(n(492),n(77)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=l.exports},505:function(e,t,n){"use strict";n(485)},506:function(e,t,n){},507:function(e,t,n){"use strict";n.r(t);var i=n(474),r={name:"SidebarGroup",components:{DropdownTransition:n(487).default},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(493).default},methods:{isActive:i.e}},s=(n(505),n(77)),a=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-".concat(e.depth)]},[e.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=a.exports},525:function(e,t,n){"use strict";n(506)},537:function(e,t,n){"use strict";n.r(t);var i=n(493),r=n(508),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.default},props:["items"]},a=(n(525),n(77)),o=Object(a.a)(s,(function(){var e=this._self._c;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=o.exports}}]);