(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{658:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(704)),r={title:"Home page"},s={unversionedId:"webapp/homepage/index",id:"webapp/homepage/index",isDocsHomePage:!1,title:"Home page",description:"Note",source:"@site/docs/webapp/homepage/index.md",slug:"/webapp/homepage/index",permalink:"/im-docs/docs/next/webapp/homepage/index",editUrl:"https://github.com/intermine/im-docs/docs/webapp/homepage/index.md",version:"current",sidebar:"someSidebar",previous:{title:"Guide to Customising BlueGenes",permalink:"/im-docs/docs/next/webapp/blue-genes/index"},next:{title:"Permanent URLs",permalink:"/im-docs/docs/next/webapp/report-page/permanentURL"}},l=[{value:"Boxes Customization",id:"boxes-customization",children:[{value:"Search box",id:"search-box",children:[]},{value:"Second box",id:"second-box",children:[]},{value:"Third box",id:"third-box",children:[]}]},{value:"Popular Templates Customization",id:"popular-templates-customization",children:[]},{value:"Featured Lists",id:"featured-lists",children:[]},{value:"RSS/Blog Feed",id:"rssblog-feed",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nThis text describes how to customize the homepage of your mine."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nSee also ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/layout/index"}),"General Layout")," for whole app look & feel"),Object(i.b)("p",null,"If you have just installed a new mine, your homepage probably looks something like the following:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:n(876).default})),Object(i.b)("p",null,"In order to do any sort of customizations, one has to add/edit a configuration file for the mine. You will find this file in ",Object(i.b)("inlineCode",{parentName:"p"},"webapp/src/main/webapp/WEB-INF/web.properties"),"."),Object(i.b)("p",null,"Open this file in your editor of choice and follow the text below."),Object(i.b)("h2",{id:"boxes-customization"},"Boxes Customization"),Object(i.b)("p",null,"The three prominent boxes on the homepage will contain a search functionality, a list upload functionality and an info box. You can customise the text these contain and the box title."),Object(i.b)("h3",{id:"search-box"},"Search box"),Object(i.b)("p",null,"The first search box is configured thusly:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.searchBox.title = Search\nbegin.searchBox.description = Search FlyMine. Enter <strong>names</strong>, <strong>identifiers</strong> \\\nor <strong>keywords</strong> for genes, proteins, pathways, ontology terms, authors, etc. (e.g. \\\n<em>eve</em>, HIPPO_DROME, glycolysis, <em>hb</em> allele).\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nYou will find that only the description field accepts HTML."),Object(i.b)("h3",{id:"second-box"},"Second box"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.listBox.title = List Upload\nbegin.listBox.description = Enter a <strong>list</strong> of identifiers.\n\nbag.example.identifiers=CG9151, FBgn0000099, CG3629, TfIIB, Mad, CG1775, CG2262, TWIST_DROME, \\\ntinman, runt, E2f, CG8817, FBgn0010433, CG9786, CG1034, ftz, FBgn0024250, FBgn0001251, tll, \\\nCG1374, CG33473, ato, so, CG16738, tramtrack,  CG2328, gt\n")),Object(i.b)("h3",{id:"third-box"},"Third box"),Object(i.b)("p",null,"The third/info box can contain a descriptive text about your mine or it can offer a link to a tour of the project. Take the example from FlyMine project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.thirdBox.title = First Time Here?\nbegin.thirdBox.description = FlyMine integrates many types of data for <em>Drosophila</em>, \\\n<em>Anopheles</em> and other organisms. You can run flexible queries, export results and analyse lists of \\\ndata.\nbegin.thirdBox.link = http://www.flymine.org/help/tour/start.html\nbegin.thirdBox.linkTitle = Take a tour\n")),Object(i.b)("p",null,"By providing the .link parameter a button will be shown at the bottom of the box with a custom link of choice."),Object(i.b)("p",null,'You can serve up a custom text in the third "information" box to the user, based on whether they have visited the homepage before or not. We do this through a cookie that will, for a year, indicate for your computer, that the homepage has been visited.'),Object(i.b)("p",null,'In order to change the values of the third box based on whether the user has visited the page or not, prepend the text "visited" before an uppercased key. For example, if one wanted to say "Welcome Back" instead of "First Time Here?" as the title of the box, we would add the following key=value pair:'),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.thirdBox.visitedTitle = Welcome Back\n")),Object(i.b)("p",null,'The fields that you do NOT set in this way, will simply show the text configured in the normal way. So even though someone has visited the homepage before, unless I add a "visited" property, the text stays the same as before.'),Object(i.b)("h2",{id:"popular-templates-customization"},"Popular Templates Customization"),Object(i.b)("p",null,"To show the ten most popular template queries per category on your homepage like so:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:n(877).default})),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"# web.properties\nbegin.tabs.1.id = Genomics\n")),Object(i.b)("p",null,"What this configuration does is it creates a tab on the homepage with ","(","up to",")"," 10 most popular templates from a ",Object(i.b)("inlineCode",{parentName:"p"},"Genomics")," category. For a template to appear in this section, tag it with the Genomics aspect: ",Object(i.b)("inlineCode",{parentName:"p"},"im:aspect:Genomics"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nThe tag you apply to the template ","(","e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"im:aspect:Genomics"),")"," must match the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," attribute ","(","e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"begin.tabs.1.id = Genomics"),")","."),Object(i.b)("p",null,"The number in the config key specifies the order in which we want to show them. So if we have two categories, Genomics and Proteins, and they should appear in this order, we would write this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.tabs.1.id = Genomics\nbegin.tabs.2.id = Proteins\n")),Object(i.b)("p",null,"The other customisation we can do is specify an informative text that is to appear in the tab above the templates listing ","(","again, this text accepts HTML.",")",":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.tabs.1.id = Genomics\nbegin.tabs.1.description = This is some descriptive text\n")),Object(i.b)("p",null,"The last thing we will show is how to specify a custom category name to show as a link on the tab ","(","entirely optional",")",":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.tabs.1.id = Genomics\nbegin.tabs.1.description = This is some descriptive text\nbegin.tabs.1.name = Genes\n")),Object(i.b)("p",null,"Example configuration file: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/intermine/flymine/blob/master/webapp/src/main/webapp/WEB-INF/web.properties#L489"}),"FlyMine")),Object(i.b)("h2",{id:"featured-lists"},"Featured Lists"),Object(i.b)("p",null,"Lists with tag ",Object(i.b)("inlineCode",{parentName:"p"},"im:homepage")," will be shown on the homepage below the templates listing in a natural order, and/or an order specified by ",Object(i.b)("inlineCode",{parentName:"p"},"im:order:n"),"."),Object(i.b)("p",null,"To change the description text associated with this set of lists, edit the properties file like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"begin.listsBox.description = These are the best lists ever\n")),Object(i.b)("h2",{id:"rssblog-feed"},"RSS/Blog Feed"),Object(i.b)("p",null,"To add the RSS feed at the bottom right corner of the page, add the following to your MINE properties file ","(","in ",Object(i.b)("inlineCode",{parentName:"p"},".intermine")," file",")",":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"project.rss = http://<your_blog>/<your_feed_url>\n")),Object(i.b)("p",null,"eg:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"project.rss=http://blog.flymine.org/?feed=rss2\n")),Object(i.b)("p",null,"Two latest entries will be shown in the box. If you want to provide a link underneath the entry listing to your blog, add the following to the config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"links.blog = http://<your_blog>\n")))}p.isMDXComponent=!0},704:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,h=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},876:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/initial_homepage-c7c17d55456513ccc69318959430018c.jpg"},877:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/popular_templates-900d2765bb5aa7d685815e2dd403db6c.jpg"}}]);