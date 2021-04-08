(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{673:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),i=(a(0),a(704)),r={title:"List widgets overview"},l={unversionedId:"webapp/lists/list-widgets/index",id:"version-5.0.0/webapp/lists/list-widgets/index",isDocsHomePage:!1,title:"List widgets overview",description:"There are several list widgets \\(widgets from now on\\) available on InterMine, and they are configured in Data and Widget Configuration.",source:"@site/versioned_docs/version-5.0.0/webapp/lists/list-widgets/index.md",slug:"/webapp/lists/list-widgets/index",permalink:"/im-docs/docs/webapp/lists/list-widgets/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/webapp/lists/list-widgets/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"List upgrade",permalink:"/im-docs/docs/webapp/lists/list-upgrade"},next:{title:"Embedding widgets on a HTML page",permalink:"/im-docs/docs/webapp/lists/list-widgets/embedding"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Table widgets",id:"table-widgets",children:[]},{value:"Graph/Chart widgets",id:"graphchart-widgets",children:[]},{value:"Enrichment widgets",id:"enrichment-widgets",children:[]}]}],o={toc:c};function d(e){var t=e.components,r=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are several list widgets ","(","widgets from now on",")"," available on InterMine, and they are configured in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/webapp/properties/webconfig-model"}),"Data and Widget Configuration"),"."),Object(i.b)("p",null,"There are three categories of widgets:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Category"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"table"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Displays the counts from the list for the collection specified")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"graph/chart"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Displays a graph/chart based on a dataset you specify")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"enrichment"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Displays the p-values of objects that appear in your list")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Table and Graph/Chart widgets configurations are valid only for the legagy webapp and for the webservices.\nTo configure Table and Graph/Chart widgets in the new user interface, please use the Tool API"))),Object(i.b)("p",null,"To add a widget to your mine:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add config to your ",Object(i.b)("inlineCode",{parentName:"li"},"webconfig-model.xml")," file"),Object(i.b)("li",{parentName:"ol"},"Re-release your webapp"),Object(i.b)("li",{parentName:"ol"},"View widget in a list analysis page")),Object(i.b)("p",null,"Below are the details on how to configure each widget type."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please read the documentation carefully and check your config file for typos. Most attributes are case sensitive. When the webapp is released, the config is validated and any errors are displayed in the home page."))),Object(i.b)("h3",{id:"table-widgets"},"Table widgets"),Object(i.b)("p",null,"Table widgets display objects and the counts of related objects in your list."),Object(i.b)("p",null,Object(i.b)("img",{src:a(879).default})),Object(i.b)("p",null,"An example table widget of Orthologues in FlyMine."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unique id used by JavaScript only. Spaces not allowed."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"unique_id"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"pathStrings")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"which collection to use in the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene.homologues[type=orthologue].homologue.organism"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"exportField")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"which field from the objects in your list to export"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"primaryIdentifier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"typeClass")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"types of lists that should display this widget. Use the simple class name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene"))))),Object(i.b)("p",null,"The following are optional attributes:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"appears at the top of the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Orthologues"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description of the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Counts of orthologues"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"displayFields")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"which fields from the objects in the collection ","(","in the above example, ",Object(i.b)("inlineCode",{parentName:"td"},"Gene.proteins"),")"," to display, eg. ",Object(i.b)("inlineCode",{parentName:"td"},"primaryAccession")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"name"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"columnTitle")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"heading for the \u201ccount\u201d column"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Orthologues"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"externalLink")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"link displayed next to first column, identifier will be appended to the link"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"externalLinkLabel")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"label for external link"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"views")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"path fields display in the query running when the user clicks on the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"symbol"))))),Object(i.b)("h3",{id:"graphchart-widgets"},"Graph/Chart widgets"),Object(i.b)("p",null,"Graph widgets display datasets in graphical format."),Object(i.b)("p",null,Object(i.b)("img",{alt:"An example chart widget of BDGP Expression Patterns in FlyMine.",src:a(880).default})),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unique id used by JavaScript only. Spaces not allowed."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"unique_id"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"graphType"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"which type of chart to render"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"ColumnChart"),",","`","`","BarChart","`","`"," or ",Object(i.b)("inlineCode",{parentName:"td"},"PieChart"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"startClass"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"it\u2019s the root class for all the paths specified in the configuration ","[","1","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"typeClass"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type of lists that should display this widget. Use the simple class name."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"categoryPath"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Must be attribute. We can specify the subclass using the syntax ",Object(i.b)("inlineCode",{parentName:"td"},"path[subclass type]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"mRNAExpressionResults.stageRange"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seriesPath"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the series path. This has to be an attribute. We can specify the subclass using the syntax ",Object(i.b)("inlineCode",{parentName:"td"},"path[subclass type]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"mRNAExpressionResults.expressed"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seriesValues"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the values of different series. Case sensitive. You can specify Boolean values"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"true,false")," or ",Object(i.b)("inlineCode",{parentName:"td"},"Up,Down"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seriesLabels"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the labels displayed on the graphs to distinguish the different series inside a category"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Expressed,Not Expressed")," or ",Object(i.b)("inlineCode",{parentName:"td"},"Up,Down"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"views"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"attributes paths displayed when the user clicks an area on the graph"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"name,organism.name"))))),Object(i.b)("p",null," ","[","1","]"," All the paths set, will be built starting from that. Specify only the simple name ","(","e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Gene"),")",". You can choose to set the bag type class or the root class associated to the category path."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can specify ",Object(i.b)("strong",{parentName:"p"},"only one")," class in ",Object(i.b)("inlineCode",{parentName:"p"},"typeClass"),". If you need another type, you have to define a new widget."))),Object(i.b)("p",null,"The following are optional attributes:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"appears at the top of the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"BDGP expression patterns"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description of the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Expression patterns"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"domainLabel")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Label displayed on x-axis in the ColumnChart ","(","on y-axis in the BarChart",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Stage"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"rangeLabel")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Label displayed on y-axis in the ColumnChart ","(","on x-axis in the a BarChart",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene count"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"filterLabel")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"label for filter form field"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Organism"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"filters")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the values for the filter, set in the dropdown ","[","2","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"All,KEGG pathways,Reactome data"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"listPath")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the path used to build the bag constraint ","[","3","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"FlyAtlasResult.material"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"constraints")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"separated by comma, case sensitive, must be attributes, operator can be = or != ","[","4","]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"organism.name=[Organism]")," ","[","5","]")))),Object(i.b)("p",null," ","[","2","]"," We can use static values or a grammar to specify the values contained in the list. The default value in general is the first value set in the \u2018filters\u2019 attribute or the first value returned by the query. With static values, you can add \u2018All\u2019 meaning no filter applied."),Object(i.b)("p",null," ","[","3","]"," Optional if the startClass contains the bag type class."),Object(i.b)("p",null," ","[","4","]"," For the values, we can use static values or the selected filter value using the syntax: path constraint = ","[","filter identifier","]","."),Object(i.b)("p",null," ","[","5","]"," organism\u2019s name matching with the value selected in the filter with filterLabel \u2018Organism\u2019"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nThe graphs use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/reference"}),"Google Visualitation API"),"."),Object(i.b)("h3",{id:"enrichment-widgets"},"Enrichment widgets"),Object(i.b)("p",null,"Enrichment widgets calculate p-values representing the probability annotation occurred by chance. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/webapp/lists/list-widgets/enrichment-widgets"}),"List enrichment widgets statistics")," for more information on how the p-value is calculated."),Object(i.b)("p",null,Object(i.b)("img",{alt:"An example enrichment widget of Gene Ontology in FlyMine.",src:a(881).default})),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unique id used by JavaScript only. Spaces not allowed."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"unique_id"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"startClass")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Root class for all the paths specified in the configuration. Use simple name ","(","e.g. Gene",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"startClassDisplay")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field displayed when user clicks on the widget on \u2018Matches\u2019 column"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"primaryIdentifier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"typeClass")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of lists that should display this widget. Use the simple class name."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"enrich")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field to be enriched, displayed in the widget in the first column ","[","6","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"goAnnotation.ontologyTerm.parents.name"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"views")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"attributes paths displayed when the user clicks on ",Object(i.b)("em",{parentName:"td"},"View results")," button ","[","6","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"symbol,organism.name"))))),Object(i.b)("p",null," ","[","6","]","  ","(","1, 2",")"," You have to specify only one field. Specify the subclass using the syntax path","[","subclass type","]","."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can specify ",Object(i.b)("strong",{parentName:"p"},"only one")," class in ",Object(i.b)("inlineCode",{parentName:"p"},"typeClass"),". If you need another type, you have to define a new widget."))),Object(i.b)("p",null,"The following are optional attributes:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"attribute"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"appears at the top of the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Gene Ontology Enrichment"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description of the widget"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"GO terms enriched."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"label")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"heading for the column"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"GO Term"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"externalLink")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"link displayed next to first column"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"googie"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"filters")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"extra filters to add to the display ","[","7","]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"organism.name=[list]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"filterLabel")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"label for filter form field"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"Ontology"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"enrichIdentifier")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"identifier for the row displayed, if not specified, enrich field used ","[","8","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"goAnnotation.ontologyTerm.identifier"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"constraints")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"constraints separated by comma. The paths have to be attributes. The operator can be ",Object(i.b)("inlineCode",{parentName:"td"},"=")," or ",Object(i.b)("inlineCode",{parentName:"td"},"!=")," ","[","9","]","."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"organism.name=[list]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"constraintsForView")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"constraints separated by comma used for building the query executed when the user clicks on the widget on \u2018Matches\u2019 column"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"results.expressed = true"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"correctionCoefficient")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"set to org.intermine.bio.web.widget.GeneLenghtCorrectionCoefficient to normalize by gene length"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(i.b)("p",null," ","[","7","]"," Use static values or a grammar to specify the values contained in the list. The default value in general is the first value set in the \u2018filters\u2019 attribute or the first value returned by the query. With static values, you can add \u2018All\u2019 meaning no filter applied."),Object(i.b)("p",null," ","[","8","]"," Specify only one. This has to be an attribute. Used in the results table. Specify the subclass using the syntax ",Object(i.b)("inlineCode",{parentName:"p"},"path[subclass type]"),"."),Object(i.b)("p",null," ","[","9","]"," Case sensitive. For the values we can use: static values or the selected filter value using the syntax: ",Object(i.b)("inlineCode",{parentName:"p"},"path contraint = [filter identifier]"),". Only the value contained in the list."),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("p",null,"See other mines' config files for more examples, eg:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/intermine/flymine/blob/master/webapp/src/main/webapp/WEB-INF/webconfig-model.xml"}),"FlyMine's webconfig-model.xml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/intermine/humanmine/blob/master/webapp/src/main/webapp/WEB-INF/webconfig-model.xml"}),"HumanMine's webconfig-model.xml"))),Object(i.b)("h4",{id:"background-population"},"Background population"),Object(i.b)("p",null,"In the enrichment widgets, you can change the reference population. The reference population is specific for widget, list and user. If you are logged on, you can save your preference selecting the checkbox 'Save your preference'. The background population selected should include all items contained in the list."),Object(i.b)("h4",{id:"gene-length-correction-coefficient"},"Gene length correction coefficient"),Object(i.b)("p",null,"Depending on the type of experiment your data comes from, it is sometimes necessary to normalize by gene length in order to get the correct p-values. If your data comes from a genome-wide binding experiment such as ChIP-seq or DamID, binding intervals are more likely to be associated with longer genes than shorter ones, and you should therefore normalize by gene length. This is not the case for experiments such as gene expression studies, where gene length does not play a role in the likelihood that a particular set of genes will be overrepresented in the list. If you want normalize by gene length, add the attribute correctionCoefficient, set to 'org.intermine.bio.web.widget.GeneLenghtCorrectionCoefficient'. The gene length correction coefficient is applicable only for lists containing genes with a length, so for a list of genes that do not have a length, the option is not shown. If a list contains some genes without a length those genes will be discarded."),Object(i.b)("h4",{id:"export-values"},"Export Values"),Object(i.b)("p",null,"The exported file from enrichment widgets includes the enrichment identifier as the fourth column. It is contextual to the startClass attribute in the configuration. For example, an enrichment widget for publications would return the PubMedID field, whereas, a GO enrichment widget would return the GO Term field."))}d.isMDXComponent=!0},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,m=p["".concat(r,".").concat(O)]||p[O]||s[O]||i;return a?b.a.createElement(m,l(l({ref:t},o),{},{components:a})):b.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var o=2;o<i;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},879:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/table-e734a3ffb2e5ed4b0521b853b8527e04.png"},880:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chart-e877c3d7f9b6cb38e54a340a42b0da24.png"},881:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/enrichment-854b266141c5f583b9efb230f1c7ca96.png"}}]);