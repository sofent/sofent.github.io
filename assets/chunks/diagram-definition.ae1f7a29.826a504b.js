import{s as M,i as ut,l as pt,f as ft}from"../app.99163862.js";import{a as tt}from"./cytoscape.cjs.98c71152.js";import{a as yt}from"./cytoscape-cose-bilkent.be4c1101.js";var q=function(){var e=function(L,o,r,l){for(r=r||{},l=L.length;l--;r[L[l]]=o);return r},t=[1,7],n=[1,9],s=[1,10],i=[1,14],a=[1,13],u=[1,19],g=[1,20],d=[6,9],m=[1,7,12,13,16,19],b=[1,28],_=[1,29],$=[1,6,7,9,12,13,16,19],I={trace:function(){},yy:{},symbols_:{error:2,start:3,MINDMAP:4,document:5,NL:6,SPACELIST:7,stop:8,EOF:9,statement:10,node:11,ICON:12,CLASS:13,nodeWithId:14,nodeWithoutId:15,NODE_DSTART:16,NODE_DESCR:17,NODE_DEND:18,NODE_ID:19,$accept:0,$end:1},terminals_:{2:"error",4:"MINDMAP",6:"NL",7:"SPACELIST",9:"EOF",12:"ICON",13:"CLASS",16:"NODE_DSTART",17:"NODE_DESCR",18:"NODE_DEND",19:"NODE_ID"},productions_:[0,[3,2],[3,3],[3,3],[8,1],[8,1],[8,2],[8,2],[5,3],[5,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[11,1],[11,1],[15,3],[14,1],[14,4]],performAction:function(o,r,l,h,y,c,A){var p=c.length-1;switch(y){case 1:case 2:case 3:return h;case 4:h.getLogger().trace("Stop NL ");break;case 5:h.getLogger().trace("Stop EOF ");break;case 6:h.getLogger().trace("Stop NL2 ");break;case 7:h.getLogger().trace("Stop EOF2 ");break;case 10:h.getLogger().trace("Node: ",c[p].id),h.addNode(c[p-1].length,c[p].id,c[p].descr,c[p].type);break;case 11:h.getLogger().trace("Icon: ",c[p]),h.decorateNode({icon:c[p]});break;case 12:case 15:h.decorateNode({class:c[p]});break;case 13:h.getLogger().trace("Node: ",c[p].id),h.addNode(0,c[p].id,c[p].descr,c[p].type);break;case 14:h.decorateNode({icon:c[p]});break;case 19:h.getLogger().trace("node found ..",c[p-2]),this.$={id:c[p-1],descr:c[p-1],type:h.getType(c[p-2],c[p])};break;case 20:this.$={id:c[p],descr:c[p],type:h.nodeType.DEFAULT};break;case 21:h.getLogger().trace("node found ..",c[p-3]),this.$={id:c[p-3],descr:c[p-1],type:h.getType(c[p-2],c[p])};break}},table:[{3:1,4:[1,2],7:[1,3]},{1:[3]},{5:4,6:[1,5],7:t,10:6,11:8,12:n,13:s,14:11,15:12,16:i,19:a},{4:[1,15]},{1:[2,1],7:t,10:16,11:8,12:n,13:s,14:11,15:12,16:i,19:a},{5:17,7:t,10:6,11:8,12:n,13:s,14:11,15:12,16:i,19:a},{6:u,8:18,9:g},e(d,[2,16],{14:11,15:12,11:21,12:[1,22],13:[1,23],16:i,19:a}),e(d,[2,13]),e(d,[2,14]),e(d,[2,15]),e(d,[2,17]),e(d,[2,18]),e(d,[2,20],{16:[1,24]}),{17:[1,25]},{5:26,7:t,10:6,11:8,12:n,13:s,14:11,15:12,16:i,19:a},{6:u,8:27,9:g},{1:[2,2],7:t,10:16,11:8,12:n,13:s,14:11,15:12,16:i,19:a},e(m,[2,9],{6:b,9:_}),e($,[2,4]),e($,[2,5]),e(d,[2,10]),e(d,[2,11]),e(d,[2,12]),{17:[1,30]},{18:[1,31]},{1:[2,3],7:t,10:16,11:8,12:n,13:s,14:11,15:12,16:i,19:a},e(m,[2,8],{6:b,9:_}),e($,[2,6]),e($,[2,7]),{18:[1,32]},e(d,[2,19]),e(d,[2,21])],defaultActions:{},parseError:function(o,r){if(r.recoverable)this.trace(o);else{var l=new Error(o);throw l.hash=r,l}},parse:function(o){var r=this,l=[0],h=[],y=[null],c=[],A=this.table,p="",U=0,Q=0,lt=2,J=1,ht=c.slice.call(arguments,1),E=Object.create(this.lexer),O={yy:{}};for(var z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,z)&&(O.yy[z]=this.yy[z]);E.setInput(o,O.yy),O.yy.lexer=E,O.yy.parser=this,typeof E.yylloc>"u"&&(E.yylloc={});var G=E.yylloc;c.push(G);var dt=E.options&&E.options.ranges;typeof O.yy.parseError=="function"?this.parseError=O.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function gt(){var S;return S=h.pop()||E.lex()||J,typeof S!="number"&&(S instanceof Array&&(h=S,S=h.pop()),S=r.symbols_[S]||S),S}for(var x,v,N,X,T={},j,D,K,F;;){if(v=l[l.length-1],this.defaultActions[v]?N=this.defaultActions[v]:((x===null||typeof x>"u")&&(x=gt()),N=A[v]&&A[v][x]),typeof N>"u"||!N.length||!N[0]){var Y="";F=[];for(j in A[v])this.terminals_[j]&&j>lt&&F.push("'"+this.terminals_[j]+"'");E.showPosition?Y="Parse error on line "+(U+1)+`:
`+E.showPosition()+`
Expecting `+F.join(", ")+", got '"+(this.terminals_[x]||x)+"'":Y="Parse error on line "+(U+1)+": Unexpected "+(x==J?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(Y,{text:E.match,token:this.terminals_[x]||x,line:E.yylineno,loc:G,expected:F})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+x);switch(N[0]){case 1:l.push(x),y.push(E.yytext),c.push(E.yylloc),l.push(N[1]),x=null,Q=E.yyleng,p=E.yytext,U=E.yylineno,G=E.yylloc;break;case 2:if(D=this.productions_[N[1]][1],T.$=y[y.length-D],T._$={first_line:c[c.length-(D||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(D||1)].first_column,last_column:c[c.length-1].last_column},dt&&(T._$.range=[c[c.length-(D||1)].range[0],c[c.length-1].range[1]]),X=this.performAction.apply(T,[p,Q,U,O.yy,N[1],y,c].concat(ht)),typeof X<"u")return X;D&&(l=l.slice(0,-1*D*2),y=y.slice(0,-1*D),c=c.slice(0,-1*D)),l.push(this.productions_[N[1]][0]),y.push(T.$),c.push(T._$),K=A[l[l.length-2]][l[l.length-1]],l.push(K);break;case 3:return!0}}return!0}},V=function(){var L={EOF:1,parseError:function(r,l){if(this.yy.parser)this.yy.parser.parseError(r,l);else throw new Error(r)},setInput:function(o,r){return this.yy=r||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var r=o.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var r=o.length,l=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===h.length?this.yylloc.first_column:0)+h[h.length-l.length].length-l[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),r=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+r+"^"},test_match:function(o,r){var l,h,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),h=o[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],l=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var c in y)this[c]=y[c];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,r,l,h;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),c=0;c<y.length;c++)if(l=this._input.match(this.rules[y[c]]),l&&(!r||l[0].length>r[0].length)){if(r=l,h=c,this.options.backtrack_lexer){if(o=this.test_match(l,y[c]),o!==!1)return o;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(o=this.test_match(r,y[h]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,l,h,y){switch(h){case 0:r.getLogger().trace("Found comment",l.yytext);break;case 1:return 4;case 2:this.begin("CLASS");break;case 3:return this.popState(),13;case 4:this.popState();break;case 5:r.getLogger().trace("Begin icon"),this.begin("ICON");break;case 6:return 6;case 7:return 12;case 8:r.getLogger().trace("end icon"),this.popState();break;case 9:return r.getLogger().trace("Exploding node"),this.begin("NODE"),16;case 10:return r.getLogger().trace("Cloud"),this.begin("NODE"),16;case 11:return r.getLogger().trace("Explosion Bang"),this.begin("NODE"),16;case 12:return r.getLogger().trace("Cloud Bang"),this.begin("NODE"),16;case 13:return this.begin("NODE"),16;case 14:return this.begin("NODE"),16;case 15:return this.begin("NODE"),16;case 16:return this.begin("NODE"),16;case 17:return 7;case 18:return 19;case 19:return 9;case 20:r.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 21:return r.getLogger().trace("description:",l.yytext),"NODE_DESCR";case 22:this.popState();break;case 23:return this.popState(),r.getLogger().trace("node end ))"),"NODE_DEND";case 24:return this.popState(),r.getLogger().trace("node end )"),"NODE_DEND";case 25:return this.popState(),r.getLogger().trace("node end ...",l.yytext),"NODE_DEND";case 26:return this.popState(),r.getLogger().trace("node end (("),"NODE_DEND";case 27:return this.popState(),r.getLogger().trace("node end (-"),"NODE_DEND";case 28:return this.popState(),r.getLogger().trace("node end (-"),"NODE_DEND";case 29:return this.popState(),r.getLogger().trace("node end (("),"NODE_DEND";case 30:return this.popState(),r.getLogger().trace("node end (("),"NODE_DEND";case 31:return r.getLogger().trace("Long description:",l.yytext),17;case 32:return r.getLogger().trace("Long description:",l.yytext),17}},rules:[/^(?:\s*%%.*)/i,/^(?:mindmap\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\-\)\{\}]+)/i,/^(?:$)/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{CLASS:{rules:[3,4],inclusive:!1},ICON:{rules:[7,8],inclusive:!1},NSTR:{rules:[21,22],inclusive:!1},NODE:{rules:[20,23,24,25,26,27,28,29,30,31,32],inclusive:!1},INITIAL:{rules:[0,1,2,5,6,9,10,11,12,13,14,15,16,17,18,19],inclusive:!0}}};return L}();I.lexer=V;function H(){this.yy={}}return H.prototype=I,I.Parser=H,new H}();q.parser=q;const mt=q,R=e=>{console.error("Log function was called before initialization",e)},k={trace:R,debug:R,info:R,warn:R,error:R,fatal:R};let B,P,et;const bt=(e,t,n,s,i)=>{e.info("Mermaid utils injected"),k.trace=e.trace,k.debug=e.debug,k.info=e.info,k.warn=e.warn,k.error=e.error,k.fatal=e.fatal,B=n,P=s,et=i};let w=[],nt=0,W={};const Et=()=>{w=[],nt=0,W={}},$t=function(e){for(let t=w.length-1;t>=0;t--)if(w[t].level<e)return w[t];return null},_t=()=>w.length>0?w[0]:null,xt=(e,t,n,s)=>{k.info("addNode",e,t,n,s);const i=B(),a={id:nt++,nodeId:P(t),level:e,descr:P(n),type:s,children:[],width:B().mindmap.maxNodeWidth};switch(a.type){case f.ROUNDED_RECT:a.padding=2*i.mindmap.padding;break;case f.RECT:a.padding=2*i.mindmap.padding;break;case f.HEXAGON:a.padding=2*i.mindmap.padding;break;default:a.padding=i.mindmap.padding}const u=$t(e);if(u)u.children.push(a),w.push(a);else if(w.length===0)w.push(a);else{let g=new Error('There can be only one root. No parent could be found for ("'+a.descr+'")');throw g.hash={text:"branch "+name,token:"branch "+name,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+name+'"']},g}},f={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},kt=(e,t)=>{switch(k.debug("In get type",e,t),e){case"[":return f.RECT;case"(":return t===")"?f.ROUNDED_RECT:f.CLOUD;case"((":return f.CIRCLE;case")":return f.CLOUD;case"))":return f.BANG;case"{{":return f.HEXAGON;default:return f.DEFAULT}},it=(e,t)=>{W[e]=t},Nt=e=>{const t=w[w.length-1];e&&e.icon&&(t.icon=P(e.icon)),e&&e.class&&(t.class=P(e.class))},C=e=>{switch(e){case f.DEFAULT:return"no-border";case f.RECT:return"rect";case f.ROUNDED_RECT:return"rounded-rect";case f.CIRCLE:return"circle";case f.CLOUD:return"cloud";case f.BANG:return"bang";case f.HEXAGON:return"hexgon";default:return"no-border"}};let st;const wt=e=>{st=e},Dt=()=>k,St=e=>w[e],Z=e=>W[e],Lt=Object.freeze(Object.defineProperty({__proto__:null,clear:Et,getMindmap:_t,addNode:xt,nodeType:f,getType:kt,setElementForId:it,decorateNode:Nt,type2Str:C,get parseError(){return st},setErrorHandler:wt,getLogger:Dt,getNodeById:St,getElementById:Z},Symbol.toStringTag,{value:"Module"})),rt=12;function Ot(e,t){e.each(function(){var n=M(this),s=n.text().split(/(\s+|<br>)/).reverse(),i,a=[],u=1.1,g=n.attr("y"),d=parseFloat(n.attr("dy")),m=n.text(null).append("tspan").attr("x",0).attr("y",g).attr("dy",d+"em");for(let b=0;b<s.length;b++)i=s[s.length-1-b],a.push(i),m.text(a.join(" ").trim()),(m.node().getComputedTextLength()>t||i==="<br>")&&(a.pop(),m.text(a.join(" ").trim()),i==="<br>"?a=[""]:a=[i],m=n.append("tspan").attr("x",0).attr("y",g).attr("dy",u+"em").text(i))})}const vt=function(e,t,n){e.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),e.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},Ct=function(e,t){e.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("height",t.height).attr("width",t.width)},It=function(e,t){const n=t.width,s=t.height,i=.15*n,a=.25*n,u=.35*n,g=.2*n;e.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("d",`M0 0 a${i},${i} 0 0,1 ${n*.25},${-1*n*.1}
      a${u},${u} 1 0,1 ${n*.4},${-1*n*.1}
      a${a},${a} 1 0,1 ${n*.35},${1*n*.2}

      a${i},${i} 1 0,1 ${n*.15},${1*s*.35}
      a${g},${g} 1 0,1 ${-1*n*.15},${1*s*.65}

      a${a},${i} 1 0,1 ${-1*n*.25},${n*.15}
      a${u},${u} 1 0,1 ${-1*n*.5},${0}
      a${i},${i} 1 0,1 ${-1*n*.25},${-1*n*.15}

      a${i},${i} 1 0,1 ${-1*n*.1},${-1*s*.35}
      a${g},${g} 1 0,1 ${n*.1},${-1*s*.65}

    H0 V0 Z`)},Tt=function(e,t){const n=t.width,s=t.height,i=.15*n;e.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("d",`M0 0 a${i},${i} 1 0,0 ${n*.25},${-1*s*.1}
      a${i},${i} 1 0,0 ${n*.25},${0}
      a${i},${i} 1 0,0 ${n*.25},${0}
      a${i},${i} 1 0,0 ${n*.25},${1*s*.1}

      a${i},${i} 1 0,0 ${n*.15},${1*s*.33}
      a${i*.8},${i*.8} 1 0,0 ${0},${1*s*.34}
      a${i},${i} 1 0,0 ${-1*n*.15},${1*s*.33}

      a${i},${i} 1 0,0 ${-1*n*.25},${s*.15}
      a${i},${i} 1 0,0 ${-1*n*.25},${0}
      a${i},${i} 1 0,0 ${-1*n*.25},${0}
      a${i},${i} 1 0,0 ${-1*n*.25},${-1*s*.15}

      a${i},${i} 1 0,0 ${-1*n*.1},${-1*s*.33}
      a${i*.8},${i*.8} 1 0,0 ${0},${-1*s*.34}
      a${i},${i} 1 0,0 ${n*.1},${-1*s*.33}

    H0 V0 Z`)},Rt=function(e,t){e.append("circle").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("r",t.width/2)};function At(e,t,n,s,i){return e.insert("polygon",":first-child").attr("points",s.map(function(a){return a.x+","+a.y}).join(" ")).attr("transform","translate("+(i.width-t)/2+", "+n+")")}const Mt=function(e,t){const n=t.height,i=n/4,a=t.width-t.padding+2*i,u=[{x:i,y:0},{x:a-i,y:0},{x:a,y:-n/2},{x:a-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}];At(e,a,n,u,t)},Bt=function(e,t){e.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("height",t.height).attr("rx",t.padding).attr("ry",t.padding).attr("width",t.width)},Pt=function(e,t,n,s){const i=n%rt-1,a=e.append("g");t.section=i,a.attr("class",(t.class?t.class+" ":"")+"mindmap-node "+(i<0?"section-root":"section-"+i));const u=a.append("g"),g=a.append("g"),m=g.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(Ot,t.width).node().getBBox(),b=s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;if(t.height=m.height+b*1.1*.5+t.padding,t.width=m.width+2*t.padding,t.icon)if(t.type===f.CIRCLE)t.height+=50,t.width+=50,a.append("foreignObject").attr("height","50px").attr("width",t.width).attr("style","text-align: center;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+i+" "+t.icon),g.attr("transform","translate("+t.width/2+", "+(t.height/2-1.5*t.padding)+")");else{t.width+=50;const _=t.height;t.height=Math.max(_,60);const $=Math.abs(t.height-_);a.append("foreignObject").attr("width","60px").attr("height",t.height).attr("style","text-align: center;margin-top:"+$/2+"px;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+i+" "+t.icon),g.attr("transform","translate("+(25+t.width/2)+", "+($/2+t.padding/2)+")")}else g.attr("transform","translate("+t.width/2+", "+t.padding/2+")");switch(t.type){case f.DEFAULT:vt(u,t,i);break;case f.ROUNDED_RECT:Bt(u,t);break;case f.RECT:Ct(u,t);break;case f.CIRCLE:u.attr("transform","translate("+t.width/2+", "+ +t.height/2+")"),Rt(u,t);break;case f.CLOUD:It(u,t);break;case f.BANG:Tt(u,t);break;case f.HEXAGON:Mt(u,t);break}return it(t.id,a),t.height},Ut=function(t,n,s,i,a){const u=a%rt-1,g=s.x+s.width/2,d=s.y+s.height/2,m=n.x+n.width/2,b=n.y+n.height/2,_=m>g?g+Math.abs(g-m)/2:g-Math.abs(g-m)/2,$=b>d?d+Math.abs(d-b)/2:d-Math.abs(d-b)/2,I=m>g?Math.abs(g-_)/2+g:-Math.abs(g-_)/2+g,V=b>d?Math.abs(d-$)/2+d:-Math.abs(d-$)/2+d;t.append("path").attr("d",s.direction==="TB"||s.direction==="BT"?`M${g},${d} Q${g},${V} ${_},${$} T${m},${b}`:`M${g},${d} Q${I},${d} ${_},${$} T${m},${b}`).attr("class","edge section-edge-"+u+" edge-depth-"+i)},jt=function(e){const t=Z(e.id),n=e.x||0,s=e.y||0;t.attr("transform","translate("+n+","+s+")")},at={drawNode:Pt,positionNode:jt,drawEdge:Ut};tt.use(yt);function ot(e,t,n,s){at.drawNode(e,t,n,s),t.children&&t.children.forEach((i,a)=>{ot(e,i,n<0?a:n,s)})}function Ft(e,t){t.edges().map((n,s)=>{const i=n.data();if(n[0]._private.bodyBounds){const a=n[0]._private.rscratch;k.trace("Edge: ",s,i),e.insert("path").attr("d",`M ${a.startX},${a.startY} L ${a.midX},${a.midY} L${a.endX},${a.endY} `).attr("class","edge section-edge-"+i.section+" edge-depth-"+i.depth)}})}function ct(e,t,n,s){t.add({group:"nodes",data:{id:e.id,labelText:e.descr,height:e.height,width:e.width,level:s,nodeId:e.id,padding:e.padding,type:e.type},position:{x:e.x,y:e.y}}),e.children&&e.children.forEach(i=>{ct(i,t,n,s+1),t.add({group:"edges",data:{id:`${e.id}_${i.id}`,source:e.id,target:i.id,depth:s,section:i.section}})})}function Vt(e,t){return new Promise(n=>{const s=M("body").append("div").attr("id","cy").attr("style","display:none"),i=tt({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"bezier"}}]});s.remove(),ct(e,i,t,0),i.nodes().forEach(function(a){a.layoutDimensions=()=>{const u=a.data();return{w:u.width,h:u.height}}}),i.layout({name:"cose-bilkent",quality:"proof",styleEnabled:!1,animate:!1}).run(),i.ready(a=>{k.info("Ready",a),n(i)})})}function Ht(e){e.nodes().map((t,n)=>{const s=t.data();s.x=t.position().x,s.y=t.position().y,at.positionNode(s);const i=Z(s.nodeId);k.info("Id:",n,"Position: (",t.position().x,", ",t.position().y,")",s),i.attr("transform",`translate(${t.position().x-s.width/2}, ${t.position().y-s.height/2})`),i.attr("attr",`apa-${n})`)})}const zt=async(e,t,n,s)=>{const i=B();s.db.clear(),s.parser.parse(e),k.debug(`Renering info diagram
`+e);const a=B().securityLevel;let u;a==="sandbox"&&(u=M("#i"+t));const d=(a==="sandbox"?M(u.nodes()[0].contentDocument.body):M("body")).select("#"+t);d.append("g");const m=s.db.getMindmap(),b=d.append("g");b.attr("class","mindmap-edges");const _=d.append("g");_.attr("class","mindmap-nodes"),ot(_,m,-1,i);const $=await Vt(m,i);Ft(b,$),Ht($),et(void 0,d,i.mindmap.padding,i.mindmap.useMaxWidth)},Gt={draw:zt},Xt=e=>{let t="";for(let n=0;n<e.THEME_COLOR_LIMIT;n++)e["lineColor"+n]=e["lineColor"+n]||e["cScaleInv"+n],ut(e["lineColor"+n])?e["lineColor"+n]=pt(e["lineColor"+n],20):e["lineColor"+n]=ft(e["lineColor"+n],20);for(let n=0;n<e.THEME_COLOR_LIMIT;n++){const s=""+(17-3*n);t+=`
    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} polygon, .section-${n-1} path  {
      fill: ${e["cScale"+n]};
    }
    .section-${n-1} text {
     fill: ${e["cScaleLabel"+n]};
    }
    .node-icon-${n-1} {
      font-size: 40px;
      color: ${e["cScaleLabel"+n]};
    }
    .section-edge-${n-1}{
      stroke: ${e["cScale"+n]};
    }
    .edge-depth-${n-1}{
      stroke-width: ${s};
    }
    .section-${n-1} line {
      stroke: ${e["cScaleInv"+n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Yt=e=>`
  .edge {
    stroke-width: 3;
  }
  ${Xt(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
`,qt=Yt,Jt={db:Lt,renderer:Gt,parser:mt,styles:qt,injectUtils:bt};export{Jt as diagram};