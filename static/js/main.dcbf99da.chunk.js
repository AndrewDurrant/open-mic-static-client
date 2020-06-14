(this["webpackJsonpopen-mic-client"]=this["webpackJsonpopen-mic-client"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),l=t.n(i),c=t(6),o=(t(21),t(1)),m=t(2),s=t(4),u=t(3),d=(t(22),t(23),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={menuOpen:!1},e.handleMenuOpen=function(){e.setState({menuOpen:!e.state.menuOpen})},e.handleLogoutClick=function(){e.setState({menuOpen:!e.state.menuOpen})},e}return Object(m.a)(t,[{key:"renderAuthLinks",value:function(){return r.a.createElement("ul",{className:this.state.menuOpen?"nav_links nav_links_open":"nav_links"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/upload-video",onClick:this.handleMenuOpen},"Upload video")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/",onClick:this.handleLogoutClick},"Log out")))}},{key:"renderUnauthLinks",value:function(){return r.a.createElement("ul",{className:this.state.menuOpen?"nav_links nav_links_open":"nav_links"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/login",onClick:this.handleMenuOpen},"Log in")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/register",onClick:this.handleMenuOpen},"Create account")))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"main_nav"},r.a.createElement("h1",{className:"app_logo"},r.a.createElement(c.b,{to:"/"},"OPEN-MIC")),r.a.createElement("i",{className:"main_nav_menu fas ".concat(this.state.menuOpen?"fa-times":"fa-bars"),onClick:this.handleMenuOpen}),this.renderAuthLinks()))}}]),t}(n.Component)),p=(t(29),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"landing-page"},r.a.createElement("section",{className:"user-options"},r.a.createElement("span",{className:"main-btn"},r.a.createElement(c.b,{to:"/login"},"Log In")),r.a.createElement("span",{className:"main-btn"},r.a.createElement(c.b,{to:"/register"},"Create Account"))),r.a.createElement("section",{className:"icon-container"},r.a.createElement("i",{className:"microphone fas fa-microphone-alt icon-4x"})),r.a.createElement("span",{className:"main-btn"},r.a.createElement(c.b,{to:"/user-home"},"Watch Performances")),r.a.createElement("section",{className:"app-desc"},r.a.createElement("p",null,"Open-Mic is a digital stage to post your audio musical performances and listen to the sounds of your fellow musicians. Hop up on stage and share or kick back with your favorite beverage and listen to the latest songs from your favorite performers.")))}}]),t}(n.Component)),_=(t(30),t(7));t(31);function h(e){var a=e.className,t=Object(_.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:["Button",a].join(" ")},t))}function f(e){var a=e.className,t=Object(_.a)(e,["className"]);return r.a.createElement("input",Object.assign({className:["Input",a].join(" ")},t))}function E(e){var a=e.className,t=Object(_.a)(e,["className"]);return r.a.createElement("span",Object.assign({className:["Required",a].join(" ")},t),"*")}function v(e){var a=e.className,t=e.grid,n=Object(_.a)(e,["className","grid"]),i=["Section",t&&"Section--grid",a].filter(Boolean).join(" ");return r.a.createElement("section",Object.assign({className:i},n))}t(32);var b=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"LoginForm"},r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"LoginForm__user_name"},"User name"),r.a.createElement(f,{required:!0,name:"user_name",id:"LoginForm__user_name"})),r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"LoginForm__password"},"Password"),r.a.createElement(f,{required:!0,name:"password",type:"password",id:"LoginForm__password"})),r.a.createElement(h,{type:"submit",className:"submit_btn"},"Login"))}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{className:"LoginPage"},r.a.createElement("h2",null,"Login"),r.a.createElement(b,null))}}]),t}(n.Component),y=(t(33),t(34),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"RegistrationForm"},r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"RegistrationForm__full_name"},"Full name ",r.a.createElement(E,null)),r.a.createElement(f,{name:"full_name",type:"text",required:!0,id:"RegistrationForm__full_name"})),r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"RegistrationForm__user_name"},"User name ",r.a.createElement(E,null)),r.a.createElement(f,{name:"user_name",type:"text",required:!0,id:"RegistrationForm__user_name"})),r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"RegistrationForm__password"},"Password ",r.a.createElement(E,null)),r.a.createElement(f,{name:"password",type:"password",required:!0,id:"RegistrationForm__password"})),r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"RegistrationForm__email"},"Email"),r.a.createElement(f,{name:"email",type:"email",required:!0,id:"RegistrationForm__email"})),r.a.createElement(h,{type:"submit",className:"submit_btn"},"Register"))}}]),t}(n.Component)),O=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{className:"RegistrationPage"},r.a.createElement("h2",null,"Register"),r.a.createElement(y,null))}}]),t}(n.Component),k=(t(35),{videos:[{id:1,title:"Frozen Margarita",link:"https://www.youtube.com/watch?v=-0JDlAn2Y5Y",description:"I wrote this while drinking warm sake.",date_created:"2020-05-19T20:27:31.882Z",user:{id:1,full_name:"Digital Dave",user_name:"David Maui",date_created:"2020-05-19T20:27:31.882Z"},number_of_interactions:0,average_comment_rating:0},{id:2,title:"Call on Jah",link:"https://www.youtube.com/watch?v=kMKwkDDtlfI",description:"When times are tough and living is rough, you know what to do.",date_created:"2020-05-19T20:27:31.882Z",user:{id:2,full_name:"Rowdy Russell",user_name:"Russell Govinda",date_created:"2020-05-19T20:27:31.882Z"},number_of_interactions:4,average_comment_rating:3},{id:3,title:"Country Road",link:"https://www.youtube.com/watch?v=SEx2PzrRUfY",description:"One of my all time favorite covers to sing",date_created:"2020-05-19T20:27:31.882Z",user:{id:1,full_name:"Digital Dave",user_name:"David Maui",date_created:"2020-05-19T20:27:31.882Z"},number_of_interactions:0,average_comment_rating:0},{id:4,title:"Gina Chavez",link:"https://www.youtube.com/watch?v=sRZi4QQEGBI",description:"These lyrics were inspired from a trip to Bali.",date_created:"2020-05-19T20:27:31.882Z",user:{id:3,full_name:"Eddy River",user_name:"Edward Thames",date_created:"2020-05-19T20:27:31.882Z"},number_of_interactions:2,average_comment_rating:4},{id:5,title:"Poor Man",link:"https://www.youtube.com/watch?v=2uwpaxTkDrY",description:"Wrote this with a friend. I hope you like it!",date_created:"2020-05-19T20:27:31.882Z",user:{id:2,full_name:"Rowdy Russell",user_name:"Russell Govinda",date_created:"2020-05-19T20:27:31.882Z"},number_of_interactions:0,average_comment_rating:0},{id:6,title:"Streets",link:"https://www.youtube.com/watch?v=0hD-Z1q_ZyI",description:"What can I say. I am Doja Cat.",date_created:"2020-05-19T20:27:31.882Z",user:{id:1,full_name:"Digital Dave",user_name:"David Maui",date_created:"2020-05-19T20:27:31.882Z"},number_of_interactions:0,average_comment_rating:0}],interactions:[{rating:"4",comment:"loved this!",media_id:"4",user_id:"2"},{rating:"2",comment:"Not bad",media_id:"2",user_id:"3"},{rating:"3",comment:"This had me dancing!",media_id:"4",user_id:"1"},{rating:"1",comment:"I want my time back.",media_id:"2",user_id:"4"},{rating:"4",comment:"I want to play guitar like that!",media_id:"2",user_id:"2"},{rating:"3",comment:"Thank you for sharing this.",media_id:"2",user_id:"3"}],users:[{id:1,full_name:"Digital Dave",user_name:"DavidMaui",date_created:"2020-05-18T20:27:31.882Z",email:"dave@yahoo.com"},{id:2,full_name:"Rhonda Govinda",user_name:"RowdyRhonda",date_created:"2020-05-19T20:27:31.882Z",email:"russell@google.com"},{id:3,full_name:"Edward Thames",user_name:"river77",date_created:"2020-05-17T20:27:31.882Z",email:"thames@google.com"},{id:4,full_name:"Samantha Teton",user_name:"sammy",date_created:"2020-05-15T20:27:31.882Z",email:"samsam@google.com"}]}),N=(t(36),t(37),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e,a=this.props.video;if(a.link.includes("watch")){e=a.link.replace(/(watch\?v=)/gi,"embed/")}else if(a.link.includes("vimeo")){e=a.link.replace(/(vimeo.com)/gi,"player.vimeo.com/video")}return r.a.createElement("div",{className:"video"},r.a.createElement("iframe",{src:e,allow:"autoplay; encrypted-media",frameBorder:"0",allowFullScreen:!0,title:a.title,className:"video_frame",loading:"lazy"}))}}]),t}(n.Component)),j=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"renderVideo",value:function(){return r.a.createElement(N,{key:this.props.video.id,video:this.props.video})}},{key:"render",value:function(){var e=this.props.video,a=e.rating,t=e.title,n=e.description;return r.a.createElement("main",{className:"VideoCard"},r.a.createElement("div",{className:"video_rating"},function(e){for(var a=[],t=0;t<e;t++)a.push(r.a.createElement("i",{key:a.length,className:"fas fa-microphone-alt icon-4x rate_filled"}));for(;a.length<4;)a.push(r.a.createElement("i",{key:a.length,className:"fas fa-microphone-alt icon-4x rate_empty"}));return a}(Math.round(a))),r.a.createElement("h2",{className:"video_title"},t),this.renderVideo(),r.a.createElement("div",{className:"video_description"},r.a.createElement("p",null,n)))}}]),t}(n.Component),w=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"user_nav"},r.a.createElement("ul",{className:"user_links"},r.a.createElement("li",{style:{fontWeight:"bold"}},"most recent"),r.a.createElement("li",null,"best rated"),r.a.createElement("li",null,"my videos"))),r.a.createElement(v,{grid:!0,className:"UserHomePage"},k.videos.map((function(a){return r.a.createElement(j,{key:a.id,video:a,onSuccess:e.handleSuccess})}))))}}]),t}(n.Component),F=(t(38),t(39),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"UploadForm"},r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"UploadForm__title"},"Title"),r.a.createElement(f,{required:!0,name:"title",type:"text",id:"UploadForm__title"})),r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"UploadForm__link"},"Link"),r.a.createElement(f,{required:!0,name:"link",type:"url",id:"UploadForm__link"})),r.a.createElement("div",{className:"form_input"},r.a.createElement("label",{htmlFor:"UploadForm__description"},"Description"),r.a.createElement("textarea",{required:!0,name:"description",type:"text",id:"UploadForm__description"})),r.a.createElement(h,{type:"submit",className:"submit_btn"},"Upload"))}}]),t}(n.Component)),C=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).handleUploadSuccess=function(){var a=e.props,t=a.location,n=a.history,r=(t.state||{}).from||"/";n.push(r)},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{className:"UploadVideoPage"},r.a.createElement("h2",null,"Share your Video"),r.a.createElement("p",{className:"heading-blurb"},"submit your embeddable link to show the community what you can do"),r.a.createElement(F,{onUploadSuccess:this.handleUploadSuccess}))}}]),t}(n.Component),R=(t(40),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{className:"NotFoundPage"},r.a.createElement("h2",null,"404"),r.a.createElement("p",null,"Instead of making up pages, try making some music."),r.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(n.Component)),T=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App_header"},r.a.createElement(d,null)),r.a.createElement("main",{className:"App_main"},r.a.createElement("h2",null,"LANDING PAGE"),r.a.createElement(p,null),r.a.createElement("h2",null,"LOGIN PAGE"),r.a.createElement(g,null),r.a.createElement("h2",null,"REGISTRATION PAGE"),r.a.createElement(O,null),r.a.createElement("h2",null,"HOME PAGE"),r.a.createElement(w,null),r.a.createElement("h2",null,"UPLOAD VIDEO PAGE"),r.a.createElement(C,null),r.a.createElement("h2",null,"NOT FOUND PAGE"),r.a.createElement(R,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(c.a,null,r.a.createElement(T,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.dcbf99da.chunk.js.map