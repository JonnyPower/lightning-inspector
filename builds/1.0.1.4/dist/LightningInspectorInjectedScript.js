!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){c(1),a.exports=c(6)},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){if(a&&a.data)if(a.data.action===u)c(a.data.key,a.data.data);else if(a.data.action===v)for(var b=a.data.data||[],d=0,e=b.length;d<e;d++)c(b[d].key,b[d].data)}function b(){window.$A&&window.postMessage({action:"AuraInspector:bootstrap",key:"AuraInspector:bootstrap",data:"Panel connected, the injected script has already bootstrapped."},window.location.origin)}function c(a,b){s[a]&&s[a].forEach(function(a){a(b)})}function d(){function a(){if(w.length)try{window.postMessage({action:v,data:w},window.location.origin)}catch(a){console.error("AuraInspector: Failed to communicate to inspector.",a)}w=[],x=null}x="requestIdleCallback"in window?window.requestIdleCallback(a):window.requestAnimationFrame(a)}function e(){document.addEventListener("mousedown",function(a){if(2===a.button){for(var b=a.target;b&&b!=document&&!b.hasAttribute("data-aura-rendered-by");)b=b.parentNode;f=b}})}var f,s={},u="AuraInspector:publish",v="AuraInspector:publishbatch",w=[],x=null,z={},A={actions:!1,all:!1},B={},C={};this.init=function(){var a=this;e(),this.subscribe("AuraInspector:ContextElementRequest",function(){f&&1===f.nodeType&&a.publish("AuraInspector:ShowComponentInTree",f.getAttribute("data-aura-rendered-by"))}),this.subscribe("AuraInspector:OnAuraInitialized",function(){a.instrument(),a.subscribe("AuraInspector:OnPanelConnect",b.bind(a))}),this.subscribe("AuraInspector:OnHighlightComponent",y.actions["AuraDevToolService.HighlightElement"]),this.subscribe("AuraInspector:OnHighlightComponentEnd",y.actions["AuraDevToolService.RemoveHighlightElement"]),this.subscribe("AuraInspector:OnActionToWatchEnqueue",h.bind(this)),this.subscribe("AuraInspector:OnActionToRemoveFromWatchEnqueue",i.bind(this)),this.subscribe("AuraInspector:OnActionToWatchClear",j.bind(this)),window.$A&&window.$A.getContext&&window.$A.getContext()&&(this.instrument(),this.publish("AuraInspector:OnAuraInitialized","InjectedScript: Aura Present already during load.")),"complete"===document.readyState?window.$A||this.publish("AuraInspector:OnAuraUnavailable",{}):window.addEventListener("load",function(){window.$A||a.publish("AuraInspector:OnAuraUnavailable",{})}),this.publish("AuraInspector:OnInjectionScriptInitialized")},this.instrument=function(){if(A.all)return void window.postMessage({action:"AuraInspector:bootstrap",key:"AuraInspector:bootstrap",data:"InjectedScript: Aura is already present at initialization, calling bootstrap."},window.location.origin);if("undefined"!=typeof $A&&$A.getContext&&$A.getContext()){try{$A.installOverride("outputComponent",function(){})}catch(a){}try{o()}catch(a){}try{this.instrumentActions()}catch(a){}try{r()}catch(a){}try{p()}catch(a){}try{q()}catch(a){}$A.PerfDevTools.init(),window.postMessage({action:"AuraInspector:bootstrap",key:"AuraInspector:bootstrap",data:"InjectedScript: $Aura.Inspector.instrument()"},window.location.origin),A.all=!0}},this.bootstrap=this.instrument,this.instrumentActions=function(){function a(a,c,d){if(!c.response||0==c.response.length)return console.warn("AuraInspectorInjectedScript.onDecode received a bad response.",c),a.fn.call(a.scope,c,d);var e=(c.response,c.responseText),f=e;if(this.hasWatchedActions())try{for(var g in B)if(e.includes(g)&&e.startsWith("while(1);")){var h,i=B[g],j=b(e),k=j&&j.actions||[],l=k.filter(function(a){return a.id!==g||(h=a,!1)});if(h){if(i.nextError){h.state="ERROR",h.error=[i.nextError],h.returnValue=null;var m=e.indexOf('context"');f='while(1);\n{"actions":'+JSON.stringify(l.concat(h))+',"'+e.substring(m,e.length),y.Inspector.publish("AuraInspector:OnActionStateChange",{id:g,idtoWatch:i.idtoWatch,state:"RESPONSEMODIFIED",sentTime:performance.now()});var n={status:200,response:f,responseText:f,$hasError:!0};return a.fn.call(a.scope,n,d)}if(!i.nextResponse){y.Inspector.publish("AuraInspector:OnActionStateChange",{id:g,idtoWatch:i.idtoWatch,state:"RESPONSEMODIFIED",sentTime:performance.now(),byChaosRun:i.byChaosRun}),i.byChaosRun&&(y.Inspector.publish("AuraInspector:OnCreateChaosCard",{message:"Drop action "+i.id+", the old actionId from replay: "+i.idtoWatch}),i.id===i.idtoWatch&&console.warn("The action in your replay has the same id as the action being dropped, this will confuse ActionTab, as it use actionId to find and move actionCard around. Please change action id in your replay file to something else, like 9999 :-) "));var o={status:0,$isIncomplete:!0};return a.fn.call(a.scope,o,d)}var p=Object.assign(h.returnValue,i.nextResponse);if(p){h.returnValue=p;var m=e.indexOf('context"');f='while(1);\n{"actions":'+JSON.stringify(l.concat(h))+',"'+e.substring(m,e.length),y.Inspector.publish("AuraInspector:OnActionStateChange",{id:g,idtoWatch:i.idtoWatch,state:"RESPONSEMODIFIED",sentTime:performance.now()});var q=Object.assign($A.util.apply({},c),{response:f,responseText:f,$isModified:!0});return a.fn.call(a.scope,q,d)}}}}catch(b){return console.warn("get response we cannot parse with JSON.parse, skip",c,b),a.fn.call(a.scope,c,d)}return a.fn.call(a.scope,c,d)}function b(a){var b=a.indexOf("actions"),c=a.indexOf('"context":');if(b>=0&&c>=0){var d=a.substring(b,c).replace(/\s/g,"");return d.lastIndexOf(",")==d.length-1&&(d=d.substring(0,d.length-1)),JSON.parse('{"'+d+"}")}}A.actions||($A.installOverride("enqueueAction",l),$A.installOverride("Action.abort",m),$A.installOverride("Action.runDeprecated",n),$A.installOverride("Action.finishAction",g.bind(this)),$A.installOverride("ClientService.send",k.bind(this)),$A.installOverride("ClientService.decode",a.bind(this)),A.actions=!0)},this.getWatchedAction=function(a){return B[a]},this.isWatchingForAction=function(a){if("string"==typeof a)return C[a];var b=a.actionName;$A.util.isAction(a)&&(b=a.getDef().toString());for(var c in C)if(c.includes(b))return C[c];return null},this.hasWatchedActions=function(){return Object.getOwnPropertyNames(B).length>0},this.isWatchingForActions=function(){return Object.getOwnPropertyNames(C).length>0},this.setWatchedActionAsProcessed=function(a){delete B[a]},this.setWatchAsProcessed=function(a){delete C[a]},this.setWatchedAction=function(a){B[a.getId()]=a},this.watchAction=function(a){C[a.actionName]=a},this.cancelWatchOfAction=function(a){a&&C.hasOwnProperty(a)&&delete C[a]},this.cancelWatchOfAllActions=function(){C={}},this.publish=function(a,b){a&&(w.push({key:a,data:b}),null!==x&&void 0!==x||(x=d()))},this.subscribe=function(a,b){a&&b&&(s[a]||(s[a]=[]),s[a].push(b))},this.unsubscribe=function(a,b){if(!a||!b)return!1;if(!s[a])return!1;var c=s[a];s[a]=c.filter(function(a){return a!==b})},this.accessTrap=function(a){"function"==typeof a&&a()},this.getRootComponents=function(){return t.default.getRootComponents()},this.getComponent=function(a,b){return t.default.getComponent(a,b)},this.count=function(a){z[a]=z.hasOwnProperty(a)?z[a]+1:1},this.getCount=function(a){return z.hasOwnProperty(a)?z[a]:0},this.clearCount=function(a){z.hasOwnProperty(a)&&delete z[a]},window.addEventListener("message",a)}function f(a,b,c){if("function"==typeof a[b]){var d=a[b];a[b]=function(){return c.apply(this,arguments),d.apply(this,arguments)}}}function g(a,b){var c={created:y.Inspector.getCount("component_created")},d=a.fn.call(a.scope,b),e=a.self,f={id:e.getId(),state:e.getState(),fromStorage:e.isFromStorage(),returnValue:v.default.stringify(e.getReturnValue()),error:v.default.stringify(e.getError()),finishTime:performance.now(),stats:{created:y.Inspector.getCount("component_created")-c.created}},g=this.getWatchedAction(e.getId());return g&&(void 0!=g.nextError?f.howDidWeModifyResponse="responseModified_error":void 0!=g.nextResponse?f.howDidWeModifyResponse="responseModified_modify":f.howDidWeModifyResponse="responseModified_drop",this.setWatchedActionAsProcessed(e.getId())),this.publish("AuraInspector:OnActionStateChange",f),d}function h(a){if(a||console.error("AuraDevToolService.AddActionToWatch receive no data from publisher"),this.isWatchingForAction(a))this.cancelWatchOfAction(a.actionName);else if(a.actionIsStorable&&!0===a.actionIsStorable){var b=$A.storageService.getStorage("actions"),c=a.actionStorageKey;b&&c&&c.length&&b.get(c).then(function(){b.remove(c).then(function(){y.Inspector.publish("AuraInspector:RemoveStorageData",{storageKey:c})})},function(b){console.warn("cannot find storage item for action:",a)})}if(this.watchAction(a),a.byChaosRun){var d=a.actionName;d.indexOf("ACTION$")>=0&&(d=d.substr(d.indexOf("ACTION$")+7,d.length-1)),y.Inspector.publish("AuraInspector:OnCreateChaosCard",{message:"add action "+d+" to watch list"})}}function i(a){a||console.error("AuraDevToolService.RemoveActionFromWatch receive no data from publisher"),this.cancelWatchOfAction(a.actionName)}function j(){this.cancelWatchOfAllActions()}function k(a,b,c,d,e){if(c)for(var f=0;f<c.length;f++){if(this.isWatchingForActions()){var g=c[f],h=this.isWatchingForAction(g);h&&(this.getWatchedAction(g.getId())?console.warn("Error: we already watching this action:",g):(g.nextError=h.nextError,g.nextResponse=h.nextResponse,g.idtoWatch=h.actionId,h.byChaosRun&&(g.byChaosRun=h.byChaosRun),this.setWatchedAction(g)),this.setWatchAsProcessed(h.actionName))}y.Inspector.publish("AuraInspector:OnActionStateChange",{id:c[f].getId(),state:"RUNNING",sentTime:performance.now()})}return a.fn.call(a.scope,b,c,d,e)}function l(a,b,c){var d=a.fn.call(a.scope,b,c),e=b.getComponent(),f={id:b.getId(),params:v.default.stringify(b.getParams()),abortable:b.isAbortable(),storable:b.isStorable(),background:b.isBackground(),state:b.getState(),isRefresh:b.isRefreshAction(),defName:b.getDef()+"",fromStorage:b.isFromStorage(),enqueueTime:performance.now(),storageKey:b.getStorageKey(),callingCmp:e&&e.getGlobalId()};return y.Inspector.publish("AuraInspector:OnActionEnqueue",f),d}function m(a,b){var c=a.fn.call(a.scope,b),d=a.self,e={id:d.getId(),state:d.getState(),finishTime:performance.now()};return y.Inspector.publish("AuraInspector:OnActionStateChange",e),c}function n(a,b){var c=a.self,d=(performance.now(),{actionId:c.getId()});y.Inspector.publish("AuraInspector:OnClientActionStart",d);a.fn.call(a.scope,b);d={actionId:c.getId(),name:c.getDef().getName(),scope:c.getComponent().getGlobalId()},y.Inspector.publish("AuraInspector:OnClientActionEnd",d)}function o(){$A.installOverride("ComponentService.createComponentPriv",function(){var a=Array.prototype.shift.apply(arguments),b=a.fn.apply(a.scope,arguments);return y.Inspector.count("component_created"),b}),f($A.Component.prototype,"rerender",function(){y.Inspector.count("component_rerendered"),y.Inspector.count(this.getGlobalId()+"_rerendered")});var a=$A.Component.prototype.render;f($A.Component.prototype,"render",function(){for(var b=this.getDef();b.getSuperDef();)b=b.getSuperDef();"markup://aura:application"===b.getDescriptor().getQualifiedName()&&(y.Inspector.accessTrap=$A.getCallback(function(a){"function"==typeof a&&a()}),$A.Component.prototype.render=a)})}function p(){function a(a){var b=$A.Component.prototype.toJSON;delete $A.Component.prototype.toJSON;var c=v.default.stringify(a,function(a,b){return $A.util.isComponent(b)?"[Component] {"+b.getGlobalId()+"}":b instanceof Function?b+"":b});return $A.Component.prototype.toJSON=b,c}$A.installOverride("Event.fire",x.default.OnEventFire.bind(y,a))}function q(){$A.metricsService.enablePlugins(),$A.metricsService.transactionStart("AuraInspector","transactionstab"),$A.metricsService.onTransactionEnd(function(a){setTimeout(function(){y.Inspector.publish("AuraInspector:OnTransactionEnd",a)},0)}),$A.metricsService.onTransactionsKilled(function(a){if(a)for(var b=0;b<a.length;b++)"AuraInspector:transactionstab"===a[b].id&&$A.metricsService.transactionStart("AuraInspector","transactionstab")})}function r(){$A.PerfDevToolsEnabled=!0;var a={componentCreation:!0,componentRendering:!0,timelineMarks:!1,transactions:!0},b="componentCreationEnd";$A.PerfDevTools={init:function(a){a||(a={}),this._initializeOptions(a),this._hooks={},this.collector={componentCreation:[],rendering:[]},this._initializeHooks()},clearMarks:function(a){this._resetCollector(a)},_initializeOptions:function(b){this.opts={componentCreation:b.componentCreation||a.componentCreation,componentRendering:b.componentRendering||a.componentRendering,timelineMarks:"boolean"==typeof b.timelineMarks?b.timelineMarks:a.timelineMarks,transactions:b.transactions||a.transactions}},_initializeHooks:function(){this.opts.componentCreation&&this._initializeHooksComponentCreation()},_createNode:function(a,b,c){return{id:c,mark:b,name:a,timestamp:window.performance.now()}},_resetCollector:function(a){if(a)return void(this.collector[a]=[]);for(var b in this.collector)this.collector[b]=[]},_initializeHooksComponentCreation:function(){this._hookOverride("ComponentService.createComponentPriv","componentCreation")},getComponentCreationProfile:function(){return this._generateCPUProfilerDataFromMarks(this.collector.componentCreation)},_hookOverride:function(a,b){$A.installOverride(a,function(){var a=this,c=Array.prototype.shift.apply(arguments),d=Array.prototype.slice.apply(arguments),e=arguments[0],f=arguments[1],g=$A.util.isString(e)?e:(e.componentDef.descriptor||e.componentDef)+"",h=this.collector[b];h.push(this._createNode(g,b+"Start")),"function"==typeof f&&(d[1]=function(c,d,e){if(c){var i=c.getGlobalId&&c.getGlobalId()||"([ids])";h.push(a._createNode(g,b+"End",i))}f(c,d,e)});var i=c.fn.apply(c.scope,d);if(void 0!==i){var j=i.getGlobalId&&i.getGlobalId()||"([ids])";h.push(this._createNode(g,b+"End",j))}return i}.bind(this),this)},_hookMethod:function(a,b,c){var d=this,e=a[b];this.collector[c];this._hooks[b]=e,a[b]=function(a){if(Array.isArray(a))return e.apply(this,arguments);var b=(a.componentDef.descriptor||a.componentDef)+"",f=d.collector[c];f.push(d._createNode(b,c+"Start"));var g=e.apply(this,arguments),h=g.getGlobalId&&g.getGlobalId()||"([ids])";return f.push(d._createNode(b,c+"End",h)),g}},_generateCPUProfilerDataFromMarks:function(a){function c(){return++f}function d(a){var b,c,d,e=0;if(0==a.length)return e;for(b=0,d=a.length;b<d;b++)c=a.charCodeAt(b),e=(e<<5)-e+c,e|=0;return Math.abs(e)}function e(a,b){return b||(b={}),{functionName:a||"Random."+Math.random(),scriptId:"3",url:b.details||"",lineNumber:0,columnNumber:0,hitCount:b.hit||0,callUID:d(a),children:[],deoptReason:"",id:c()}}if(!a||!a.length)return{};var f=0,g=a[0].timestamp,h=a[a.length-1].timestamp,i=a.length,j=.025,k=e("(root)"),l=e("(idle)"),m=e(a[0].name),n=[m,k];m._startTime=a[0].timestamp,n.length,a[0].name;for(var o=1;o<i;o++){var p=a[o];if(n[0].functionName===p.name&&p.mark===b){var q=n.shift();q._endTime=p.timestamp,q._totalTime=q._endTime-q._startTime,q._childrenTime=q.children.reduce(function(a,b){return a+b._totalTime},0),q._selfTime=q._totalTime-q._childrenTime,q.hitCount=Math.floor(q._selfTime/j),q._cmpId=p.id,q._childComponentCount+=q.children.length,n[0].children.push(q),n[0]._childComponentCount+=q._childComponentCount,n.length,p.name,q._selfTime.toFixed(4),q._totalTime.toFixed(4)}else m=e(p.name),m._startTime=p.timestamp,m._childComponentCount=0,1===n.length&&i-o>1&&(m._idleHits=Math.floor((p.timestamp-a[o-1].timestamp)/j)),n.unshift(m),n.length,p.name}k.children.push(l);var r=function(a,b){for(var c=b-a,d=Math.round(c/j),e=a,f=[e],g=1;g<d;g++)e+=j,f.push(e);return f}(g,h);return{head:k,startTime:g/1e3,endTime:h/1e3,timestamp:r,samples:function(a,b,c){function d(a){a._idleHits&&(f+=a._idleHits,g+=a._idleHits);for(var b=0;b<a.hitCount;b++)e[f+b]=a.id;f+=a.hitCount;for(var c=0;c<a.children.length;c++)d(a.children[c])}var e=new Array(b).join(","+c.id).split(c.id);e[0]=c.id;var f=0,g=0;return d(a,a.id),c.hitCount=Math.max(0,b-f+g),e}(k,r.length,l)}}}}var s=c(2),t=d(s),u=c(3),v=d(u),w=c(6),x=d(w),y={};y.actions={"AuraDevToolService.HighlightElement":function(a){y.actions["AuraDevToolService.AddStyleRules"].addedStyleRules||(y.actions["AuraDevToolService.AddStyleRules"](a),y.actions["AuraDevToolService.AddStyleRules"].addedStyleRules=!0);for(var b,c="auraDevToolServiceHighlight3",d=document.getElementsByClassName(c),e=d.length-1;e>=0;e--)b=d[e],b.classList.remove(c),b.classList.remove("auraDevToolServiceHighlight4");if(a){var f=$A.getCmp(a);if(f&&f.isValid())for(var g=f.getElements(),h=0,i=g.length;h<i;h++)1===g[h].nodeType&&g[h].classList.add(c)}},"AuraDevToolService.RemoveHighlightElement":function(){for(var a=document.getElementsByClassName("auraDevToolServiceHighlight3"),b=a.length-1;b>=0;b--)a[b].classList.add("auraDevToolServiceHighlight4")},"AuraDevToolService.AddStyleRules":function(a){if(!document.getElementById("AuraDevToolService.AddStyleRules")){var b="\n                .auraDevToolServiceHighlight3:before{\n                   position:absolute;\n                   display:block;\n                   width:100%;\n                   height:100%;\n                   z-index: 10000;\n                   background-color:#006699;\n                   opacity:.3;\n                   content:' ';\n                   border : 2px dashed white;\n                }\n                .auraDevToolServiceHighlight4.auraDevToolServiceHighlight3:before {\n                   opacity: 0;\n                   transition: opacity 2s;\n                }\n            ",c=document.createElement("style");c.id="AuraDevToolService.AddStyleRules",c.textContent=b,c.innerText=b;document.head.appendChild(c),document.body.addEventListener("transitionend",function(a){var b=a.target;b.classList.remove("auraDevToolServiceHighlight3"),b.classList.remove("auraDevToolServiceHighlight4")})}}};var z=Symbol.for("AuraDevTools");y.Inspector=new e,y.Inspector.init(),window[z]=y},function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a){if("_$getSelfGlobalId$"in a)return a._$getSelfGlobalId$();var b={$type$:"passthrough"};if("getPrimaryProviderKeys"in a){for(var c={},d=void 0,e=void 0,f=a;f&&!("_$getSelfGlobalId$"in f);){e=f.getPrimaryProviderKeys();for(var g=0;g<e.length;g++){var h=e[g];c.hasOwnProperty(h)||(d=f.get(h),$A.util.isComponent(d)?c[h]={id:d}:c[h]=d)}f=f.getComponent()}f&&"_$getSelfGlobalId$"in f&&(b.globalId=f._$getSelfGlobalId$()),b.values=c}else{for(;!("_$getSelfGlobalId$"in a);)a=a.getComponent();b.globalId=a._$getSelfGlobalId$()}return b}function f(a){if(a.length){for(var b=a[0].getOwner();!b.getOwner().isInstanceOf("aura:application")&&b.getOwner()!==b;)b=b.getOwner();return b}}function g(a){return null!=a&&"InteropComponent"===a.toString()}b.__esModule=!0;var h=c(3),i=function(a){return a&&a.__esModule?a:{default:a}}(h),j=function(){function a(){d(this,a)}return a.getRootComponents=function(){var a=null,b=[];try{var c=$A.getRoot();if(b.push({components:[this.getComponent(c.getGlobalId())]}),c.isInstanceOf("ltng:outApp")){a=$x("//*[@data-aura-rendered-by and not(ancestor::*[@data-aura-rendered-by])]");for(var d,e,g={},h=[],j=0,k=a.length;j<k;j++)d=a[j].parentNode,e=h.indexOf(d),-1===e&&(e=h.length,g[e]=[],h.push(d)),g[e].push($A.getComponent(a[j].getAttribute("data-aura-rendered-by")));for(var l in g)b.push({dom:h[l],trace:f(g[l]),components:[this.getComponent(f(g[l]))]})}}catch(a){}return i.default.stringify(b)},a.getComponent=function(a,b){var c=$A.util.isComponent(a)?a:$A.getComponent(a),d=Object.assign({attributes:!0,body:!0,elementCount:!1,model:!1,valueProviders:!1,handlers:!1},b);if(c){if(c.isValid()){if(!("_$getSelfGlobalId$"in c))try{$A.installOverride("outputComponent",function(){})}catch(a){}var f=g(c),h={descriptor:c.getDef().getDescriptor().toString(),globalId:c._$getSelfGlobalId$(),rendered:c.isRendered(),isConcrete:c.isConcrete(),valid:c.isValid(),expressions:{},attributes:{},__proto__:null,elementCount:0,rerender_count:0,isModule:f};if(f||(h.localId=c.getLocalId()),d.valueProviders&&(h.attributeValueProvider=e(c.getAttributeValueProvider()),h.facetValueProvider=e(c.getComponentValueProvider())),!f&&d.attributes){var j=$A.error,k=c.getDef().getAttributeDefs();try{var l;$A.error=function(a,b){0===a.indexOf("Access Check Failed!")&&(l=!0)},k.each(function(a){var b,e,f=a.getDescriptor().getName();if(l=!1,"body"!==f||d.body){try{e=c._$getRawValue$(f),b=c.get("v."+f)}catch(a){b=void 0}$A.util.isExpression(e)?(h.expressions[f]=e+"",h.attributes[f]=l?"[ACCESS CHECK FAILED]":b):h.attributes[f]=e}}.bind(this))}catch(a){console.error(a)}finally{$A.error=j}}else if(d.body){var m,n;try{m=c._$getRawValue$("body"),n=c.get("v.body")}catch(a){n=void 0}$A.util.isExpression(m)?(h.expressions.body=m+"",h.attributes.body=n):h.attributes.body=m}for(var o=[],p=c;p=p.getSuper();)o.push(p._$getSelfGlobalId$());if(o.length&&(h.supers=o),c.isConcrete()&&d.elementCount){for(var q=c.getElements()||[],r=0,s=0,t=q.length;s<t;s++)q[s]instanceof HTMLElement&&(r+=q[s].getElementsByTagName("*").length+1);h.elementCount=r}if(d.model){var u=c.getModel();u&&(h.model=u.data)}if(d.handlers){var v,w={},x=c.getEventDispatcher(),y=!0;for(var z in x)if(v=x[z],Array.isArray(v)&&v.length&&y){w[z]=[];for(var s=0;s<v.length;s++){if(!v[s].hasOwnProperty("actionExpression")){y=!1;break}w[z][s]={expression:v[s].actionExpression,valueProvider:e(v[s].valueProvider)}}}y&&(h.handlers=w)}return i.default.stringify(h)}return JSON.stringify({valid:!1,__proto__:null})}return""},a}();b.default=j},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a){function b(a,e,f){if(!a)return a;if("object"===(void 0===a?"undefined":g(a))){if(a.hasOwnProperty("$serRefId$"))return c.has(a.$serRefId$)?c.get(a.$serRefId$):(d.push({parent:e,property:f,$serRefId$:a.$serRefId$}),a);a.hasOwnProperty("$serId$")&&(c.set(a.$serId$,a),delete a.$serId$);for(var f in a)a.hasOwnProperty(f)&&"object"===g(a[f])&&(a[f]=b(a[f],a,f))}return a}if(!a)return a;var c=new Map,d=[];a=b(a);for(var e,f=0,h=d.length;f<h;f++)e=d[f],e.parent[e.property]=c.get(e.$serRefId$);return a}b.__esModule=!0;var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h=c(4),i=d(h),j=c(5),k=d(j),l=1,m=function(){function a(){e(this,a)}return a.stringify=function(a){var b={"[object Window]":!0,"[object global]":!0,__proto__:null},c=new Set,d=$A.Component.prototype.toJSON;delete $A.Component.prototype.toJSON;var e="{}";try{e=JSON.stringify(a,function(a,d){if(d===document)return{};if((Array.isArray(this)||a)&&(d=this[a]),!d)return d;if("string"==typeof d&&(d.startsWith(i.default.COMPONENT_CONTROL_CHAR)||d.startsWith(i.default.ACTION_CONTROL_CHAR)))return i.default.ESCAPE_CHAR+escape(d);if(d instanceof Error)return d+"";if(d instanceof HTMLElement){for(var e,f=d.attributes,h=[],j=0,k=f.length;j<k;j++)e=f.item(j),h.push(e.name+"="+e.value);return"<"+d.tagName+" "+h.join(" ")+">"}if(d instanceof Text)return d.nodeValue;if($A.util.isComponent(d))return d.isValid()?i.default.COMPONENT_CONTROL_CHAR+d.getGlobalId():d.toString();if($A.util.isExpression(d))return d.toString();if($A.util.isAction(d))return i.default.ACTION_CONTROL_CHAR+d.getDef().toString();if(Array.isArray(d))return d.slice();if("object"===(void 0===d?"undefined":g(d))){if("$serId$"in d&&c.has(d))return{$serRefId$:d.$serId$,__proto__:null};b[Object.prototype.toString.call(d)]?d={}:Object.isSealed(d)||$A.util.isEmpty(d)||(c.add(d),d.$serId$=l++)}return"function"==typeof d?d.toString():d})}catch(a){k.default.error("AuraInspector: Error serializing object to json.",a)}return c.forEach(function(a){"$serId$"in a&&delete a.$serId$}),$A.Component.prototype.toJSON=d,e},a.parse=function(a){return f(JSON.parse(a))},a}();b.default=m},function(a,b){"use strict";b.__esModule=!0;var c={COMPONENT_CONTROL_CHAR:"☺",ACTION_CONTROL_CHAR:"❄",ESCAPE_CHAR:"⍓"};Object.freeze(c),b.default=c},function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}b.__esModule=!0;var d=function(){function a(){c(this,a)}return a.error=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];console.error(b)},a.warn=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];console.warn(b)},a.info=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];console.info(b)},a}();b.default=d},function(a,b){b.OnEventFire=function(a,b,c){var d=performance.now(),e="event_"+d,f={id:e};this.Inspector.publish("AuraInspector:OnEventStart",f);var g=b.fn.call(b.scope,c),h=b.scope,i=h.getSource();f={id:e,name:h.getDef().getDescriptor().getQualifiedName(),parameters:a(h.getParams()),sourceId:i?i.getGlobalId():"",startTime:d,endTime:performance.now(),type:h.getDef().getEventType()};try{f.caller=arguments.callee.caller.caller.caller+""}catch(a){}return this.Inspector.publish("AuraInspector:OnEventEnd",f),g}}]);