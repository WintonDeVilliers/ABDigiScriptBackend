"use strict";(self.webpackChunkadwd_cspims=self.webpackChunkadwd_cspims||[]).push([[3650],{17316:($,M,t)=>{t.r(M),t.d(M,{default:()=>Ft});var e=t(67294),r=t(16550),g=t(86896),C=t(64593),o=t(87631),W=t(185),E=t(71997),I=t(73727),H=t(80129),Q=t(41580),V=t(75515),Y=t(17034),f=t(36989),x=t(92155),B=t(12028),L=t(49066),F=t(74571),A=t(11047),G=t(63237),J=t(70004),ne=t(78114),X=t(50738),Ie=t(29729),Ue=t(4585),be=t(33012),We=t(78971),ze=t(80845),Ke=t(92585),$e=t(24652),He=t(78521),Qe=t(27954),Ve=t(45697),h=t.n(Ve);const ae=({pagination:a})=>e.createElement(Q.x,{paddingTop:6},e.createElement(A.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(o.v4,null),e.createElement(o.tU,{pagination:a})));ae.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ae.propTypes={pagination:h().shape({page:h().number,pageCount:h().number,pageSize:h().number,total:h().number})};var p=t(49826),Ge=t(15537),z=t(29728),Ne=t(20022),Ye=t(2967);const fe=({selected:a,onSuccess:l})=>{const{formatMessage:i}=(0,g.Z)(),[d,u]=(0,e.useState)(!1),{isLoading:m,remove:O}=(0,Ye.K)(),y=async()=>{await O(a),l()};return e.createElement(e.Fragment,null,e.createElement(z.z,{variant:"danger-light",size:"S",startIcon:e.createElement(Ne.Z,null),onClick:()=>u(!0)},i({id:"global.delete",defaultMessage:"Delete"})),e.createElement(o.QH,{isConfirmButtonLoading:m,isOpen:d,onToggleDialog:()=>u(!1),onConfirm:y}))};fe.propTypes={selected:h().arrayOf(p.pw,p.nx).isRequired,onSuccess:h().func.isRequired};var Je=t(32605),Xe=t(14916),we=t(41609),ke=t.n(we),ve=t(42866),he=t(59946),qe=t(77197),_e=t(24969),et=t(11276),tt=t(19270),nt=t(36856),Ee=t(88767),N=t(55994),c=t(57197);const at=()=>{const a=(0,o.lm)(),l=(0,Ee.useQueryClient)(),i=(0,c.IF)("actions/bulk-move"),{post:d}=(0,o.kY)(),u=({destinationFolderId:y,filesAndFolders:v})=>{const D=v.reduce((S,s)=>{const{id:U,type:R}=s,K=R==="asset"?"fileIds":"folderIds";return S[K]||(S[K]=[]),S[K].push(U),S},{});return d(i,{...D,destinationFolderId:y})},m=(0,Ee.useMutation)(u,{onSuccess(y){const{data:{data:v}}=y;v?.files?.length>0&&(l.refetchQueries([N.Z,"assets"],{active:!0}),l.refetchQueries([N.Z,"asset-count"],{active:!0})),l.refetchQueries([N.Z,"folders"],{active:!0}),a({type:"success",message:{id:(0,c.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...m,move:(y,v)=>m.mutateAsync({destinationFolderId:y,filesAndFolders:v})}};var st=t(66951),lt=t(20796);const se=({onClose:a,selected:l,currentFolder:i})=>{const{formatMessage:d}=(0,g.Z)(),{data:u,isLoading:m}=(0,lt.v)(),{move:O}=at();if(!u)return null;const y=async(S,{setErrors:s})=>{try{await O(S.destination.value,l),a()}catch(U){const K=(0,o.OT)(U).errors.reduce((k,j)=>(k[j.values?.path?.length||"destination"]=j.defaultMessage,k),{});ke()(K)||s(K)}},v=()=>{a()};if(m)return e.createElement(ve.P,{onClose:v,labelledBy:"title"},e.createElement(he.f,null,e.createElement(A.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(qe.a,null,d({id:(0,c.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const D={destination:{value:i?.id||"",label:i?.name||u[0].label}};return e.createElement(ve.P,{onClose:v,labelledBy:"title"},e.createElement(Xe.J9,{validateOnChange:!1,onSubmit:y,initialValues:D},({values:S,errors:s,setFieldValue:U})=>e.createElement(o.l0,{noValidate:!0},e.createElement(_e.x,null,e.createElement(V.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},d({id:(0,c.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(he.f,null,e.createElement(et.r,{gap:4},e.createElement(F.P,{xs:12,col:12},e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(tt.Q,{htmlFor:"folder-destination"},d({id:(0,c.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(st.Z,{options:u,onChange:R=>{U("destination",R)},defaultValue:S.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:s?.destination,ariaErrorMessage:"destination-error"}),s.destination&&e.createElement(V.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},s.destination))))),e.createElement(nt.m,{startActions:e.createElement(z.z,{onClick:v,variant:"tertiary",name:"cancel"},d({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(z.z,{type:"submit",loading:m},d({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};se.defaultProps={currentFolder:void 0},se.propTypes={onClose:h().func.isRequired,currentFolder:p.nx,selected:h().arrayOf(p.nx,p.pw).isRequired};const le=({selected:a,onSuccess:l,currentFolder:i})=>{const{formatMessage:d}=(0,g.Z)(),[u,m]=(0,e.useState)(!1),O=()=>{m(!1),l()};return e.createElement(e.Fragment,null,e.createElement(z.z,{variant:"secondary",size:"S",startIcon:e.createElement(Je.Z,null),onClick:()=>m(!0)},d({id:"global.move",defaultMessage:"Move"})),u&&e.createElement(se,{currentFolder:i,onClose:O,selected:a}))};le.defaultProps={currentFolder:void 0},le.propTypes={onSuccess:h().func.isRequired,currentFolder:p.nx,selected:h().arrayOf(p.pw,p.nx).isRequired};const oe=({selected:a,onSuccess:l,currentFolder:i})=>{const{formatMessage:d}=(0,g.Z)();return e.createElement(A.k,{gap:2,paddingBottom:5},e.createElement(V.Z,{variant:"epsilon",textColor:"neutral600"},d({id:(0,Ge.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:a.filter(({type:u})=>u==="folder").length,numberAssets:a.filter(({type:u})=>u==="asset").length})),e.createElement(fe,{selected:a,onSuccess:l}),e.createElement(le,{currentFolder:i,selected:a,onSuccess:l}))};oe.defaultProps={currentFolder:void 0},oe.propTypes={onSuccess:h().func.isRequired,currentFolder:p.nx,selected:h().arrayOf(p.pw,p.nx).isRequired};var ot=t(65169),re=t(96315),rt=t(70088);const it=({isFiltering:a,canCreate:l,canRead:i})=>a?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:i?l?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},pe=({canCreate:a,isFiltering:l,canRead:i,onActionClick:d})=>{const{formatMessage:u}=(0,g.Z)(),m=it({isFiltering:l,canCreate:a,canRead:i});return e.createElement(rt.i,{icon:i?null:ot.Z,action:a&&!l&&e.createElement(z.z,{variant:"secondary",startIcon:e.createElement(re.Z,null),onClick:d},u({id:(0,c.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:u({...m,id:(0,c.OB)(m.id)})})};pe.propTypes={canCreate:h().bool.isRequired,canRead:h().bool.isRequired,isFiltering:h().bool.isRequired,onActionClick:h().func.isRequired};var w=t(98101),dt=t(89597),ct=t(51386),ut=t(45219),ye=t(97581);const mt=()=>{const a=(0,e.useRef)(null),[l,i]=(0,e.useState)(!1),{formatMessage:d}=(0,g.Z)(),{trackUsage:u}=(0,o.rS)(),[{query:m},O]=(0,o.Kx)(),y=m?.filters?.$and||[],v=()=>i(s=>!s),D=s=>{O({filters:{$and:s},page:1})},S=s=>{u("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(s[s.length-1])[0]}),O({filters:{$and:s},page:1})};return e.createElement(e.Fragment,null,e.createElement(z.z,{variant:"tertiary",ref:a,startIcon:e.createElement(dt.Z,null),onClick:v,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),l&&e.createElement(ut.Z,{displayedFilters:ye.Z,filters:y,onSubmit:S,onToggle:v,source:a}),e.createElement(ct.Z,{appliedFilters:y,filtersSchema:ye.Z,onRemoveFilter:D}))};var gt=t(53979),ft=t(23620),vt=t(67109),ht=t(83315);const ie=({breadcrumbs:a,canCreate:l,folder:i,onToggleEditFolderDialog:d,onToggleUploadAssetDialog:u})=>{const{formatMessage:m}=(0,g.Z)(),{pathname:O}=(0,r.TH)(),[{query:y}]=(0,o.Kx)(),v={...y,folder:i?.parent?.id??void 0};return e.createElement(gt.T,{title:m({id:(0,c.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:a&&i&&e.createElement(ht.O,{as:"nav",label:m({id:(0,c.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:a,currentFolderId:i?.id}),navigationAction:i&&e.createElement(ft.r,{startIcon:e.createElement(vt.Z,null),to:`${O}?${(0,H.stringify)(v,{encode:!1})}`},m({id:(0,c.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:l&&e.createElement(A.k,{gap:2},e.createElement(z.z,{startIcon:e.createElement(re.Z,null),variant:"secondary",onClick:d},m({id:(0,c.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(z.z,{startIcon:e.createElement(re.Z,null),onClick:u},m({id:(0,c.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};ie.defaultProps={breadcrumbs:!1,folder:null},ie.propTypes={breadcrumbs:h().oneOfType([p.Fv,h().bool]),canCreate:h().bool.isRequired,folder:p.nx,onToggleEditFolderDialog:h().func.isRequired,onToggleUploadAssetDialog:h().func.isRequired};var Et=t(73817),pt=t(44466),yt=t(31817),xt=t(42047),Mt=t(16838);const Ct=(0,E.ZP)(Q.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,xe=(0,E.ZP)(V.Z)`
  max-width: 100%;
`,Me=(0,E.ZP)(Q.x)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }
`,Bt=()=>{const{push:a}=(0,r.k6)(),{canRead:l,canCreate:i,canUpdate:d,canCopyLink:u,canDownload:m,isLoading:O}=(0,yt.y)(),y=(0,e.useRef)(),{formatMessage:v}=(0,g.Z)(),{pathname:D}=(0,r.TH)(),{trackUsage:S}=(0,o.rS)(),[{query:s},U]=(0,o.Kx)(),R=Boolean(s._q||s.filters),[K,k]=(0,o.Yw)(p.uf.view,p.Uk.GRID),j=K===p.Uk.GRID,{data:P,isLoading:Ot,errors:St}=(0,Et.L)({skipWhen:!l,query:s}),{data:Dt,isLoading:Zt,errors:Tt}=(0,pt.j)({enabled:l&&P?.pagination?.page===1&&!(0,c.rV)(s),query:s}),{data:de,isLoading:Ce,error:Rt}=(0,xt.W)(s?.folder,{enabled:l&&!!s?.folder});Rt?.response?.status===404&&a(D);const q=Dt?.map(n=>({...n,type:"folder",folderURL:(0,c.Km)(D,s,n.id),isSelectable:d}))??[],Z=q?.length||0,_=P?.results?.map(n=>({...n,type:"asset",isSelectable:d}))||[],T=_?.length??0,jt=P?.pagination?.total,Be=Ce||Zt||O||Ot,[Pt,It]=(0,e.useState)(!1),[Ut,Le]=(0,e.useState)(!1),[Ae,ce]=(0,e.useState)(void 0),[ue,Fe]=(0,e.useState)(void 0),[b,{selectOne:ee,selectAll:Oe}]=(0,o.Uq)(["type","id"],[]),Se=b?.length>0&&b?.length!==T+Z,me=()=>It(n=>!n),De=({created:n=!1}={})=>{n&&s?.page!=="1"&&U({...s,page:1}),Le(te=>!te)},Ze=(n,te)=>{n.target.checked&&S("didSelectAllMediaLibraryElements"),Oe(te)},Te=n=>{S("didSortMediaLibraryElements",{location:"upload",sort:n}),U({sort:n})},Re=n=>{Fe(n),Le(!0)},bt=n=>{Fe(null),De(n),y.current&&y.current.focus()},je=n=>{n===T&&P.pagination.page===P.pagination.pageCount&&P.pagination.page>1&&U({...s,page:P.pagination.page-1})},Wt=()=>{Oe(),je(b.length)};return(0,o.go)(),e.createElement(Y.A,null,e.createElement(W.o,{"aria-busy":Be},e.createElement(ie,{breadcrumbs:!Ce&&(0,c.M4)(de,{pathname:D,query:s}),canCreate:i,onToggleEditFolderDialog:De,onToggleUploadAssetDialog:me,folder:de}),e.createElement(f.Z,{startActions:e.createElement(e.Fragment,null,d&&j&&(T>0||Z>0)&&e.createElement(Ct,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(x.C,{"aria-label":v({id:(0,c.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Se,value:(T>0||Z>0)&&b.length===T+Z,onChange:n=>Ze(n,[..._,...q])})),l&&j&&e.createElement(Qe.Z,{onChangeSort:Te}),l&&e.createElement(mt,null)),endActions:e.createElement(e.Fragment,null,e.createElement(o.jW,{permissions:Mt.Z.configureView},e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(B.h,{forwardedAs:I.rU,to:{pathname:`${D}/configuration`,search:(0,H.stringify)(s,{encode:!1})},icon:e.createElement(ne.Z,null),label:v({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(B.h,{icon:j?e.createElement(X.Z,null):e.createElement(Ie.Z,null),label:v(j?{id:(0,c.OB)("view-switch.list"),defaultMessage:"List View"}:{id:(0,c.OB)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>k(j?p.Uk.LIST:p.Uk.GRID)})),e.createElement(o.m,{label:v({id:(0,c.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(L.D,null,b.length>0&&e.createElement(oe,{currentFolder:de,selected:b,onSuccess:Wt}),Be&&e.createElement(o.dO,null),(St||Tt)&&e.createElement(o.Hn,null),Z===0&&T===0&&e.createElement(pe,{canCreate:i,canRead:l,isFiltering:R,onActionClick:me}),l&&!j&&(T>0||Z>0)&&e.createElement(He.b,{assetCount:T,folderCount:Z,indeterminate:Se,onChangeSort:Te,onChangeFolder:n=>a((0,c.Km)(D,s,n)),onEditAsset:ce,onEditFolder:Re,onSelectOne:ee,onSelectAll:Ze,rows:[...q,..._],selected:b,shouldDisableBulkSelect:!d,sortQuery:s?.sort??""}),l&&j&&e.createElement(e.Fragment,null,Z>0&&e.createElement($e.a,{title:(R&&T>0||!R)&&v({id:(0,c.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:Z})||""},q.map(n=>{const zt=!!b.filter(({type:ge})=>ge==="folder").find(ge=>ge.id===n.id),Pe=(0,c.Km)(D,s,n?.id);return e.createElement(F.P,{col:3,key:`folder-${n.id}`},e.createElement(w.Ac,{ref:ue&&n.id===ue.id?y:void 0,ariaLabel:n.name,id:`folder-${n.id}`,to:Pe,startAction:ee&&n.isSelectable?e.createElement(w.MM,{"data-testid":`folder-checkbox-${n.id}`,value:zt,onChange:()=>ee(n)}):null,cardActions:e.createElement(B.h,{icon:e.createElement(Ue.Z,null),"aria-label":v({id:(0,c.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>Re(n)})},e.createElement(w.Bu,null,e.createElement(w.u6,{to:Pe},e.createElement(A.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(xe,{fontWeight:"semiBold",ellipsis:!0},n.name,e.createElement(G.T,null,":")),e.createElement(xe,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},v({id:(0,c.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:n.children.count,filesCount:n.files.count})))))))})),T>0&&Z>0&&e.createElement(Q.x,{paddingTop:6,paddingBottom:4},e.createElement(J.i,null)),T>0&&e.createElement(Ke.r,{assets:_,onEditAsset:ce,onSelectAsset:ee,selectedAssets:b.filter(({type:n})=>n==="asset"),title:(!R||R&&Z>0)&&P?.pagination?.page===1&&v({id:(0,c.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:jt})||""})),P?.pagination&&e.createElement(ae,{pagination:P.pagination}))),Pt&&e.createElement(be.x,{onClose:me,trackedLocation:"upload",folderId:s?.folder}),Ut&&e.createElement(We.f,{onClose:bt,folder:ue,parentFolderId:s?.folder,location:"upload"}),Ae&&e.createElement(ze.s,{onClose:n=>{n===null&&je(1),ce(void 0)},asset:Ae,canUpdate:d,canCopyLink:u,canDownload:m,trackedLocation:"upload"}))};var Lt=t(60862);const At=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),Ft=()=>{const{config:{isLoading:a,isError:l,data:i}}=(0,Lt.Z)(),[{rawQuery:d},u]=(0,o.Kx)(),{formatMessage:m}=(0,g.Z)(),O=m({id:(0,c.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{a||l||d||u({sort:i.sort,page:1,pageSize:i.pageSize})},[a,l,i,d,u]),(0,o.go)(),e.createElement(W.o,{"aria-busy":a},e.createElement(C.q,{title:O}),a&&e.createElement(o.dO,null),d?e.createElement(e.Suspense,{fallback:e.createElement(o.dO,null)},e.createElement(r.rs,null,e.createElement(r.AW,{exact:!0,path:`/plugins/${N.Z}`,component:Bt}),e.createElement(r.AW,{exact:!0,path:`/plugins/${N.Z}/configuration`,render:()=>e.createElement(At,{config:i})}))):null)}},36989:($,M,t)=>{t.d(M,{Z:()=>g});var e=t(85893),r=t(11047);const g=({startActions:C,endActions:o})=>!C&&!o?null:(0,e.jsxs)(r.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(r.k,{gap:2,wrap:"wrap",children:C}),(0,e.jsx)(r.k,{gap:2,shrink:0,wrap:"wrap",children:o})]})},49066:($,M,t)=>{t.d(M,{D:()=>g});var e=t(85893),r=t(41580);const g=({children:C})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:C})},53979:($,M,t)=>{t.d(M,{T:()=>Q});var e=t(85893),r=t(67294),g=t(71997);const C=f=>{const x=(0,r.useRef)(null),[B,L]=(0,r.useState)(!0),F=([A])=>{L(A.isIntersecting)};return(0,r.useEffect)(()=>{const A=x.current,G=new IntersectionObserver(F,f);return A&&G.observe(x.current),()=>{A&&G.disconnect()}},[x,f]),[x,B]};var o=t(79698);const W=(f,x)=>{const B=(0,o.W)(x);(0,r.useLayoutEffect)(()=>{const L=new ResizeObserver(B);return Array.isArray(f)?f.forEach(F=>{F.current&&L.observe(F.current)}):f.current&&L.observe(f.current),()=>{L.disconnect()}},[f,B])};var E=t(41580),I=t(11047),H=t(75515);const Q=f=>{const x=(0,r.useRef)(null),[B,L]=(0,r.useState)(null),[F,A]=C({root:null,rootMargin:"0px",threshold:0});return W(F,()=>{F.current&&L(F.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{x.current&&L(x.current.getBoundingClientRect())},[x]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:B?.height},ref:F,children:A&&(0,e.jsx)(Y,{ref:x,...f})}),!A&&(0,e.jsx)(Y,{...f,sticky:!0,width:B?.width})]})};Q.displayName="HeaderLayout";const V=(0,g.ZP)(E.x)`
  width: ${({width:f})=>f?`${f/16}rem`:void 0};
  z-index: ${({theme:f})=>f.zIndices[1]};
`,Y=r.forwardRef(({navigationAction:f,primaryAction:x,secondaryAction:B,subtitle:L,title:F,sticky:A,width:G,...J},ne)=>{const X=typeof L=="string";return A?(0,e.jsx)(V,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:G,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(I.k,{justifyContent:"space-between",children:[(0,e.jsxs)(I.k,{children:[f&&(0,e.jsx)(E.x,{paddingRight:3,children:f}),(0,e.jsxs)(E.x,{children:[(0,e.jsx)(H.Z,{variant:"beta",as:"h1",...J,children:F}),X?(0,e.jsx)(H.Z,{variant:"pi",textColor:"neutral600",children:L}):L]}),B?(0,e.jsx)(E.x,{paddingLeft:4,children:B}):null]}),(0,e.jsx)(I.k,{children:x?(0,e.jsx)(E.x,{paddingLeft:2,children:x}):void 0})]})}):(0,e.jsxs)(E.x,{ref:ne,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0,children:[f?(0,e.jsx)(E.x,{paddingBottom:2,children:f}):null,(0,e.jsxs)(I.k,{justifyContent:"space-between",children:[(0,e.jsxs)(I.k,{minWidth:0,children:[(0,e.jsx)(H.Z,{as:"h1",variant:"alpha",...J,children:F}),B?(0,e.jsx)(E.x,{paddingLeft:4,children:B}):null]}),x]}),X?(0,e.jsx)(H.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:L}):L]})})},17034:($,M,t)=>{t.d(M,{A:()=>W});var e=t(85893),r=t(71997),g=t(41580);const C=(0,r.ZP)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:E})=>E?"auto 1fr":"1fr"};
`,o=(0,r.ZP)(g.x)`
  overflow-x: hidden;
`,W=({sideNav:E,children:I})=>(0,e.jsxs)(C,{hasSideNav:!!E,children:[E,(0,e.jsx)(o,{paddingBottom:10,children:I})]})},185:($,M,t)=>{t.d(M,{o:()=>o});var e=t(85893),r=t(71997),g=t(41580);const C=(0,r.ZP)(g.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,o=({labelledBy:W="main-content-title",...E})=>(0,e.jsx)(C,{"aria-labelledby":W,as:"main",id:"main-content",tabIndex:-1,...E})},67109:($,M,t)=>{t.d(M,{Z:()=>g});var e=t(85893);const r=C=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),g=r},78114:($,M,t)=>{t.d(M,{Z:()=>g});var e=t(85893);const r=C=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),g=r}}]);
