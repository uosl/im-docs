(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=(a(0),a(704)),o={title:"Data Licences"},i={unversionedId:"database/data-sources/data-licences",id:"database/data-sources/data-licences",isDocsHomePage:!1,title:"Data Licences",description:"You are using InterMine to integrate several data sets into a single database, for ease of querying for your end users. It's important that you make it very clear to your users how the data in your mine is licenced and how it can be re-used.",source:"@site/docs/database/data-sources/data-licences.md",slug:"/database/data-sources/data-licences",permalink:"/im-docs/docs/next/database/data-sources/data-licences",editUrl:"https://github.com/intermine/im-docs/docs/database/data-sources/data-licences.md",version:"current",sidebar:"someSidebar",previous:{title:"Id Resolvers",permalink:"/im-docs/docs/next/database/data-sources/id-resolvers"},next:{title:"Database Build",permalink:"/im-docs/docs/next/database/database-building/index"}},s=[{value:"New DataSet.licence field",id:"new-datasetlicence-field",children:[]},{value:"How is this information being used?",id:"how-is-this-information-being-used",children:[]},{value:"Why does it have to be a URL to a standard data licence?",id:"why-does-it-have-to-be-a-url-to-a-standard-data-licence",children:[{value:"Why can&#39;t I put a URL to the fair use policy?",id:"why-cant-i-put-a-url-to-the-fair-use-policy",children:[]},{value:"Why can&#39;t I put a short snippet about the fair use policy for these data?",id:"why-cant-i-put-a-short-snippet-about-the-fair-use-policy-for-these-data",children:[]}]},{value:"How to add licence to an InterMine?",id:"how-to-add-licence-to-an-intermine",children:[{value:"Core data sources",id:"core-data-sources",children:[]},{value:"Your data sources",id:"your-data-sources",children:[]}]},{value:"None of my data sources have data licences",id:"none-of-my-data-sources-have-data-licences",children:[]}],l={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You are using InterMine to integrate several data sets into a single database, for ease of querying for your end users. It's important that you make it very clear to your users how the data in your mine is licenced and how it can be re-used."),Object(c.b)("h2",{id:"new-datasetlicence-field"},"New DataSet.licence field"),Object(c.b)("p",null,"In InterMine 4.0, we've added ",Object(c.b)("inlineCode",{parentName:"p"},"licence"),' to the "data set" model as a text field. This column is meant to be a ',Object(c.b)("strong",{parentName:"p"},"URL")," to point to the standard data licence, e.g. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://creativecommons.org/licenses/by/4.0/"}),"https://creativecommons.org/licenses/by/4.0/")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- InterMine 4.0.0 data model --\x3e\n<class name="DataSet" is-interface="true" term="http://semanticscience.org/resource/SIO_000089">        \n    \x3c!-- licence is a new text field --\x3e\n    <attribute name="licence" type="java.lang.String" term="http://purl.org/dc/terms/license"/>\n    ...\n</class>\n')),Object(c.b)("h2",{id:"how-is-this-information-being-used"},"How is this information being used?"),Object(c.b)("p",null,"These data can be displayed prominently on the report page and in query results. We'll also use the licences in the RDF generation."),Object(c.b)("h2",{id:"why-does-it-have-to-be-a-url-to-a-standard-data-licence"},"Why does it have to be a URL to a standard data licence?"),Object(c.b)("p",null,"The contents of ",Object(c.b)("inlineCode",{parentName:"p"},"DataSet.licence")," should be a URL that points to a standard data licence."),Object(c.b)("h3",{id:"why-cant-i-put-a-url-to-the-fair-use-policy"},"Why can't I put a URL to the fair use policy?"),Object(c.b)("p",null,"If you put a URL to the data source's fair use policy for example, the URL might change. Also, sometimes the fair use policy is vague, contradictory or just hard to understand. It's better to only use standard data licences."),Object(c.b)("h3",{id:"why-cant-i-put-a-short-snippet-about-the-fair-use-policy-for-these-data"},"Why can't I put a short snippet about the fair use policy for these data?"),Object(c.b)("p",null,"If you summarise the fair use policy, there is a danger that you get it wrong, or the data policy changes."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Providing no information about the data licence is better than having bad information about the data licence.")),Object(c.b)("h2",{id:"how-to-add-licence-to-an-intermine"},"How to add licence to an InterMine?"),Object(c.b)("p",null,"If you want to add a licence to your datasets in your mine, you can do so by updating the associated data source that loads that data set."),Object(c.b)("h3",{id:"core-data-sources"},"Core data sources"),Object(c.b)("p",null,"InterMine core data parsers either parse a standard file type, e.g. FASTA, GFF or a specific file type from a specific data source, e.g. OMIM, UniProt"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Standard file types")),Object(c.b)("p",null,"To update the data licence, add the licence information to the project XML file. An example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- gff example --\x3e\n<source name="my-gff" type="my-gff" version="4.0.0">\n  \x3c!-- add licence here --\x3e\n  <property name="gff3.licence" value="https://creativecommons.org/licenses/by-sa/3.0/" />\n  ...\n</source>\n')),Object(c.b)("p",null,"FASTA"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- FASTA example --\x3e\n<source name="my-fasta" type="fasta">      \n  \x3c!-- add licence here --\x3e\n  <property name="fasta.licence" value="https://creativecommons.org/licenses/by/4.0/"/>\n  ...\n</source>\n')),Object(c.b)("p",null,"NB: The prefix has to match the ",Object(c.b)("inlineCode",{parentName:"p"},"type")," of the data source."),Object(c.b)("p",null,"OBO"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- OBO example --\x3e\n<source name="so" type="so">\n  <property name="src.data.file" location="so.obo"/>\n  \x3c!-- add licence here --\x3e\n  <property name="licence" value="https://creativecommons.org/licenses/by/4.0/"/>\n</source>\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"All others")),Object(c.b)("p",null,"We've updated all InterMine core data sources with the correct data licence. This requires no action from you. Use the library as normal, and the data parser will populate the ",Object(c.b)("inlineCode",{parentName:"p"},"DataSet.licence")," field."),Object(c.b)("p",null,"However, not every core data source has a data licence. About 1/3 of the InterMine data sets have libraries that have data licences. The rest only have text about fair use. We hope that as data licences become more popular and visible, this number will rise."),Object(c.b)("h3",{id:"your-data-sources"},"Your data sources"),Object(c.b)("p",null,"DataSet now has a licence field, so you will want to update this field in your data parser."),Object(c.b)("p",null,"Here is an example using the Java API:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// set the licence using the Java API in your data parsers\nprivate static final String LICENCE = "https://creativecommons.org/licenses/by/4.0/";\nItem dataSet = createItem("DataSet");\ndataSet.setAttribute("licence", licence);\n')),Object(c.b)("p",null,"If you are using the ",Object(c.b)("inlineCode",{parentName:"p"},"BioFileConverter"),", you can use the constructor like so:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// add data licence  \nsuper(writer, model, DATA_SOURCE_NAME, DATASET_TITLE, "http://www.gnu.org/licenses/gpl.txt");\n')),Object(c.b)("p",null,"This will update the data set licence field for you."),Object(c.b)("h2",{id:"none-of-my-data-sources-have-data-licences"},"None of my data sources have data licences"),Object(c.b)("p",null,"We discovered that only a minority of data sets have a licence: of the 26 core data set types that InterMine supports, only 9 have a data set licence, although 14 had some text about fair use."),Object(c.b)("p",null,"Please see our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://intermineorg.wordpress.com/2019/01/03/being-fair-data-licences-in-intermine/"}),"blog posts")," for more details."))}d.isMDXComponent=!0},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||c;return a?r.a.createElement(h,i(i({ref:t},l),{},{components:a})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);