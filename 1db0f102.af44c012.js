(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(545)),l={title:"Keyword Search"},o={unversionedId:"webapp/keyword-search/index",id:"version-5.0.0/webapp/keyword-search/index",isDocsHomePage:!1,title:"Keyword Search",description:"InterMine uses Solr for its keyword search index.",source:"@site/versioned_docs/version-5.0.0/webapp/keyword-search/index.md",slug:"/webapp/keyword-search/index",permalink:"/im-docs/docs/webapp/keyword-search/index",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/webapp/keyword-search/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"QueryBuilder",permalink:"/im-docs/docs/webapp/query-builder/index"},next:{title:"Features",permalink:"/im-docs/docs/webapp/properties/web-properties"}},c=[{value:"Config file",id:"config-file",children:[]},{value:"Search Index",id:"search-index",children:[]},{value:"Solr",id:"solr",children:[]},{value:"Solr Partial String Match Configuration",id:"solr-partial-string-match-configuration",children:[]}],s={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InterMine uses Solr for its keyword search index."),Object(i.b)("p",null,"By default the index will include the text fields of all objects in the database. Each object in the database becomes a document in the index with text attributes attached. You can configure classes to ignore, such as locations and scores that don't provide text information. You can also add related information to an object, for example, you can configure that the synonyms, pathways and GO terms should be included in the Gene's entry."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"fields in the results")),Object(i.b)("p",null,"determined by WebConfigModel"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"type")),Object(i.b)("p",null,"class of object"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"score")),Object(i.b)("p",null,"determined by the Lucene search, from 0 to 1"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"lists")),Object(i.b)("p",null,"Users can make lists from search results but only if all results are of the same type."),Object(i.b)("p",null,"To inspect the index directly: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8983/solr/"}),"http://localhost:8983/solr/")),Object(i.b)("h2",{id:"config-file"},"Config file"),Object(i.b)("p",null,"The config file is located at ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/dbmodel/resources/keyword_search.properties")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"index.temp.directory"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"directory for search index")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"index.references.","<","CLASS","_","NAME",">"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"eg. index.references.Gene"),Object(i.b)("li",{parentName:"ul"},"index these objects' references in addition to the normal indexing"),Object(i.b)("li",{parentName:"ul"},"eg. if Gene.pathways is indexed so that when users search for pathways, the associated genes are also returned as search results")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"index.ignore"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"do not index these classes")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"index.ignore.fields"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"do not index these fields"),Object(i.b)("li",{parentName:"ul"},"eg ",Object(i.b)("inlineCode",{parentName:"li"},"index.ignore.fields = SNP.type SNP.alleles"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"facets"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Will appear as filters on the left panel in the search results"),Object(i.b)("li",{parentName:"ul"},"choose ",Object(i.b)("inlineCode",{parentName:"li"},"single")," for references, ",Object(i.b)("inlineCode",{parentName:"li"},"multi")," for collections"),Object(i.b)("li",{parentName:"ul"},"Note: you must index any references used as facets. ","(","see above at '''index.references'''",")",".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"index.boost.","<","CLASS","_","NAME",">"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"weight this class heavier than other objects")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"search.debug"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"debug setting off, used only for testing")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"index.optimize"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Boolean, defaults to false."),Object(i.b)("li",{parentName:"ul"},"If set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", reorganises the index so chunks are placed together in storage, which might improve the search time. ","(","Similar to defragmentation of a hard disk",")",". Requires an empty space in the storage as large as the index, and takes additional time."))))),Object(i.b)("h2",{id:"search-index"},"Search Index"),Object(i.b)("p",null,"You can rebuild the search index by running this command in your mine:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew postprocess -Pprocess=create-search-index\n")),Object(i.b)("p",null,"You would need to re-release your webapp."),Object(i.b)("p",null,"To inspect the index directly: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8983/solr/"}),"http://localhost:8983/solr/")),Object(i.b)("h2",{id:"solr"},"Solr"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/system-requirements/software/solr"}),"Solr")," for details on how to install Solr."),Object(i.b)("h2",{id:"solr-partial-string-match-configuration"},"Solr Partial String Match Configuration"),Object(i.b)("p",null,"In its default configuration, Solr will not match partial search terms. For example a gene named ",Object(i.b)("em",{parentName:"p"},"REVOLUTA"),' will be returned in the search results for search term "REVOLUTA" but not for search term "REV." In order to have Solr return partial string matches, you must edit its configuration on the Solr server. To do this:'),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"ADD the following to /var/solr/data/","[","mine","]","-search/conf/managed-schema. ","(","This example implements it for hits against Gene.primaryIdentifier and Gene.secondaryIdentifier.",")")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<fieldType name="text_ngram" class="solr.TextField" positionIncrementGap="100">\n  <analyzer type="index">\n    <tokenizer class="solr.WhitespaceTokenizerFactory"/>\n    <filter class="solr.NGramFilterFactory" minGramSize="1" maxGramSize="50"/>\n    <filter class="solr.LowerCaseFilterFactory"/>\n  </analyzer>\n  <analyzer type="query">\n    <tokenizer class="solr.WhitespaceTokenizerFactory"/>\n    <filter class="solr.LowerCaseFilterFactory"/>\n  </analyzer>\n</fieldType>\n<field name="gene_primaryidentifier" type="text_ngram" indexed="true" stored="true"/>\n<field name="gene_secondaryidentifier" type="text_ngram" indexed="true" stored="true"/>\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"REMOVE the gene","_","primaryidentifier and gene","_","secondaryidentifier field definitions from the earlier part of the file. They look like this:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<field name="gene_primaryidentifier" type="analyzed_string" multiValued="true" indexed="true" required="false" stored="false"/>\n<field name="gene_secondaryidentifier" type="analyzed_string" multiValued="true" indexed="true" required="false" stored="false"/>\n')),Object(i.b)("p",null,'OR, simply UPDATE the existing records, replacing the parameters with: type="text',"_",'ngram" indexed="true" stored="true".'),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"RESTART Solr to load the new config, e.g. under System V: :")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ systemctl restart solr\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"REBUILD the search index using the Solr-related postprocesses:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew postprocess -Pprocess=create-search-index\n")),Object(i.b)("p",null,"Your keyword search will now return results on partial matches for the attributes that you configured in Solr ","(","Gene.primaryIdentifier and Gene.secondaryIdentifier in this example",")","."))}b.isMDXComponent=!0},545:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);