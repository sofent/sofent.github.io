import{p as _,d as L,s as I}from"./styles-bd38c0ff.fe33106a.js";import{u as d,m as y,s as v,J as M,H as R,F as x,C as m,D as $,y as D}from"../app.99163862.js";import{G as B}from"./index.2d2c4c76.js";import{r as G}from"./index-64e46a5f.b9f1f395.js";import"./isPlainObject.c95840fa.js";import"./edges-02da71a2.b57241ba.js";import"./svgDraw-87c143cd.45414d46.js";const N=s=>D.sanitizeText(s,y());let E={dividerMargin:10,padding:5,textHeight:10};const J=function(s,a,f,r){const t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(l){const e=s[l];let c="";e.cssClasses.length>0&&(c=c+" "+e.cssClasses.join(" "));const o={labelStyle:""};let b=e.text!==void 0?e.text:e.id,i=0,p="";switch(e.type){case"class":p="class_box";break;default:p="class_box"}a.setNode(e.id,{labelStyle:o.labelStyle,shape:p,labelText:N(b),classData:e,rx:i,ry:i,class:c,style:o.style,id:e.id,domId:e.domId,tooltip:r.db.getTooltip(e.id)||"",haveCallback:e.haveCallback,link:e.link,width:e.type==="group"?500:void 0,type:e.type,padding:y().flowchart.padding}),d.info("setNode",{labelStyle:o.labelStyle,shape:p,labelText:b,rx:i,ry:i,class:c,style:o.style,id:e.id,width:e.type==="group"?500:void 0,type:e.type,padding:y().flowchart.padding})})},z=function(s,a,f,r){d.info(s),s.forEach(function(t,l){const e=t;let c="";const o={labelStyle:"",style:""};let b=e.text,i=0,p="note";if(a.setNode(e.id,{labelStyle:o.labelStyle,shape:p,labelText:N(b),noteData:e,rx:i,ry:i,class:c,style:o.style,id:e.id,domId:e.id,tooltip:"",type:"note",padding:y().flowchart.padding}),d.info("setNode",{labelStyle:o.labelStyle,shape:p,labelText:b,rx:i,ry:i,style:o.style,id:e.id,type:"note",padding:y().flowchart.padding}),!e.class||!(e.class in r))return;const h=f+l,n={};n.classes="relation",n.pattern="dotted",n.id=`edgeNote${h}`,n.arrowhead="none",d.info(`Note edge: ${JSON.stringify(n)}, ${JSON.stringify(e)}`),n.startLabelRight="",n.endLabelLeft="",n.arrowTypeStart="none",n.arrowTypeEnd="none";let g="fill:none",w="";n.style=g,n.labelStyle=w,n.curve=x(E.curve,m),a.setEdge(e.id,e.class,n,h)})},F=function(s,a){const f=y().flowchart;let r=0;s.forEach(function(t){r++;const l={};l.classes="relation",l.pattern=t.relation.lineType==1?"dashed":"solid",l.id="id"+r,t.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal",d.info(l,t),l.startLabelRight=t.relationTitle1==="none"?"":t.relationTitle1,l.endLabelLeft=t.relationTitle2==="none"?"":t.relationTitle2,l.arrowTypeStart=C(t.relation.type1),l.arrowTypeEnd=C(t.relation.type2);let e="",c="";if(t.style!==void 0){const o=$(t.style);e=o.style,c=o.labelStyle}else e="fill:none";l.style=e,l.labelStyle=c,t.interpolate!==void 0?l.curve=x(t.interpolate,m):s.defaultInterpolate!==void 0?l.curve=x(s.defaultInterpolate,m):l.curve=x(f.curve,m),t.text=t.title,t.text===void 0?t.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",y().flowchart.htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+t.text+"</span>"):(l.labelType="text",l.label=t.text.replace(D.lineBreakRegex,`
`),t.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),a.setEdge(t.id1,t.id2,l,r)})},H=function(s){Object.keys(s).forEach(function(f){E[f]=s[f]})},q=function(s,a,f,r){d.info("Drawing class - ",a);const t=y().flowchart,l=y().securityLevel;d.info("config:",t);const e=t.nodeSpacing||50,c=t.rankSpacing||50,o=new B({multigraph:!0,compound:!0}).setGraph({rankdir:r.db.getDirection(),nodesep:e,ranksep:c,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),b=r.db.getClasses(),i=r.db.getRelations(),p=r.db.getNotes();d.info(i),J(b,o,a,r),F(i,o),z(p,o,i.length+1,b);let h;l==="sandbox"&&(h=v("#i"+a));const n=l==="sandbox"?v(h.nodes()[0].contentDocument.body):v("body"),g=n.select(`[id="${a}"]`),w=n.select("#"+a+" g");if(G(w,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",a),M.insertTitle(g,"classTitleText",t.titleTopMargin,r.db.getDiagramTitle()),R(o,g,t.diagramPadding,t.useMaxWidth),!t.htmlLabels){const k=l==="sandbox"?h.nodes()[0].contentDocument:document,A=k.querySelectorAll('[id="'+a+'"] .edgeLabel .label');for(const S of A){const T=S.getBBox(),u=k.createElementNS("http://www.w3.org/2000/svg","rect");u.setAttribute("rx",0),u.setAttribute("ry",0),u.setAttribute("width",T.width),u.setAttribute("height",T.height),S.insertBefore(u,S.firstChild)}}};function C(s){let a;switch(s){case 0:a="aggregation";break;case 1:a="extension";break;case 2:a="composition";break;case 3:a="dependency";break;case 4:a="lollipop";break;default:a="none"}return a}const P={setConf:H,draw:q},Z={parser:_,db:L,renderer:P,styles:I,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,L.clear()}};export{Z as diagram};
