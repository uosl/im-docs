(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(704)),b={title:"List upgrade"},l={unversionedId:"webapp/lists/list-upgrade",id:"webapp/lists/list-upgrade",isDocsHomePage:!1,title:"List upgrade",description:"When you update an InterMine production database, user lists have to be updated as well. This document aims to describe this process.",source:"@site/docs/webapp/lists/list-upgrade.md",slug:"/webapp/lists/list-upgrade",permalink:"/im-docs/docs/next/webapp/lists/list-upgrade",editUrl:"https://github.com/intermine/im-docs/docs/webapp/lists/list-upgrade.md",version:"current",sidebar:"someSidebar",previous:{title:"List upload",permalink:"/im-docs/docs/next/webapp/lists/list-upload"},next:{title:"List widgets overview",permalink:"/im-docs/docs/next/webapp/lists/list-widgets/index"}},s=[{value:"Why a list &quot;upgrade&quot; is needed",id:"why-a-list-upgrade-is-needed",children:[{value:"Production Database",id:"production-database",children:[]},{value:"Userprofile Database",id:"userprofile-database",children:[]}]},{value:"Process",id:"process",children:[]},{value:"Upgrading to a new release",id:"upgrading-to-a-new-release",children:[]},{value:"Lists not current",id:"lists-not-current",children:[]},{value:"bagvalues table",id:"bagvalues-table",children:[]},{value:"Userprofile database",id:"userprofile-database-1",children:[]},{value:"Serial Number Overview",id:"serial-number-overview",children:[]}],o={toc:s};function d(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you update an InterMine production database, user lists have to be updated as well. This document aims to describe this process."),Object(i.b)("h2",{id:"why-a-list-upgrade-is-needed"},'Why a list "upgrade" is needed'),Object(i.b)("p",null,"Lists are saved in the userprofile ",Object(i.b)("inlineCode",{parentName:"p"},"savedbag"),", ",Object(i.b)("inlineCode",{parentName:"p"},"bagvalues")," tables and in the production database ",Object(i.b)("inlineCode",{parentName:"p"},"osbag_int")," table."),Object(i.b)("h3",{id:"production-database"},"Production Database"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"obsbag","_","int table")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"column")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"notes")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bagid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unique bag id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"intermine object id")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nThe InterMine ID is only valid per database. If the database is rebuilt, the IDs change and the information in this table becomes incorrect. The lists require an ",Object(i.b)("em",{parentName:"p"},"upgrade")," for them to be updated with the new, correct InterMine object IDs."),Object(i.b)("h3",{id:"userprofile-database"},"Userprofile Database"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"savedbag table")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"column")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"notes")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"osbid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bag id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type of object, eg. Gene")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name of list, provided by user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"datecreated"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timestamp")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description, provided by user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"userprofileid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"user id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"intermine","_","state"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CURRENT, NOT","_","CURRENT or TO","_","UPGRADE")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"bagvalues table")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"column")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"notes")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"savedbagid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bag id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"identifier originally typed in by user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"extra"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"organism short name")))),Object(i.b)("p",null,"Lists are saved along with the user information in the ",Object(i.b)("inlineCode",{parentName:"p"},"savedbag")," table. The identifiers used to create a list are also stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"bagvalues")," table in the userprofile database. These identifiers are used to upgrade the list to internal object ids in the new production database."),Object(i.b)("p",null,'To make queries fast, the list contents are stored in the production database as internal object ids. When a new production database is used, the object ids are no longer valid and need to be "upgraded".'),Object(i.b)("h2",{id:"process"},"Process"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Upgrade lists only when users log in - so we won't waste time upgrading dormant user accounts and old lists."),Object(i.b)("li",{parentName:"ul"},"Superuser lists are upgraded when the webapp is first deployed."),Object(i.b)("li",{parentName:"ul"},"The webapp knows when the lists need to be upgraded. For this purpose a ",Object(i.b)("inlineCode",{parentName:"li"},"serialNumber")," identifying the production database is generated when we build a new production db and stored in the userprofile database when we release the webapp. If the two serialNumberbs don't match, the system should upgrade the lists.")),Object(i.b)("h2",{id:"upgrading-to-a-new-release"},"Upgrading to a new release"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When a new production db is built, all the lists have to be upgraded. Their state is set to NOT","_","CURRENT."),Object(i.b)("li",{parentName:"ul"},"When a user logs in, a thread will begin upgrading their saved lists to the new release - finding and writing the corresponding object ids to the production database. If there are no issues ","(","all identifiers are resolved automatically",")"," the state of the list is set to CURRENT."),Object(i.b)("li",{parentName:"ul"},"The user can verify the state of their saved bags in MyMine-",">","Lists page."),Object(i.b)("li",{parentName:"ul"},"If there are any issues, the state of the list is set to TO","_","UPGRADE. These lists are shown in MyMine-",">","List page in a separate table. The user can click on the Upgrade List link and browse in the bagUploadConfirm page where all conflicts will be displayed."),Object(i.b)("li",{parentName:"ul"},"Once the user has resolved any issues, the list can be saved clicking the button 'Upgrade a list of ...' and used for queries, etc. The state is set to CURRENT."),Object(i.b)("li",{parentName:"ul"},"If a user never logs in to a particular release, the list will not be upgraded, but can still be upgraded as normal if they log in to a later release.")),Object(i.b)("h2",{id:"lists-not-current"},"Lists not current"),Object(i.b)("p",null,"If a list is not current:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the user can't use it in the query/template to add list constraints"),Object(i.b)("li",{parentName:"ul"},"the list is not displayed in the List-",">","View page"),Object(i.b)("li",{parentName:"ul"},"the list is displayed in MyMine-",">","Lists page, but the column ",Object(i.b)("inlineCode",{parentName:"li"},"Current")," is set ",Object(i.b)("inlineCode",{parentName:"li"},"Not Current"),". Selecting the link, the user can resolve any issue."),Object(i.b)("li",{parentName:"ul"},"the list is not displayed in the Lists section on the report pages")),Object(i.b)("h2",{id:"bagvalues-table"},"bagvalues table"),Object(i.b)("p",null,"The list upgrade system, needs a bagvalues table in the userprofile database, with savedbagid and value columns. This table should be generated manually, running the ",Object(i.b)("inlineCode",{parentName:"p"},"load-bagvalues-table")," ant task in the webapp directory. The ",Object(i.b)("inlineCode",{parentName:"p"},"load-bagvalues-table")," task, should create the table and load the contents of the list using the former production db, that is the same db used to create the saved lists. Every time you re-create the userprofile database, you have to re-generate the 'bagvalues' table. In theory, you should never re-create the userprofile db, so you should run the ",Object(i.b)("inlineCode",{parentName:"p"},"load-bagvalues-table")," task only once."),Object(i.b)("h2",{id:"userprofile-database-1"},"Userprofile database"),Object(i.b)("p",null,"The table should be populated with one row corresponding to each row in production db osbag","_","int table. Each row should contain the ",Object(i.b)("inlineCode",{parentName:"p"},"IntermineBag")," id and the first value not empty of the primary identifier field, defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"class_keys")," properties file."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"bagvalues")," table is updated when the user is logged in and:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"creates a new list from the result page or starting from some identifiers"),Object(i.b)("li",{parentName:"ul"},"creates a new list from union, copy, intersection, subtraction operations"),Object(i.b)("li",{parentName:"ul"},"adds or deletes some rows to/from the list"),Object(i.b)("li",{parentName:"ul"},"deletes a list")),Object(i.b)("p",null,"When a user logs in, any lists he has created in his session become saved bags in the userprofile database, and the ",Object(i.b)("inlineCode",{parentName:"p"},"bagvalues")," table should be updated as well. The contents of ",Object(i.b)("inlineCode",{parentName:"p"},"bagvalues")," are only needed when upgrading to a new release. The thread upgrading the lists, uses the contents of bagvalues as input and, if the list upgrades with no issues:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"writes values to osbag","_","int table"),Object(i.b)("li",{parentName:"ul"},"sets in the savedbag table the intermine-current to true"),Object(i.b)("li",{parentName:"ul"},"updates osbid.")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"intermine-current")," in the table ",Object(i.b)("inlineCode",{parentName:"p"},"savedbag")," marks whether the bag has been upgraded. The column is generated when you create the userprofile database or when ",Object(i.b)("inlineCode",{parentName:"p"},"load-bagvalues-table")," has been executed."),Object(i.b)("h2",{id:"serial-number-overview"},"Serial Number Overview"),Object(i.b)("p",null,"The list upgrade functionality uses a serialNumber that identifies the production database. The serialNumber is re-generated each time we build a new production db. On startup of the webapp, the webapp compares the production serialNumber with its own serialNumber ","(","before stored using the production serialNumber",")",". If the two serialNumbers match, the lists will not be upgraded; if they don't, the lists are set as 'not current' and will be upgraded only when the user logs in."),Object(i.b)("p",null,"There are four cases:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"production serialNumber and userprofile serialNumber are both null ==",">"," we don't need to upgrade the list."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Scenario: I have released the webapp but I haven't rebuilt the production db."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"production serialNumber is not null but userprofile serialNumber is null ==",">"," we need to upgrade the lists."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Scenario: I have run ",Object(i.b)("inlineCode",{parentName:"p"},"build-db")," in the production db and it's the first time that I release the webapp. On startup, the webapp sets ",Object(i.b)("inlineCode",{parentName:"p"},"intermine_current")," to false and the userprofile serialNumber value with the production serialNumber value."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"production serialNumber = userprofile serialNumber ==",">"," we don't need to upgrade the lists."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Scenario: we have released the webapp but we haven't changed the production db."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"production serialNumber != userprofile serialNumber ==",">"," we need to upgrade the lists."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Scenario: we have run ",Object(i.b)("inlineCode",{parentName:"p"},"build-db")," in the production and a new serialNumber has been generated.")))),Object(i.b)("p",null,"The following diagram shows the possible states. With the green, we identify the states that don't need a list upgrade, with the red those need a list upgrade."),Object(i.b)("p",null,Object(i.b)("img",{src:a(766).default})))}d.isMDXComponent=!0},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(b,".").concat(u)]||c[u]||p[u]||i;return a?r.a.createElement(h,l(l({ref:t},o),{},{components:a})):r.a.createElement(h,l({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},766:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/SerialNumber-ac60f3ff3b7932b96f0e25acdd9268c7.png"}}]);