"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[5804],{1648:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(6560),n=r(8432);const o={},a="Web Storage",l={id:"basics/browser/web_storage",title:"Web Storage",description:"\uc6f9 \uc2a4\ud1a0\ub9ac\uc9c0(Web Storage)\uc5d0\ub294 \ub450 \uc885\ub958,\xa0localStorage\uc640 sessionStorage\uac00 \uc788\ub2e4.",source:"@site/docs/basics/browser/web_storage.md",sourceDirName:"basics/browser",slug:"/basics/browser/web_storage",permalink:"/dev-store/docs/basics/browser/web_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/basics/browser/web_storage.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"\uc138\uc158 vs \ucfe0\ud0a4",permalink:"/dev-store/docs/basics/browser/session_vs_cookie"},next:{title:"React",permalink:"/dev-store/docs/category/react"}},i={},c=[{value:"local storage",id:"local-storage",level:2},{value:"session storage",id:"session-storage",level:2},{value:"web storage API\uc758 \uae30\ubcf8 \uc0ac\uc6a9 \ubc29\ubc95",id:"web-storage-api\uc758-\uae30\ubcf8-\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"\ud574\uacb0 \ubc29\ubc95",id:"\ud574\uacb0-\ubc29\ubc95",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\ucc38\uace0\ubb38\uc11c",id:"\ucc38\uace0\ubb38\uc11c",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"web-storage",children:"Web Storage"}),"\n",(0,t.jsxs)(s.p,{children:["\uc6f9 \uc2a4\ud1a0\ub9ac\uc9c0(Web Storage)\uc5d0\ub294 \ub450 \uc885\ub958,\xa0",(0,t.jsx)(s.strong,{children:"localStorage\uc640 sessionStorage"}),"\uac00 \uc788\ub2e4.\nweb storage\ub294 Origin(\ub3c4\uba54\uc778\xb7\ud3ec\ud2b8\xb7\ud504\ub85c\ud1a0\ucf5c)\uc5d0 \ubb36\uc5ec\uc788\uc73c\uba70, \uc544\ub798\uc640 \uac19\uc740 \ud2b9\uc131\uc744 \uc9c0\ub2cc\ub2e4."]}),"\n",(0,t.jsx)(s.h2,{id:"local-storage",children:"local storage"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc800\uc7a5\uacf5\uac04: 5MB"}),"\n",(0,t.jsx)(s.li,{children:"\uc218\uba85: \uc9c1\uc811 \uc81c\uac70\ub420 \ub54c \uae4c\uc9c0"}),"\n",(0,t.jsx)(s.li,{children:"\uc800\uc7a5\uc7a5\uc18c: Disk \ub610\ub294 Browser Memory"}),"\n",(0,t.jsx)(s.li,{children:"Origin: \uac19\uc740 \ud0ed, \ucc3d \uc804\uccb4\uc5d0\uc11c \uacf5\uc720\ub428"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"session-storage",children:"session storage"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc800\uc7a5\uacf5\uac04: 5MB"}),"\n",(0,t.jsx)(s.li,{children:"\uc218\uba85: \uc9c1\uc811 \uc81c\uac70\ub418\uac70\ub098, \ube0c\ub77c\uc6b0\uc800 \ud0ed\uc774 \ub2eb\ud790 \ub54c\uae4c\uc9c0"}),"\n",(0,t.jsx)(s.li,{children:"\uc800\uc7a5\uc7a5\uc18c: Browser Memory"}),"\n",(0,t.jsx)(s.li,{children:"Origin: \uac19\uc740 \ube0c\ub77c\uc6b0\uc800 \ud0ed, iframe\uc5d0\uc11c \uacf5\uc720\ub428"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"web-storage-api\uc758-\uae30\ubcf8-\uc0ac\uc6a9-\ubc29\ubc95",children:"web storage API\uc758 \uae30\ubcf8 \uc0ac\uc6a9 \ubc29\ubc95"}),"\n",(0,t.jsx)(s.p,{children:"\uc6f9 \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ud0a4(key)\uc640 \uac12(value)\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="Javascript"',children:'localStorage.setItem("key", value); // \ud0a4\uc5d0 \ub370\uc774\ud130 \uc4f0\uae30\n\nlocalStorage.getItem("key"); // \ud0a4\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130 \uc77d\uae30\n\nlocalStorage.removeItem("key"); // \ud0a4\uc758 \ub370\uc774\ud130 \uc0ad\uc81c\n\nlocalStorage.clear(); // \ubaa8\ub4e0 \ud0a4\uc758 \ub370\uc774\ud130 \uc0ad\uc81c\n\nlocalStorage.length; // \uc800\uc7a5\ub41c key-value \uc30d\uc758 \uac1c\uc218\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,t.jsx)(s.p,{children:'\uc624\uc9c1 \ubb38\uc790\ud615(string)\uc758 \ub370\uc774\ud130 \ud0c0\uc785\ub9cc \uc9c0\uc6d0\ud55c\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4 1(number)\uc744 \uc800\uc7a5\ud55c \ub2e4\uc74c, storage\uc5d0\uc11c \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uba74 "1"(string)\uc744 \ubc18\ud658\ud55c\ub2e4.'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="Javascript"',children:'localStorage.setItem("num", 1);\ntypeof localStorage.getItem("num"); // string\n'})}),"\n",(0,t.jsx)(s.h3,{id:"\ud574\uacb0-\ubc29\ubc95",children:"\ud574\uacb0 \ubc29\ubc95"}),"\n",(0,t.jsx)(s.p,{children:"\uc704 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 JSON \ud615\ud0dc\ub85c storage\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \uc4f8 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="Javascript"',children:'localStorage.setItem("json", JSON.stringify({ a: 1, b: 2 }));\nJSON.parse(localStorage.getItem("json")); // {a: 1, b: 2}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\uc790\uc2e0\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uacc4\uc18d \ubcf4\uc874\uc2dc\ud0a4\uba74\uc11c \uc0ac\uc6a9"}),"\ud55c\ub2e4\uba74 localStorage\ub97c,\xa0",(0,t.jsx)(s.strong,{children:"\uc5ec\ub7ec \ud398\uc774\uc9c0 \ub9c8\ub2e4 \ub2e4\ub978 \ub370\uc774\ud130\ub97c \ubcf4\uc874\uc2dc\ud0a4\uace0 \uc2f6\ub2e4"}),"\uba74 sessionStorage\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."]}),"\n",(0,t.jsx)(s.h2,{id:"\ucc38\uace0\ubb38\uc11c",children:"\ucc38\uace0\ubb38\uc11c"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.daleseo.com/js-web-storage",children:"https://www.daleseo.com/js-web-storage"}),"\n",(0,t.jsx)(s.a,{href:"https://ko.javascript.info/localstorage",children:"https://ko.javascript.info/localstorage"})]})]})}function g(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8432:(e,s,r)=>{r.d(s,{I:()=>l,M:()=>a});var t=r(4424);const n={},o=t.createContext(n);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);