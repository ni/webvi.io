"use strict";JQX("jqx-checkbox",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"template",value:function(){return"<div id='container' class='jqx-container'>\n                 <div id='checkboxAnimation' class ='jqx-animation'></div>\n                 <span id='checkboxInput' class ='jqx-input'></span>\n                 <span id='checkboxLabel' inner-h-t-m-l='[[innerHTML]]' class ='jqx-label'><content></content></span>\n                 <input id='hiddenInput' class ='jqx-hidden-input' type='hidden'>\n               </div>"}},{key:"ready",value:function(){var e=this;babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this),e.indeterminate&&(e._valueCashe=e.checked,e.checked=null),e._updateHidenInputNameAndValue()}},{key:"propertyChangedHandler",value:function(e,n,a){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"propertyChangedHandler",this).call(this,e,n,a);var c=this;switch(c._updateContentProperties(),e){case"indeterminate":a?(c._valueCashe=c.checked,c.checked=null):c.checked=c._valueCashe,c._updateHidenInputNameAndValue();break;case"value":c._updateHidenInputNameAndValue();break;case"checked":c._updateHidenInputNameAndValue();break;case"name":c._updateHidenInputName()}}},{key:"_clickHandler",value:function(e){var t=this;if(!t.disabled&&(e.target!==t.$.checkboxLabel||t.enableContainerClick)){if("press"===t.clickMode)return e.preventDefault(),void e.stopPropagation();t._changeCheckState("pointer"),t.focus(),t._handleTextSelection(),t._updateHidenInputNameAndValue()}}},{key:"_mouseDownHandler",value:function(e){var t=this;t.disabled||e.target===t.$.checkboxLabel&&!t.enableContainerClick||"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._changeCheckState("pointer"),t.$.fireEvent("click"),t.focus(),t._updateHidenInputNameAndValue())}}],[{key:"properties",get:function(){return{enableContainerClick:{value:!1,type:"boolean"}}}},{key:"listeners",get:function(){return{"checkboxInput.mousedown":"_mouseDownHandler","checkboxLabel.mousedown":"_mouseDownHandler","checkboxInput.click":"_clickHandler","checkboxLabel.click":"_clickHandler"}}}]),t}(JQX.ToggleButton));
//# sourceMappingURL=jqxcheckbox.js.map
