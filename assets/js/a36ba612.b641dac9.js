"use strict";(self.webpackChunkdev_store=self.webpackChunkdev_store||[]).push([[1748],{5308:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=i(6560),s=i(8432);const c={},t="V8 Engine",d={id:"basics/javascript/v8_engine",title:"V8 Engine",description:"\uae30\ubcf8\uc801\uc73c\ub85c JavaScript Enginge\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud574\uc11d\ud558\uc5ec AST(Abstract Syntax Tree, \ucd94\uc0c1\uc801 \uad6c\ubb38 \ud2b8\ub9ac)\ub97c \uc0dd\uc131\ud55c\ub2e4. \uadf8\ub9ac\uace0 AST\ub97c \uae30\ubc18\uc73c\ub85c \uc778\ud130\ud504\ub9ac\ud130\uac00 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uc911\uac04 \ucf54\ub4dc(intermediate code)\uc778 byte code\ub97c \uc0dd\uc131\ud558\uc5ec \uc2e4\ud589\ud55c\ub2e4.",source:"@site/docs/basics/javascript/v8_engine.md",sourceDirName:"basics/javascript",slug:"/basics/javascript/v8_engine",permalink:"/dev-store/docs/basics/javascript/v8_engine",draft:!1,unlisted:!1,editUrl:"https://github.com/eunbae0/dev-store/tree/main/docs/basics/javascript/v8_engine.md",tags:[],version:"current",frontMatter:{},sidebar:"feBasicsSidebar",previous:{title:"Promise",permalink:"/dev-store/docs/basics/javascript/promise"},next:{title:"Typescript",permalink:"/dev-store/docs/category/typescript"}},a={},o=[{value:"Parsing",id:"parsing",level:2},{value:"Lexical Analysis",id:"lexical-analysis",level:3},{value:"Lexical Analysis",id:"lexical-analysis-1",level:3},{value:"Ignition + TurboFan Pipeline",id:"ignition--turbofan-pipeline",level:2},{value:"Ignition: Generate Bytecode",id:"ignition-generate-bytecode",level:3},{value:"TurboFan: Macro Assembly Instruction of bytecode for Ignition",id:"turbofan-macro-assembly-instruction-of-bytecode-for-ignition",level:3},{value:"Ingition: Interpretation Procedure",id:"ingition-interpretation-procedure",level:3},{value:"TurboFan Optimize",id:"turbofan-optimize",level:3},{value:"Hidden Class \uae30\ubc95",id:"hidden-class-\uae30\ubc95",level:4},{value:"Inline Caching (ICs) \uae30\ubc95",id:"inline-caching-ics-\uae30\ubc95",level:4},{value:"TurboFan Deoptimize",id:"turbofan-deoptimize",level:3},{value:"3\uc904 \uc694\uc57d",id:"3\uc904-\uc694\uc57d",level:2},{value:"\ucc38\uace0\ubb38\uc11c",id:"\ucc38\uace0\ubb38\uc11c",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"v8-engine",children:"V8 Engine"}),"\n",(0,r.jsx)(n.p,{children:"\uae30\ubcf8\uc801\uc73c\ub85c JavaScript Enginge\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud574\uc11d\ud558\uc5ec AST(Abstract Syntax Tree, \ucd94\uc0c1\uc801 \uad6c\ubb38 \ud2b8\ub9ac)\ub97c \uc0dd\uc131\ud55c\ub2e4. \uadf8\ub9ac\uace0 AST\ub97c \uae30\ubc18\uc73c\ub85c \uc778\ud130\ud504\ub9ac\ud130\uac00 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uc911\uac04 \ucf54\ub4dc(intermediate code)\uc778 byte code\ub97c \uc0dd\uc131\ud558\uc5ec \uc2e4\ud589\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"v8_engine_0",src:i(8840).c+""})}),"\n",(0,r.jsx)(n.h2,{id:"parsing",children:"Parsing"}),"\n",(0,r.jsx)(n.p,{children:"V8 Engine\uc758 parsing \uacfc\uc815\uc740 \ud06c\uac8c lexical analysis\uc640 syntax analysis \uacfc\uc815\uc73c\ub85c \uc9c4\ud589. Parsing\uc744 \ud558\ub294 \uc8fc\uccb4\uc778 parser\ub294 \uac01\uac01 lexical analyzer\uc640 syntax analyzer\uac00 \uc874\uc7ac\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"lexical-analysis",children:"Lexical Analysis"}),"\n",(0,r.jsx)(n.p,{children:"Lexical Analyzer\ub294 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ubb38\uc790 \ub2e8\uc704\ub85c \ud558\ub098\ud558\ub098 \uc2a4\uce94\ud558\uba70 \uacf5\ubc31 \ub2e8\uc704\ub85c \ubd84\ud560\ud558\uc5ec \uc774\ub97c token\uc73c\ub85c \ubd84\ud560."}),"\n",(0,r.jsx)(n.h3,{id:"lexical-analysis-1",children:"Lexical Analysis"}),"\n",(0,r.jsx)(n.p,{children:"Syntax Analyzer\ub294 parsing\ud558\uc5ec \ubd84\ud574\ud55c token\uc744 \ubd84\uc11d\ud558\uace0, syntax \uaddc\uce59\uc5d0 \ub530\ub77c \uacc4\uce35\ud654 + \uadf8\ub8f9\ud654\ub97c \ud1b5\ud574 AST\ub97c \uc0dd\uc131\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"ignition--turbofan-pipeline",children:"Ignition + TurboFan Pipeline"}),"\n",(0,r.jsx)(n.h3,{id:"ignition-generate-bytecode",children:"Ignition: Generate Bytecode"}),"\n",(0,r.jsx)(n.p,{children:"V8\uc758 Ignition\uc758 bytecode compiler\uac00 AST\ub97c byte code\ub85c \ucef4\ud30c\uc77c\ud55c\ub2e4. \uc774\ud6c4 Ignition\uc758 Interpreter\uac00 bytecode\ub97c \ud55c \uc904\uc529 \uc77d\uc73c\uba70 \uc2e4\ud589\uc2dc\ud0a8\ub2e4. (compiler\uc640 interpreter \ub450 \uc5ed\ud560\uc744 \uc218\ud589)"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Byte code\ub294 machine code\ub97c \ucd94\uc0c1\ud654 \ud55c \uac83\uc774\ub2e4. \ub530\ub77c\uc11c \ucef4\ud30c\uc77c\uc2dc machine code\ub85c\uc758 \ubcc0\ud658\uc774 \ub9e4\uc6b0 \ube60\ub974\ub2e4."})}),"\n",(0,r.jsx)(n.p,{children:"byte code\ub294 CPU Architecture\uc640 \ub3c5\ub9bd\uc801\uc778 \ucf54\ub4dc\uc774\uba70, Interperter\uc778 Ignition\uc740 \ud55c \uc904\uc529 \uc77d\uc73c\uba70 \ubc14\ub85c \uc2e4\ud589\uc774 \uac00\ub2a5\ud55c\ub370, \uc5b4\ub5bb\uac8c \uadf8\uac83\uc774 \uac00\ub2a5\ud55c\uac00?"}),"\n",(0,r.jsx)(n.h3,{id:"turbofan-macro-assembly-instruction-of-bytecode-for-ignition",children:"TurboFan: Macro Assembly Instruction of bytecode for Ignition"}),"\n",(0,r.jsxs)(n.p,{children:["Byte code\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"LdaSmi"}),", ",(0,r.jsx)(n.code,{children:"Add"})," \ub4f1\uc740 CPU \uc544\ud0a4\ud14d\uccd0\uc5d0 \ub530\ub77c \uc774\ud574\ud560 \uc218 \uc788\ub294 \uc5b4\uc148\ube14\ub9ac\uc5b4\uc758 opcode\ub85c \ubcc0\ud658\uc774 \ud544\uc694\ud558\ub2e4. TurboFan\uc740 \ucef4\ud30c\uc77c\ub7ec\ub85c\uc11c ",(0,r.jsx)(n.strong,{children:"\uc5ec\ub7ec CPU \uc544\ud0a4\ud14d\uccd0\uc640 \ud638\ud658"}),"\ub418\uc5b4 1:1\ub85c \ub9f5\ud551\ub418\ub294 \uc5b4\uc148\ube14\ub9ac\uc5b4\uac00 \ub0b4\uc7ac\ub418\uc5b4\uc788\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"TurboFan\uc740 \uba85\ub839\uc5b4\ub97c \ub300\uc0c1 \uc544\ud0a4\ud14d\uccd0\ub85c \ucef4\ud30c\uc77c\ud558\uc5ec low-level \uba85\ub839\uc5b4\ub97c \uc120\ud0dd\ud55c\ub2e4. \ub530\ub77c\uc11c \ucf54\ub4dc\ubca0\uc774\uc2a4\uc5d0 \ucd5c\uc18c\ud55c\uc758 \uc0c8\ub85c\uc6b4 machine code\ub9cc \ucd94\uac00\ub418\uba70 Byte code \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uace0, \ub0ae\uc740 \uc624\ubc84\ud5e4\ub4dc \ubc29\uc2dd\uc73c\ub85c \ub098\uba38\uc9c0 V8 Virtual Machine\uacfc \uc0c1\ud638\uc791\uc6a9\ud560 \uc218 \uc788\ub294 \uace0\ub3c4\ub85c \ucd5c\uc801\ud654\ub41c \uc778\ud130\ud504\ub9ac\ud130 \ucf54\ub4dc\uac00 \uc0dd\uc131\ub41c\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"ingition-interpretation-procedure",children:"Ingition: Interpretation Procedure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function add10(n) {\n\tconst x = 10;\n\treturn x + n;\n}\n\nconsole.log(add10(5));\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ node --print-bytecode --print-bytecode-filter=add10 index.js\n\n[generated bytecode for function: add10 (0x1867f4fe2179 <SharedFunctionInfo add10>)]\nBytecode length: 9\nParameter count 2\nRegister count 1\nFrame size 8\nOSR urgency: 0\nBytecode age: 0\n 1578 S> 0x1867f4fe3450 @    0 : 0d 0a             LdaSmi [10]\n         0x1867f4fe3452 @    2 : c4                Star0\n 1586 S> 0x1867f4fe3453 @    3 : 0b 03             Ldar a0\n 1595 E> 0x1867f4fe3455 @    5 : 39 fa 00          Add r0, [0]\n 1599 S> 0x1867f4fe3458 @    8 : a9                Return\nConstant pool (size = 0)\nHandler Table (size = 0)\nSource Position Table (size = 11)\n0x1867f4fe3461 <ByteArray[11]>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ignition\uc758 Interpretation \uacfc\uc815. accumulator(register)\uc5d0\uc11c I/O \uc791\uc5c5\uc774 \uc218\ud589\ub41c\ub2e4."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["LdaSmi [10]\n",(0,r.jsx)(n.code,{children:"Ld"}),": ",(0,r.jsx)(n.code,{children:"Load"}),", ",(0,r.jsx)(n.code,{children:"a"}),": accumulator , ",(0,r.jsx)(n.code,{children:"Smi"}),": Small integer","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"accumulator\uc5d0 \uc0c1\uc218 \uac12 10\uc744 \ub85c\ub4dc"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Star0\n",(0,r.jsx)(n.code,{children:"St"}),": ",(0,r.jsx)(n.code,{children:"Store"}),", ",(0,r.jsx)(n.code,{children:"ri"}),": ",(0,r.jsx)(n.code,{children:"i"}),"\ubc88\uc9f8 register","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"0\ubc88\uc9f8 register\uc5d0 accumulator\uc5d0 \uc788\ub294 \uac12\uc744 \uc800\uc7a5"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Ldar a0\n",(0,r.jsx)(n.code,{children:"ai"}),": ",(0,r.jsx)(n.code,{children:"add10(n)"}),"\uc758 ",(0,r.jsx)(n.code,{children:"i"}),"\ubc88\uc9f8 argument","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"add10 \ud568\uc218\uc758 \uccab\ubc88\uc9f8 argument\uc5d0 \uc788\ub294 \uac12\uc744 accumulator\uc5d0 \ub85c\ub4dc"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Add r0, [0]\n[0]: \ud53c\ub4dc\ubc31 \ubca1\ud130\uc758 \uc778\ub371\uc2a4","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"accumulator\uc5d0 0\ubc88\uc9f8 register\uc5d0 \uc788\ub294 \uac12\uc744 \ub354\ud568"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Return","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"accumulator\uc5d0 \uc788\ub294 \uac12\uc744 return"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"turbofan-optimize",children:"TurboFan Optimize"}),"\n",(0,r.jsxs)(n.p,{children:["V8\uc758 Ignition\uc740 byte code\ub97c \uc2e4\ud589\ud558\uba70 Profiler\ub97c \ud1b5\ud574 ",(0,r.jsx)(n.strong,{children:"\ubc18\ubcf5\ub418\ub294 \ud568\uc218\ub098 \uac1d\uccb4\uac00 \uc0ac\uc6a9\ub418\ub294\uc9c0"})," \uc815\ubcf4\ub97c \uc218\uc9d1\ud55c\ub2e4.\n\uc774\ub807\uac8c \uc218\uc9d1\ud55c profiling data, byte code\ub97c TurboFan\uc5d0 \ub118\uae30\uba70, \ub9cc\uc77c \ubc14\uc774\ud2b8 \ucf54\ub4dc\uac00 \ubc18\ubcf5 \uc2e4\ud589\uc774 \ub9ce\uc774 \ub418\uc5b4\uc11c Ignition\uc774 \ub728\uac70\uc6cc\uc84c\ub2e4\uba74 TurboFan\uc774 ",(0,r.jsx)(n.strong,{children:"optimized machine code"}),"\ub97c \uc0dd\uc131 \ubc0f \uc2e4\ud589\uc2dc\ucf1c\uc11c Ignition\uc758 \ucfe8\ub9c1 \ud32c\uacfc\uac19\uc740 \uc5ed\ud560\uc744 \ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ucc98\ub7fc V8 Engine\uc740 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ud55c\uc904\uc529 \ubcc0\ud658\ud558\ub294 ",(0,r.jsx)(n.strong,{children:"Interpreter(Ignition) \ubc29\uc2dd"}),"\uacfc \uc18c\uc2a4\ucf54\ub4dc\ub97c \ub7f0\ud0c0\uc784\uc5d0 \uae30\uacc4\uc5b4\ub85c \ubcc0\ud658\ud558\ub294 ",(0,r.jsx)(n.strong,{children:"Compile(TurboFan) \ubc29\uc2dd"}),"\uc774 \ud63c\ud569\ub41c **JIT(Just In Time Compilation)**\uc744 \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n",(0,r.jsx)(n.h4,{id:"hidden-class-\uae30\ubc95",children:"Hidden Class \uae30\ubc95"}),"\n",(0,r.jsxs)(n.p,{children:["JS \uc5d4\uc9c4\uc5d0\uc11c JS \uac1d\uccb4\uc758 Value\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub0b4\ubd80\uc758 key\ub97c \ucc3e\uace0, Property attributes\uc5d0 \uc811\uadfc\ud558\uc5ec value\ub97c \ub85c\ub4dc\ud558\ub294 \uacfc\uc815\uc744 \uac70\uccd0\uc57c\ud55c\ub2e4.\n",(0,r.jsx)(n.img,{alt:"v8_engine_1",src:i(1324).c+""})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Property attributes"}),"\ub294 \ud504\ub85c\ud37c\ud2f0\uc758 \uace0\uc720 \uc18d\uc131\uc774\ub2e4. Value, Writeable, Enumerable, Configurable\ub294 ECMAScript\uc758 \uc2a4\ud399\uc774\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const obj = {\n\tx: 1,\n\ty: 1,\n};\n\nfor (let prop in obj) {\n\tconst propDescriptor = Object.getOwnPropertyDescriptor(obj, prop);\n\tconsole.log(\n\t\t`Property: ${prop}, Attributes: ${JSON.stringify(propDescriptor)}`\n\t);\n}\n// Property: x, Attributes: {"value":1,"writable":true,"enumerable":true,"configurable":true}\n// Property: y, Attributes: {"value":1,"writable":true,"enumerable":true,"configurable":true}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\ub9cc\uc57d \ub450 \uac1c\uc758 \uac1d\uccb4\uac00 \ube44\uc2b7\ud55c \ud615\ud0dc(Shape)\ub97c \uac00\uc9c8 \uacbd\uc6b0, a\uc640 b\uc5d0 \ub300\ud55c \uac1d\uccb4 \uac01\uac01 \ub530\ub85c \uba54\ubaa8\ub9ac\uc5d0 \ud560\ub2f9\uc744 \ud574\uc918\uc57c\ud55c\ub2e4. \uc774\ub85c \uc778\ud574 \uba54\ubaa8\ub9ac \ub0ad\ube44\uac00 \ubc1c\uc0dd\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const a = {\n\tx: 1,\n\ty: 1,\n};\n\nconst b = {\n\tx: 3,\n\ty: 4,\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"v8_engine_2",src:i(1545).c+""}),"\n\ub530\ub77c\uc11c ",(0,r.jsx)(n.code,{children:"Shape"}),"\uc778\uc2a4\ud134\uc2a4\ub97c \ud558\ub098 \uc0dd\uc131\ud55c \ud6c4\uc5d0, JS \uac1d\uccb4\ub294 ",(0,r.jsx)(n.code,{children:"shape"})," \uc778\uc2a4\ud134\uc2a4\ub97c \uac70\uccd0 Property information\uc5d0 \uc811\uadfc\ud558\uace0, offset\uc73c\ub85c \ud504\ub85c\ud37c\ud2f0\uc758 Value\ub97c \ucc3e\uc744 \uc218 \uc788\ub2e4.\n",(0,r.jsx)(n.code,{children:"Shape"}),"\uac1c\ub150\uc744 \ub3c4\uc785\ud558\uc5ec \uc704\uc758 \uc0ac\uc9c4\uc5d0 ",(0,r.jsx)(n.code,{children:"property attributes"}),"\uac00 ",(0,r.jsx)(n.code,{children:"property information"}),"\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\ub2e4. ",(0,r.jsx)(n.code,{children:"offset"}),"\uc73c\ub85c \uac01 \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \ucc3e\uc744 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc javascript\ub294 \ub3d9\uc801 \ud0c0\uc785 \uc5b8\uc5b4\uc774\uae30 \ub54c\ubb38\uc5d0 \uac1d\uccb4 \uc548\uc758 property\uc758 \uac1c\uc218\ub098 \ud06c\uae30\uac00 \uc815\ud574\uc9c0\uc9c0 \uc54a\ub294\ub2e4. \ub530\ub77c\uc11c \uac1d\uccb4\uac00 \ubcc0\uacbd\ub420 \ub54c \ub9c8\ub2e4 \uc5ec\ub7ec shape \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uac83\uc740 \uba54\ubaa8\ub9ac \ub0ad\ube44\ub85c \uc774\uc5b4\uc9c4\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// empty\nlet o = {};\n\n// shape (x)\no.x = 5;\n\n// shape (x, y)\no.y = 6;\n"})}),"\n",(0,r.jsx)(n.p,{children:'JS \uac1d\uccb4\ub294 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubcc0\uacbd\ub41c Shape\ub97c \uac00\ub9ac\ud0a4\uace0, \uc774\uc804\uc758 \uac1d\uccb4\uc5d0 \ucd94\uac00\ub418\uc5c8\ub358 \ud504\ub85c\ud37c\ud2f0\uc758 key\ub97c \ucc3e\uc544 \ub9c1\ud06c\ub97c \ud0c0\uace0 \ucc38\uc870\ud560 \uc218 \uc788\ub2e4. \uc774\ub97c "Transition Chain"\uc774\ub77c\uace0 \ud55c\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"v8_engine_3",src:i(2432).c+""})}),"\n",(0,r.jsx)(n.p,{children:"\ub610\ud55c \ud604\uc7ac\uc758 \ud504\ub85c\ud37c\ud2f0\uc758 Key\ub294 \ub2e4\ub974\uc9c0\ub9cc, \uc774\uc804\uc5d0 \ub3d9\uc77c\ud55c shape\ub97c \uac00\uc84c\ub358 \uac1d\uccb4\ub3c4 \uc544\ub798\uc640 \uac19\uc740 \uad6c\uc870\ub85c \ub098\ud0c0\ub09c\ub2e4. \uc774\uc804\uc5d0\ub294a, b\ubaa8\ub450 \ube48 \uac1d\uccb4\uc600\uae30 \ub54c\ubb38\uc774\ub2e4. \uc774\uac83\uc744 'Transition Tree' \ub77c\uace0 \ubd80\ub978\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"v8_engine_4",src:i(671).c+""})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\ub530\ub77c\uc11c ",(0,r.jsx)(n.code,{children:"Hidden Class"}),"\ub294 ",(0,r.jsx)(n.strong,{children:"\uac1d\uccb4\uc758 \uba54\ubaa8\ub9ac\ub97c \uc904\uc774\ub294"})," \ud575\uc2ec\uc801\uc778 \ucd5c\uc801\ud654 \uae30\ubc95\uc774\ub2e4."]})}),"\n",(0,r.jsx)(n.h4,{id:"inline-caching-ics-\uae30\ubc95",children:"Inline Caching (ICs) \uae30\ubc95"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Inline Caching"}),"\uc740 \uc8fc\ub85c ",(0,r.jsx)(n.strong,{children:"\ubc18\ubcf5\uc801\uc778 \ucf54\ub4dc"}),"\ub098 ",(0,r.jsx)(n.strong,{children:"\uc6a9\ub7c9\uc774 \ud070 \ud568\uc218"}),"\uac00 \ucd5c\uc801\ud654 \uc6b0\uc120\uc21c\uc704\uc774\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"f(a)"}),"\ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74, \ud574\ub2f9 \ud568\uc218\ub97c \ucc3e\uae30 \uc704\ud574 Call Stack\uc744 \ucc38\uc870\ud55c \ub2e4\uc74c ",(0,r.jsx)(n.code,{children:"function f(a) {...}"})," \ud568\uc218 \uc548\uc758 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uac1d\uccb4 \ub4f1\uc744 \ucc3e\uae30\uc704\ud574 \ub610 Heap \uc601\uc5ed\uc744 \ucc38\uc870\ud558\uac8c \ub41c\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ub7f0 \uc811\uadfc\uc5d0 \ub300\ud55c \uc2dc\uac04\uc744 \uc904\uc774\uae30 \uc704\ud574 ",(0,r.jsx)(n.strong,{children:"\ud568\uc218 \ud638\ucd9c\ubd80\uc5d0 \ud568\uc218 \uad6c\ud604\ubd80\ub97c \uc0bd\uc785\ud558\ub294 \ubc29\uc2dd"}),"\uc774\ub2e4. \ub530\ub77c\uc11c \uc2e4\ud589 \uc18d\ub3c4\ub97c \ucd5c\uc801\ud654\ud558\ub294\ub370 \ud575\uc2ec\uc801\uc778 \uae30\ubc95\uc774\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'function getX(o) {\n\treturn o.x;\n}\n\ngetX({ x: "a" });\n'})}),"\n",(0,r.jsxs)(n.p,{children:["TurboFan\uc740 Inline Cache\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c ",(0,r.jsx)(n.code,{children:"Feedback"}),"\uc774\ub780 \ub370\uc774\ud130 \uad6c\uc870\uc5d0 \uc800\uc7a5\ud55c\ub2e4.\n",(0,r.jsx)(n.img,{alt:"v8_engine_5",src:i(7360).c+""})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Byte code\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"[0]"}),"\uc740 Feedback\uc758 vector\uc758 index\uc774\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"Byte code\uac00 \ucc98\uc74c \uc2e4\ud589\ud558\uc5ec \uc778\ub77c\uc778 \uce90\uc2f1\uc744 \uc218\ud589\ud560 \uc9c0 \ub9d0\uc9c0 \uacb0\uc815\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc744 \ucda9\uc871\ud558\uba74, Feedback\uc5d0 \ud574\ub2f9 \ubc14\uc774\ud2b8 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\uc774\ud6c4 \ud574\ub2f9 \ubc14\uc774\ud2b8 \ucf54\ub4dc\uc5d0\uc11c feedback vector\uc758 index\uac00 \uc788\ub2e4\uba74, ",(0,r.jsx)(n.code,{children:"[i]"}),"\ub97c \ud1b5\ud574 Feedback\uc73c\ub85c \ucc38\uc870\ud558\uc5ec \uc778\ub77c\uc778 \uce90\uc2f1\ub41c machine code\ub97c \uc2e4\ud589\ud55c\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"v8_engine_6",src:i(2460).c+""})}),"\n",(0,r.jsx)(n.h3,{id:"turbofan-deoptimize",children:"TurboFan Deoptimize"}),"\n",(0,r.jsx)(n.p,{children:"\ucef4\ud30c\uc77c\ub41c \ucf54\ub4dc\uac00 \ub3d9\uc801 \ubcc0\ud658\uc774 \ubc1c\uc0dd\ud55c\ub2e4\uba74, \ub2e4\uc2dc byte code\ub85c \uc804\ud658\ud574\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 deoptimize\uac00 \ubc1c\uc0dd\ud55c\ub2e4.\nIgnition\uc774 \ubc14\uc774\ud2b8 \ucf54\ub4dc\ub85c \ub2e4\uc2dc \uc804\ud658\ud558\uae30 \ub54c\ubb38\uc5d0, deoptimize\uac00 \ubc1c\uc0dd\ub41c\ub2e4\uba74 \ube44\uc6a9\uc774 \uaf64\ub098 \ub4e4 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"3\uc904-\uc694\uc57d",children:"3\uc904 \uc694\uc57d"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"V8\uc740 JS \ucf54\ub4dc\ub97c Parser\ub97c \ud1b5\ud574 AST\ub85c \ubcc0\ud658\uc2dc\ud0a4\uace0, Ignition\uc744 \uc774\uc6a9\ud574 byte code\ub97c \uc0dd\uc131\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ucf54\ub4dc\uc758 \uc911\ubcf5 \uc0ac\uc6a9 \ub4f1 \ucd5c\uc801\ud654\uac00 \ud544\uc694\ud560 \ub54c TurboFan\uc744 \ud1b5\ud574 \ucd5c\uc801\ud654\ub41c machine code\ub85c \ucef4\ud30c\uc77c \ud55c\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\ub530\ub77c\uc11c V8 Engine\uc740 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ud55c\uc904\uc529 \ubcc0\ud658\ud558\ub294 ",(0,r.jsx)(n.strong,{children:"Interpreter(Ignition) \ubc29\uc2dd"}),"\uacfc \uc18c\uc2a4\ucf54\ub4dc\ub97c \ub7f0\ud0c0\uc784\uc5d0 \uae30\uacc4\uc5b4\ub85c \ubcc0\ud658\ud558\ub294 ",(0,r.jsx)(n.strong,{children:"Compile(TurboFan) \ubc29\uc2dd"}),"\uc774 \ud63c\ud569\ub41c **JIT(Just In Time Compilation)**\uc744 \uc0ac\uc6a9\ud55c\ub2e4 \ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ucc38\uace0\ubb38\uc11c",children:"\ucc38\uace0\ubb38\uc11c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@devjohnpark/v8-engine-deep-dive-ad664bc4ab43",children:"https://medium.com/@devjohnpark/v8-engine-deep-dive-ad664bc4ab43"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775",children:"https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1OqjVqRhtwlKeKfvMdX6HaCIu9wpZsrzqpIVIwQSuiXQ/edit#slide=id.g1453eb7f19_5_383",children:"https://docs.google.com/presentation/d/1OqjVqRhtwlKeKfvMdX6HaCIu9wpZsrzqpIVIwQSuiXQ/edit#slide=id.g1453eb7f19_5_383"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8840:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_0-9182a6cb3a1e5578279cacbce85b9e3b.png"},1324:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_1-0853a08e1e9b66d6d18d741ead142897.png"},1545:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_2-44db83871bb6d8fe41df319618b72d81.png"},2432:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_3-dcda5f144918c0428018580d55b490ca.png"},671:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_4-5d8079c9ac7cfabb43c20a73db478223.png"},7360:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_5-d8359ed634a03b79ac0d0518013b7762.png"},2460:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/v8_engine_6-189361bb15e57e0794f8aec4ae1901ba.png"},8432:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>t});var r=i(4424);const s={},c=r.createContext(s);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);