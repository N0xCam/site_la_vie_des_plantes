(()=>{var e,t,r,l={2518:(e,t,r)=>{"use strict";r.r(t);var l=r(1609),n=r(7104),a=r(6378);const c=window.wp.blocks,o=window.wc.wcSettings;r(6209);const i=JSON.parse('{"name":"woocommerce/products-by-attribute","title":"Products by Attribute","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of products with selected attributes.","supports":{"align":["wide","full"],"html":false},"attributes":{"attributes":{"type":"array","default":[]},"attrOperator":{"type":"string","enum":["all","any"],"default":"any"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"}},"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}'),s=window.wp.blockEditor,m=window.wp.components;var d=r(6087),u=r(7723);const h=(e,t,r)=>r?Math.min(e,t)===e?t:Math.max(e,r)===e?r:e:Math.max(e,t)===t?e:t,E=({columns:e,rows:t,setAttributes:r,alignButtons:n,minColumns:a=1,maxColumns:c=6,minRows:o=1,maxRows:i=6})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m.RangeControl,{label:(0,u.__)("Columns","woocommerce"),value:e,onChange:e=>{const t=h(e,a,c);r({columns:Number.isNaN(t)?"":t})},min:a,max:c}),(0,l.createElement)(m.RangeControl,{label:(0,u.__)("Rows","woocommerce"),value:t,onChange:e=>{const t=h(e,o,i);r({rows:Number.isNaN(t)?"":t})},min:o,max:i}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Align the last block to the bottom","woocommerce"),help:n?(0,u.__)("Align the last block to the bottom.","woocommerce"):(0,u.__)("The last inner block will follow other content.","woocommerce"),checked:n,onChange:()=>r({alignButtons:!n})})),p=({onChange:e,settings:t})=>{const{image:r,button:n,price:a,rating:c,title:o}=t,i=!1!==r;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product image","woocommerce"),checked:i,onChange:()=>e({...t,image:!i})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product title","woocommerce"),checked:o,onChange:()=>e({...t,title:!o})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product price","woocommerce"),checked:a,onChange:()=>e({...t,price:!a})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Product rating","woocommerce"),checked:c,onChange:()=>e({...t,rating:!c})}),(0,l.createElement)(m.ToggleControl,{label:(0,u.__)("Add to Cart button","woocommerce"),checked:n,onChange:()=>e({...t,button:!n})}))};var g=r(851);function w(e,t,r){const l=new Set(t.map((e=>e[r])));return e.filter((e=>!l.has(e[r])))}const b=window.wp.htmlEntities,_={clear:(0,u.__)("Clear all selected items","woocommerce"),noItems:(0,u.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,u.__)("No results for %s","woocommerce"),search:(0,u.__)("Search for items","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: Number of items selected from list. */ /* translators: Number of items selected from list. */
(0,u._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,u.__)("Search results updated.","woocommerce")},f=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),l=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const n=["0"],a=(e={})=>e.parent?[...a(l[e.parent]),e.name]:e.name?[e.name]:[],c=e=>e.map((e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:a(l[e.parent]),children:t&&t.length?c(t):[]}})),o=c(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{n.includes(e)||o.push(...c(t||[]))})),o},y=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,l.createElement)("strong",{key:t},e):(0,l.createElement)(d.Fragment,{key:t},e)))},x=({label:e})=>(0,l.createElement)("span",{className:"woocommerce-search-list__item-count"},e),v=e=>{const{item:t,search:r}=e,n=t.breadcrumbs&&t.breadcrumbs.length;return(0,l.createElement)("span",{className:"woocommerce-search-list__item-label"},n?(0,l.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(a=t.breadcrumbs).length?a.slice(0,1).toString():2===a.length?a.slice(0,1).toString()+" › "+a.slice(-1).toString():a.slice(0,1).toString()+" … "+a.slice(-1).toString()):null,(0,l.createElement)("span",{className:"woocommerce-search-list__item-name"},y((0,b.decodeEntities)(t.name),r)));var a},k=({countLabel:e,className:t,depth:r=0,controlId:n="",item:a,isSelected:c,isSingle:o,onSelect:i,search:s="",selected:u,useExpandedPanelId:h,...E})=>{var p,_;const[f,k]=h,C=null!=e&&void 0!==a.count&&null!==a.count,S=!(null===(p=a.breadcrumbs)||void 0===p||!p.length),N=!(null===(_=a.children)||void 0===_||!_.length),O=f===a.id,A=(0,g.A)(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":S,"has-children":N,"has-count":C,"is-expanded":O,"is-radio-button":o});(0,d.useEffect)((()=>{N&&c&&k(a.id)}),[a,N,c]);const P=E.name||`search-list-item-${n}`,I=`${P}-${a.id}`,B=(0,d.useCallback)((()=>{k(O?-1:Number(a.id))}),[O,a.id,k]);return N?(0,l.createElement)("div",{className:A,onClick:B,onKeyDown:e=>"Enter"===e.key||" "===e.key?B():null,role:"treeitem",tabIndex:0},o?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"radio",id:I,name:P,value:a.value,onChange:i(a),onClick:e=>e.stopPropagation(),checked:c,className:"woocommerce-search-list__item-input",...E}),(0,l.createElement)(v,{item:a,search:s}),C?(0,l.createElement)(x,{label:e||a.count}):null):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:c,...!c&&a.children.some((e=>u.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:y((0,b.decodeEntities)(a.name),s),onChange:()=>{c?i(w(u,a.children,"id"))():i(function(e,t,r){const l=w(t,e,"id");return[...e,...l]}(u,a.children))()},onClick:e=>e.stopPropagation()}),C?(0,l.createElement)(x,{label:e||a.count}):null)):(0,l.createElement)("label",{htmlFor:I,className:A},o?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{...E,type:"radio",id:I,name:P,value:a.value,onChange:i(a),checked:c,className:"woocommerce-search-list__item-input"}),(0,l.createElement)(v,{item:a,search:s})):(0,l.createElement)(m.CheckboxControl,{...E,id:I,name:P,className:"woocommerce-search-list__item-input",value:(0,b.decodeEntities)(a.value),label:y((0,b.decodeEntities)(a.name),s),onChange:i(a),checked:c}),C?(0,l.createElement)(x,{label:e||a.count}):null)},C=k;var S=r(2478),N=r(9491),O=r(2370);r(6636);const A=({id:e,label:t,popoverContents:r,remove:a,screenReaderLabel:c,className:o=""})=>{const[i,s]=(0,d.useState)(!1),h=(0,N.useInstanceId)(A);if(c=c||t,!t)return null;t=(0,b.decodeEntities)(t);const E=(0,g.A)("woocommerce-tag",o,{"has-remove":!!a}),p=`woocommerce-tag__label-${h}`,w=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"screen-reader-text"},c),(0,l.createElement)("span",{"aria-hidden":"true"},t));return(0,l.createElement)("span",{className:E},r?(0,l.createElement)(m.Button,{className:"woocommerce-tag__text",id:p,onClick:()=>s(!0)},w):(0,l.createElement)("span",{className:"woocommerce-tag__text",id:p},w),r&&i&&(0,l.createElement)(m.Popover,{onClose:()=>s(!1)},r),a&&(0,l.createElement)(m.Button,{className:"woocommerce-tag__remove",onClick:a(e),label:(0,u.sprintf)(
// Translators: %s label.
// Translators: %s label.
(0,u.__)("Remove %s","woocommerce"),t),"aria-describedby":p},(0,l.createElement)(n.A,{icon:O.A,size:20,className:"clear-icon",role:"img"})))},P=A;r(8137);const I=e=>(0,l.createElement)(C,{...e}),B=e=>{const{list:t,selected:r,renderItem:n,depth:a=0,onSelect:c,instanceId:o,isSingle:i,search:s,useExpandedPanelId:m}=e,[u]=m;return t?(0,l.createElement)(d.Fragment,null,t.map((t=>{var h,E;const p=null!==(h=t.children)&&void 0!==h&&h.length&&!i?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),g=(null===(E=t.children)||void 0===E?void 0:E.length)&&u===t.id;return(0,l.createElement)(d.Fragment,{key:t.id},(0,l.createElement)("li",null,n({item:t,isSelected:p,onSelect:c,isSingle:i,selected:r,search:s,depth:a,useExpandedPanelId:m,controlId:o})),g?(0,l.createElement)(B,{...e,list:t.children,depth:a+1}):null)}))):null},$=({isLoading:e,isSingle:t,selected:r,messages:n,onChange:a,onRemove:c})=>{if(e||t||!r)return null;const o=r.length;return(0,l.createElement)("div",{className:"woocommerce-search-list__selected"},(0,l.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,l.createElement)("strong",null,n.selected(o)),o>0?(0,l.createElement)(m.Button,{variant:"link",isDestructive:!0,onClick:()=>a([]),"aria-label":n.clear},(0,u.__)("Clear all","woocommerce")):null),o>0?(0,l.createElement)("ul",null,r.map(((e,t)=>(0,l.createElement)("li",{key:t},(0,l.createElement)(P,{label:e.name,id:e.id,remove:c}))))):null)},R=({filteredList:e,search:t,onSelect:r,instanceId:a,useExpandedPanelId:c,...o})=>{const{messages:i,renderItem:s,selected:m,isSingle:d}=o,h=s||I;return 0===e.length?(0,l.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,l.createElement)(n.A,{icon:S.A,role:"img"})),(0,l.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,u.sprintf)(i.noResults,t):i.noItems)):(0,l.createElement)("ul",{className:"woocommerce-search-list__list"},(0,l.createElement)(B,{useExpandedPanelId:c,list:e,selected:m,renderItem:h,onSelect:r,instanceId:a,isSingle:d,search:t}))},T=e=>{const{className:t="",isCompact:r,isHierarchical:n,isLoading:a,isSingle:c,list:o,messages:i=_,onChange:s,onSearch:h,selected:E,type:p="text",debouncedSpeak:w}=e,[b,y]=(0,d.useState)(""),x=(0,d.useState)(-1),v=(0,N.useInstanceId)(T),k=(0,d.useMemo)((()=>({..._,...i})),[i]),C=(0,d.useMemo)((()=>((e,t,r)=>{if(!t)return r?f(e):e;const l=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!l.test(e.name)&&e)).filter(Boolean);return r?f(n,e):n})(o,b,n)),[o,b,n]);(0,d.useEffect)((()=>{w&&w(k.updated)}),[w,k]),(0,d.useEffect)((()=>{"function"==typeof h&&h(b)}),[b,h]);const S=(0,d.useCallback)((e=>()=>{c&&s([]);const t=E.findIndex((({id:t})=>t===e));s([...E.slice(0,t),...E.slice(t+1)])}),[c,E,s]),O=(0,d.useCallback)((e=>()=>{Array.isArray(e)?s(e):-1===E.findIndex((({id:t})=>t===e.id))?s(c?[e]:[...E,e]):S(e.id)()}),[c,S,s,E]),A=(0,d.useCallback)((e=>{const[t]=E.filter((t=>!e.find((e=>t.id===e.id))));S(t.id)()}),[S,E]);return(0,l.createElement)("div",{className:(0,g.A)("woocommerce-search-list",t,{"is-compact":r,"is-loading":a,"is-token":"token"===p})},"text"===p&&(0,l.createElement)($,{...e,onRemove:S,messages:k}),(0,l.createElement)("div",{className:"woocommerce-search-list__search"},"text"===p?(0,l.createElement)(m.TextControl,{label:k.search,type:"search",value:b,onChange:e=>y(e)}):(0,l.createElement)(m.FormTokenField,{disabled:a,label:k.search,onChange:A,onInputChange:e=>y(e),suggestions:[],__experimentalValidateInput:()=>!1,value:a?[(0,u.__)("Loading…","woocommerce")]:E.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),a?(0,l.createElement)("div",{className:"woocommerce-search-list__list"},(0,l.createElement)(m.Spinner,null)):(0,l.createElement)(R,{...e,search:b,filteredList:C,messages:k,onSelect:O,instanceId:v,useExpandedPanelId:x}))},j=((0,m.withSpokenMessages)(T),window.wp.url,window.wp.apiFetch);var L=r.n(j);const F=e=>L()({path:`wc/store/v1/products/attributes/${e}/terms`});const M=window.wp.escapeHtml,D=({error:e})=>(0,l.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,l.createElement)("span",null,(0,u.__)("The following error was returned","woocommerce"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,M.escapeHTML)(e))):"api"===t?(0,l.createElement)("span",null,(0,u.__)("The following error was returned from the API","woocommerce"),(0,l.createElement)("br",null),(0,l.createElement)("code",null,(0,M.escapeHTML)(e))):e:(0,u.__)("An error has prevented the block from being updated.","woocommerce"))(e)),H=({className:e,item:t,isSelected:r,isLoading:n,onSelect:a,disabled:c,...o})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(k,{...o,key:t.id,className:e,isSelected:r,item:t,onSelect:a,disabled:c}),r&&n&&(0,l.createElement)("div",{key:"loading",className:(0,g.A)("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},(0,l.createElement)(m.Spinner,null))),V=window.wc.wcTypes,J=((window.wp.data,(0,o.getSetting)("attributes",[])).reduce(((e,t)=>{const r=(l=t)&&l.attribute_name?{id:parseInt(l.attribute_id,10),name:l.attribute_name,taxonomy:"pa_"+l.attribute_name,label:l.attribute_label,orderby:l.attribute_orderby}:null;var l;return r&&r.id&&e.push(r),e}),[]),e=>{const{count:t,id:r,name:l,parent:n}=e;return{count:t,id:r,name:l,parent:n,breadcrumbs:[],children:[],value:(0,V.isAttributeTerm)(e)?e.attr_slug:""}});r(2777);const W=(0,N.withInstanceId)((({onChange:e,onOperatorChange:t,instanceId:r,isCompact:n=!1,messages:a={},operator:c="any",selected:o,type:i="text"})=>{const{errorLoadingAttributes:s,isLoadingAttributes:h,productsAttributes:E}=function(e){const[t,r]=(0,d.useState)(null),[l,n]=(0,d.useState)(!1),[a,c]=(0,d.useState)([]),o=(0,d.useRef)(!1);return(0,d.useEffect)((()=>{if(e&&!l&&!o.current)return async function(){n(!0);try{const e=await L()({path:"wc/store/v1/products/attributes"}),t=[];for(const r of e){const e=await F(r.id);t.push({...r,parent:0,terms:e.map((e=>({...e,attr_slug:r.taxonomy,parent:r.id})))})}c(t),o.current=!0}catch(e){e instanceof Error&&r(await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e))}finally{n(!1)}}(),()=>{o.current=!0}}),[l,e]),{errorLoadingAttributes:t,isLoadingAttributes:l,productsAttributes:a}}(!0),p=E.reduce(((e,t)=>{const{terms:r,...l}=t;return[...e,J(l),...r.map(J)]}),[]);return a={clear:(0,u.__)("Clear all product attributes","woocommerce"),noItems:(0,u.__)("Your store doesn't have any product attributes.","woocommerce"),search:(0,u.__)("Search for product attributes","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: %d is the count of attributes selected. */ /* translators: %d is the count of attributes selected. */
(0,u._n)("%d attribute selected","%d attributes selected",e,"woocommerce"),e),updated:(0,u.__)("Product attribute search results updated.","woocommerce"),...a},s?(0,l.createElement)(D,{error:s}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(T,{className:"woocommerce-product-attributes",isCompact:n,isHierarchical:!0,isLoading:h,isSingle:!1,list:p,messages:a,onChange:e,renderItem:e=>{const{item:t,search:n,depth:a=0}=e,c=t.count||0,o=["woocommerce-product-attributes__item","woocommerce-search-list__item",{"is-searching":n.length>0,"is-skip-level":0===a&&0!==t.parent}];if(!t.breadcrumbs.length)return(0,l.createElement)(H,{...e,className:(0,g.A)(o),item:t,isLoading:h,disabled:0===t.count,name:`attributes-${r}`,countLabel:(0,u.sprintf)(/* translators: %d is the count of terms. */ /* translators: %d is the count of terms. */
(0,u._n)("%d term","%d terms",c,"woocommerce"),c),"aria-label":(0,u.sprintf)(/* translators: %1$s is the item name, %2$d is the count of terms for the item. */ /* translators: %1$s is the item name, %2$d is the count of terms for the item. */
(0,u._n)("%1$s, has %2$d term","%1$s, has %2$d terms",c,"woocommerce"),t.name,c)});const i=`${t.breadcrumbs[0]}: ${t.name}`;return(0,l.createElement)(k,{...e,name:`terms-${r}`,className:(0,g.A)(...o,"has-count"),countLabel:(0,u.sprintf)(/* translators: %d is the count of products. */ /* translators: %d is the count of products. */
(0,u._n)("%d product","%d products",c,"woocommerce"),c),"aria-label":(0,u.sprintf)(/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */ /* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
(0,u._n)("%1$s, has %2$d product","%1$s, has %2$d products",c,"woocommerce"),i,c)})},selected:o.map((({id:e})=>p.find((t=>t.id===e)))).filter(Boolean),type:i}),!!t&&(0,l.createElement)("div",{hidden:o.length<2},(0,l.createElement)(m.SelectControl,{className:"woocommerce-product-attributes__operator",label:(0,u.__)("Display products matching","woocommerce"),help:(0,u.__)("Pick at least two attributes to use this setting.","woocommerce"),value:c,onChange:t,options:[{label:(0,u.__)("Any selected attributes","woocommerce"),value:"any"},{label:(0,u.__)("All selected attributes","woocommerce"),value:"all"}]})))})),G=({value:e,setAttributes:t})=>(0,l.createElement)(m.SelectControl,{label:(0,u.__)("Order products by","woocommerce"),value:e,options:[{label:(0,u.__)("Newness - newest first","woocommerce"),value:"date"},{label:(0,u.__)("Price - low to high","woocommerce"),value:"price_asc"},{label:(0,u.__)("Price - high to low","woocommerce"),value:"price_desc"},{label:(0,u.__)("Rating - highest first","woocommerce"),value:"rating"},{label:(0,u.__)("Sales - most first","woocommerce"),value:"popularity"},{label:(0,u.__)("Title - alphabetical","woocommerce"),value:"title"},{label:(0,u.__)("Menu Order","woocommerce"),value:"menu_order"}],onChange:e=>t({orderby:e})}),z=(0,o.getSetting)("hideOutOfStockItems",!1),K=(0,o.getSetting)("stockStatusOptions",{}),Y=({value:e,setAttributes:t})=>{const{outofstock:r,...n}=K,a=z?n:K,c=Object.entries(a).map((([e,t])=>({value:e,label:t}))).filter((e=>!!e.label)),o=Object.keys(a).filter((e=>!!e)),[i,s]=(0,d.useState)(e||o);(0,d.useEffect)((()=>{t({stockStatus:["",...i]})}),[i,t]);const h=(0,d.useCallback)((e=>{const t=i.includes(e),r=i.filter((t=>t!==e));t||(r.push(e),r.sort()),s(r)}),[i]);return(0,l.createElement)(l.Fragment,null,c.map((e=>{const t=i.includes(e.value)?/* translators: %s stock status. */ /* translators: %s stock status. */(0,u.__)('Stock status "%s" visible.',"woocommerce"):/* translators: %s stock status. */ /* translators: %s stock status. */(0,u.__)('Stock status "%s" hidden.',"woocommerce");return(0,l.createElement)(m.ToggleControl,{label:e.label,key:e.value,help:(0,u.sprintf)(t,e.label),checked:i.includes(e.value),onChange:()=>h(e.value)})})))},q=e=>{const{setAttributes:t}=e,{attributes:r,attrOperator:n,columns:a,contentVisibility:c,orderby:i,rows:d,alignButtons:h,stockStatus:g}=e.attributes;return(0,l.createElement)(s.InspectorControls,{key:"inspector"},(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Layout","woocommerce"),initialOpen:!0},(0,l.createElement)(E,{columns:a,rows:d,alignButtons:h,setAttributes:t,minColumns:(0,o.getSetting)("minColumns",1),maxColumns:(0,o.getSetting)("maxColumns",6),minRows:(0,o.getSetting)("minRows",1),maxRows:(0,o.getSetting)("maxRows",6)})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Content","woocommerce"),initialOpen:!0},(0,l.createElement)(p,{settings:c,onChange:e=>t({contentVisibility:e})})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Filter by Product Attribute","woocommerce"),initialOpen:!1},(0,l.createElement)(W,{selected:r,onChange:(e=[])=>{const r=e.map((({id:e,value:t})=>({id:e,attr_slug:t})));t({attributes:r})},operator:n,onOperatorChange:(e="any")=>t({attrOperator:e}),isCompact:!0})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Order By","woocommerce"),initialOpen:!1},(0,l.createElement)(G,{setAttributes:t,value:i})),(0,l.createElement)(m.PanelBody,{title:(0,u.__)("Filter by stock status","woocommerce"),initialOpen:!1},(0,l.createElement)(Y,{setAttributes:t,value:g})))},Q=e=>{const{attributes:t,setAttributes:r,setIsEditing:c,isEditing:o,debouncedSpeak:i}=e;return(0,l.createElement)(m.Placeholder,{icon:(0,l.createElement)(n.A,{icon:a.A}),label:(0,u.__)("Products by Attribute","woocommerce"),className:"wc-block-products-grid wc-block-products-by-attribute"},(0,u.__)("Display a grid of products from your selected attributes.","woocommerce"),(0,l.createElement)("div",{className:"wc-block-products-by-attribute__selection"},(0,l.createElement)(W,{selected:t.attributes,onChange:(e=[])=>{const t=e.map((({id:e,value:t})=>({id:e,attr_slug:t})));r({attributes:t})},operator:t.attrOperator,onOperatorChange:(e="any")=>r({attrOperator:e})}),(0,l.createElement)(m.Button,{variant:"primary",onClick:()=>{c(!o),i((0,u.__)("Showing Products by Attribute block preview.","woocommerce"))}},(0,u.__)("Done","woocommerce"))))},U=window.wp.serverSideRender;var X=r.n(U);const Z=(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,l.createElement)("title",null,"Grid Block Preview"),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,l.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,l.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"})),ee=e=>{const{attributes:t,name:r}=e;return t.isPreview?Z:(0,l.createElement)(X(),{block:r,attributes:t})},te=(0,m.withSpokenMessages)((e=>{const t=(0,s.useBlockProps)(),{attributes:{attributes:r}}=e,[n,a]=(0,d.useState)(!r.length);return(0,l.createElement)("div",{...t},(0,l.createElement)(s.BlockControls,null,(0,l.createElement)(m.ToolbarGroup,{controls:[{icon:"edit",title:(0,u.__)("Edit selected attribute","woocommerce"),onClick:()=>a(!n),isActive:n}]})),(0,l.createElement)(q,{...e}),n?(0,l.createElement)(Q,{isEditing:n,setIsEditing:a,...e}):(0,l.createElement)(m.Disabled,null,(0,l.createElement)(ee,{...e})))}));(0,c.registerBlockType)(i,{icon:{src:(0,l.createElement)(n.A,{icon:a.A,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:(0,o.getSetting)("defaultColumns",3)},rows:{type:"number",default:(0,o.getSetting)("defaultRows",3)},stockStatus:{type:"array",default:Object.keys((0,o.getSetting)("stockStatusOptions",[]))}},edit:te,save:()=>null})},6209:()=>{},2777:()=>{},8137:()=>{},6636:()=>{},1609:e=>{"use strict";e.exports=window.React},9491:e=>{"use strict";e.exports=window.wp.compose},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return l[e].call(r.exports,r,r.exports,a),r.exports}a.m=l,e=[],a.O=(t,r,l,n)=>{if(!r){var c=1/0;for(m=0;m<e.length;m++){for(var[r,l,n]=e[m],o=!0,i=0;i<r.length;i++)(!1&n||c>=n)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(o=!1,n<c&&(c=n));if(o){e.splice(m--,1);var s=l();void 0!==s&&(t=s)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[r,l,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var n=Object.create(null);a.r(n);var c={};t=t||[null,r({}),r([]),r(r)];for(var o=2&l&&e;"object"==typeof o&&!~t.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,a.d(n,c),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=8848,(()=>{var e={8848:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var l,n,[c,o,i]=r,s=0;if(c.some((t=>0!==e[t]))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(i)var m=i(a)}for(t&&t(r);s<c.length;s++)n=c[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=a.O(void 0,[94],(()=>a(2518)));c=a.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["products-by-attribute"]=c})();