(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{668:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(704)),p={title:"Permanent URLs"},i={unversionedId:"webapp/report-page/permanentURL",id:"webapp/report-page/permanentURL",isDocsHomePage:!1,title:"Permanent URLs",description:"InterMine generates stable and unique URLs to identify the report pages for biological entities.",source:"@site/docs/webapp/report-page/permanentURL.md",slug:"/webapp/report-page/permanentURL",permalink:"/im-docs/docs/next/webapp/report-page/permanentURL",editUrl:"https://github.com/intermine/im-docs/docs/webapp/report-page/permanentURL.md",version:"current",sidebar:"someSidebar",previous:{title:"Home page",permalink:"/im-docs/docs/next/webapp/homepage/index"},next:{title:"Lists page",permalink:"/im-docs/docs/next/webapp/lists/lists-page"}},c=[],s={toc:c};function l(e){var t=e.components,p=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,p,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"InterMine generates stable and unique URLs to identify the report pages for biological entities."),Object(o.b)("p",null,"They are based on class names combined with local IDs provided by the data resource providers and therefore they are persistent."),Object(o.b)("p",null,"In FlyMine, for example, the URL of the report page for the gene zen, with primary identifier P19107, will be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://flymine.org/gene:FBgn0004053"}),"http://flymine.org/gene:FBgn0004053"),"."),Object(o.b)("p",null,"These URLs are used to share the report page with other users."),Object(o.b)("p",null,Object(o.b)("img",{src:r(878).default})),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/class-keys"}),"class","_","keys.properties")," file specifies the keys used to generate the permanent URLs. If not specified, the primaryidentifier key is used."),Object(o.b)("p",null,"The format is:"),Object(o.b)("p",null,"#"," class","_","keys.properties "),Object(o.b)("p",null,"<","CLASSNAME",">","_","URI","<","FIELDNAME",">"),Object(o.b)("p",null,"The classes and field names are case sensitive."),Object(o.b)("p",null,"For example:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pathway","_","URI"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"identifier")))),Object(o.b)("p",null,"No need to specify the keys for the classes defined in the core model ","(","e.g. protein, organism, publication...",")","."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/class-keys"}),"Class keys")," for details about this file."))}l.isMDXComponent=!0},704:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,d=b["".concat(p,".").concat(f)]||b[f]||u[f]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},878:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/share-ad15b074d81c65c262f3506b4b8765fa.png"}}]);