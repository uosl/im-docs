(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(703)),r={title:"Tool API Overview"},l={unversionedId:"webapp/tool-api/overview",id:"version-5.0.0/webapp/tool-api/overview",isDocsHomePage:!1,title:"Tool API Overview",description:"BlueGenes provides a new approach to adding visualisations and analyses tools to your InterMine, allowing you to create tiny JavaScript applications to be embedded within the webapp.",source:"@site/versioned_docs/version-5.0.0/webapp/tool-api/overview.md",slug:"/webapp/tool-api/overview",permalink:"/im-docs/docs/webapp/tool-api/overview",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/webapp/tool-api/overview.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"JBrowse",permalink:"/im-docs/docs/webapp/jbrowse"},next:{title:"Tool API Tutorial",permalink:"/im-docs/docs/webapp/tool-api/tutorial"}},c=[{value:"Tools folder and config",id:"tools-folder-and-config",children:[]},{value:"Automatically installed tools",id:"automatically-installed-tools",children:[]},{value:"Installing local tools",id:"installing-local-tools",children:[]},{value:"Making new tools available to others",id:"making-new-tools-available-to-others",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BlueGenes provides a new approach to adding visualisations and analyses tools to your InterMine, allowing you to create tiny JavaScript applications to be embedded within the webapp."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Include any third-party JS library"),Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/intermine/imjs"}),"imjs")," to query for additional data"),Object(i.b)("li",{parentName:"ul"},"Specify to BlueGenes ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"specification#configjson"}),"what objects to display for and on what pages"))),Object(i.b)("p",null,"The bundles you create containing your apps will be served individually by BlueGenes, and they will only be loaded on demand, when the object and/or page you've specified to support is present. BlueGenes will pass your app the object ID (which can be multiple for a list or query result) which you can then pass to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/intermine/imjs"}),"imjs")," to obtain more data on the object, for the purpose of creating graphs or interactive tools."),Object(i.b)("h2",{id:"tools-folder-and-config"},"Tools folder and config"),Object(i.b)("p",null,"BlueGenes tools are located at the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"../blue-genes/index#environment"}),"tool path")," which defaults to the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," directory where BlueGenes is run. It contains all installed tools nested within the path corresponding to their npm package name (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"@intermine/bluegenes-interaction-network"),"). Installed tools are managed using the ",Object(i.b)("inlineCode",{parentName:"p"},"tools.edn")," config file, which references the path of all installed tools and their version number."),Object(i.b)("h2",{id:"automatically-installed-tools"},"Automatically installed tools"),Object(i.b)("p",null,"When you start BlueGenes and ",Object(i.b)("inlineCode",{parentName:"p"},"tools.edn")," is missing, it will automatically install all tools from ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm")," satisfying:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"scope must be ",Object(i.b)("em",{parentName:"li"},"intermine")),Object(i.b)("li",{parentName:"ul"},"keyword must be ",Object(i.b)("em",{parentName:"li"},"bluegenes-intermine-tool"))),Object(i.b)("h2",{id:"installing-local-tools"},"Installing local tools"),Object(i.b)("p",null,"You can add tools that exist locally to your BlueGenes installation by copying them into the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#tools-folder-and-config"}),"tools directory"),", ensuring their path matches their npm package name (see ",Object(i.b)("strong",{parentName:"p"},"NOTE")," below for details), and adding their entry to the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#tools-folder-and-config"}),"tools config"),". If the tool is under development and you want to test it within BlueGenes, a useful tip is to create a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/"}),"symbolic link"),". Below is an example command run from the tools directory for a locally developed ",Object(i.b)("em",{parentName:"p"},"bluegenes-interaction-network")," tool."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"ln -s ~/projects/bluegenes-interaction-network @intermine/bluegenes-interaction-network\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The path of your tool within the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," directory needs to be exactly the same as your npm package name, which can be found in your tool's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," under the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," key."))),Object(i.b)("p",null,"Make sure to add your tool's path and its version number to ",Object(i.b)("inlineCode",{parentName:"p"},"tools.edn")," so it's visible to BlueGenes."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'{:tools {;; Other tools\n         "@intermine/bluegenes-interaction-network" "1.0.0"}}\n')),Object(i.b)("p",null,"In the directory of your tool, you can continue developing and rebuild it to see your changes in BlueGenes."),Object(i.b)("h2",{id:"making-new-tools-available-to-others"},"Making new tools available to others"),Object(i.b)("p",null,"All npm packages with the keyword ",Object(i.b)("inlineCode",{parentName:"p"},"bluegenes-intermine-tool")," are displayed on the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://intermine.org/intermine-user-docs/docs/admin-account#the-tools-store"}),"BlueGenes Tool Store page")," accessible to InterMine server admins. Any available tool can be quickly installed from the user interface by clicking the ",Object(i.b)("em",{parentName:"p"},"install")," button."),Object(i.b)("p",null,"For your tool to appear on the Tool Store page, all you need to do is ensure your tool's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," contains ",Object(i.b)("inlineCode",{parentName:"p"},"bluegenes-intermine-tool")," in the array under the ",Object(i.b)("inlineCode",{parentName:"p"},"keywords")," key (this is already done for you if you used the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/intermine/generator-bluegenes-tool"}),"tool generator"),"), and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages"}),"publish")," your tool to the npm package registry. This can usually be done by ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/signup"}),"signing up for an npm user account"),", then logging in at the terminal and publishing your package with the following commands, run from your tool directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm login # Only needs to be done once.\nnpm publish\n")))}p.isMDXComponent=!0},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);