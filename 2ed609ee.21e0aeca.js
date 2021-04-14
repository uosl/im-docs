(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(545)),o={title:"General Layout"},p={unversionedId:"webapp/layout/index",id:"version-4.0.0/webapp/layout/index",isDocsHomePage:!1,title:"General Layout",description:"This page describes how to customise the look & feel of the whole InterMine webapp.",source:"@site/versioned_docs/version-4.0.0/webapp/layout/index.md",slug:"/webapp/layout/index",permalink:"/im-docs/docs/4.0.0/webapp/layout/index",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/layout/index.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Guide to Customising BlueGenes",permalink:"/im-docs/docs/4.0.0/webapp/blue-genes/index"},next:{title:"Home page",permalink:"/im-docs/docs/4.0.0/webapp/homepage/index"}},c=[{value:"Parts",id:"parts",children:[{value:"Logo",id:"logo",children:[]},{value:"Menu Tabs",id:"menu-tabs",children:[]},{value:"Keyword search box",id:"keyword-search-box",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Favicon",id:"favicon",children:[]},{value:"Other properties",id:"other-properties",children:[]}]},{value:"Changing look and feel, the theme",id:"changing-look-and-feel-the-theme",children:[{value:"Developing your own theme",id:"developing-your-own-theme",children:[]}]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page describes how to customise the look & feel of the whole InterMine webapp."),Object(i.b)("h2",{id:"parts"},"Parts"),Object(i.b)("h3",{id:"logo"},"Logo"),Object(i.b)("p",null,"The logo is independent from any themes and is located here ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/webapp/src/main/webapp/model/images/logo.png"),". The recommended size is 45px x 43px."),Object(i.b)("h3",{id:"menu-tabs"},"Menu Tabs"),Object(i.b)("p",null,"The tabs are set in InterMine's internationalisation file: ",Object(i.b)("inlineCode",{parentName:"p"},"intermine/webapp/main/resources/webapp/WEB-INF/classes/InterMineWebApp.properties"),"."),Object(i.b)("p",null,"Each page has a name and a tab, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"mymine.tab = mymine\n")),Object(i.b)("p",null,"In addition to InterMine's file, each mine has its own internationalisation file: ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/webapp/src/main/resources/model.properties"),". Properties set in this file overwrite the ones set in InterMine's ",Object(i.b)("inlineCode",{parentName:"p"},"InterMineWebApp.properties"),'. Below is an example of how to add tabs to your mine. Replace "api" with the name of your new tab.'),Object(i.b)("p",null,"First, copy ",Object(i.b)("inlineCode",{parentName:"p"},"headMenu.jsp")," from InterMine to your local mine: ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/webapp/src/main/webapp"),". Then add your new tab:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'<li id="api"  <c:if test="${tab == \'api\'}">class="activelink"</c:if>>\n  <a href="/${WEB_PROPERTIES[\'webapp.path\']}/api.do">\n    <fmt:message key="menu.api"/>\n  </a>\n</li>\n')),Object(i.b)("p",null,"Then add the text for that tab to your ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/webapp/src/main/resources/model.properties")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"# HEADER\nmenu.api = API\n")),Object(i.b)("p",null,"You'll need to configure our web framework ","(","Struts",")"," to properly load your JSP page:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'# in MINE_NAME/webapp/src/main/resources/struts-config-model.xml\n<action path="/api" forward="api.page"/>\n\n# in MINE_NAME/webapp/resources/tiles-defs-model.xml\n<definition name="api.page" extends="layout.template">\n    <put name="body" value="api.tile"/>\n    <put name="pageName" value="api"/>\n</definition>\n\n<definition name="api.tile" path="/api.jsp"/>\n')),Object(i.b)("p",null,"Finally, add your JSP file to the ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/webapp/src/main/webapp")," directory and re-release your webapp."),Object(i.b)("h3",{id:"keyword-search-box"},"Keyword search box"),Object(i.b)("p",null,"This search box queries the search index created in the postprocess ",Object(i.b)("inlineCode",{parentName:"p"},"create-search-index"),". To change which placeholder identifiers will appear in the box, edit the ",Object(i.b)("inlineCode",{parentName:"p"},"quickSearch.identifiers")," property in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nSee also ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/keyword-search/index"}),"Keyword Search")," for details on how to configure the search index. "),Object(i.b)("h3",{id:"footer"},"Footer"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"feedback.destination"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application"),", change the recipient email address for contact form"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"funding"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/model-properties"}),"Text and messages"),', change the "funded by" text'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"project.citation"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/web-properties"}),"Features"),', change the "cite" text'),Object(i.b)("h3",{id:"favicon"},"Favicon"),Object(i.b)("p",null,"Favicon ","(","icon seen next to the URL of the webapp in the browser URL bar",")"," can be set by adding the following line into the ",Object(i.b)("inlineCode",{parentName:"p"},"webapp/resources/webapp/layout.jsp")," file and its ",Object(i.b)("inlineCode",{parentName:"p"},"</head>")," section:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<link rel="shortcut icon" type="image/x-icon" href="model/images/favicon.ico">\n')),Object(i.b)("p",null,"The favicon itself should be located in ",Object(i.b)("inlineCode",{parentName:"p"},"<your_mine>/webapp/src/main/webapp/model/images/favicon.ico"),"."),Object(i.b)("p",null,"If you want to generate a favicon from an image, use this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://tools.dynamicdrive.com/favicon/"}),"Dynamic Drive")," tool."),Object(i.b)("h3",{id:"other-properties"},"Other properties"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"project.sitePrefix"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application"),", configure the link"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"project.title"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application"),", configure the name of the mine"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"project.releaseVersion"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application"),", configure the version of the mine"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"project.subTitle"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application"),", configure the subtitle showing in the header"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"header.links"))),Object(i.b)("p",null,"in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/web-properties"}),"Features"),", configure the links in the upper right corner"),Object(i.b)("h2",{id:"changing-look-and-feel-the-theme"},"Changing look and feel, the theme"),Object(i.b)("p",null,"InterMine provides a set of default themes, but you can also create your own. All themes are defined in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/intermine/intermine/tree/dev/intermine/webapp/src/main/webapp/themes"}),"/themes")," directory in InterMine. Explore the folder to see the themes available."),Object(i.b)("p",null,"To switch a theme edit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/web-properties"}),"Features"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"# web.properties\ntheme = purple\n")),Object(i.b)("p",null,"You need to change this property to the name of the theme you want to use ","(","the directory name",")",", then re-release the webapp. Be sure to run ",Object(i.b)("inlineCode",{parentName:"p"},"./gradlew clean")," first to ensure that all of the old files are deleted."),Object(i.b)("h3",{id:"developing-your-own-theme"},"Developing your own theme"),Object(i.b)("p",null,"With CSS knowledge and open source image software such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.gimp.org"}),"Gimp")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.inkscape.org"}),"Inkscape")," you can develop your own theme. Each theme directory contains a ",Object(i.b)("inlineCode",{parentName:"p"},"theme.css")," file, which is broken down in annotated sections, and image files. The image files are required for displaying menus, headers and backgrounds and can be modified with image software to match your colour scheme. Create a new directory under ",Object(i.b)("inlineCode",{parentName:"p"},"webapp/src/main/webapp/themes"),", copy the contents of another theme directory into it and start editing."))}s.isMDXComponent=!0},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,u=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?r.a.createElement(u,p(p({ref:t},b),{},{components:n})):r.a.createElement(u,p({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);