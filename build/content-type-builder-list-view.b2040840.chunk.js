"use strict";(self.webpackChunkadwd_cspims=self.webpackChunkadwd_cspims||[]).push([[5905],{57134:(oe,O,n)=>{n.r(O),n.d(O,{default:()=>lt});var e=n(67294),r=n(87631),$=n(96315),W=n(85018),K=n(4585),X=n(67109),D=n(53979),m=n(11047),R=n(29728),L=n(49066),g=n(41580),V=n(27361),l=n.n(V),f=n(18721),x=n.n(f),b=n(18446),C=n.n(b),j=n(11700),N=n.n(j),I=n(86896),J=n(16550),q=n(45697),o=n.n(q),ge=n(38939),fe=n(8060),he=n(79031),_=n(37909),T=n(75515),je=n(49386),ye=n(26478),H=n(13588),Z=n(1565),v=n(5002),ke=n(70968),Be=n(52624),Ee=n(44915);function ae({isActive:t,icon:a}){return e.createElement(m.k,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%"},e.createElement(Be.J,{as:Ee.c[a]||Ee.c.cube,height:5,width:5}))}ae.defaultProps={isActive:!1,icon:"Cube"},ae.propTypes={isActive:o().bool,icon:o().string};const be=(0,Z.ZP)(g.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,r.Q1)(8)};

  svg {
    width: ${(0,r.Q1)(10)};
    height: ${(0,r.Q1)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Ae=(0,Z.ZP)(m.k)`
  width: ${(0,r.Q1)(140)};
  height: ${(0,r.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${be} {
      display: block;
    }

    ${T.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`;function re({component:t,dzName:a,index:i,isActive:s,isInDevelopmentMode:p,onClick:d}){const{modifiedData:h,removeComponentFromDynamicZone:k}=(0,H.Z)(),{schema:{icon:P,displayName:M}}=l()(h,["components",t],{schema:{}}),y=c=>{c.stopPropagation(),k(a,i)};return e.createElement(Ae,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:d,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${a}-panel-${i}`,id:`dz-${a}-tab-${i}`},e.createElement(ae,{icon:P,isActive:s}),e.createElement(g.x,{marginTop:1,maxWidth:"100%"},e.createElement(T.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},M)),p&&e.createElement(be,{as:"button",onClick:y},e.createElement(ke.Z,null)))}re.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},re.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Ie=re,ve=Z.ZP.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,r.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,r.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:i})=>a?`background-color: ${i.colors.primary200};`:t?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function le({customRowComponent:t,component:a,isFromDynamicZone:i,isNestedInDZComponent:s,firstLoopComponentUid:p}){const{modifiedData:d}=(0,H.Z)(),{schema:{attributes:h}}=l()(d,["components",a],{schema:{attributes:[]}});return e.createElement(ve,{isChildOfDynamicZone:i,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Te,{customRowComponent:t,items:h,targetUid:a,firstLoopComponentUid:p||a,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:p?a:null})))}le.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},le.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ce=le,we=(0,Z.ZP)($.Z)`
  width: ${(0,r.Q1)(32)};
  height: ${(0,r.Q1)(32)};
  padding: ${(0,r.Q1)(9)};
  border-radius: ${(0,r.Q1)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Fe=(0,Z.ZP)(g.x)`
  height: ${(0,r.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Oe=(0,Z.ZP)(m.k)`
  width: 100%;
  overflow-x: auto;
`,Se=(0,Z.ZP)(g.x)`
  padding-top: ${(0,r.Q1)(90)};
`,Ue=(0,Z.ZP)(m.k)`
  flex-shrink: 0;
  width: ${(0,r.Q1)(140)};
  height: ${(0,r.Q1)(80)};
  justify-content: center;
  align-items: center;
`;function ie({customRowComponent:t,components:a,addComponent:i,name:s,targetUid:p}){const{isInDevelopmentMode:d}=(0,H.Z)(),[h,k]=(0,e.useState)(0),{formatMessage:P}=(0,I.Z)(),M=c=>{h!==c&&k(c)},y=()=>{i(s)};return e.createElement(ve,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Fe,{paddingLeft:8},e.createElement(Oe,{gap:2},d&&e.createElement("button",{type:"button",onClick:y},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(we,null),e.createElement(T.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},P({id:(0,v.Z)("button.component.add"),formatMessage:"Add a component"})))),e.createElement(m.k,{role:"tablist",gap:2},a.map((c,u)=>e.createElement(Ie,{key:c,dzName:s,index:u,component:c,isActive:h===u,isInDevelopmentMode:d,onClick:()=>M(u)}))))),e.createElement(Se,null,a.map((c,u)=>{const E={customRowComponent:t,component:c};return e.createElement(g.x,{id:`dz-${s}-panel-${u}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${s}-tab-${u}`,key:c,style:{display:h===u?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ce,{...E,isFromDynamicZone:!0,targetUid:p,key:c}))))}))))}ie.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ie.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const We=ie,Ne=(0,Z.ZP)(g.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,ze=(0,Z.ZP)(g.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,Qe=(0,Z.ZP)(g.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,xe=({children:t,icon:a,color:i,...s})=>e.createElement(Qe,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...s},e.createElement(m.k,null,e.createElement(ze,{color:i,"aria-hidden":!0,background:`${i}200`},a),e.createElement(g.x,{paddingLeft:3},e.createElement(T.Z,{variant:"pi",fontWeight:"bold",textColor:`${i}600`},t))));xe.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Ke=xe;function se({addComponentToDZ:t,customRowComponent:a,editTarget:i,firstLoopComponentUid:s,isFromDynamicZone:p,isMain:d,isNestedInDZComponent:h,isSub:k,items:P,secondLoopComponentUid:M,targetUid:y}){const{formatMessage:c}=(0,I.Z)(),{trackUsage:u}=(0,r.rS)(),{isInDevelopmentMode:E,modifiedData:z,isInContentTypeView:w}=(0,H.Z)(),{onOpenModalAddField:S}=(0,ye.Z)(),B=()=>{u("hasClickedCTBAddFieldBanner"),S({forTarget:i,targetUid:y})};return y?P.length===0&&d?e.createElement(ge.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(he.Tr,null,e.createElement(_.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.c4,{action:e.createElement(R.z,{onClick:B,size:"L",startIcon:e.createElement($.Z,null),variant:"secondary"},c({id:(0,v.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:w?{id:(0,v.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,v.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ne,null,e.createElement(g.x,{paddingLeft:6,paddingRight:d?6:0,...d&&{style:{overflowX:"auto"}}},e.createElement("table",null,d&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,P.map(F=>{const{type:Q}=F,G=a;return e.createElement(e.Fragment,{key:F.name},e.createElement(G,{...F,isNestedInDZComponent:h,targetUid:y,editTarget:i,firstLoopComponentUid:s,isFromDynamicZone:p,secondLoopComponentUid:M}),Q==="component"&&e.createElement(Ce,{...F,customRowComponent:a,targetUid:y,isNestedInDZComponent:p,editTarget:i,firstLoopComponentUid:s}),Q==="dynamiczone"&&e.createElement(We,{...F,customRowComponent:a,addComponent:t,targetUid:y}))})))),d&&E&&e.createElement(je.c,{icon:e.createElement($.Z,null),onClick:B},c({id:(0,v.Z)(`form.button.add.field.to.${z.contentType?z.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})),k&&E&&e.createElement(Ke,{icon:e.createElement($.Z,null),onClick:B,color:p?"primary":"neutral"},c({id:(0,v.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(ge.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(he.Tr,null,e.createElement(_.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.c4,{colSpan:2,content:{id:(0,v.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}se.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},se.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const Te=se;var Ze=n(12028),Ve=n(20022),He=n(49358);const Xe=(0,Z.ZP)(g.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Je=Z.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,$e=t=>e.createElement(Xe,null,e.createElement(Je,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));$e.propTypes={color:o().string.isRequired};const Ge=$e,ce=({content:t})=>N()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};const Ye=ce,qe=(0,Z.ZP)(g.x)`
  position: relative;
`;var _e=n(66848);const de=({type:t,customField:a,repeatable:i})=>{const{formatMessage:s}=(0,I.Z)();let p=t;return["integer","biginteger","float","decimal"].includes(t)?p="number":["string"].includes(t)&&(p="text"),a?e.createElement(T.Z,null,s({id:(0,v.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(T.Z,null,s({id:(0,v.Z)(`attribute.${p}`),defaultMessage:t}),"\xA0",i&&s({id:(0,v.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const et=de;function me({configurable:t,customField:a,editTarget:i,firstLoopComponentUid:s,isFromDynamicZone:p,name:d,onClick:h,relation:k,repeatable:P,secondLoopComponentUid:M,target:y,targetUid:c,type:u}){const{contentTypes:E,isInDevelopmentMode:z,removeAttribute:w}=(0,H.Z)(),{formatMessage:S}=(0,I.Z)(),B=u==="relation"&&k.includes("morph"),F=["integer","biginteger","float","decimal"].includes(u)?"number":u,Q=l()(E,[y],{}),G=l()(Q,["schema","displayName"],""),Y=l()(Q,"plugin"),ue=y?"relation":F,ee=()=>{B||t!==!1&&h(i,M||s||c,d,u,a)};let U;return M&&s?U=2:s?U=1:U=0,e.createElement(qe,{as:"tr",...(0,r.X7)({fn:ee,condition:z&&t&&!B})},e.createElement("td",{style:{position:"relative"}},U!==0&&e.createElement(Ge,{color:p?"primary200":"neutral150"}),e.createElement(m.k,{paddingLeft:2,gap:4},e.createElement(_e.Z,{type:ue,customField:a}),e.createElement(T.Z,{fontWeight:"bold"},d))),e.createElement("td",null,y?e.createElement(T.Z,null,S({id:(0,v.Z)(`modelPage.attribute.${B?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(Ye,{content:G}),"\xA0",Y&&`(${S({id:(0,v.Z)("from"),defaultMessage:"from"})}: ${Y})`)):e.createElement(et,{type:u,customField:a,repeatable:P})),e.createElement("td",null,z?e.createElement(m.k,{justifyContent:"flex-end",...r.UW},t?e.createElement(m.k,{gap:1},!B&&e.createElement(Ze.h,{onClick:ee,label:`${S({id:"app.utils.edit",defaultMessage:"Edit"})} ${d}`,noBorder:!0,icon:e.createElement(K.Z,null)}),e.createElement(Ze.h,{onClick:te=>{te.stopPropagation(),w(i,d,M||s||"")},label:`${S({id:"global.delete",defaultMessage:"Delete"})} ${d}`,noBorder:!0,icon:e.createElement(Ve.Z,null)})):e.createElement(He.Z,null)):e.createElement(g.x,{height:(0,r.Q1)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const tt=(0,e.memo)(me),nt=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var ot=n(98432);const at={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},pe=({disabled:t,isTemporary:a,isInContentTypeView:i,contentTypeKind:s,targetUid:p})=>{const{formatMessage:d}=(0,I.Z)(),{push:h}=(0,J.k6)(),{collectionTypesConfigurations:k,componentsConfigurations:P,singleTypesConfigurations:M}=at,y=d({id:"content-type-builder.form.button.configure-view"});let c=k;const u=()=>(a||h(i?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return i&&s==="singleType"&&(c=M),i||(c=P),e.createElement(r.jW,{permissions:c},e.createElement(R.z,{startIcon:e.createElement(ot.Z,null),variant:"tertiary",onClick:u,disabled:a||t},y))};pe.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},pe.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const rt=(0,e.memo)(pe),lt=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:i,isInContentTypeView:s,submitData:p}=(0,H.Z)(),{formatMessage:d}=(0,I.Z)(),{trackUsage:h}=(0,r.rS)(),k=(0,J.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:P,onOpenModalAddField:M,onOpenModalEditField:y,onOpenModalEditSchema:c,onOpenModalEditCustomField:u}=(0,ye.Z)(),E=s?"contentType":"component",z=[E,"schema","attributes"],w=l()(a,[E,"uid"]),S=l()(a,[E,"isTemporary"],!1),B=l()(a,[E,"schema","kind"],null),F=l()(a,z,[]),Q=x()(t,[E,"plugin"]),G=!C()(a,t),Y=s?"contentType":"component",ue=A=>{P({dynamicZoneTarget:A,targetUid:w})},ee=async(A,Me,De,Re,Le)=>{const Pe=nt(Re);Le?u({forTarget:A,targetUid:Me,attributeName:De,attributeType:Pe,customFieldUid:Le}):y({forTarget:A,targetUid:Me,attributeName:De,attributeType:Pe,step:Re==="component"?"2":null})};let U=l()(a,[E,"schema","displayName"],"");const te=l()(a,[E,"schema","kind"],""),ne=k?.params.currentUID==="create-content-type";!U&&ne&&(U=d({id:(0,v.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const it=()=>{const A=te||E;A==="collectionType"&&h("willEditNameOfContentType"),A==="singleType"&&h("willEditNameOfSingleType"),c({modalType:E,forTarget:E,targetUid:w,kind:A})};return e.createElement(e.Fragment,null,e.createElement(J.NL,{message:d({id:(0,v.Z)("prompt.unsaved")}),when:G}),e.createElement(D.T,{id:"title",primaryAction:i&&e.createElement(m.k,{gap:2},!ne&&e.createElement(R.z,{startIcon:e.createElement($.Z,null),variant:"secondary",onClick:()=>{M({forTarget:Y,targetUid:w})}},d({id:(0,v.Z)("button.attributes.add.another")})),e.createElement(R.z,{startIcon:e.createElement(W.Z,null),onClick:()=>p(),type:"submit",disabled:C()(a,t)},d({id:"global.save",defaultMessage:"Save"}))),secondaryAction:i&&!Q&&!ne&&e.createElement(R.z,{startIcon:e.createElement(K.Z,null),variant:"tertiary",onClick:it},d({id:"app.utils.edit",defaultMessage:"Edit"})),title:N()(U),subtitle:d({id:(0,v.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(r.rU,{startIcon:e.createElement(X.Z,null),to:"/plugins/content-type-builder/"},d({id:"global.back",defaultMessage:"Back"}))}),e.createElement(L.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{gap:2},e.createElement(rt,{key:"link-to-cm-settings-view",targetUid:w,isTemporary:S,isInContentTypeView:s,contentTypeKind:B,disabled:ne}))),e.createElement(g.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Te,{items:F,customRowComponent:A=>e.createElement(tt,{...A,onClick:ee}),addComponentToDZ:ue,targetUid:w,editTarget:Y,isMain:!0})))))}},49066:(oe,O,n)=>{n.d(O,{D:()=>$});var e=n(85893),r=n(41580);const $=({children:W})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:W})},53979:(oe,O,n)=>{n.d(O,{T:()=>L});var e=n(85893),r=n(67294),$=n(1565);const W=l=>{const f=(0,r.useRef)(null),[x,b]=(0,r.useState)(!0),C=([j])=>{b(j.isIntersecting)};return(0,r.useEffect)(()=>{const j=f.current,N=new IntersectionObserver(C,l);return j&&N.observe(f.current),()=>{j&&N.disconnect()}},[f,l]),[f,x]};var K=n(79698);const X=(l,f)=>{const x=(0,K.W)(f);(0,r.useLayoutEffect)(()=>{const b=new ResizeObserver(x);return Array.isArray(l)?l.forEach(C=>{C.current&&b.observe(C.current)}):l.current&&b.observe(l.current),()=>{b.disconnect()}},[l,x])};var D=n(41580),m=n(11047),R=n(75515);const L=l=>{const f=(0,r.useRef)(null),[x,b]=(0,r.useState)(null),[C,j]=W({root:null,rootMargin:"0px",threshold:0});return X(C,()=>{C.current&&b(C.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{f.current&&b(f.current.getBoundingClientRect())},[f]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:x?.height},ref:C,children:j&&(0,e.jsx)(V,{ref:f,...l})}),!j&&(0,e.jsx)(V,{...l,sticky:!0,width:x?.width})]})};L.displayName="HeaderLayout";const g=(0,$.ZP)(D.x)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,V=r.forwardRef(({navigationAction:l,primaryAction:f,secondaryAction:x,subtitle:b,title:C,sticky:j,width:N,...I},J)=>{const q=typeof b=="string";return j?(0,e.jsx)(g,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:N,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(m.k,{justifyContent:"space-between",children:[(0,e.jsxs)(m.k,{children:[l&&(0,e.jsx)(D.x,{paddingRight:3,children:l}),(0,e.jsxs)(D.x,{children:[(0,e.jsx)(R.Z,{variant:"beta",as:"h1",...I,children:C}),q?(0,e.jsx)(R.Z,{variant:"pi",textColor:"neutral600",children:b}):b]}),x?(0,e.jsx)(D.x,{paddingLeft:4,children:x}):null]}),(0,e.jsx)(m.k,{children:f?(0,e.jsx)(D.x,{paddingLeft:2,children:f}):void 0})]})}):(0,e.jsxs)(D.x,{ref:J,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(D.x,{paddingBottom:2,children:l}):null,(0,e.jsxs)(m.k,{justifyContent:"space-between",children:[(0,e.jsxs)(m.k,{minWidth:0,children:[(0,e.jsx)(R.Z,{as:"h1",variant:"alpha",...I,children:C}),x?(0,e.jsx)(D.x,{paddingLeft:4,children:x}):null]}),f]}),q?(0,e.jsx)(R.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:b}):b]})})},49386:(oe,O,n)=>{n.d(O,{c:()=>R});var e=n(85893),r=n(1565),$=n(41580),W=n(70004),K=n(11047),X=n(75515);const D=(0,r.ZP)($.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:L})=>L.colors.primary600};
  }
`,m=(0,r.ZP)($.x)`
  border-radius: 0 0 ${({theme:L})=>L.borderRadius} ${({theme:L})=>L.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,R=({children:L,icon:g,...V})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(W.i,{}),(0,e.jsx)(m,{as:"button",background:"primary100",padding:5,...V,children:(0,e.jsxs)(K.k,{children:[(0,e.jsx)(D,{"aria-hidden":!0,background:"primary200",children:g}),(0,e.jsx)($.x,{paddingLeft:3,children:(0,e.jsx)(X.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:L})})]})})]})}}]);
