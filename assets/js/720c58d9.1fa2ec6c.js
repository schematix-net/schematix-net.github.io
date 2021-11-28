"use strict";(self.webpackChunkschematix_documentation=self.webpackChunkschematix_documentation||[]).push([[2048],{3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},489:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"quick_start",title:"Quick Start",sidebar_label:"Quick Start"},l=void 0,s={unversionedId:"getting_started/quick_start",id:"getting_started/quick_start",isDocsHomePage:!1,title:"Quick Start",description:"Docker",source:"@site/docs/getting_started/quick_start.md",sourceDirName:"getting_started",slug:"/getting_started/quick_start",permalink:"/docs/getting_started/quick_start",editUrl:"https://github.com/schematix-net/schematix-documentation/edit/master/website/docs/getting_started/quick_start.md",tags:[],version:"current",frontMatter:{id:"quick_start",title:"Quick Start",sidebar_label:"Quick Start"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/getting_started/overview"},next:{title:"Tutorial",permalink:"/docs/getting_started/tutorial"}},u=[{value:"Docker",id:"docker",children:[{value:"Schematix version",id:"schematix-version",children:[],level:3},{value:"Schematix help",id:"schematix-help",children:[],level:3},{value:"Schematix init",id:"schematix-init",children:[],level:3},{value:"Schematix generate data",id:"schematix-generate-data",children:[],level:3},{value:"Schematix validate data",id:"schematix-validate-data",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Currently the easiest way to use Schematix is by using Schematix/CLI. "),(0,i.kt)("p",null,"Schematix/CLI is hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/schematix/cli"},"Docker Hub")," and can\nbe installed or updated using ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),", using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull schematix/cli:latest\n")),(0,i.kt)("p",null,"This will automatically download the latest version of Schematix/CLI."),(0,i.kt)("h3",{id:"schematix-version"},"Schematix version"),(0,i.kt)("p",null,"Check that you have the latest version of Schematix by executing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -ti schematix/cli:latest --version\n")),(0,i.kt)("p",null,"This should result in an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'schematix schematix-cli version "0.14"\nBuilt: 2021-11-15 23:20:39\n')),(0,i.kt)("h3",{id:"schematix-help"},"Schematix help"),(0,i.kt)("p",null,"By executing the help:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -ti schematix/cli:latest\n")),(0,i.kt)("p",null,"You can see an output similar to the one below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: schematix [-hV] [COMMAND]\nSchematix CLI\n  -h, --help      Show this help message and exit.\n  -V, --version   Print version information and exit.\nCommands:\n  help                         Displays help information about the specified\n                                 command\n  generate-data                Generate data.\n  generate-schema              Generate a schema from an input source.\n  generate-sql                 Generate a sql file from a schema.\n  generate-code                Generate source code from a schema.\n  validate                     Validate input data.\n  difference, diff             Shows differences between schemas.\n  generate-documentation, doc  Generate documentation.\n  inspect                      Format fixed width or (headerless) csv lines\n                                 into readable information.\n  init                         Initializes a new Schematix project.\n")),(0,i.kt)("p",null,"You can explore the various options provided, or take a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/modules/overview"},"the modules overview"),"."),(0,i.kt)("h3",{id:"schematix-init"},"Schematix init"),(0,i.kt)("p",null,"To generate an initial schema, you can use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -ti schematix/cli init\n")),(0,i.kt)("h3",{id:"schematix-generate-data"},"Schematix generate data"),(0,i.kt)("p",null,"To generate data based on the schema, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -ti -v ${PWD}:/tmp schematix/cli generate-data /tmp/example.schema.json --output=/tmp/example.csv\n")),(0,i.kt)("h3",{id:"schematix-validate-data"},"Schematix validate data"),(0,i.kt)("p",null,"To validate the generated data, use the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -ti -v ${PWD}:/tmp schematix/cli validate /tmp/example.csv /tmp/example.schema.json --header=1\n")))}m.isMDXComponent=!0}}]);