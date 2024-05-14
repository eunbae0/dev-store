"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[2884],{5532:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=r(6560),i=r(8432);const t={},a="Array",l={id:"ios/swift/array",title:"Array",description:"- \ubc30\uc5f4\uc740 \uc21c\uc11c\ub300\ub85c \uac19\uc740 \ud0c0\uc785\uc758 \uac12\uc744 \uc800\uc7a5\ud55c\ub2e4.",source:"@site/docs/ios/swift/array.md",sourceDirName:"ios/swift",slug:"/ios/swift/array",permalink:"/dev-store/docs/ios/swift/array",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/ios/swift/array.md",tags:[],version:"current",frontMatter:{},sidebar:"iosSidebar",previous:{title:"Swift",permalink:"/dev-store/docs/category/swift"},next:{title:"Properties",permalink:"/dev-store/docs/ios/swift/properties"}},c={},o=[{value:"Accessing &amp; Modifying",id:"accessing--modifying",level:2},{value:"Iterating Over an Array",id:"iterating-over-an-array",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array",children:"Array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ubc30\uc5f4\uc740 \uc21c\uc11c\ub300\ub85c \uac19\uc740 \ud0c0\uc785\uc758 \uac12\uc744 \uc800\uc7a5\ud55c\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"var threeDoubles = Array(repeating: 0.0, count: 3) // [Double], [0.0, 0.0, 0.0]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ub367\uc148\uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud574 \ubc30\uc5f4\uc744 \ub354\ud574 \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"var sixDoubles = Array(repeating: 0.0, count: 2) + Array(repeating: 2.5, count: 3)  // [Double], [0.0, 0.0, 2.5, 2.5]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"accessing--modifying",children:"Accessing & Modifying"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ubc30\uc5f4\uc5d0 \uc544\uc774\ud15c \uac2f\uc218\ub97c \uc54c\uae30 \uc704\ud574\uc11c\ub294 \uc77d\uae30 \uc804\uc6a9 ",(0,s.jsx)(n.code,{children:"count"}),"\ud504\ub85c\ud37c\ud2f0\ub85c \ud655\uc778\ud55c\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"exampleArray.count\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ubc30\uc5f4\uc758 ",(0,s.jsx)(n.strong,{children:"append(_:) \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c"})," \ub610\ub294 ",(0,s.jsx)(n.strong,{children:"\ub367\uc148 \ub300\uc785 \uc5f0\uc0b0\uc790"}),"\ub97c \ud1b5\ud574 \ubc30\uc5f4 \ub05d\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\uc774\ud15c\uc744 \ucd94\uac00\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"exampleArray.append(4)\nexampleArray += [4, 5, 6]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc11c\ube0c\uc2a4\ud06c\ub9bd\ud2b8 \uad6c\ubb38\uc73c\ub85c \ubc94\uc704 \uc548\uc5d0 \uac12\uc744 \ud55c\ubc88\uc5d0 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"exampleArray[4...6] = [4, 5, 6]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ubc30\uc5f4\uc5d0 \ud2b9\uc815 \uc778\ub371\uc2a4\uc5d0 \uc544\uc774\ud15c\uc744 \ucd94\uac00\ud558\ub824\uba74 \ubc30\uc5f4\uc758 ",(0,s.jsx)(n.strong,{children:"insert(_:at:) \uba54\uc11c\ub4dc"}),"\ub97c \ud638\ucd9c\ud55c\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"exampleArrayinsert(5, at: 4)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"remove(_:at:) \uba54\uc11c\ub4dc"}),"\ub97c \ud1b5\ud574 \ubc30\uc5f4\uc758 \uc544\uc774\ud15c\uc744 \uc0ad\uc81c\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let item = exampleArray.remove(at: 0)\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\ubc30\uc5f4\uc758 \ubc94\uc704\ub97c \ub118\ub294 \uc778\ub371\uc2a4\ub85c \uac12\uc5d0 \uc811\uadfc \ub610\ub294 \uc218\uc815\uc744 \ud560 \uacbd\uc6b0 \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.\n\ub530\ub77c\uc11c \ubc30\uc5f4\uc758 count \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\ub371\uc2a4\uac00 \uc720\ud6a8\ud55c\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nex. count == 0"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ubc30\uc5f4\uc758 \ub9c8\uc9c0\ub9c9 \uc544\uc774\ud15c\uc744 \uc0ad\uc81c\ud558\uae30 \uc704\ud574 ",(0,s.jsx)(n.strong,{children:"removeLast() \uba54\uc11c\ub4dc"}),"\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4. count \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30 \uc704\ud568\uc774\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let apples = shoppingList.removeLast()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"iterating-over-an-array",children:"Iterating Over an Array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uac01 \uc544\uc774\ud15c\uc758 \uc778\ub371\uc2a4, \uac12\uc774 \ubaa8\ub450 \ud544\uc694\ud558\ub2e4\uba74 ",(0,s.jsx)(n.strong,{children:"enumerated() \uba54\uc11c\ub4dc"}),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsx)(n.li,{children:"\ubc30\uc5f4\uc758 \uac01 \uc544\uc774\ud15c\uc5d0 \ub300\ud574 enumerated() \uba54\uc11c\ub4dc\ub294 \uc815\uc218\uc640 \uc544\uc774\ud15c\uc744 \uc870\ud569\ud558\uc5ec \ud29c\ud50c\ub85c \ubc18\ud658\ud55c\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'for (index, value) in shoppingList.enumerated() {\n    print("Item \\(index + 1): \\(value)")\n}\n// Item 1: Six eggs\n// Item 2: Milk\n// Item 3: Flour\n// Item 4: Baking Powder\n// Item 5: Bananas\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8432:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>a});var s=r(4424);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);