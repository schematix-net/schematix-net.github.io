"use strict";(self.webpackChunkschematix_documentation=self.webpackChunkschematix_documentation||[]).push([[164],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(u,".").concat(p)]||d[p]||s[p]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"documentation",title:"Documentation",sidebar_label:"Documentation"},u=void 0,l={unversionedId:"modules/documentation",id:"modules/documentation",isDocsHomePage:!1,title:"Documentation",description:"Documentation Generation",source:"@site/docs/modules/documentation.md",sourceDirName:"modules",slug:"/modules/documentation",permalink:"/docs/modules/documentation",editUrl:"https://github.com/schematix-net/schematix-documentation/edit/master/website/docs/modules/documentation.md",tags:[],version:"current",frontMatter:{id:"documentation",title:"Documentation",sidebar_label:"Documentation"},sidebar:"someSidebar",previous:{title:"Code Generation",permalink:"/docs/modules/code-generation"},next:{title:"Versioning",permalink:"/docs/modules/versioning"}},s=[{value:"Documentation Generation",id:"documentation-generation",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Basic usage",id:"basic-usage",children:[],level:2}],m={toc:s};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"documentation-generation"},"Documentation Generation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Zero effort documentation creation.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"At Schematix we understand that while schemas are of great importance when exchanging data, the format in which\nthe schemas are written in are not for everyone."),(0,i.kt)("p",null,"To address this, you can use the Schematix documentation generator, which transforms technical schemas effortlessly\ninto human readable documentation, including Word, PDF and plain text support (Asciidoctor)."),(0,i.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,i.kt)("p",null,"A simple way to generate the documentation is as follows. Given the following schema (",(0,i.kt)("inlineCode",{parentName:"p"},"claims.schema.json"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://schematix.net/medical_claims.schema.json",\n  "title": "Medical Claims (5.0)",\n  "description": "Version 5.0 of the medical claim structure",\n  "type": "object",\n  "properties": {\n    "provider number": {\n      "description": "A unique provider number",\n      "type": "string"\n    },\n    "membership number": {\n      "description": "A unique memebership number",\n      "type": "string",\n      "examples": [\n        "1203",\n        "09013",\n        "3892"\n      ]\n    },\n    "patient id": {\n      "description": "A 12 digit code describing the unique patient id",\n      "type": "string",\n      "examples": [\n        "JKW123094732"\n      ]\n    }\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./schematix generate-documentation claims.schema.json\n")),(0,i.kt)("p",null,"Schematix will read the Claims Schema and turn the information into human readable documentation."),(0,i.kt)("p",null,"Items suchs as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Field names"),(0,i.kt)("li",{parentName:"ul"},"Data types"),(0,i.kt)("li",{parentName:"ul"},"Fields being mandatory or not"),(0,i.kt)("li",{parentName:"ul"},"Field descriptions, including example values")),(0,i.kt)("p",null,"Are all supported, and can be seen in the output below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Documentation Generation",src:n(6974).Z})))}d.isMDXComponent=!0},6974:function(e,t,n){t.Z=n.p+"assets/images/schematix-documentation-generation-5996aea684190593fcc2570dc5c4fb19.png"}}]);