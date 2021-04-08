(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(704)),i={title:"PubMed"},c={unversionedId:"database/data-sources/library/publications/pubmed",id:"version-4.0.0/database/data-sources/library/publications/pubmed",isDocsHomePage:!1,title:"PubMed",description:"Data from pubmed. Entire file is downloaded, only taxon IDs set in project.xml will be loaded. If nothing is configured, processes all entries.",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/publications/pubmed.md",slug:"/database/data-sources/library/publications/pubmed",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/publications/pubmed",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/data-sources/library/publications/pubmed.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"InterPro",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/proteins/interpro"},next:{title:"Publications",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/publications/publications"}},l=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data files",id:"how-to-download-the-data-files",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Data from pubmed. Entire file is downloaded, only taxon IDs set in project.xml will be loaded. If nothing is configured, processes all entries."),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"genes, publications"),Object(o.b)("h2",{id:"how-to-download-the-data-files"},"How to download the data files"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"ftp://ftp.ncbi.nlm.nih.gov/gene/DATA/gene2pubmed.gz"}),"ftp://ftp.ncbi.nlm.nih.gov/gene/DATA/gene2pubmed.gz")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"ftp://ftp.ncbi.nlm.nih.gov/gene/DATA/gene_info.gz"}),"ftp://ftp.ncbi.nlm.nih.gov/gene/DATA/gene","_","info.gz"))),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("p",null,"project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="pubmed-gene" type="pubmed-gene">\n  <property name="src.data.dir" location="DATA_DIR/pubmed/" />\n  <property name="pubmed.organisms" value="7227"/>\n  <property name="src.data.dir.includes" value="gene2pubmed"/>\n</source>\n')))}s.isMDXComponent=!0},704:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);