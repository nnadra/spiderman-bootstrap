"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[92860],{820621:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(214494);async function r(e,t){let n=async()=>{let e={name:t.bt("Simpan Cepat", "Quick Saves", "quickSave.defaultBoardName", undefined, true),layout:"quick_saves",privacy:"public",return_existing:!0};return i.Z.create("BoardResource",e).callCreate()},{resource_response:{data:r}}=await n(),o=async t=>{var n;return i.Z.create("RepinResource",{board_id:t,description:e.description||"",is_removable:null!==(n=e.promotedIsRemovable)&&void 0!==n?n:void 0,link:e.link,pin_id:e.entityId||"",title:e.title||""}).callCreate({showError:!1})};return await o(r.id),r}},78714:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(56641),r=n(867820),o=n(954931);let s=(e,t)=>{null!=t&&t.disableOriginCheck||(0,o.Z)(e)||(e="/",(0,r.My)("url_reset")),(0,i.Z)(e)}},924196:(e,t,n)=>{n.d(t,{Z:()=>i});let i={GOOGLE_ADWORDS_ID:852082959,GOOGLE_ADWORDS_LABEL_PROPEL_QUALIFIED:"Mah3CPrv13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_PROPEL_UNQUALIFIED:"_DJfCKzy13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CREATE:"GGbCCM7p-nYQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT:"SwBsCIz9k3cQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_ADVERTISER_INTENT:"kDf0COWL4okBEI-Cp5YD",DOUBLECLICK_TAG_ID:"8032161",DOUBLECLICK_EVENT_ID_PROPEL:"prope001",DOUBLECLICK_CATEGORY_ID_PROPEL_QUALIFIED:"pinte0",DOUBLECLICK_CATEGORY_ID_PROPEL_UNQUALIFIED:"pinte00",TRADEDESK_ADVERTISER_ID:"fc1uc9n",TRADEDESK_EVENT_ID_GENERAL_PAGEVIEW:"ogalyt3",TRADEDESK_CONVERSION_ID_PROPEL_QUALIFIED:"judrn76",TRADEDESK_CONVERSION_ID_PROPEL_UNQUALIFIED:"f0v4s5d",FACEBOOK_ADVERTISER_ID:"956400731086791",TWITTER_UNIVERSAL_TAG_ID:"nuzh8",TWITTER_CONVERSION_ID_PROPEL_QUALIFIED:"ny8zl",TWITTER_CONVERSION_ID_PROPEL_UNQUALIFIED:"nya0d",LINKEDIN_PARTNER_ID:"44352",LINKEDIN_CONVERSION_ID_PROPEL_QUALIFIED:"166217",LINKEDIN_CONVERSION_ID_PROPEL_UNQUALIFIED:"171754",LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT:"529092",PINTEREST_TAG_ID:"2614461171935",SMB_PAID_PINTEREST_ID:"2613736141997"}},904431:(e,t,n)=>{function i(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o});class r{static reportGoogleConversion(e,t,n,i){if(!i){if(void 0===window.gtag_report_conversion){r.queuedGoogleConversions.push({id:e,label:t,url:n});return}window.gtag_report_conversion(e,t,n)}}static reportFacebookConversion(e,t,n){if(void 0===window.fbq){r.queuedFacebookConversions.push({id:e,event:t,data:n});return}n?window.fbq("track",t,n):window.fbq("track",t)}static reportCustomFacebookConversion(e,t,n){if(void 0===window.fbq){r.queuedFacebookConversions.push({id:e,isCustomEvent:!0,event:t,data:n});return}n?window.fbq("trackCustom",t,n):window.fbq("trackCustom",t)}static reportPinterestConversion(e,t,n){if(void 0===window.pintrk){r.queuedPinterestConversions.push({id:e,event:t,data:n});return}n?window.pintrk("track",t,n):window.pintrk("track",t)}static reportTheTradeDeskConversion(e,t){let n=document.createElement("img");n.setAttribute("height","1"),n.setAttribute("width","1"),n.setAttribute("role","presentation"),n.style.borderStyle="none",n.style.position="absolute",n.setAttribute("src",`//insight.adsrvr.org/track/conv/?adv=${e}&ct=0:${t}&fmt=3`),document.body.insertBefore(n,document.body.lastChild)}static reportLinkedInConversion(e,t){let n=document.createElement("img");n.setAttribute("width","1"),n.setAttribute("height","1"),n.setAttribute("role","presentation"),n.setAttribute("src",`https://dc.ads.linkedin.com/collect/?pid=${e}&conversionId=${t}&fmt=gif`),n.style.display="none",document.body.insertBefore(n,document.body.lastChild)}static reportDoubleClickConversion(e,t,n){let i=document.createElement("iframe");i.setAttribute("width","1"),i.setAttribute("height","1"),i.setAttribute("frameborder","0"),i.setAttribute("src",`https://${e}.fls.doubleclick.net/activityi;src=${e};
    type=${t};cat=${n};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=${1e13*Math.random()}?`),i.style.display="none",document.body.insertBefore(i,document.body.lastChild)}static insertGoogleAdWordsTag(e,t){let n=document.createElement("script");t||(n.setAttribute("async",""),n.setAttribute("src",`https://www.googletagmanager.com/gtag/js?id=AW-${e}`),n.onload=()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(e,t,n){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config","AW-"+e),window.gtag_report_conversion=function(e,t,n){return window.gtag("event","conversion",{send_to:"AW-"+e+"/"+t,event_callback:function(){void 0!==n&&window.location.assign(n)}}),!1};let n=r.queuedGoogleConversions;for(let i=0;i<n.length;i+=1){let o=n[i];o.id===e&&r.reportGoogleConversion(o.id,o.label,o.url,t)}}),document.body.insertBefore(n,document.body.firstChild)}static insertFacebookPixelTag(e){var t,n,i,o,s,a;t=window,n=document,i="script",t.fbq||(o=t.fbq=function(){"function"==typeof o.callMethod?o.callMethod(...arguments):o.queue.push(arguments)},t._fbq||(t._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(s=n.createElement(i)).async=!0,s.src="//connect.facebook.net/en_US/fbevents.js",(a=n.getElementsByTagName(i)[0]).parentNode.insertBefore(s,a)),window.fbq("init",e),window.fbq("track","PageView");let l=r.queuedFacebookConversions;for(let t=0;t<l.length;t+=1){let n=l[t];n.id===e&&(n.isCustomEvent?r.reportCustomFacebookConversion(e,n.event,n.data):r.reportFacebookConversion(e,n.event,n.data))}}static insertPinterestTag(e){!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};let t=window.pintrk;t.queue=[],t.version="3.0";let n=document.createElement("script");n.async=!0,n.src=e;let i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("https://s.pinimg.com/ct/core.js"),window.pintrk("load",e),window.pintrk("page");let t=r.queuedPinterestConversions;for(let n=0;n<t.length;n+=1){let i=t[n];i.id===e&&r.reportPinterestConversion(e,i.event,i.data)}}}i(r,"queuedGoogleConversions",[]),i(r,"queuedFacebookConversions",[]),i(r,"queuedPinterestConversions",[]);let o=r},81636:(e,t,n)=>{n.d(t,{Q:()=>l,Z:()=>c});var i=n(667294),r=n(112690),o=n(385740),s=n(767546),a=n(780280);function l(e,t){let{setViewContextData:n}=(0,o.sV)(),{requestIdentifier:l}=(0,a.B)(),c=(0,r.Z)(),{viewData:d}=(0,o.SU)();(0,i.useEffect)(()=>{if(e){var t;n({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data?(0,s.Z)(d,e.view_data):d,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),c({...e,event_type:13,request_identifier:l})}},[t])}function c(e){let{children:t,log:n}=e;return l(n),t||null}},701500:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(667294),r=n(883119),o=n(570470),s=n(785893);class a extends i.Component{renderPulsar(){let{anchor:e,handleComplete:t,handlePulsarCompleteOnHover:n,zIndex:i}=this.props;return(0,s.jsx)(o.Z,{anchor:e,onTouch:t,onMouseEnter:n,zIndex:i})}renderFlyout(){let{anchor:e,tooltip:t,handleDismiss:n,handleComplete:i}=this.props;if(!t)return null;let{cancelButtonText:o,confirmButtonText:a,mainText:l,idealDirection:c="down"}=t,d=o&&!!n&&a&&i;return(0,s.jsx)(r.Li,{anchor:e,idealDirection:c,onDismiss:n,size:"flexible",message:l,primaryAction:{onClick:d?n:i,text:d?String(o):String(a),role:"button"}})}render(){let{anchor:e,pulserOnly:t}=this.props;return e?t?this.renderPulsar():this.renderFlyout():null}}var l=n(123159),c=n(764990),d=n(249647),u=n(70061);let _=({anchor:e,anchorExperiences:t,passedExperience:n})=>n||(t?t[e]:null),p=e=>{let{display_data:t}=e;return t.tooltip&&(t.tooltip={...t.tooltip.options,...t.tooltip},delete t.tooltip.options),(0,d.Z)(u.Z,!0)(t)};function h({anchor:e,anchorElementRef:t,children:n,containerBoxConfig:o,experience:d,isHidden:u,onCompleteClick:h,zIndex:E}){var v;let{completeExperience:f,dismissExperience:I,experiences:m,viewExperience:g}=(0,l.M)(),A=Object.values(m).reduce((e,t)=>(8===t.type&&(e[(0,c.A0)(t)]=t),e),{}),b=_({anchor:e,anchorExperiences:A,passedExperience:d}),w=(null==b?void 0:null===(v=b.display_data)||void 0===v?void 0:v.delay)||0,[y,D]=(0,i.useState)(!!w);if((0,i.useEffect)(()=>{if(w>0&&y){let e=setTimeout(()=>{D(!1)});return()=>clearTimeout(e)}return()=>{}},[w,y]),(0,i.useEffect)(()=>{!y&&b&&g(b.placement_id,b.experience_id)},[y,b]),!b||y||u)return i.Children.only(n);let C=p(b),O=()=>{var e;null!==(e=b.display_data)&&void 0!==e&&e.complete_on_hover&&f(b.placement_id,b.experience_id)};return(0,s.jsxs)(r.xu,{position:"relative",height:null==o?void 0:o.height,display:null==o?void 0:o.display,children:[(0,s.jsx)(r.iP,{onMouseEnter:O,onTap:()=>{h&&h(),C.skipComplete||f(b.placement_id,b.experience_id)},children:i.Children.only(n)}),(0,s.jsx)(a,{anchor:t||null,handlePulsarCompleteOnHover:O,handleComplete:()=>{t instanceof HTMLElement&&t.click()},handleDismiss:e=>{null!=e&&e.event&&e.event.stopPropagation(),I(b.placement_id,b.experience_id)},pulserOnly:!!C.pulserOnly,tooltip:C.tooltip,zIndex:E})]})}},570470:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(883119),r=n(667294),o=n(785893);let s=(e,t,n,i)=>({horizontalOffset:-(i/2-t/2),verticalOffset:-(n/2-e/2)});function a({anchor:e,children:t,zIndex:n,leftOverride:a,topOverride:l}){let c=(0,r.useRef)(null),[d,u]=(0,r.useState)(0),[_,p]=(0,r.useState)(0),{height:h,width:E}=e.getBoundingClientRect();return(0,r.useEffect)(()=>{let{current:t}=c;if(e&&t){let{height:e,width:n}=t.getBoundingClientRect(),{horizontalOffset:i,verticalOffset:r}=s(h,E,e,n);u(i),p(r)}}),(0,o.jsx)(i.xu,{position:"absolute",zIndex:n?new i.Ry(n):void 0,dangerouslySetInlineStyle:{__style:{left:a||d,top:l||_}},ref:c,children:t})}let l=function(e){let{anchor:t,leftOverride:n,onTouch:r,onMouseEnter:s,paused:l,size:c,topOverride:d,zIndex:u}=e;return t?(0,o.jsx)(a,{anchor:t,leftOverride:n,topOverride:d,zIndex:u,children:(0,o.jsx)(i.iP,{fullWidth:!1,onTap:({event:e})=>r(e),onMouseEnter:s,rounding:"circle",children:(0,o.jsx)(i.o3,{paused:l,size:c})})}):null}},215292:(e,t,n)=>{n.d(t,{Z:()=>s,q:()=>o});var i=n(667294);let r=()=>{let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),[o,s]=(0,i.useState)(!1);return{active:e,focused:n,hovered:o,onBlur:()=>{r(!1),t(!1)},onFocus:()=>r(!0),onMouseDown:()=>t(!0),onMouseEnter:()=>s(!0),onMouseLeave:()=>{s(!1),t(!1)},onMouseUp:()=>t(!1)}};function o({children:e}){let t=r();return e(t)}let s=r},522679:(e,t,n)=>{n.d(t,{N:()=>_,t:()=>E});var i=n(667294),r=n(214494),o=n(78714),s=n(904431),a=n(924196),l=n(425288),c=n(773285),d=n(785893);let{Provider:u,useHook:_}=(0,l.Z)("LinkedAccount"),p=e=>{(0,o.Z)(e?`/?next=${encodeURIComponent(e)}`:"/")},h=e=>{s.Z.reportFacebookConversion(a.Z.FACEBOOK_ADVERTISER_ID,"CompleteRegistration",{content_name:"/business/convert"}),s.Z.reportPinterestConversion("track","lead",{lead_type:"Self-serve"}),s.Z.reportLinkedInConversion(a.Z.LINKEDIN_PARTNER_ID,a.Z.LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT),s.Z.reportGoogleConversion(a.Z.GOOGLE_ADWORDS_ID,a.Z.GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT,"/",e)};function E({children:e}){let[t,n]=(0,i.useState)(!1),[o,s]=(0,i.useState)([]),{checkExperiment:a}=(0,c.F)(),l=a("ppm_p_gate").anyEnabled,_=(0,i.useCallback)(({businessName:e,thirdPartyApps:t,thirdPartyMarketingTrackingEnabled:i,nextUrl:o})=>(n(!0),r.Z.create("BusinessOwnershipResource",{business_name:e,third_party_apps:t}).callCreate({showError:!0}).then(()=>{i&&h(l),n(!1),p(o)}).catch(e=>(n(!1),Promise.reject({error:e})))),[n,l]),E=(0,i.useMemo)(()=>({createLinkedBusinessAccount:_,linkedBusinessCreationLoading:t,userAccounts:o,userAccountsRetrieved:s}),[_,t,s,o]);return(0,d.jsx)(u,{value:E,children:e})}},883521:(e,t,n)=>{n.d(t,{J:()=>c,Z:()=>p});var i=n(667294),r=n(425288),o=n(522679),s=n(977558),a=n(785893);let{Provider:l,useHook:c}=(0,r.Z)("Header"),d={childList:!0,attributes:!0,subtree:!0},u={height:s.cI,isInBiznuxFullscreen:!1,repinPinId:null,repinStartAnimation:!1,showAccountMenuFlyout:!1};function _(e,t){switch(t.type){case"showAccountMenuFlyout":return{...e,showAccountMenuFlyout:!0};case"hideAccountMenuFlyout":return{...e,showAccountMenuFlyout:!1};case"showRepinAnimation":return{...e,repinStartAnimation:!0,repinPinId:t.payload};case"hideRepinAnimation":return{...e,repinStartAnimation:!1,repinPinId:null};case"updateHeight":return{...e,height:t.payload};case"updateIsInBiznuxFullscreen":return{...e,isInBiznuxFullscreen:t.payload};default:throw Error("action type not supported")}}function p({children:e}){let t=(0,i.useRef)(null),[{height:n,isInBiznuxFullscreen:r,repinPinId:c,repinStartAnimation:p,showAccountMenuFlyout:h},E]=(0,i.useReducer)(_,u);(0,i.useEffect)(()=>{let e=document.getElementById(s.WZ);return e&&"undefined"!=typeof MutationObserver&&(t.current=new MutationObserver(()=>{e&&E({type:"updateHeight",payload:e.clientHeight})}),t.current.observe(e,d)),()=>{var e;null===(e=t.current)||void 0===e||e.disconnect()}});let v=(0,i.useMemo)(()=>({height:n,isInBiznuxFullscreen:r,repinPinId:c,repinStartAnimation:p,showAccountMenuFlyout:h,updateHeaderState:E}),[E,n,r,c,p,h]);return(0,a.jsx)(l,{value:v,children:(0,a.jsx)(o.t,{children:e})})}},807532:(e,t,n)=>{n.d(t,{C:()=>l,f:()=>a});var i=n(667294),r=n(425288),o=n(785893);let{Provider:s,useHook:a}=(0,r.Z)("MostRecentPin");function l({children:e}){let[t,n]=(0,i.useState)(),[r,a]=(0,i.useState)(),l=(0,i.useCallback)(e=>{let t=r?r.slice(0,10):[],n=[e].concat(t.filter(t=>t!==e));a(n)},[r]),c=(0,i.useMemo)(()=>({id:t,plpImageSignatures:r,setMostRecentPinId:n,setMostRecentPinImage:l}),[t,r,l]);return(0,o.jsx)(s,{value:c,children:e})}},865607:(e,t,n)=>{n.d(t,{O:()=>c,Z:()=>d});var i=n(667294),r=n(883119),o=n(898781),s=n(966113),a=n(785893);let l={xs:12,sm:16,md:20,lg:24};function c({children:e}){let t=(0,o.ZP)();return(0,a.jsx)(r.u,{link:(0,a.jsx)(r.rU,{href:s.vBy,target:"blank",children:(0,a.jsx)(r.xv,{color:"inverse",size:"100",weight:"bold",children:t.bt("Pelajari selengkapnya", "Learn more", "verifiedBadge.tooltip.link", undefined, true)})}),text:t.bt("Retailer ini memenuhi Pedoman Merchant Pinterest", "This retailer meets Pinterest's Merchant Guidelines", "merchantVerification.badge.tooltip", undefined, true),children:e})}function d({hasVerifiedIdentity:e,iconOnly:t,isVerifiedMerchant:n,showText:s,size:d}){let u=(0,o.ZP)(),_=(0,a.jsxs)(r.kC,{alignItems:"center",justifyContent:"start",children:[(0,a.jsx)(r.JO,{accessibilityLabel:u.bt("Ikon lencana verifikasi merchant", "Merchant verification badge icon", "merchantVerification.badge.icon", undefined, true),color:"shopping",icon:"workflow-status-ok",inline:!0,size:l[d]}),s&&(0,a.jsx)(r.xu,{marginStart:2,children:(0,a.jsx)(r.xv,{color:"shopping",inline:!0,weight:"bold",children:u.bt("Merchant terverifikasi", "Verified merchant", "creator.header.verifiedMerchant", undefined, true)})})]});return(0,a.jsxs)(i.Fragment,{children:[n&&!t&&(0,a.jsx)(c,{children:_}),n&&t&&_,e&&!n&&(0,a.jsx)(r.JO,{accessibilityLabel:u.bt("Ikon verifikasi domain", "Domain verification icon", "domainVerification.badge.icon", undefined, true),color:"error",icon:"check-circle",size:l[d]})]})}},749147:(e,t,n)=>{function i(e){return{type:"PIN_QUICK_SAVE",payload:e}}function r(e){return{type:"UPDATE_PINS_WITH_QUICKSAVE_REPIN",payload:{newPin:e}}}n.d(t,{X:()=>r,d:()=>i})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/92860.id_ID-623c1a1462923837.mjs.map