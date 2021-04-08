(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{474:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(3),l=a(7),r=(a(0),a(704)),i={title:"Report Page Overview"},p={unversionedId:"webapp/report-page/report-page",id:"webapp/report-page/report-page",isDocsHomePage:!1,title:"Report Page Overview",description:"Object Title\\(s\\)",source:"@site/docs/webapp/report-page/report-page.md",slug:"/webapp/report-page/report-page",permalink:"/im-docs/docs/next/webapp/report-page/report-page",editUrl:"https://github.com/intermine/im-docs/docs/webapp/report-page/report-page.md",version:"current"},o=[{value:"Object Title(s)",id:"object-titles",children:[]},{value:"Custom Header Link",id:"custom-header-link",children:[]},{value:"References &amp; Collections",id:"references--collections",children:[]},{value:"Inline Lists",id:"inline-lists",children:[]},{value:"Custom Displayers",id:"custom-displayers",children:[]},{value:"Templates",id:"templates",children:[]},{value:"External Links",id:"external-links",children:[]},{value:"Data",id:"data",children:[]}],s={toc:o};function c(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"object-titles"},"Object Title","(","s",")"),Object(r.b)("p",null,"One can edit the appearance of object title","(","s",")"," through the ",Object(r.b)("inlineCode",{parentName:"p"},"webconfig-model.xml")," file ","(","See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/model-properties"}),"Text and messages"),")","."),Object(r.b)("p",null,"Let us suppose we want to have a default way of displaying bio entities like gene, protein or probe set. Thus we would look up the entry for bio entity class and add the following configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<class className="org.intermine.model.bio.BioEntity">\n    <headerconfig>\n        <titles>\n            <title mainTitles="symbol|primaryIdentifier" numberOfMainTitlesToShow="1" subTitles="*organism.shortName*" />\n        </titles>\n    </headerconfig>\n</class>\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:a(734).default})),Object(r.b)("p",null,"We see that the titles are defined within the headerconfig block. Then we have the following fields:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"mainTitles"))),Object(r.b)("p",null,"a vertical bar ","(","|",")"," separated list of keys for which we would like to see values."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"numberOfMainTitlesToShow"))," ","(","optional",")"),Object(r.b)("p",null,'this property is useful if we want to only show a maximum of one value in the title. As per our example, the system will first try to resolve the "symbol" of the BioEntity, if it is known, we will show just that. However, if a symbol is not provided, then we try to resolve the primaryIdentifier. The system thus follows left-to-right rule when deciding what and how many fields to show. Main titles will always be bold.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"subTitles"))),Object(r.b)("p",null,"this is where we define sub titles. Again we can use the vertical bar to define a number of key values to display. Subtitles can be displayed in three ways based on the tags around them that define element formatting:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"primaryIdentifier")," ","(","default",")",": the element will be displayed without any formatting applied"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"*primaryIdentifier*"),": the element will be in italics, useful for organism names"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[primaryIdentifier]"),": the value will appear in square brackets")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),"\nClasses of objects ",Object(r.b)("em",{parentName:"p"},"inherit")," from their parents, thus unless we provide a different configuration for a, say, Protein title, the formatting from BioEntity will be applied. Fields resolved in the title","(","s",")"," will be removed from the summary below it."),Object(r.b)("h3",{id:"custom-header-link"},"Custom Header Link"),Object(r.b)("p",null,"One can have a custom link in the header of the page through the ",Object(r.b)("inlineCode",{parentName:"p"},"webconfig-model.xml")," file."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<headerconfig>\n    <customlinks>\n        <customlink\n            url="http://flybase.org/reports/{primaryIdentifier}.html"\n            image="flybase_logo_link.png"\n        />\n    </customlinks>\n</headerconfig>\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:a(734).default})),Object(r.b)("p",null,"The example above has been inserted as a child of the Gene class ",Object(r.b)("inlineCode",{parentName:"p"},'<class className="org.intermine.model.bio.Gene">'),". The parameters are as follows:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"url"))),Object(r.b)("p",null,"this is where we specify the target of the link. The item in the curly brackets is a variable parameter that will get resolved as a property for the current object."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"image"))," ","(","optional",")"),Object(r.b)("p",null,'defines a name of the image from "model/images" ',"(","e.g.: ",Object(r.b)("inlineCode",{parentName:"p"},"webapp/src/main/webapp/model/images"),")"," to resolve."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"text"))," ","(","optional",")"),Object(r.b)("p",null,"defines a link text that will appear ","(","next to an image if provided",")",". The link will then appear in the top right corner of the header. If no image or text is provided, the link text will default to the URL."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),"\nThe order the fields appear in your webconfig-model is the order in which they will appear on the report page ","(","left to right",")","."),Object(r.b)("h3",{id:"references--collections"},"References & Collections"),Object(r.b)("p",null,"Each object has a number of fields configured in the model, like ",Object(r.b)("inlineCode",{parentName:"p"},"length")," or ",Object(r.b)("inlineCode",{parentName:"p"},"proteins")," for Gene. The former is a reference to a single value or an object while the latter is a list of values/objects. These then appear on the report page as References and Collections."),Object(r.b)("p",null,"To configure which category on the page these are to show, follow ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/admin/index"}),"Website Admin"),"."),Object(r.b)("p",null,'Additionally, one can decide to either show the old style "inline tables" or use the new Results Tables JS library when displaying these. To enable the latter, edit your ',Object(r.b)("inlineCode",{parentName:"p"},"web.properties")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"inline.collections.in.tables = true\n")),Object(r.b)("p",null,"This will display any inline collections in table widgets. Inline collections appear expanded by default and can be manually collapsed by the user. To make all inline collections appear as collapsed, add or edit the following property in your ","`","web.properties","`",":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"web.collections.expandonload=false\n")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"use.localstorage")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://diveintohtml5.info/storage.html"}),"localStorage")," is available, then a particular collection's expanded or collapsed state will be remembered and not overridden by the default state property."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"use.localstorage = true\n")),Object(r.b)("h3",{id:"inline-lists"},"Inline Lists"),Object(r.b)("p",null,"Inline lists are lists of values in one column of a report page table, displayed in one line. Take ''dataSets'' on a Gene object as follows:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:a(839).default})),Object(r.b)("p",null,"Perhaps we would like to only display the names of data sets available. In that case, we would add the following to the Gene class ","(",Object(r.b)("inlineCode",{parentName:"p"},'<class className="org.intermine.model.bio.Gene">'),")"," in the ",Object(r.b)("inlineCode",{parentName:"p"},"webconfig-model.xml")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<inlinelist>\n    <table path="dataSets.name" />\n</inlinelist>\n')),Object(r.b)("p",null,"The result:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:a(840).default})),Object(r.b)("p",null,"Let's go through the available configuration:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"path"))),Object(r.b)("p",null,"refers to the reference or collection and a key ","(","separated by a dot",")"," that refers to a column ","(","key",")"," we want to display."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"showInHeader"))," ","(","optional",")"),Object(r.b)("p",null,"a Boolean attribute that, if set to true, will make the list appear in the header section of the page."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"lineLength"))," ","(","optional",")"),Object(r.b)("p",null,'defines the number of characters we would like to show in the list, any content after this length will be revealed upon clicking an "Expand" link. Bear in mind that the line length will not be exact as it will not split words in half.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"showLinksToObjects"))," ","(","optional",")"),Object(r.b)("p",null,"by specifying this Boolean attribute we can create links from the list to the individual objects the list refers to."),Object(r.b)("p",null,'If we have not set an inline list to appear in the header section of the page, the list will, by default appear in the category "Other" on the report page. If we login to the system we can then ',"(","through the report page tagging interface that is revealed to us",")"," tag the list to appear in a specific section."),Object(r.b)("h3",{id:"custom-displayers"},"Custom Displayers"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/report-page/report-displayers"}),"Report Displayers")," for details on how to create displayers for the report page."),Object(r.b)("h3",{id:"templates"},"Templates"),Object(r.b)("p",null,"Tag template with the ",Object(r.b)("inlineCode",{parentName:"p"},"im:report")," tag. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/admin/index"}),"Website Admin"),"."),Object(r.b)("p",null,"The template needs to have only one where clause involving the class of the object. You also need to specify an aspect within the report page where the template will appear ","(","e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"im:aspect:Genomics"),")"),Object(r.b)("p",null,"Templates appear collapsed by default. To make all templates appear expanded when a report page is loaded, add or edit the following property in your ",Object(r.b)("inlineCode",{parentName:"p"},"web.properties"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"web.templates.expandonload=true\n")),Object(r.b)("p",null,"As with collections ","(","see above",")",", if ",Object(r.b)("inlineCode",{parentName:"p"},"use.localstorage")," is enabled and available, then a particular template's expanded or collapsed state will be remembered and not overridden by the default state property."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning"),"\nThe underlying query that populates a template is executed as the template is expanded. Setting ",Object(r.b)("inlineCode",{parentName:"p"},"web.templates.expandonload")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," can cause a significant increase in a report page's load time, particularly if there are more than a handful of templates."),Object(r.b)("h3",{id:"external-links"},"External Links"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/web-properties#external-links"}),"Features")," "),Object(r.b)("h3",{id:"data"},"Data"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/webconfig-model"}),"Data and Widget Configuration")," for details on how to change the names of class and fields."),Object(r.b)("p",null,"You can also hide collections by tagging them with the ",Object(r.b)("inlineCode",{parentName:"p"},"im:hidden")," tag."))}c.isMDXComponent=!0},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),c=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=c(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=c(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?l.a.createElement(h,p(p({ref:t},s),{},{components:a})):l.a.createElement(h,p({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},734:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Screenshot4-cc17dd84b2f8fb7e00b2ee4cd287ffbf.jpg"},839:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Screenshot-69f3fcc4744a1d107eec0ca019e20059.jpg"},840:function(e,t,a){"use strict";a.r(t),t.default="data:image/jpeg;base64,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"}}]);