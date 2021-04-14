(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{399:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(545)),l={title:"Features"},o={unversionedId:"webapp/properties/web-properties",id:"webapp/properties/web-properties",isDocsHomePage:!1,title:"Features",description:"The web.properties file configures several attributes for the InterMine web application.",source:"@site/docs/webapp/properties/web-properties.md",slug:"/webapp/properties/web-properties",permalink:"/im-docs/docs/next/webapp/properties/web-properties",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/webapp/properties/web-properties.md",version:"current",sidebar:"someSidebar",previous:{title:"Keyword Search",permalink:"/im-docs/docs/next/webapp/keyword-search/index"},next:{title:"OAuth2 Settings",permalink:"/im-docs/docs/next/webapp/properties/oauth2"}},b=[{value:"Branding",id:"branding",children:[]},{value:"List upload examples",id:"list-upload-examples",children:[]},{value:"External links",id:"external-links",children:[]},{value:"Settings for the xrefLink property",id:"settings-for-the-xreflink-property",children:[]},{value:"Overriding properties",id:"overriding-properties",children:[]}],p={toc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"web.properties")," file configures several attributes for the InterMine web application."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"attributeLink")),Object(i.b)("p",null,"Used to configure hyperlinks, generally to external dbs. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/web-properties#external-links"}),"External Links")," below"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"bag.example.identifiers")),Object(i.b)("p",null,"Text present in the list upload form. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/web-properties#list-upload-examples"}),"List upload examples")," below"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"externallink")),Object(i.b)("p",null,"Redirects links in query results. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/query-results/redirects"}),"Link redirects ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"genomicRegionSearch")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"## Make sure pre-defined organisms have chromosome location information in the database\ngenomicRegionSearch.defaultOrganisms = D. melanogaster\ngenomicRegionSearch.defaultSpans = 2L:14615455..14619002\\\\n2R:5866646..5868384\\\\n3R:2578486..2580016\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"project.citation")),Object(i.b)("p",null,"URL link used in the footer and in the CITE US section on the home page."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"xrefLink")),Object(i.b)("p",null,"Used to configure hyperlinks for CrossReferences. See below"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"markup.webpages.enable")),Object(i.b)("p",null,"Used to enable structured data in JSON-LD format in InterMine web pages. Available options are true or false"),Object(i.b)("h2",{id:"branding"},"Branding"),Object(i.b)("p",null,"These parameters are returned by the branding API end point, and are used by external applications, e.g. the InterMine iOS app, the InterMine registry and the InterMine R client."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"branding.images.logo"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"This image should be 45px by 45px")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"branding.colors.header.main"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Main colour for your mine, defaults to grey, ","#","595455")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"branding.colors.header.text"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Text colour for your mine, defaults to white, ","#","fff")))),Object(i.b)("h2",{id:"list-upload-examples"},"List upload examples"),Object(i.b)("p",null,"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"bag.example.identifiers")," key, one can provide a list of keyword examples on the list create/upload page. This could lead to a mixed list of items being updated and only, say Protein or Gene, identifiers being uploaded."),Object(i.b)("h2",{id:"external-links"},"External links"),Object(i.b)("p",null,"You can add links to other websites by adding entries to the ",Object(i.b)("inlineCode",{parentName:"p"},"web.properties")," file."),Object(i.b)("p",null,"The format for this property is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# on the report page - a single identifier\n'attributelink' + unique_name + class + taxonId + attributeName + (url|imageName|text)\n\n# on the list analysis page - a list of identifiers\n'attributelink' + unique_name + class + taxonId + attributeName + 'list' + (url|imageName|text)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"unique","_","name")),Object(i.b)("p",null,"Used to distinguish between multiple configurations for the same attribute/organism/class combination"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"class")),Object(i.b)("p",null,"Class of object to link, eg. Protein"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"taxonId")),Object(i.b)("p",null,"Either a proper id or '","*","' when no assumption is made regarding the organism"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"attributeName")),Object(i.b)("p",null,"Which identifier field to pass to the URL, e.g. if attributeName is primaryIdentifier, the value of primary identifier field will be used as the attribute value"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"list")),Object(i.b)("p",null,"Indicates the link will have a list of identifiers"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"url")),Object(i.b)("p",null,"URL to link to"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"imageName")),Object(i.b)("p",null,"Name of logo ","(","optional",")",", must be in /model directory"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"text")),Object(i.b)("p",null,"Text that will appear next to the logo"),Object(i.b)("p",null,"The value of the attribute ","(","for the current object",")",' is substituted anywhere the string "',"<","<","attributeValue",">",">",'" occurs in the text or the URL'),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"attributelink.flybase.Gene.7227.primaryIdentifier.url=http://www.flybase.org/.bin/fbidq.html?<<attributeValue>>\nattributelink.flybase.Gene.7227.primaryIdentifier.text=FlyBase: <<attributeValue>>\n")),Object(i.b)("p",null,"In this case ",Object(i.b)("inlineCode",{parentName:"p"},"Gene")," pages for Drosophila melanogaster will have a link that uses the ",Object(i.b)("inlineCode",{parentName:"p"},"organismDbId")," field."),Object(i.b)("p",null,"A list example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"attributelink.flymine.Gene.*.primaryIdentifier.list.url=http://www.flymine.org/flymine/portal.do?externalid=<<attributeValue>>&class=Gene\nattributelink.flymine.Gene.*.primaryIdentifier.list.text=FlyMine\nattributelink.flymine.Gene.*.primaryIdentifier.list.imageName=flymine_logo_link.gif\nattributelink.flymine.Gene.*.primaryIdentifier.list.usePost=true\n")),Object(i.b)("p",null,"Only if a taxonId is specified, the code will check if the link to the external db is relevant."),Object(i.b)("h2",{id:"settings-for-the-xreflink-property"},"Settings for the xrefLink property"),Object(i.b)("p",null,"You can configure the URLs for querying CrossReference from external sources by adding entries to the ",Object(i.b)("inlineCode",{parentName:"p"},"web.properties")," file."),Object(i.b)("p",null,"The format for this property is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# on the report page\n'xreflink' + dataSource_name + (url|imageName)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"dataSource","_","name")),Object(i.b)("p",null,"The name of the external database"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"url")),Object(i.b)("p",null,"URL to link to"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"imageName")),Object(i.b)("p",null,"Name of logo ","(","optional",")",", must be in /model directory"),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"xreflink.PFAM.url=http://pfam.sanger.ac.uk/family?\nxreflink.PIRSF.url=http://pir.georgetown.edu/cgi-bin/ipcSF?id=\n")),Object(i.b)("p",null,"Cross references represent identifiers used in external databases, eg. FlyBase, UniProt. An object in InterMine which has CrossReference will have an identifier and data source for that cross reference. In order to find the cross reference in that data source, a URL is required to link to, and the full path should look like url+identifier, e.g. ''",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pfam.sanger.ac.uk/family?PF00001"}),"http://pfam.sanger.ac.uk/family?PF00001"),"''. In web.properties, the first part of the full path could be configured as in \"url\", and identifier will be added programmatically to the rear of it. The dataSource","_","name should be consistent with the source name of the CrossReferences in the InterMine database."),Object(i.b)("h2",{id:"overriding-properties"},"Overriding properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"intermine/webapp/main/resources/webapp/WEB-INF/global.web.properties")," -"),Object(i.b)("p",{parentName:"li"},"used by all mines. Properties set here will be available to everyone, even the test model mine.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"bio/webapp/resources/webapp/WEB-INF/bio.web.properties")," -"),Object(i.b)("p",{parentName:"li"},"used by all bio-mines. Properties set here will be available to all mines that use the bio layer. So, not the test model. Can overwrite properties in the global.web.properties file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"flymine/webapp/resources/web.properties")," - used by a mine. Properties set here will be available to only that specific mine. Can create mine-specific properties or overwrite properties in the above two files.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.intermine/flymine.properties")," - used by a mine. Properties set here will be available only to that specific mine, and will override all other properties. Put sensitive values here that should not be committed to version control."))))}s.isMDXComponent=!0},545:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);