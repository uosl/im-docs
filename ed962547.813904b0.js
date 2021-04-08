(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{656:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return b}));var n=t(3),l=t(7),i=(t(0),t(707)),r={title:"Using Class and Field Labels"},s={unversionedId:"data-model/data-labels",id:"data-model/data-labels",isDocsHomePage:!1,title:"Using Class and Field Labels",description:"The InterMine webapp, and to a limited extent web services, supports the use of labels for classes and fields. Unlabelled classes and fields are formatted for enhanced legibility.",source:"@site/docs/data-model/data-labels.md",slug:"/data-model/data-labels",permalink:"/im-docs/docs/next/data-model/data-labels",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/data-model/data-labels.md",version:"current",sidebar:"someSidebar",previous:{title:"Model Description",permalink:"/im-docs/docs/next/data-model/model"},next:{title:"The PathQuery API",permalink:"/im-docs/docs/next/api/pathquery"}},o=[{value:"Configuring classes and fields individually",id:"configuring-classes-and-fields-individually",children:[]},{value:"Configuring classes and fields globally",id:"configuring-classes-and-fields-globally",children:[]},{value:"Using these labels in your webapp",id:"using-these-labels-in-your-webapp",children:[]},{value:"Using Labels in JavaScript",id:"using-labels-in-javascript",children:[]}],c={toc:o};function b(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The InterMine webapp, and to a limited extent web services, supports the use of labels for classes and fields. Unlabelled classes and fields are formatted for enhanced legibility."),Object(i.b)("p",null,"The current system for determining a label is as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the class or field has a pre-set label, that is used")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Otherwise the class or field name is:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Split from its camel case parts as specified in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html#splitByCharacterTypeCamelCase-java.lang.String-"}),"Apache Commons"),Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html#splitByCharacterTypeCamelCase-java.lang.String-"}),"StringUtils")),Object(i.b)("li",{parentName:"ol"},"Each part is given an initial upper-case"),Object(i.b)("li",{parentName:"ol"},"The parts are then joined by spaces")))),Object(i.b)("p",null,"Handling paths is similar, except that the dots ","(",'"."',")"," between class and field names are replaced by right angle-brackets ","(",'"',">",'"',")","."),Object(i.b)("p",null,"Examples"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Before"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"After"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ChromosomeLocation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Chromosome Location")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"shortName"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Short Name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Organism"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Organism")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Organism.shortName"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Organism ",">"," Short Name")))),Object(i.b)("p",null,"Thus, well named fields and classes do not need explicit labelling."),Object(i.b)("p",null,"Labels can be configured however in two ways, in order of precedence: ","#",". Classes and fields can be configured individually. This configuration respects inheritance, and subclasses automatically inherit the field labels of their parents. ","#",". Translation tables can be set up for classes and fields. These are for cases where ",Object(i.b)("inlineCode",{parentName:"p"},"ALL")," classes/fields with a certain name should be relabelled. Examples are ",Object(i.b)("inlineCode",{parentName:"p"},"url")," -",">"," ",Object(i.b)("inlineCode",{parentName:"p"},"URL"),", which would otherwise be rendered as ''Url''. This is especially useful for acronyms."),Object(i.b)("h2",{id:"configuring-classes-and-fields-individually"},"Configuring classes and fields individually"),Object(i.b)("p",null,"To apply individual configuration, the file ",Object(i.b)("inlineCode",{parentName:"p"},"webconfig-model.xml")," needs to be edited, and a ",Object(i.b)("inlineCode",{parentName:"p"},"label")," attribute added to items you want to configure. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<class className="org.intermine.model.bio.Allele" label="SOME CLASS LABEL">\n    <fields>\n      <fieldconfig fieldExpr="primaryIdentifier" label="SOME FIELD LABEL"/>\n      <fieldconfig fieldExpr="symbol"/>\n      <fieldconfig fieldExpr="alleleClass"/>\n      <fieldconfig fieldExpr="organism.name" label="Organism"/>\n    </fields>\n</class>\n')),Object(i.b)("p",null,"This is most helpful in the case of compound field-expressions ","(",'"organism.name"',")",", which can then be configured to display as just a single expression."),Object(i.b)("h2",{id:"configuring-classes-and-fields-globally"},"Configuring classes and fields globally"),Object(i.b)("p",null,"To configure classes and fields globally, the mine needs to be made aware of properties files that hold the appropriate translations. Biological mines automatically get three of these files:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bio/webapp/src/main/webapp/WEB-INF/soClassName.properties")),Object(i.b)("p",null,"used to generate readable names using the SO term a class represents."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bio/webapp/src/main/webapp/WEB-INF/bioClassNames.properties")),Object(i.b)("p",null,"used to map non-SO classes to readable names."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bio/webapp/src/main/webapp/WEB-INF/bioFieldNames.properties")),Object(i.b)("p",null,"used to map field names to readable names."),Object(i.b)("p",null,"Additional files can be specified. Add the the following properties to your web.properties:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# put in your mines' web.properties file\nweb.config.classname.mappings.{SOME_ID}={RESOURCE_NAME}\nweb.config.fieldname.mappings.{SOME_ID}={RESOURCE_NAME}\n")),Object(i.b)("p",null,"All resources should be named relative to the WEB-INF directory where they will end up."),Object(i.b)("p",null,"You can have as many additional files as you wish, but:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"They should all have a different id. If they do not, all but one will be silently ignored."),Object(i.b)("li",{parentName:"ul"},"They should not have configuration for the same class/field. If they do, an exception will be thrown on initialisation, and your webapp will not start.")),Object(i.b)("h2",{id:"using-these-labels-in-your-webapp"},"Using these labels in your webapp"),Object(i.b)("p",null,"A new tag library is available to help with labelling. Add the following to the top of any jsp you write that you want to use labels in:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'<%@ taglib uri="/WEB-INF/functions.tld" prefix="imf" %>\n')),Object(i.b)("p",null,"This library provides five functions, which expose static methods from the org.intermine.web.logic.WebUtil class:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"formatPath(Path p, WebConfig wcf)"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This function produces a fully configured string from an arbitrarily long path. eg:"),Object(i.b)("inlineCode",{parentName:"p"},'<c:out value="${imf:formatColumnName(path, WEBCONFIG)}"/>')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"formatPathStr(String s, InterMineAPI api, Webconfig wcf)"))),Object(i.b)("p",null,"This function produces a fully configured string from an arbitrarily long path, where that path is represented as a string. eg: ",Object(i.b)("inlineCode",{parentName:"p"},'<c:out value="${imf:formatColumnName(pathString, INTERMINE_API, WEBCONFIG)}"/>')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"formatField(Path p, Webconfig wcf)"))),Object(i.b)("p",null,"This function produces a fully configured field name from the last field of an arbitrarily long path. eg: ",Object(i.b)("inlineCode",{parentName:"p"},'<c:out value="${imf:formatField(path, WEBCONFIG)}"/>')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"formatFieldStr(String s, InterMineAPI api, Webconfig wcf)"))),Object(i.b)("p",null,"This function produces a fully configured field name from the last field of an arbitrarily long path, where that path is represented by a string. eg:",Object(i.b)("inlineCode",{parentName:"p"},'<c:out value="${imf:formatFieldStr(pathString, INTERMINE_API, WEBCONFIG)}"/>')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"formatFieldChain(String s, InterMineAPI api, Webconfig wcf)"))),Object(i.b)("p",null,"This function produces a string of fully configured field names from all the fields in an arbitrarily long path, where that path is represented by a string ","(","i.e. without the root class",")",". eg:",Object(i.b)("inlineCode",{parentName:"p"},'<c:out value="${imf:formatFieldStr(pathString, INTERMINE_API, WEBCONFIG)}"/>')),Object(i.b)("p",null,"The values ",Object(i.b)("inlineCode",{parentName:"p"},"INTERMINE_API")," and ",Object(i.b)("inlineCode",{parentName:"p"},"WEBCONFIG")," are automatically available within jsps at all times."),Object(i.b)("p",null,"While it is possible to call the formatting methods of WebUtil directly from Java controllers, it is not advisable, from design principles, to do so. Labels are an aspect of presentation ","(","the view",")"," and thus not the responsibility of Java classes ","(","the controllers",")",". The only justifiable place to call presentation methods from is in action classes that directly return data to the user, eg. in webservices and ajax calls."),Object(i.b)("h2",{id:"using-labels-in-javascript"},"Using Labels in JavaScript"),Object(i.b)("p",null,"Pages in the InterMine webapp have a variable in the global scope named ",Object(i.b)("inlineCode",{parentName:"p"},"$MODEL_TRANSLATION_TABLE"),". This contains information on how all classes and their fields should be displayed."),Object(i.b)("p",null,"To access its information, for classes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var className = ??;\nvar displayName = $MODEL_TRANSLATION_TABLE[className].displayName;\n")),Object(i.b)("p",null,"And for fields of this class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var fieldName = ??;                                                                                                                                                              \nvar fieldDisplayName = $MODEL_TRANSLATION_TABLE[className].fields[fieldName]\n")))}b.isMDXComponent=!0},707:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return f}));var n=t(0),l=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),b=function(e){var a=l.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=b(e.components);return l.a.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=b(t),m=n,f=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return t?l.a.createElement(f,s(s({ref:a},c),{},{components:t})):l.a.createElement(f,s({ref:a},c))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);