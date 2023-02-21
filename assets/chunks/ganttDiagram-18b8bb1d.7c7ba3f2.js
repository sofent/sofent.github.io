import{m as U,g as Wt,h as qt,K as jt,L as Gt,k as Jt,j as Kt,p as Zt,M as Qt,S as M,w as Ht,u as kt,s as ct,T as $t,U as te,V as ee,v as ie,W as se,X as ne,Y as re,Z as Et,$ as At,a0 as It,a1 as Lt,a2 as Ft,a3 as Mt,a4 as ae,y as ce,J as le}from"../app.99163862.js";var gt=function(){var t=function(L,f,a,o){for(a=a||{},o=L.length;o--;a[L[o]]=f);return a},u=[1,3],n=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],r=[1,15],m=[1,16],k=[1,17],V=[1,18],I=[1,19],G=[1,20],z=[1,21],N=[1,22],E=[1,23],x=[1,24],S=[1,25],$=[1,26],tt=[1,27],et=[1,29],it=[1,31],st=[1,34],nt=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],J={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(f,a,o,c,d,e,b){var s=e.length-1;switch(d){case 2:return e[s-1];case 3:this.$=[];break;case 4:e[s-1].push(e[s]),this.$=e[s-1];break;case 5:case 6:this.$=e[s];break;case 7:case 8:this.$=[];break;case 9:c.setDateFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 10:c.enableInclusiveEndDates(),this.$=e[s].substr(18);break;case 11:c.TopAxis(),this.$=e[s].substr(8);break;case 12:c.setAxisFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 13:c.setTickInterval(e[s].substr(13)),this.$=e[s].substr(13);break;case 14:c.setExcludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 15:c.setIncludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 16:c.setTodayMarker(e[s].substr(12)),this.$=e[s].substr(12);break;case 17:c.setDiagramTitle(e[s].substr(6)),this.$=e[s].substr(6);break;case 18:this.$=e[s].trim(),c.setAccTitle(this.$);break;case 19:case 20:this.$=e[s].trim(),c.setAccDescription(this.$);break;case 21:c.addSection(e[s].substr(8)),this.$=e[s].substr(8);break;case 23:c.addTask(e[s-1],e[s]),this.$="task";break;case 27:this.$=e[s-1],c.setClickEvent(e[s-1],e[s],null);break;case 28:this.$=e[s-2],c.setClickEvent(e[s-2],e[s-1],e[s]);break;case 29:this.$=e[s-2],c.setClickEvent(e[s-2],e[s-1],null),c.setLink(e[s-2],e[s]);break;case 30:this.$=e[s-3],c.setClickEvent(e[s-3],e[s-2],e[s-1]),c.setLink(e[s-3],e[s]);break;case 31:this.$=e[s-2],c.setClickEvent(e[s-2],e[s],null),c.setLink(e[s-2],e[s-1]);break;case 32:this.$=e[s-3],c.setClickEvent(e[s-3],e[s-1],e[s]),c.setLink(e[s-3],e[s-2]);break;case 33:this.$=e[s-1],c.setLink(e[s-1],e[s]);break;case 34:case 40:this.$=e[s-1]+" "+e[s];break;case 35:case 36:case 38:this.$=e[s-2]+" "+e[s-1]+" "+e[s];break;case 37:case 39:this.$=e[s-3]+" "+e[s-2]+" "+e[s-1]+" "+e[s];break;case 41:c.parseDirective("%%{","open_directive");break;case 42:c.parseDirective(e[s],"type_directive");break;case 43:e[s]=e[s].trim().replace(/'/g,'"'),c.parseDirective(e[s],"arg_directive");break;case 44:c.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:u,30:4,40:n},{1:[3]},{3:6,4:2,5:u,30:4,40:n},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:r,13:m,14:k,15:V,16:I,17:G,18:z,19:N,20:E,21:x,23:S,25:$,26:tt,27:28,28:et,30:4,35:it,40:n},{32:32,33:[1,33],43:st},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:r,13:m,14:k,15:V,16:I,17:G,18:z,19:N,20:E,21:x,23:S,25:$,26:tt,27:28,28:et,30:4,35:it,40:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(nt,[2,25]),{32:47,43:st},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(nt,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(f,a){if(a.recoverable)this.trace(f);else{var o=new Error(f);throw o.hash=a,o}},parse:function(f){var a=this,o=[0],c=[],d=[null],e=[],b=this.table,s="",p=0,C=0,Y=2,l=1,g=e.slice.call(arguments,1),h=Object.create(this.lexer),T={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(T.yy[_]=this.yy[_]);h.setInput(f,T.yy),T.yy.lexer=h,T.yy.parser=this,typeof h.yylloc>"u"&&(h.yylloc={});var y=h.yylloc;e.push(y);var v=h.options&&h.options.ranges;typeof T.yy.parseError=="function"?this.parseError=T.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function dt(){var P;return P=c.pop()||h.lex()||l,typeof P!="number"&&(P instanceof Array&&(c=P,P=c.pop()),P=a.symbols_[P]||P),P}for(var D,R,A,ht,X={},rt,O,St,at;;){if(R=o[o.length-1],this.defaultActions[R]?A=this.defaultActions[R]:((D===null||typeof D>"u")&&(D=dt()),A=b[R]&&b[R][D]),typeof A>"u"||!A.length||!A[0]){var mt="";at=[];for(rt in b[R])this.terminals_[rt]&&rt>Y&&at.push("'"+this.terminals_[rt]+"'");h.showPosition?mt="Parse error on line "+(p+1)+`:
`+h.showPosition()+`
Expecting `+at.join(", ")+", got '"+(this.terminals_[D]||D)+"'":mt="Parse error on line "+(p+1)+": Unexpected "+(D==l?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError(mt,{text:h.match,token:this.terminals_[D]||D,line:h.yylineno,loc:y,expected:at})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+R+", token: "+D);switch(A[0]){case 1:o.push(D),d.push(h.yytext),e.push(h.yylloc),o.push(A[1]),D=null,C=h.yyleng,s=h.yytext,p=h.yylineno,y=h.yylloc;break;case 2:if(O=this.productions_[A[1]][1],X.$=d[d.length-O],X._$={first_line:e[e.length-(O||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(O||1)].first_column,last_column:e[e.length-1].last_column},v&&(X._$.range=[e[e.length-(O||1)].range[0],e[e.length-1].range[1]]),ht=this.performAction.apply(X,[s,C,p,T.yy,A[1],d,e].concat(g)),typeof ht<"u")return ht;O&&(o=o.slice(0,-1*O*2),d=d.slice(0,-1*O),e=e.slice(0,-1*O)),o.push(this.productions_[A[1]][0]),d.push(X.$),e.push(X._$),St=b[o[o.length-2]][o[o.length-1]],o.push(St);break;case 3:return!0}}return!0}},ft=function(){var L={EOF:1,parseError:function(a,o){if(this.yy.parser)this.yy.parser.parseError(a,o);else throw new Error(a)},setInput:function(f,a){return this.yy=a||this.yy||{},this._input=f,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var f=this._input[0];this.yytext+=f,this.yyleng++,this.offset++,this.match+=f,this.matched+=f;var a=f.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),f},unput:function(f){var a=f.length,o=f.split(/(?:\r\n?|\n)/g);this._input=f+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===c.length?this.yylloc.first_column:0)+c[c.length-o.length].length-o[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(f){this.unput(this.match.slice(f))},pastInput:function(){var f=this.matched.substr(0,this.matched.length-this.match.length);return(f.length>20?"...":"")+f.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var f=this.match;return f.length<20&&(f+=this._input.substr(0,20-f.length)),(f.substr(0,20)+(f.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var f=this.pastInput(),a=new Array(f.length+1).join("-");return f+this.upcomingInput()+`
`+a+"^"},test_match:function(f,a){var o,c,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),c=f[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+f[0].length},this.yytext+=f[0],this.match+=f[0],this.matches=f,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(f[0].length),this.matched+=f[0],o=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var e in d)this[e]=d[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var f,a,o,c;this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),e=0;e<d.length;e++)if(o=this._input.match(this.rules[d[e]]),o&&(!a||o[0].length>a[0].length)){if(a=o,c=e,this.options.backtrack_lexer){if(f=this.test_match(o,d[e]),f!==!1)return f;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(f=this.test_match(a,d[c]),f!==!1?f:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,o,c,d){switch(c){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 38;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 26:this.popState();break;case 27:return 37;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return L}();J.lexer=ft;function K(){this.yy={}}return K.prototype=J,J.Parser=K,new K}();gt.parser=gt;const oe=gt;let F="",bt="",xt,Tt="",Z=[],Q=[],_t={},wt=[],ut=[],q="";const zt=["active","done","crit","milestone"];let Ct=[],H=!1,Dt=!1,yt=0;const ue=function(t,u,n){Zt.parseDirective(this,t,u,n)},fe=function(){wt=[],ut=[],q="",Ct=[],lt=0,vt=void 0,ot=void 0,w=[],F="",bt="",xt=void 0,Tt="",Z=[],Q=[],H=!1,Dt=!1,yt=0,_t={},Qt()},de=function(t){bt=t},he=function(){return bt},me=function(t){xt=t},ke=function(){return xt},ge=function(t){Tt=t},ye=function(){return Tt},pe=function(t){F=t},ve=function(){H=!0},be=function(){return H},xe=function(){Dt=!0},Te=function(){return Dt},_e=function(){return F},we=function(t){Z=t.toLowerCase().split(/[\s,]+/)},Ce=function(){return Z},De=function(t){Q=t.toLowerCase().split(/[\s,]+/)},Se=function(){return Q},Ee=function(){return _t},Ae=function(t){q=t,wt.push(t)},Ie=function(){return wt},Le=function(){let t=Vt();const u=10;let n=0;for(;!t&&n<u;)t=Vt(),n++;return ut=w,ut},Ot=function(t,u,n,i){return i.includes(t.format(u.trim()))?!1:t.isoWeekday()>=6&&n.includes("weekends")||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(t.format(u.trim()))},Pt=function(t,u,n,i){if(!n.length||t.manualEndTime)return;let r=M(t.startTime,u,!0);r.add(1,"d");let m=M(t.endTime,u,!0),k=Fe(r,m,u,n,i);t.endTime=m.toDate(),t.renderEndTime=k},Fe=function(t,u,n,i,r){let m=!1,k=null;for(;t<=u;)m||(k=u.toDate()),m=Ot(t,n,i,r),m&&u.add(1,"d"),t.add(1,"d");return k},pt=function(t,u,n){n=n.trim();const r=/^after\s+([\d\w- ]+)/.exec(n.trim());if(r!==null){let k=null;if(r[1].split(" ").forEach(function(V){let I=j(V);I!==void 0&&(k?I.endTime>k.endTime&&(k=I):k=I)}),k)return k.endTime;{const V=new Date;return V.setHours(0,0,0,0),V}}let m=M(n,u.trim(),!0);if(m.isValid())return m.toDate();{kt.debug("Invalid date:"+n),kt.debug("With date format:"+u.trim());const k=new Date(n);if(k===void 0||isNaN(k.getTime()))throw new Error("Invalid date:"+n);return k}},Bt=function(t){const u=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return u!==null?M.duration(Number.parseFloat(u[1]),u[2]):M.duration.invalid()},Yt=function(t,u,n,i=!1){n=n.trim();let r=M(n,u.trim(),!0);if(r.isValid())return i&&r.add(1,"d"),r.toDate();const m=M(t),k=Bt(n);return k.isValid()&&m.add(k),m.toDate()};let lt=0;const W=function(t){return t===void 0?(lt=lt+1,"task"+lt):t},Me=function(t,u){let n;u.substr(0,1)===":"?n=u.substr(1,u.length):n=u;const i=n.split(","),r={};Ut(i,r,zt);for(let k=0;k<i.length;k++)i[k]=i[k].trim();let m="";switch(i.length){case 1:r.id=W(),r.startTime=t.endTime,m=i[0];break;case 2:r.id=W(),r.startTime=pt(void 0,F,i[0]),m=i[1];break;case 3:r.id=W(i[0]),r.startTime=pt(void 0,F,i[1]),m=i[2];break}return m&&(r.endTime=Yt(r.startTime,F,m,H),r.manualEndTime=M(m,"YYYY-MM-DD",!0).isValid(),Pt(r,F,Q,Z)),r},Ve=function(t,u){let n;u.substr(0,1)===":"?n=u.substr(1,u.length):n=u;const i=n.split(","),r={};Ut(i,r,zt);for(let m=0;m<i.length;m++)i[m]=i[m].trim();switch(i.length){case 1:r.id=W(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=W(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=W(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break}return r};let vt,ot,w=[];const Rt={},ze=function(t,u){const n={section:q,type:q,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:u},task:t,classes:[]},i=Ve(ot,u);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=ot,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=yt,yt++;const r=w.push(n);ot=n.id,Rt[n.id]=r-1},j=function(t){const u=Rt[t];return w[u]},Oe=function(t,u){const n={section:q,type:q,description:t,task:t,classes:[]},i=Me(vt,u);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,vt=n,ut.push(n)},Vt=function(){const t=function(n){const i=w[n];let r="";switch(w[n].raw.startTime.type){case"prevTaskEnd":{const m=j(i.prevTaskId);i.startTime=m.endTime;break}case"getStartDate":r=pt(void 0,F,w[n].raw.startTime.startData),r&&(w[n].startTime=r);break}return w[n].startTime&&(w[n].endTime=Yt(w[n].startTime,F,w[n].raw.endTime.data,H),w[n].endTime&&(w[n].processed=!0,w[n].manualEndTime=M(w[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Pt(w[n],F,Q,Z))),w[n].processed};let u=!0;for(const[n,i]of w.entries())t(n),u=u&&i.processed;return u},Pe=function(t,u){let n=u;U().securityLevel!=="loose"&&(n=Ht(u)),t.split(",").forEach(function(i){j(i)!==void 0&&(Xt(i,()=>{window.open(n,"_self")}),_t[i]=n)}),Nt(t,"clickable")},Nt=function(t,u){t.split(",").forEach(function(n){let i=j(n);i!==void 0&&i.classes.push(u)})},Be=function(t,u,n){if(U().securityLevel!=="loose"||u===void 0)return;let i=[];if(typeof n=="string"){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<i.length;m++){let k=i[m].trim();k.charAt(0)==='"'&&k.charAt(k.length-1)==='"'&&(k=k.substr(1,k.length-2)),i[m]=k}}i.length===0&&i.push(t),j(t)!==void 0&&Xt(t,()=>{le.runFunc(u,...i)})},Xt=function(t,u){Ct.push(function(){const n=document.querySelector(`[id="${t}"]`);n!==null&&n.addEventListener("click",function(){u()})},function(){const n=document.querySelector(`[id="${t}-text"]`);n!==null&&n.addEventListener("click",function(){u()})})},Ye=function(t,u,n){t.split(",").forEach(function(i){Be(i,u,n)}),Nt(t,"clickable")},Re=function(t){Ct.forEach(function(u){u(t)})},Ne={parseDirective:ue,getConfig:()=>U().gantt,clear:fe,setDateFormat:pe,getDateFormat:_e,enableInclusiveEndDates:ve,endDatesAreInclusive:be,enableTopAxis:xe,topAxisEnabled:Te,setAxisFormat:de,getAxisFormat:he,setTickInterval:me,getTickInterval:ke,setTodayMarker:ge,getTodayMarker:ye,setAccTitle:Wt,getAccTitle:qt,setDiagramTitle:jt,getDiagramTitle:Gt,setAccDescription:Jt,getAccDescription:Kt,addSection:Ae,getSections:Ie,getTasks:Le,addTask:ze,findTaskById:j,addTaskOrg:Oe,setIncludes:we,getIncludes:Ce,setExcludes:De,getExcludes:Se,setClickEvent:Ye,setLink:Pe,getLinks:Ee,bindFunctions:Re,parseDuration:Bt,isInvalidDate:Ot};function Ut(t,u,n){let i=!0;for(;i;)i=!1,n.forEach(function(r){const m="^\\s*"+r+"\\s*$",k=new RegExp(m);t[0].match(k)&&(u[r]=!0,t.shift(1),i=!0)})}const Xe=function(){kt.debug("Something is calling, setConf, remove the call")};let B;const Ue=function(t,u,n,i){const r=U().gantt,m=U().securityLevel;let k;m==="sandbox"&&(k=ct("#i"+u));const V=m==="sandbox"?ct(k.nodes()[0].contentDocument.body):ct("body"),I=m==="sandbox"?k.nodes()[0].contentDocument:document,G=I.getElementById(u);B=G.parentElement.offsetWidth,B===void 0&&(B=1200),r.useWidth!==void 0&&(B=r.useWidth);const z=i.db.getTasks(),N=z.length*(r.barHeight+r.barGap)+2*r.topPadding;G.setAttribute("viewBox","0 0 "+B+" "+N);const E=V.select(`[id="${u}"]`),x=$t().domain([te(z,function(a){return a.startTime}),ee(z,function(a){return a.endTime})]).rangeRound([0,B-r.leftPadding-r.rightPadding]);let S=[];for(const a of z)S.push(a.type);const $=S;S=K(S);function tt(a,o){const c=a.startTime,d=o.startTime;let e=0;return c>d?e=1:c<d&&(e=-1),e}z.sort(tt),et(z,B,N),ie(E,N,B,r.useMaxWidth),E.append("text").text(i.db.getDiagramTitle()).attr("x",B/2).attr("y",r.titleTopMargin).attr("class","titleText");function et(a,o,c){const d=r.barHeight,e=d+r.barGap,b=r.topPadding,s=r.leftPadding,p=se().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(ne);st(e,b,s,o,c,a,i.db.getExcludes(),i.db.getIncludes()),nt(s,b,o,c),it(a,e,b,s,d,p,o),J(e,b),ft(s,b,o,c)}function it(a,o,c,d,e,b,s){E.append("g").selectAll("rect").data(a).enter().append("rect").attr("x",0).attr("y",function(l,g){return g=l.order,g*o+c-2}).attr("width",function(){return s-r.rightPadding/2}).attr("height",o).attr("class",function(l){for(const[g,h]of S.entries())if(l.type===h)return"section section"+g%r.numberSectionStyles;return"section section0"});const p=E.append("g").selectAll("rect").data(a).enter(),C=i.db.getLinks();if(p.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?x(l.startTime)+d+.5*(x(l.endTime)-x(l.startTime))-.5*e:x(l.startTime)+d}).attr("y",function(l,g){return g=l.order,g*o+c}).attr("width",function(l){return l.milestone?e:x(l.renderEndTime||l.endTime)-x(l.startTime)}).attr("height",e).attr("transform-origin",function(l,g){return g=l.order,(x(l.startTime)+d+.5*(x(l.endTime)-x(l.startTime))).toString()+"px "+(g*o+c+.5*e).toString()+"px"}).attr("class",function(l){const g="task";let h="";l.classes.length>0&&(h=l.classes.join(" "));let T=0;for(const[y,v]of S.entries())l.type===v&&(T=y%r.numberSectionStyles);let _="";return l.active?l.crit?_+=" activeCrit":_=" active":l.done?l.crit?_=" doneCrit":_=" done":l.crit&&(_+=" crit"),_.length===0&&(_=" task"),l.milestone&&(_=" milestone "+_),_+=T,_+=" "+h,g+_}),p.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",r.fontSize).attr("x",function(l){let g=x(l.startTime),h=x(l.renderEndTime||l.endTime);l.milestone&&(g+=.5*(x(l.endTime)-x(l.startTime))-.5*e),l.milestone&&(h=g+e);const T=this.getBBox().width;return T>h-g?h+T+1.5*r.leftPadding>s?g+d-5:h+d+5:(h-g)/2+g+d}).attr("y",function(l,g){return g=l.order,g*o+r.barHeight/2+(r.fontSize/2-2)+c}).attr("text-height",e).attr("class",function(l){const g=x(l.startTime);let h=x(l.endTime);l.milestone&&(h=g+e);const T=this.getBBox().width;let _="";l.classes.length>0&&(_=l.classes.join(" "));let y=0;for(const[dt,D]of S.entries())l.type===D&&(y=dt%r.numberSectionStyles);let v="";return l.active&&(l.crit?v="activeCritText"+y:v="activeText"+y),l.done?l.crit?v=v+" doneCritText"+y:v=v+" doneText"+y:l.crit&&(v=v+" critText"+y),l.milestone&&(v+=" milestoneText"),T>h-g?h+T+1.5*r.leftPadding>s?_+" taskTextOutsideLeft taskTextOutside"+y+" "+v:_+" taskTextOutsideRight taskTextOutside"+y+" "+v+" width-"+T:_+" taskText taskText"+y+" "+v+" width-"+T}),U().securityLevel==="sandbox"){let l;l=ct("#i"+u);const g=l.nodes()[0].contentDocument;p.filter(function(h){return C[h.id]!==void 0}).each(function(h){var T=g.querySelector("#"+h.id),_=g.querySelector("#"+h.id+"-text");const y=T.parentNode;var v=g.createElement("a");v.setAttribute("xlink:href",C[h.id]),v.setAttribute("target","_top"),y.appendChild(v),v.appendChild(T),v.appendChild(_)})}}function st(a,o,c,d,e,b,s,p){const C=b.reduce((y,{startTime:v})=>y?Math.min(y,v):v,0),Y=b.reduce((y,{endTime:v})=>y?Math.max(y,v):v,0),l=i.db.getDateFormat();if(!C||!Y)return;const g=[];let h=null,T=M(C);for(;T.valueOf()<=Y;)i.db.isInvalidDate(T,l,s,p)?h?h.end=T.clone():h={start:T.clone(),end:T.clone()}:h&&(g.push(h),h=null),T.add(1,"d");E.append("g").selectAll("rect").data(g).enter().append("rect").attr("id",function(y){return"exclude-"+y.start.format("YYYY-MM-DD")}).attr("x",function(y){return x(y.start)+c}).attr("y",r.gridLineStartPadding).attr("width",function(y){const v=y.end.clone().add(1,"day");return x(v)-x(y.start)}).attr("height",e-o-r.gridLineStartPadding).attr("transform-origin",function(y,v){return(x(y.start)+c+.5*(x(y.end)-x(y.start))).toString()+"px "+(v*a+.5*e).toString()+"px"}).attr("class","exclude-range")}function nt(a,o,c,d){let e=re(x).tickSize(-d+o+r.gridLineStartPadding).tickFormat(Et(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const s=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(s!==null){const p=s[1];switch(s[2]){case"minute":e.ticks(Mt.every(p));break;case"hour":e.ticks(Ft.every(p));break;case"day":e.ticks(Lt.every(p));break;case"week":e.ticks(It.every(p));break;case"month":e.ticks(At.every(p));break}}if(E.append("g").attr("class","grid").attr("transform","translate("+a+", "+(d-50)+")").call(e).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let p=ae(x).tickSize(-d+o+r.gridLineStartPadding).tickFormat(Et(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(s!==null){const C=s[1];switch(s[2]){case"minute":p.ticks(Mt.every(C));break;case"hour":p.ticks(Ft.every(C));break;case"day":p.ticks(Lt.every(C));break;case"week":p.ticks(It.every(C));break;case"month":p.ticks(At.every(C));break}}E.append("g").attr("class","grid").attr("transform","translate("+a+", "+o+")").call(p).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function J(a,o){const c=[];let d=0;for(const[e,b]of S.entries())c[e]=[b,f(b,$)];E.append("g").selectAll("text").data(c).enter().append(function(e){const b=e[0].split(ce.lineBreakRegex),s=-(b.length-1)/2,p=I.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("dy",s+"em");for(const[C,Y]of b.entries()){const l=I.createElementNS("http://www.w3.org/2000/svg","tspan");l.setAttribute("alignment-baseline","central"),l.setAttribute("x","10"),C>0&&l.setAttribute("dy","1em"),l.textContent=Y,p.appendChild(l)}return p}).attr("x",10).attr("y",function(e,b){if(b>0)for(let s=0;s<b;s++)return d+=c[b-1][1],e[1]*a/2+d*a+o;else return e[1]*a/2+o}).attr("font-size",r.sectionFontSize).attr("font-size",r.sectionFontSize).attr("class",function(e){for(const[b,s]of S.entries())if(e[0]===s)return"sectionTitle sectionTitle"+b%r.numberSectionStyles;return"sectionTitle"})}function ft(a,o,c,d){const e=i.db.getTodayMarker();if(e==="off")return;const b=E.append("g").attr("class","today"),s=new Date,p=b.append("line");p.attr("x1",x(s)+a).attr("x2",x(s)+a).attr("y1",r.titleTopMargin).attr("y2",d-r.titleTopMargin).attr("class","today"),e!==""&&p.attr("style",e.replace(/,/g,";"))}function K(a){const o={},c=[];for(let d=0,e=a.length;d<e;++d)Object.prototype.hasOwnProperty.call(o,a[d])||(o[a[d]]=!0,c.push(a[d]));return c}function L(a){let o=a.length;const c={};for(;o;)c[a[--o]]=(c[a[o]]||0)+1;return c}function f(a,o){return L(o)[a]||0}},We={setConf:Xe,draw:Ue},qe=t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`,je=qe,Je={parser:oe,db:Ne,renderer:We,styles:je};export{Je as diagram};
