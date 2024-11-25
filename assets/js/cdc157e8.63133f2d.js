"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[9276],{1228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(6560),i=t(8432);const r={},s="coordinateSpace",a={id:"ios/swift_ui/coordinate_space",title:"coordinateSpace",description:"coordinateSpace\ub294 \ud2b9\uc815 view\uc758 \uc88c\ud45c \uacf5\uac04\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud574\uc11c, \uc774 \uc774\ub984\uc73c\ub85c \uc811\uadfc\ud558\uc5ec \uc9c0\uc815\ub41c view\uc758 points, sizes \ub4f1\uc758 dimension\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud568.",source:"@site/docs/ios/swift_ui/coordinate_space.md",sourceDirName:"ios/swift_ui",slug:"/ios/swift_ui/coordinate_space",permalink:"/dev-store/docs/ios/swift_ui/coordinate_space",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/ios/swift_ui/coordinate_space.md",tags:[],version:"current",frontMatter:{},sidebar:"iosSidebar",previous:{title:"ConfirmationDialog",permalink:"/dev-store/docs/ios/swift_ui/confirmation_dialog"},next:{title:"enum\uc758 \ud65c\uc6a9",permalink:"/dev-store/docs/ios/swift_ui/enum_ conjugate"}},c={},d=[{value:"\uc608\uc81c",id:"\uc608\uc81c",level:2},{value:"Drag gesture",id:"drag-gesture",level:3},{value:"Set scroll offset",id:"set-scroll-offset",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"coordinatespace",children:"coordinateSpace"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"coordinateSpace"}),"\ub294 \ud2b9\uc815 view\uc758 \uc88c\ud45c \uacf5\uac04\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud574\uc11c, \uc774 \uc774\ub984\uc73c\ub85c \uc811\uadfc\ud558\uc5ec \uc9c0\uc815\ub41c view\uc758 points, sizes \ub4f1\uc758 dimension\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud568."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"coordinateSpace(name:)\uc740 deprecated\ub418\uc5c8\uc74c."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'.coordinateSpace(name: "stack") // deprecated\n.coordinateSpace(.named("stack"))\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"\uc608\uc81c",children:"\uc608\uc81c"}),"\n",(0,o.jsx)(n.h3,{id:"drag-gesture",children:"Drag gesture"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'struct ContentView: View {\n  @State private var location = CGPoint.zero\n\n\n  var body: some View {\n    VStack {\n      Color.red.frame(width: 100, height: 100)\n        .overlay(circle)\n        Text("Location: \\(Int(location.x)), \\(Int(location.y))")\n    }\n    .coordinateSpace(.named("stack"))\n  }\n\n\n  var circle: some View {\n    Circle()\n      .frame(width: 25, height: 25)\n      .gesture(drag)\n      .padding(5)\n  }\n\n\n  var drag: some Gesture {\n    DragGesture(coordinateSpace: .named("stack"))\n      .onChanged { info in location = info.location }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"set-scroll-offset",children:"Set scroll offset"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'GeometryReader { geometry in\n  Color.clear\n    .preference(\n      key: ScrollOffsetPreferenceKey.self,\n      value: -geometry.frame(in: .named("SCROLL")).origin.y\n    )\n}\n .onPreferenceChange(ScrollOffsetPreferenceKey.self) { value in\n  offset = value\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8432:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var o=t(4424);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);