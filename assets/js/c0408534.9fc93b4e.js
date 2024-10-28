"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[8156],{8332:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var s=o(6560),t=o(8432);o(4424);const l={},a="Memoization Hooks (useCallback, useMemo)",c={id:"fe/react/memoization",title:"Memoization Hooks (useCallback, useMemo)",description:"\uba54\ubaa8\uc774\uc81c\uc774\uc158(Memoization)\uc740 \ud504\ub85c\uadf8\ub7a8\uc774 \ub3d9\uc77c\ud55c \uacc4\uc0b0\uc744 \ubc18\ubcf5\ud560 \ub54c, \uc774\uc804\uc5d0 \uacc4\uc0b0\ud55c \uac12\uc744 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ud568\uc73c\ub85c\uc368 \uc911\ubcf5\ub418\ub294 \uc5f0\uc0b0\uc744 \uc81c\uac70\ud574\uc11c \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc18d\ub3c4\ub97c \ube60\ub974\uac8c\ud558\ub294 \uae30\uc220\uc774\ub2e4.",source:"@site/docs/fe/react/memoization.md",sourceDirName:"fe/react",slug:"/fe/react/memoization",permalink:"/dev-store/docs/fe/react/memoization",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/fe/react/memoization.md",tags:[],version:"current",frontMatter:{},sidebar:"feSidebar",previous:{title:"Batching",permalink:"/dev-store/docs/fe/react/batching"},next:{title:"tools.bundlerChain",permalink:"/dev-store/docs/fe/rsbuild/toolChain"}},i={},r=[{value:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0",id:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub294-\uacbd\uc6b0",level:2},{value:"useCallback",id:"usecallback",level:2},{value:"useMemo",id:"usememo",level:2},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"memoization-hooks-usecallback-usememo",children:"Memoization Hooks (useCallback, useMemo)"}),"\n",(0,s.jsx)(n.p,{children:"\uba54\ubaa8\uc774\uc81c\uc774\uc158(Memoization)\uc740 \ud504\ub85c\uadf8\ub7a8\uc774 \ub3d9\uc77c\ud55c \uacc4\uc0b0\uc744 \ubc18\ubcf5\ud560 \ub54c, \uc774\uc804\uc5d0 \uacc4\uc0b0\ud55c \uac12\uc744 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ud568\uc73c\ub85c\uc368 \uc911\ubcf5\ub418\ub294 \uc5f0\uc0b0\uc744 \uc81c\uac70\ud574\uc11c \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc18d\ub3c4\ub97c \ube60\ub974\uac8c\ud558\ub294 \uae30\uc220\uc774\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \ub3d5\uae30 \uc704\ud55c \ub450\uac00\uc9c0 Hook\uc744 \uc81c\uacf5\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub294-\uacbd\uc6b0",children:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0"}),"\n",(0,s.jsx)(n.p,{children:"\uc544\ub798\uc640 \uac19\uc740 \uacbd\uc6b0 \uba54\ubaa8\uc774\uc81c\uc774\uc158 \ud6c5 useCallback\uacfc useMemo\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\ub80c\ub354\ub9c1 \ub9c8\ub2e4 \ud568\uc218\uac00 \uc0c8\ub85c \uc0dd\uc131\ub418\uc5b4 \ucc38\uc870\uac12\uc774 \ubcc0\ud558\ub294 \uacbd\uc6b0"}),"\n",(0,s.jsx)(n.li,{children:"\uc2e4\ud589\ub418\ub294 \ud568\uc218\uac00 \ubcf5\uc7a1\ud55c \uc5f0\uc0b0\uc744 \uc218\ud589\ud558\ub294 \uacbd\uc6b0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usecallback",children:"useCallback"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"useCallback(fn, deps);"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"useCallback \ud568\uc218\ub294 \ucf5c\ubc31 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uace0 \ubc18\ud658\ud55c\ub2e4."}),"\n","\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const memoizedCallback = useCallback(() => {\n\tdoSomething(a, b);\n}, [a, b]);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ucf54\ub4dc\uc5d0\uc11c useCallback\ud568\uc218\ub294 doSomething\ud568\uc218\ub97c \ubc18\ud658\ud55c\ub2e4. \uadf8\ub9ac\uace0 \ub80c\ub354\ub9c1\uc2dc \ubc18\ud658\ub41c \ud568\uc218\uac00 \uc800\uc7a5\ub41c memoizedCallback \ud568\uc218\ub294 \uc758\uc874\uc131 \ubc30\uc5f4\uc548\uc5d0 \ub4e4\uc5b4\uc788\ub294 \uac12 a, b\uc758 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c\ub9cc \uc0dd\uc131\ub41c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"usememo",children:"useMemo"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"useMemo(() => fn, deps);"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"useMemo \ud568\uc218\ub294 \ucf5c\ubc31 \ud568\uc218\uc758 \ubc18\ud658\uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uace0 \ubc18\ud658\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { useMemo } from "react";\n\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\ucf54\ub4dc\uc5d0\uc11c computeExpensiveValue() \ud568\uc218\uc758 \ubc18\ud658\uac12\uc774 memoizedValue\uc5d0 \uc800\uc7a5\ub418\uba70, \ub80c\ub354\ub9c1\uc2dc a\uc640 b\uc758 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c\ub9cc \uc120\uc5b8\ub41c\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\ub9c8\uce58\uba70",children:"\ub9c8\uce58\uba70"}),"\n",(0,s.jsx)(n.p,{children:"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://devpluto.tistory.com/entry/React-%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98-Hook%EC%9C%BC%EB%A1%9C-%EC%A4%91%EB%B3%B5%EC%97%B0%EC%82%B0-%ED%94%BC%ED%95%98%EA%B8%B0useCallback-useMemo",children:"https://devpluto.tistory.com/entry/React-%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98-Hook%EC%9C%BC%EB%A1%9C-%EC%A4%91%EB%B3%B5%EC%97%B0%EC%82%B0-%ED%94%BC%ED%95%98%EA%B8%B0useCallback-useMemo"})})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8432:(e,n,o)=>{o.d(n,{I:()=>c,M:()=>a});var s=o(4424);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);