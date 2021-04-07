(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{272:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var r=a(3),o=a(7),n=(a(0),a(706)),i={title:"VCF files"},c={unversionedId:"database/data-sources/library/variation/vcf",id:"version-4.0.0/database/data-sources/library/variation/vcf",isDocsHomePage:!1,title:"VCF files",description:"Load SNP data from a VCF file",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/variation/vcf.md",slug:"/database/data-sources/library/variation/vcf",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/variation/vcf",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/data-sources/library/variation/vcf.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data Sets",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/data-sets"},next:{title:"Writing your own data source",permalink:"/im-docs/docs/4.0.0/database/data-sources/custom/index"}},d=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[{value:"Add vcf to the list of datasources to be integrated",id:"add-vcf-to-the-list-of-datasources-to-be-integrated",children:[]}]}],s={toc:d};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Load SNP data from a VCF file"),Object(n.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(n.b)("p",null,"SNPs"),Object(n.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(n.b)("p",null,"First you will need a VCF file, here is an example:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"ftp://ftp.ensembl.org/pub/release-79/variation/vcf/homo_sapiens/"}),"ftp://ftp.ensembl.org/pub/release-79/variation/vcf/homo","_","sapiens/"))),Object(n.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(n.b)("h3",{id:"add-vcf-to-the-list-of-datasources-to-be-integrated"},"Add vcf to the list of datasources to be integrated"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="my-data-source" type="vcf">\n  <property name="src.data.dir" location="/data/variation/current" />\n  <property name="vcf.includes" value="*.vcf" />\n  <property name="vcf.vcfTaxonId" value="9606" />\n  <property name="vcf.vcfDataSetTitle" value="Ensembl SNP data set" />\n  <property name="vcf.vcfDataSourceName" value="Ensembl" />\n</source>\n')))}l.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||n;return a?o.a.createElement(b,c(c({ref:t},s),{},{components:a})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<n;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);