"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[9180],{9748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(6560),r=t(8432);const i={},l="enum\uc758 \ud65c\uc6a9",a={id:"ios/swift_ui/enum_ conjugate",title:"enum\uc758 \ud65c\uc6a9",description:"calculate property\ub85c label \uc124\uc815",source:"@site/docs/ios/swift_ui/enum_ conjugate.md",sourceDirName:"ios/swift_ui",slug:"/ios/swift_ui/enum_ conjugate",permalink:"/dev-store/docs/ios/swift_ui/enum_ conjugate",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/ios/swift_ui/enum_ conjugate.md",tags:[],version:"current",frontMatter:{},sidebar:"iosSidebar",previous:{title:"ConfirmationDialog",permalink:"/dev-store/docs/ios/swift_ui/confirmation_dialog"},next:{title:"GeometryReader\uc640 ScrollView",permalink:"/dev-store/docs/ios/swift_ui/geometry_do_not_use_in_scrollview"}},c={},o=[{value:"calculate property\ub85c label \uc124\uc815",id:"calculate-property\ub85c-label-\uc124\uc815",level:2},{value:"self + calculateProperty",id:"self--calculateproperty",level:2},{value:"findBy",id:"findby",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"enum\uc758-\ud65c\uc6a9",children:"enum\uc758 \ud65c\uc6a9"}),"\n",(0,s.jsx)(n.h2,{id:"calculate-property\ub85c-label-\uc124\uc815",children:"calculate property\ub85c label \uc124\uc815"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'public enum Gender: String, CaseIterable {\n  case male\n  case female\n  case etc = "other"\n\n  public var label: String {\n    switch self {\n    case .male: "\ub0a8\uc790"\n    case .female: "\uc5ec\uc790"\n    case .etc: "\uae30\ud0c0"\n    }\n  }\n}\n\nForEach(Gender.allCases, id: \\.self) { gender in\n  Text(gender.label)\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"self--calculateproperty",children:"self + calculateProperty"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'public enum Example: String, Equatable {\n  case _1 = "1"\n  case _2 = "2"\n  case _3 = "3"\n\n  public var condition: Bool {\n    return self == ._1\n  }\n}\n\n// \ud65c\uc6a9\nVStack {\n  if example?.condition != true {\n    // ...\n  } else {}\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"findby",children:"findBy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"public static func findBy(sku: Product.ID) -> Self? {\n  return allCases.first(where: { $0.sku == sku })\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8432:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var s=t(4424);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);