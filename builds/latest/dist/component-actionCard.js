!function(e){var t={};function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=53)}({53:function(e,t,r){e.exports=r(54)},54:function(e,t,r){"use strict";!function(){var e=document.currentScript.ownerDocument,t=Object.create(HTMLElement.prototype);function r(e){e&&e.classList.remove("slds-hide")}function o(e){e&&e.classList.add("slds-hide")}t.attachedCallback=function(){var e={id:this.getAttribute("actionId"),actionName:this.getAttribute("name"),parameters:this.getAttribute("parameters"),state:this.getAttribute("state"),isBackground:this.getAttribute("isBackground"),isStorable:this.getAttribute("isStorable"),isRefresh:"true"===this.getAttribute("isStorable")?this.getAttribute("isRefresh"):"-",isAbortable:this.getAttribute("isAbortable"),returnValue:this.getAttribute("returnValue"),returnError:"[]"===this.getAttribute("returnError")?void 0:this.getAttribute("returnError"),howDidWeModifyResponse:this.getAttribute("howDidWeModifyResponse"),fromStorage:"true"===this.getAttribute("isStorable")?this.getAttribute("isFromStorage"):"-",storageKey:"true"===this.getAttribute("isStorable")?'{"storageKey":'+JSON.stringify(this.getAttribute("storageKey"))+"}":"-",storableSize:"true"===this.getAttribute("isStorable")?(JSON.stringify(this.getAttribute("returnValue")).length/1024).toFixed(1)+" KB":"-",callingComponent:this.getAttribute("callingComponent")};const t=this,i=t.querySelector("#action-name");i.innerHTML="",i.appendChild(function(e){const t=document.createDocumentFragment(),r=e.split("$"),o=document.createElement("span");o.className="action-name-controller",o.textContent=r[0];const i=document.createElement("span");i.className="action-name-method",i.textContent=r[1];const n=document.createElement("span");return n.className="action-name-delimiter",n.textContent="$",t.appendChild(o),t.appendChild(n),t.appendChild(i),t}(e.actionName)),t.querySelector(".parameters").textContent=e.parameters,t.querySelector(".storageKey").textContent=e.storageKey,t.querySelector("#actionId").textContent=e.id,t.querySelector("#actionState").textContent=e.state,t.querySelector("#actionIsAbortable").textContent=e.isAbortable,t.querySelector("#actionIsBackground").textContent=e.isBackground,t.querySelector("#actionIsStorable").textContent=e.isStorable,t.querySelector("#actionStorableSize").textContent=e.storableSize,t.querySelector("#actionIsRefresh").textContent=e.isRefresh,t.querySelector("#actionFromStorage").textContent=e.fromStorage;var n=t.querySelector("#callingComponent");if(!n.hasChildNodes())if(e.callingComponent){var s=document.createElement("aurainspector-auracomponent");s.setAttribute("globalId",e.callingComponent),s.setAttribute("summarize","true"),n.appendChild(s)}else t.querySelector(".calling-component-container").classList.add("slds-hide");if(void 0!==e.returnError&&null!==e.returnError&&"undefined"!==e.returnError?(this.classList.add("has-error"),t.querySelector("#actionError").textContent=e.returnError,t.querySelector("#action-response-container").classList.add("slds-hide"),t.querySelector("#action-error-container").classList.remove("slds-hide")):(this.classList.remove("has-error"),t.querySelector("#actionResult").textContent=e.returnValue,t.querySelector("#action-response-container").classList.remove("slds-hide"),t.querySelector("#action-error-container").classList.add("slds-hide")),this.hasAttribute("stats")){var c=JSON.parse(this.getAttribute("stats"));t.querySelector("#statsCreated").textContent=c.created}"false"!==e.isStorable&&!1!==e.isStorable||t.querySelector(".attributes").classList.add("storable-false"),"true"===this.getAttribute("toWatch")&&(t.querySelector(".remove-card").classList.remove("slds-hide"),t.querySelector(".action-card-wrapper").classList.add("watch"),"modifyResponse"===this.getAttribute("dropOrModify")?(r(t.querySelector(".div_editActionResult")),o(t.querySelector(".div_errorResponse"))):"errorResponseNextTime"===this.getAttribute("dropOrModify")?(o(t.querySelector(".div_editActionResult")),r(t.querySelector(".div_errorResponse"))):(o(t.querySelector(".div_errorResponse")),o(t.querySelector(".div_editActionResult"))))},t.createdCallback=function(){const t=e.querySelector("template"),i=document.importNode(t.content,!0),n=this;n.appendChild(i),n.querySelector(".action-toggle").addEventListener("click",function(e){this.classList.toggle("is-collapsed")}.bind(this)),n.querySelector("#select_dropOrModify").addEventListener("change",function(){const e=this;var t=e.querySelector("#select_dropOrModify").value;if(this.setAttribute("dropOrModify",t),"dropAction"===t)o(e.querySelector(".div_editActionResult")),o(e.querySelector(".div_errorResponse"));else if("modifyResponse"===t){r(e.querySelector(".div_editActionResult")),o(e.querySelector(".div_errorResponse"));var i=this.getAttribute("returnValue");e.querySelector("#textarea_actionResultValue").value=i,r(e.querySelector(".div_editActionResult"))}else"errorResponseNextTime"===t?(o(e.querySelector(".div_editActionResult")),r(e.querySelector(".div_errorResponse")),e.querySelector("#errorResponseType").addEventListener("change",function(){"exceptionEvent"===this.querySelector("#errorResponseType").value?(this.setAttribute("errorResponseType","exceptionEvent"),o(this.querySelector(".messageAndStackDiv")),r(this.querySelector(".exceptionEventDiv"))):(this.setAttribute("errorResponseType","messageAndStack"),o(this.querySelector(".exceptionEventDiv")),r(this.querySelector(".messageAndStackDiv")))}.bind(this))):console.warn("unknown choice for dropOrModify, we need a handler for it !!!")}.bind(this)),n.querySelector(".remove-card").addEventListener("click",function(){var e=this.getAttribute("id"),t=this.getAttribute("name");if(e){var r=`\n               window[Symbol.for('AuraDevTools')].Inspector.publish("AuraInspector:RemoveActionFromWatchList", ${JSON.stringify({actionName:t,actionId:e})});\n            `;chrome.devtools.inspectedWindow.eval(r,function(e,t){t&&console.log("ERROR from removeActionCard, CMD:",r,t)})}else console.error("removeActionCard, couldn't find actionId");this.parentNode.removeChild(this)}.bind(this));const s=n.querySelector("#select_dropOrModify");s.options[0].text=chrome.i18n.getMessage("actioncard_dropaction"),s.options[1].text=chrome.i18n.getMessage("actioncard_overrideresult"),s.options[2].text=chrome.i18n.getMessage("actioncard_errorresponse"),n.querySelector("#button_saveActionResult").addEventListener("click",function(){const e=this;var t=this.getAttribute("id"),i=this.getAttribute("name"),n=this.getAttribute("parameters"),s=e.querySelector("#textarea_actionResultValue").value;if(t&&s){try{s=JSON.parse(s)}catch(e){s=s.trim(),console.warn("cannot parse response into JSON",e)}var c=`\n               window[Symbol.for('AuraDevTools')].Inspector.publish("AuraInspector:EnqueueNextResponseForAction", ${JSON.stringify({actionName:i,actionParameter:JSON.parse(n),actionId:t.substring(12,t.length),nextResponse:s,nextError:void 0})});\n            `;chrome.devtools.inspectedWindow.eval(c,function(e,t){t&&console.log("ERROR from SaveActionResult_OnClick, CMD:",c,t)}),e.querySelector("#textarea_actionResultValue").setAttribute("readonly","readonly"),o(e.querySelector("#button_saveActionResult")),o(e.querySelector("#button_cancelChangeActionResult")),r(e.querySelector("#button_editActionResult"))}else console.log("SaveActionResult_OnClick, either actionId is bogus, or bad nextResponse",t,s)}.bind(this)),n.querySelector("#button_cancelChangeActionResult").addEventListener("click",function(){o(this.querySelector(".div_editActionResult")),this.querySelector("#select_dropOrModify").value="dropAction"}.bind(this)),n.querySelector("#button_editActionResult").addEventListener("click",function(){this.querySelector("#textarea_actionResultValue").removeAttribute("readonly"),r(this.querySelector("#button_saveActionResult")),r(this.querySelector("#button_cancelChangeActionResult")),o(this.querySelector("#button_editActionResult"))}.bind(this)),n.querySelector("#button_saveError").addEventListener("click",function(){var e,t=this.getAttribute("id");if(t){var i=this.getAttribute("errorResponseType");if("exceptionEvent"==i){var n=this.querySelector("#eventAttribute").value.trim();try{n=JSON.parse(n)}catch(e){}e={exceptionEvent:!0,event:{descriptor:this.querySelector("#eventDescriptor").value.trim(),attributes:n}}}else"messageAndStack"==i&&(e={message:this.querySelector("#textarea_actionErrorMessage").value.trim(),stack:this.querySelector("#textarea_actionErrorStack").value.trim()});if(e){var s=`\n\t\t               window[Symbol.for('AuraDevTools')].Inspector.publish("AuraInspector:EnqueueNextErrorForAction", ${JSON.stringify({actionName:this.getAttribute("name"),actionId:t.substring(12,t.length),nextResponse:void 0,nextError:e})});\n\t\t            `;chrome.devtools.inspectedWindow.eval(s,function(e,t){t&&console.log("ERROR from SaveActionResult_OnClick, CMD:",s,t)}),"messageAndStack"==i?(this.querySelector("#textarea_actionErrorMessage").setAttribute("readonly","readonly"),this.querySelector("#textarea_actionErrorStack").setAttribute("readonly","readonly")):(this.querySelector("#eventDescriptor").setAttribute("readonly","readonly"),this.querySelector("#eventAttribute").setAttribute("readonly","readonly")),o(this.querySelector("#button_saveError")),o(this.querySelector("#button_cancelError")),r(this.querySelector("#button_editError"))}else console.log("nextErrorMsg cannot be empty")}}.bind(this)),n.querySelector("#button_cancelError").addEventListener("click",function(){o(this.querySelector(".div_errorResponse")),this.querySelector("#select_dropOrModify").value="dropAction"}.bind(this)),n.querySelector("#button_editError").addEventListener("click",function(){const e=this;var t=this.getAttribute("id"),i=this.getAttribute("errorResponseType");t&&("messageAndStack"==i?(this.querySelector("#textarea_actionErrorMessage").removeAttribute("readonly"),this.querySelector("#textarea_actionErrorStack").removeAttribute("readonly")):(this.querySelector("#eventDescriptor").removeAttribute("readonly"),this.querySelector("#eventAttribute").removeAttribute("readonly")),r(e.querySelector("#button_saveError")),r(e.querySelector("#button_cancelError")),o(e.querySelector("#button_editError")))}.bind(this)),"false"===this.getAttribute("collapsible")&&n.querySelector("div.action-card-wrapper").classList.remove("is-collapsible")},t.attributeChangedCallback=function(e,t,r){if("collapsible"===e){const e=this.querySelector("div.action-card-wrapper");"false"==r?e.classList.remove("is-collapsible"):e.classList.add("is-collapsible")}},document.registerElement("aurainspector-actionCard",{prototype:t})}()}});