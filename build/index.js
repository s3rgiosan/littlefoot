!function(){"use strict";var e,t={292:function(){var e=window.React,t=window.wp.hooks,o=window.wp.blockEditor,l=window.wp.components,n=window.wp.i18n;(0,t.addFilter)("blocks.registerBlockType","littlefoot/addAttributes",((e,t)=>"core/footnotes"!==t?e:{...e,attributes:{...e.attributes,isLittlefootEnabled:{type:"boolean",default:!1},allowDuplicates:{type:"boolean",default:!1},allowMultiple:{type:"boolean",default:!1},dismissOnUnhover:{type:"boolean",default:!1},activateDelay:{type:"integer",default:100},dismissDelay:{type:"integer",default:500},hoverDelay:{type:"integer",default:250}}})),(0,t.addFilter)("editor.BlockEdit","littlefoot/addInspectorControls",(t=>a=>{const{name:i,attributes:r,setAttributes:s}=a,{isLittlefootEnabled:c,allowDuplicates:f,allowMultiple:u,dismissOnUnhover:p,activateDelay:h,dismissDelay:d,hoverDelay:w}=r;return"core/footnotes"!==i?(0,e.createElement)(t,{...a}):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{...a}),(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,n.__)("Littlefoot Options","wp-littlefoot")},(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Enable","wp-littlefoot"),checked:c,onChange:e=>s({isLittlefootEnabled:e})})),c&&(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Allow duplicates","wp-littlefoot"),checked:f,onChange:e=>s({allowDuplicates:e}),help:(0,n.__)("Determines whether or not a footnote can be used as the content for multiple footnote buttons.","wp-littelfoot")})),c&&(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Allow multiple","wp-littlefoot"),checked:u,onChange:e=>s({allowMultiple:e}),help:(0,n.__)("Specifies whether or not multiple footnote popovers can be active simultaneously.","wp-littelfoot")})),c&&(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Dismiss on unhover","wp-littlefoot"),checked:p,onChange:e=>s({dismissOnUnhover:e}),help:(0,n.__)("Determines whether footnotes that were presented when hovering on a footnote button are dismissed once the footnote button or footnote popover is un-hovered.","wp-littelfoot")})),c&&(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.RangeControl,{label:(0,n.__)("Activate Delay","wp-littlefoot"),value:h,onChange:e=>s({activateDelay:e}),min:0,max:1e3,help:(0,n.__)("Sets a delay between the activation of the footnote button and the activation of the actual footnote content.","wp-littlefoot")})),c&&(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.RangeControl,{label:(0,n.__)("Dismiss Delay","wp-littlefoot"),value:d,onChange:e=>s({dismissDelay:e}),min:0,max:1e3,help:(0,n.__)("Sets a delay between the activation of the footnote button and the activation of the actual footnote content.","wp-littlefoot")})),c&&p&&(0,e.createElement)(l.PanelRow,null,(0,e.createElement)(l.RangeControl,{label:(0,n.__)("Hover Delay","wp-littlefoot"),value:w,onChange:e=>s({hoverDelay:e}),min:0,max:1e3,help:(0,n.__)("Specifies the amount of time (in milliseconds) that must pass after the footnote button/content is un-hovered before the footnote is dismissed.","wp-littlefoot")})))))}))}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=function(t,o,n,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],n=e[f][1],a=e[f][2];for(var r=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(l.O).every((function(e){return l.O[e](o[s])}))?o.splice(s--,1):(r=!1,a<i&&(i=a));if(r){e.splice(f--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,n,a]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,i=o[0],r=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(s)var f=s(l)}for(t&&t(o);c<i.length;c++)a=i[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(f)},o=self.webpackChunkwp_littlefoot=self.webpackChunkwp_littlefoot||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=l.O(void 0,[431],(function(){return l(292)}));n=l.O(n)}();