"use strict";(self.webpackChunkproperty=self.webpackChunkproperty||[]).push([[838],{30740:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(72791),s=t(68531),l=t(29439),i=t(47022),r=t(89743),o=t(2677),c=t(96710),d=t(51561),u=t(535),h=t(26858),p=t(96836),m=t(1413),x=t(44091),_=t(43784),v=t(49389),j=t(73231),f=t(23695),g=t(87309),y=t(80656),Z=t(21124),b=t(80184),w=x.Z.Step,N=function(e){var n=e.handleOk,t=(0,a.useState)(0),s=(0,l.Z)(t,2),i=s[0],r=s[1],o=(0,a.useState)({}),c=(0,l.Z)(o,2),d=c[0],u=c[1],h=_.Z.useForm(),p=(0,l.Z)(h,1)[0],N=(0,a.useState)(!1),P=(0,l.Z)(N,2),C=(P[0],P[1]),k=[{title:"Personal Info",content:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Z.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please input your name!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsx)(v.Z,{placeholder:"Name",style:{width:"100%"}})}),(0,b.jsx)(_.Z.Item,{name:"phone",label:"Phone",rules:[{required:!0,message:"Please input your phone number!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsx)(v.Z,{placeholder:"Phone",style:{width:"100%"}})}),(0,b.jsx)(_.Z.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Please enter a valid email!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsx)(v.Z,{placeholder:"Email",style:{width:"100%"}})})]})},{title:"Property Info",content:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Z.Item,{name:"purpose",label:"Purpose",rules:[{required:!0,message:"Please select the purpose!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsxs)(j.ZP.Group,{style:{width:"100%",textAlign:"left"},children:[(0,b.jsx)(j.ZP,{value:"sell",children:"Sell"}),(0,b.jsx)(j.ZP,{value:"rent",children:"Rent"})]})}),(0,b.jsx)(_.Z.Item,{name:"propertyType",label:"Property Type",rules:[{required:!0,message:"Please select the property type!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsxs)(j.ZP.Group,{style:{width:"100%",textAlign:"left"},children:[(0,b.jsx)(j.ZP,{value:"residential",children:"Residential"}),(0,b.jsx)(j.ZP,{value:"commercial",children:"Commercial"}),(0,b.jsx)(j.ZP,{value:"land",children:"Land"})]})}),(0,b.jsx)(_.Z.Item,{name:"city",label:"City",rules:[{required:!0,message:"Please input the city!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsx)(v.Z,{placeholder:"City",style:{width:"100%"}})}),(0,b.jsx)(_.Z.Item,{name:"propertyLocation",label:"Property Location",rules:[{required:!0,message:"Please input the property location!"}],labelCol:{span:24},wrapperCol:{span:24},children:(0,b.jsx)(v.Z,{placeholder:"Property Location",style:{width:"100%"}})})]})}];return(0,b.jsxs)("div",{children:[(0,b.jsx)(x.Z,{current:i,children:k.map((function(e,n){return(0,b.jsx)(w,{title:e.title},n)}))}),(0,b.jsxs)(_.Z,{form:p,onFinish:function(e){var t=(0,m.Z)((0,m.Z)({},d),e),a={api_key:y.r,name:t.name,email:t.email,phone:t.phone,purpose:t.purpose,propertyType:t.propertyType,city:t.city,propertyLocation:t.propertyLocation};Z.Z.post("web-to-add-property",a).toPromise().then((function(e){var t;f.ZP.success(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message),C(!1),p.resetFields(),n()})).catch((function(e){console.log(e)}))},children:[(0,b.jsx)("div",{className:"steps-content",children:k[i].content}),(0,b.jsxs)("div",{className:"steps-action",children:[i<k.length-1&&(0,b.jsx)(g.Z,{className:"button__call_",type:"primary",onClick:function(){p.validateFields().then((function(e){u((0,m.Z)((0,m.Z)({},d),e)),r(i+1),p.resetFields()})).catch((function(e){console.log("Validate Failed:",e)}))},children:"Next"}),i>0&&(0,b.jsx)(g.Z,{className:"button__call_back",style:{margin:"0 8px"},onClick:function(){return r(i-1),void p.setFieldsValue(d)},children:"Back"}),i===k.length-1&&(0,b.jsx)(g.Z,{className:"button__call_back",type:"primary",htmlType:"submit",children:"Submit"})]})]})]})};var P=function(e){var n,t,s=null===(n=e.slider)||void 0===n?void 0:n.filter((function(e){return 1==e.banner_type})),m=(0,a.useState)(!1),x=(0,l.Z)(m,2),_=x[0],v=x[1],j=(0,a.useContext)(h.Z).language,f=function(){v(!0)};return(0,b.jsxs)("div",{className:"a_b_full_area",children:[s?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(u.Z,{autoplay:!0,children:null===s||void 0===s||null===(t=s.filter((function(e){return 1==(null===e||void 0===e?void 0:e.banner_type)})))||void 0===t?void 0:t.map((function(e,n){return(0,b.jsx)("div",{className:"banner__area_Add",children:(0,b.jsx)(i.Z,{children:(0,b.jsxs)(r.Z,{children:[(0,b.jsx)(o.Z,{sm:6,lg:6,children:(0,b.jsxs)("div",{className:"banner__area_Add_cntn",children:[(0,b.jsx)("h1",{className:"color-white",children:"bn"==j?e.title_bn:e.title_en}),(0,b.jsxs)("p",{children:[" ","bn"==j?e.description_bn:e.description_en]}),(0,b.jsx)("button",{type:"button",onClick:f,to:e.button_url,className:"banner__area_Add_cntn_btn",children:" Get Started "})]})}),(0,b.jsx)(o.Z,{sm:6,lg:6,children:(0,b.jsxs)("div",{className:"banner__area_Add_cntn",style:{background:p.G.FILE_URL+e.image},children:[(null===e||void 0===e?void 0:e.video_url)&&(0,b.jsx)(c.Z,{width:"100%",height:"360px",controls:!0,url:e.video_url,config:{file:{attributes:{controlsList:"nodownload"}}}}),!(null!==e&&void 0!==e&&e.video_url)&&(0,b.jsx)("img",{src:p.G.FILE_URL+e.image,alt:"bn"==j?e.title_bn:e.title_en})]})})]})})},n)}))})}):(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"banner__area_Add",children:(0,b.jsx)(i.Z,{})})}),(0,b.jsx)(d.Z,{open:_,className:"model__footer_close m3",onCancel:function(){v(!1)},children:(0,b.jsxs)("div",{className:"popup-content",children:[(0,b.jsx)("h2",{children:"Submit Request"}),(0,b.jsx)("p",{children:"Please provide all the necessary information below for a more efficient and effective service."}),(0,b.jsx)(N,{handleOk:function(){v(!1)}})]})})]})},C=t(57504),k=t(39120),A=t.n(k),T=t(68825);var F=function(e){var n=e.howitworks,t=e.loading,s=(0,a.useContext)(h.Z).language;return t?(0,b.jsx)("div",{className:"how_it_work_area",children:(0,b.jsxs)(i.Z,{children:[(0,b.jsxs)("div",{className:"title_area",style:{textAlign:"center"},children:[(0,b.jsxs)("h3",{children:[(0,T.t)("How_it_Works"),"  "]}),(0,b.jsxs)("p",{className:"title__p",children:[" There is no greater benchmark for success than customer satisfaction.",(0,b.jsx)("br",{})," Over the years, we\u2019ve built a culture of service.   "]})]}),(0,b.jsx)(C.Z,{})]})}):(0,b.jsx)("div",{className:"how_it_work_area",children:(0,b.jsxs)(i.Z,{children:[(0,b.jsxs)("div",{className:"title_area",style:{textAlign:"center"},children:[(0,b.jsxs)("h3",{children:[(0,T.t)("How_it_Works")," "]}),(0,b.jsxs)("p",{className:"title__p",children:[" There is no greater benchmark for success than customer satisfaction.",(0,b.jsx)("br",{})," Over the years, we\u2019ve built a culture of service.   "]})]}),(0,b.jsx)(A(),(0,m.Z)((0,m.Z)({loop:!0,margin:10,nav:!0,dots:!0,autoplay:!1,autoplayTimeout:4e3,className:"how_it_work_items owl-carousel"},{navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],items:4,responsive:{0:{items:2},450:{items:2},600:{items:2},768:{items:2},1024:{items:4},1280:{items:4},1366:{items:4}}}),{},{children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,b.jsx)("div",{className:"item",children:(0,b.jsxs)("div",{className:"acr-featured-listing",children:[(0,b.jsx)("div",{className:"featured-listing-thumb",children:(0,b.jsx)("img",{src:p.G.FILE_URL+e.image,alt:e.title_en})}),(0,b.jsx)("div",{className:"featured-listing-content",children:(0,b.jsx)("div",{className:"featured-listing-meta",children:(0,b.jsx)("p",{children:"bn"==s?e.title_bn:e.title_en})})})]})},n)}))}))]})})};var E=function(e){var n;return(0,b.jsx)("div",{className:"how_it_work_area",children:(0,b.jsxs)(i.Z,{children:[(0,b.jsxs)("div",{className:"title_area",style:{textAlign:"center"},children:[(0,b.jsxs)("h3",{children:[" ",(0,T.t)("Customer_Experiences")]}),(0,b.jsxs)("p",{className:"title__p",children:[" There is no greater benchmark for success than customer satisfaction.",(0,b.jsx)("br",{})," Over the years, we\u2019ve built a culture of service.   "]})]}),(0,b.jsx)("div",{className:"video_full_area",children:(0,b.jsx)(r.Z,{children:e.loading?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(C.Z,{})}):(0,b.jsx)(b.Fragment,{children:null===(n=e.customer_exp)||void 0===n?void 0:n.map((function(e,n){return(0,b.jsx)(o.Z,{sm:6,lg:4,children:(0,b.jsx)("div",{className:"client_video",children:(0,b.jsx)(c.Z,{loading:"lazy",width:"100%",height:"100%",controls:!0,url:e.video_url,config:{file:{attributes:{controlsList:"nodownload"}}}})})},n)}))})})})]})})},D=t(20063),I=t.p+"static/media/faq-men.56d7145f507369960631.png";var R=function(e){var n,t=D.Z.Panel,s=(0,a.useContext)(h.Z).language;return(0,b.jsx)("div",{className:"how_it_work_area one-faq-area",children:(0,b.jsx)(i.Z,{children:(0,b.jsx)("div",{className:"faq_full_area",children:(0,b.jsxs)(r.Z,{children:[(0,b.jsxs)(o.Z,{sm:6,lg:6,children:[(0,b.jsx)("div",{className:"title_area",children:(0,b.jsxs)("h3",{children:[" ",(0,T.t)("FAQ")," "]})}),(0,b.jsx)("div",{className:"client_video",children:e.loading?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(C.Z,{})}):(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(D.Z,{defaultActiveKey:["0"],accordion:!0,children:null===(n=e.faq)||void 0===n?void 0:n.map((function(e,n){return(0,b.jsx)(t,{header:"bn"==s?e.title_bn:e.title_en,children:(0,b.jsx)("p",{children:"bn"==s?e.description_bn:e.description_en})},n)}))})})})]}),(0,b.jsx)("div",{className:"faq-img",children:(0,b.jsx)("img",{src:I,alt:"FAQ"})})]})})})})};t.p,t.p;var q=t(59434),L=t(24237);var S=function(){var e,n,t,l,i,r,o,c,d=(0,a.useContext)(h.Z).language,u=0,p=(0,q.v9)((function(e){return e.addPropertyState})),m=(0,q.I0)();return(0,a.useEffect)((function(){0==u&&setTimeout((function(){m((0,L.a)()),u+=1}),1500)}),[u,d]),(0,b.jsx)("div",{children:(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(P,{slider:null===(e=p.addPropertyData)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.slider,loading:p.loading}),(0,b.jsx)(F,{howitworks:null===(t=p.addPropertyData)||void 0===t||null===(l=t.data)||void 0===l?void 0:l.how_it_works,loading:p.loading}),(0,b.jsx)(E,{customer_exp:null===(i=p.addPropertyData)||void 0===i||null===(r=i.data)||void 0===r?void 0:r.customer_exp,loading:p.loading}),(0,b.jsx)(R,{faq:null===(o=p.addPropertyData)||void 0===o||null===(c=o.data)||void 0===c?void 0:c.faq,loading:p.loading})]})})}},24237:function(e,n,t){t.d(n,{a:function(){return o}});var a=t(74165),s=t(15861),l=t(62482),i=t(80656),r=t(33762),o=function(){return function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:l.e.ADD_PROPERTY_ACTION_START}),e.next=3,r.Z.get("/web-add-property?api_key=".concat(i.r)).toPromise().then((function(e){n({type:l.e.ADD_PROPERTY_GET_SUCCESS,payload:null===e||void 0===e?void 0:e.data}),n({type:l.e.ADD_PROPERTY_ACTION_END})}),(function(e){n({type:l.e.ADD_PROPERTY_GET_FAILED,payload:e}),n({type:l.e.ADD_PROPERTY_ACTION_END})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=838.10a656de.chunk.js.map