"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1118],{1118:(A,x,d)=>{d.r(x),d.d(x,{ion_alert:()=>_});var f=d(5861),o=d(1308),u=d(9658),k=d(7543),g=d(4414),w=d(8439),b=d(2854),a=d(5942);d(7864),d(1911),d(4349),d(3457);const m=e=>{const t=(0,a.c)(),r=(0,a.c)(),i=(0,a.c)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(1.1)"},{offset:1,opacity:"1",transform:"scale(1)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([r,i])},O=e=>{const t=(0,a.c)(),r=(0,a.c)(),i=(0,a.c)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([r,i])},z=e=>{const t=(0,a.c)(),r=(0,a.c)(),i=(0,a.c)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(0.9)"},{offset:1,opacity:"1",transform:"scale(1)"}]),t.addElement(e).easing("ease-in-out").duration(150).addAnimation([r,i])},D=e=>{const t=(0,a.c)(),r=(0,a.c)(),i=(0,a.c)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".alert-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease-in-out").duration(150).addAnimation([r,i])},_=class{constructor(e){(0,o.r)(this,e),this.didPresent=(0,o.e)(this,"ionAlertDidPresent",7),this.willPresent=(0,o.e)(this,"ionAlertWillPresent",7),this.willDismiss=(0,o.e)(this,"ionAlertWillDismiss",7),this.didDismiss=(0,o.e)(this,"ionAlertDidDismiss",7),this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,g.B)},this.dispatchCancelHandler=t=>{if((0,g.i)(t.detail.role)){const i=this.processedButtons.find(s=>"cancel"===s.role);this.callButtonHandler(i)}}}onKeydown(e){if(!new Set(this.processedInputs.map(l=>l.type)).has("radio")||e.target&&!this.el.contains(e.target)||e.target.classList.contains("alert-button"))return;const r=this.el.querySelectorAll(".alert-radio"),i=Array.from(r).filter(l=>!l.disabled),s=i.findIndex(l=>l.id===e.target.id);let n;if(["ArrowDown","ArrowRight"].includes(e.code)&&(n=s===i.length-1?i[0]:i[s+1]),["ArrowUp","ArrowLeft"].includes(e.code)&&(n=0===s?i[i.length-1]:i[s-1]),n&&i.includes(n)){const l=this.processedInputs.find(c=>c.id===(null==n?void 0:n.id));l&&(this.rbClick(l),n.focus())}}buttonsChanged(){this.processedButtons=this.buttons.map(t=>"string"==typeof t?{text:t,role:"cancel"===t.toLowerCase()?"cancel":void 0}:t)}inputsChanged(){const e=this.inputs,t=e.find(n=>!n.disabled),i=e.find(n=>n.checked&&!n.disabled)||t,s=new Set(e.map(n=>n.type));s.has("checkbox")&&s.has("radio")&&console.warn(`Alert cannot mix input types: ${Array.from(s.values()).join("/")}. Please see alert docs for more info.`),this.inputType=s.values().next().value,this.processedInputs=e.map((n,l)=>{var c;return{type:n.type||"text",name:n.name||`${l}`,placeholder:n.placeholder||"",value:n.value,label:n.label,checked:!!n.checked,disabled:!!n.disabled,id:n.id||`alert-input-${this.overlayIndex}-${l}`,handler:n.handler,min:n.min,max:n.max,cssClass:null!==(c=n.cssClass)&&void 0!==c?c:"",attributes:n.attributes||{},tabindex:"radio"===n.type&&n!==i?-1:0}})}connectedCallback(){(0,g.e)(this.el)}componentWillLoad(){this.inputsChanged(),this.buttonsChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentDidLoad(){this.gesture||"md"===(0,u.b)(this)||!this.wrapperEl||(this.gesture=(0,k.c)(this.wrapperEl,e=>e.classList.contains("alert-button")),this.gesture.enable(!0))}present(){return(0,g.d)(this,"alertEnter",m,z)}dismiss(e,t){return(0,g.f)(this,e,t,"alertLeave",O,D)}onDidDismiss(){return(0,g.g)(this.el,"ionAlertDidDismiss")}onWillDismiss(){return(0,g.g)(this.el,"ionAlertWillDismiss")}rbClick(e){for(const t of this.processedInputs)t.checked=t===e,t.tabindex=t===e?0:-1;this.activeId=e.id,(0,g.s)(e.handler,e),(0,o.j)(this)}cbClick(e){e.checked=!e.checked,(0,g.s)(e.handler,e),(0,o.j)(this)}buttonClick(e){var t=this;return(0,f.Z)(function*(){const r=e.role,i=t.getValues();if((0,g.i)(r))return t.dismiss({values:i},r);const s=yield t.callButtonHandler(e,i);return!1!==s&&t.dismiss(Object.assign({values:i},s),e.role)})()}callButtonHandler(e,t){return(0,f.Z)(function*(){if(null!=e&&e.handler){const r=yield(0,g.s)(e.handler,t);if(!1===r)return!1;if("object"==typeof r)return r}return{}})()}getValues(){if(0===this.processedInputs.length)return;if("radio"===this.inputType){const t=this.processedInputs.find(r=>!!r.checked);return t?t.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(t=>t.checked).map(t=>t.value);const e={};return this.processedInputs.forEach(t=>{e[t.name]=t.value||""}),e}renderAlertInputs(){switch(this.inputType){case"checkbox":return this.renderCheckbox();case"radio":return this.renderRadio();default:return this.renderInput()}}renderCheckbox(){const e=this.processedInputs,t=(0,u.b)(this);return 0===e.length?null:(0,o.h)("div",{class:"alert-checkbox-group"},e.map(r=>(0,o.h)("button",{type:"button",onClick:()=>this.cbClick(r),"aria-checked":`${r.checked}`,id:r.id,disabled:r.disabled,tabIndex:r.tabindex,role:"checkbox",class:Object.assign(Object.assign({},(0,b.g)(r.cssClass)),{"alert-tappable":!0,"alert-checkbox":!0,"alert-checkbox-button":!0,"ion-focusable":!0,"alert-checkbox-button-disabled":r.disabled||!1})},(0,o.h)("div",{class:"alert-button-inner"},(0,o.h)("div",{class:"alert-checkbox-icon"},(0,o.h)("div",{class:"alert-checkbox-inner"})),(0,o.h)("div",{class:"alert-checkbox-label"},r.label)),"md"===t&&(0,o.h)("ion-ripple-effect",null))))}renderRadio(){const e=this.processedInputs;return 0===e.length?null:(0,o.h)("div",{class:"alert-radio-group",role:"radiogroup","aria-activedescendant":this.activeId},e.map(t=>(0,o.h)("button",{type:"button",onClick:()=>this.rbClick(t),"aria-checked":`${t.checked}`,disabled:t.disabled,id:t.id,tabIndex:t.tabindex,class:Object.assign(Object.assign({},(0,b.g)(t.cssClass)),{"alert-radio-button":!0,"alert-tappable":!0,"alert-radio":!0,"ion-focusable":!0,"alert-radio-button-disabled":t.disabled||!1}),role:"radio"},(0,o.h)("div",{class:"alert-button-inner"},(0,o.h)("div",{class:"alert-radio-icon"},(0,o.h)("div",{class:"alert-radio-inner"})),(0,o.h)("div",{class:"alert-radio-label"},t.label)))))}renderInput(){const e=this.processedInputs;return 0===e.length?null:(0,o.h)("div",{class:"alert-input-group"},e.map(t=>{var r,i,s,n;return(0,o.h)("div",{class:"alert-input-wrapper"},"textarea"===t.type?(0,o.h)("textarea",Object.assign({placeholder:t.placeholder,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:null!==(i=null===(r=t.attributes)||void 0===r?void 0:r.disabled)&&void 0!==i?i:t.disabled,class:E(t),onInput:l=>{var c;t.value=l.target.value,null!==(c=t.attributes)&&void 0!==c&&c.onInput&&t.attributes.onInput(l)}})):(0,o.h)("input",Object.assign({placeholder:t.placeholder,type:t.type,min:t.min,max:t.max,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:null!==(n=null===(s=t.attributes)||void 0===s?void 0:s.disabled)&&void 0!==n?n:t.disabled,class:E(t),onInput:l=>{var c;t.value=l.target.value,null!==(c=t.attributes)&&void 0!==c&&c.onInput&&t.attributes.onInput(l)}})))}))}renderAlertButtons(){const e=this.processedButtons,t=(0,u.b)(this);return(0,o.h)("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":e.length>2}},e.map(i=>(0,o.h)("button",{type:"button",id:i.id,class:T(i),tabIndex:0,onClick:()=>this.buttonClick(i)},(0,o.h)("span",{class:"alert-button-inner"},i.text),"md"===t&&(0,o.h)("ion-ripple-effect",null))))}render(){const{overlayIndex:e,header:t,subHeader:r,message:i,htmlAttributes:s}=this,n=(0,u.b)(this),l=`alert-${e}-hdr`,c=`alert-${e}-sub-hdr`,C=`alert-${e}-msg`;return(0,o.h)(o.H,Object.assign({role:this.inputs.length>0||this.buttons.length>0?"alertdialog":"alert","aria-modal":"true","aria-labelledby":t?l:r?c:null,"aria-describedby":void 0!==i?C:null,tabindex:"-1"},s,{style:{zIndex:`${2e4+e}`},class:Object.assign(Object.assign({},(0,b.g)(this.cssClass)),{[n]:!0,"overlay-hidden":!0,"alert-translucent":this.translucent}),onIonAlertWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),(0,o.h)("ion-backdrop",{tappable:this.backdropDismiss}),(0,o.h)("div",{tabindex:"0"}),(0,o.h)("div",{class:"alert-wrapper ion-overlay-wrapper",ref:M=>this.wrapperEl=M},(0,o.h)("div",{class:"alert-head"},t&&(0,o.h)("h2",{id:l,class:"alert-title"},t),r&&(0,o.h)("h2",{id:c,class:"alert-sub-title"},r)),(0,o.h)("div",{id:C,class:"alert-message",innerHTML:(0,w.s)(i)}),this.renderAlertInputs(),this.renderAlertButtons()),(0,o.h)("div",{tabindex:"0"}))}get el(){return(0,o.i)(this)}static get watchers(){return{buttons:["buttonsChanged"],inputs:["inputsChanged"]}}},E=e=>{var t,r,i;return Object.assign(Object.assign({"alert-input":!0,"alert-input-disabled":(null!==(r=null===(t=e.attributes)||void 0===t?void 0:t.disabled)&&void 0!==r?r:e.disabled)||!1},(0,b.g)(e.cssClass)),(0,b.g)(e.attributes?null===(i=e.attributes.class)||void 0===i?void 0:i.toString():""))},T=e=>Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0,[`alert-button-role-${e.role}`]:void 0!==e.role},(0,b.g)(e.cssClass));_.style={ios:".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, #666666);font-size:14px}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:13px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:0.55px solid var(--ion-color-step-250, #bfbfbf);background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #3880ff)}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-0.55px;margin-inline-end:-0.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child,[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #eb445a)}",md:".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:16px}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, #737373)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:266px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #3880ff)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;max-height:266px;border-top:1px solid var(--ion-color-step-150, #d9d9d9);border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373)}[dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #3880ff)}[dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, #262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373);contain:strict}[dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"}},2854:(A,x,d)=>{d.d(x,{c:()=>u,g:()=>g,h:()=>o,o:()=>b});var f=d(5861);const o=(a,p)=>null!==p.closest(a),u=(a,p)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},p):p,g=a=>{const p={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(a).forEach(h=>p[h]=!0),p},w=/^[a-z][a-z0-9+\-.]*:/,b=function(){var a=(0,f.Z)(function*(p,h,v,y){if(null!=p&&"#"!==p[0]&&!w.test(p)){const m=document.querySelector("ion-router");if(m)return null!=h&&h.preventDefault(),m.push(p,v,y)}return!1});return function(h,v,y,m){return a.apply(this,arguments)}}()}}]);