!function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)i=a[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0};var s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([55,0]),n()}({16:function(e,t,n){e.exports=n.p+"newsIcon.png"},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SELECT_SOURCE="SELECT_SOURCE",t.INVALIDATE_SOURCE="INVALIDATE_SOURCE",t.REQUEST_POSTS="REQUEST_POSTS",t.RECEIVE_POSTS="RECEIVE_POSTS",t.SELECT_SOURCES="SELECT_SOURCES",t.SELECT_ALL="SELECT_ALL",t.UNSELECT_ALL="UNSELECT_ALL",t.TOGGLE_MENU="TOGGLE_MENU"},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPostsIfNeeded=t.receivePosts=t.requestPosts=t.invalidateSource=t.unSelectAll=t.selectAll=t.selectSource=t.toggleMenu=void 0;var r,o=n(19),s=n(18),i=(r=s)&&r.__esModule?r:{default:r},a=n(9);t.toggleMenu=function(){return{type:o.TOGGLE_MENU}},t.selectSource=function(e){return{type:o.SELECT_SOURCE,sourceList:e}},t.selectAll=function(e){return{type:o.SELECT_ALL,sourceList:e}},t.unSelectAll=function(e){return{type:o.UNSELECT_ALL,sourceList:e}},t.invalidateSource=function(e){return{type:o.INVALIDATE_SOURCE,source:e}};var c=t.requestPosts=function(e){return{type:o.REQUEST_POSTS,source:e}},l=t.receivePosts=function(e,t){return{type:o.RECEIVE_POSTS,source:e,posts:t,receivedAt:Date.now()}},u=(t.fetchPostsIfNeeded=function(e){return function(t,n){if(function(e,t){var n=e.postsBySource[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(function(e){return function(t){return t(c(e)),(0,i.default)(e.url).then(function(e){return e.json()}).then(function(n){var r=u(e,n);return t(l(e,r))})}}(e))}},function(e,t){var n=[];return e===a.SOURCES.tmFeed?(t.posts.map(function(t){n.push({title:t[e.jsonProperties.title],url:t[e.jsonProperties.url],comments:t[e.jsonProperties.comments],site:t[e.jsonProperties.site],created:Date.parse(t[e.jsonProperties.created])})}),n):e===a.SOURCES.redditNews?(t.map(function(t){return n.push({title:t[e.jsonProperties.title],url:t[e.jsonProperties.url],comments:t[e.jsonProperties.comments],site:e.jsonProperties.site,created:1e3*t[e.jsonProperties.created]})}),n):"reddit"===e.api?(t.data.children.map(function(t){n.push({title:t.data[e.jsonProperties.title],url:t.data[e.jsonProperties.url],comments:t.data[e.jsonProperties.comments],site:t.data[e.jsonProperties.site],created:1e3*t.data[e.jsonProperties.created]})}),n):"rssfeed"===e.api?(t.items.map(function(t){n.push({title:t[e.jsonProperties.title],url:t[e.jsonProperties.url],comments:t[e.jsonProperties.comments],site:e.jsonProperties.site,created:new Date(t[e.jsonProperties.created].replace(/-/g,"/"))})}),n):void 0})},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];return Object.values(e).map(function(e){return Object.assign({},t[e.title]={isSelected:n,properties:e})}),t}},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(19);var s=(0,r.combineReducers)({postsBySource:function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1];switch(s.type){case o.INVALIDATE_SOURCE:case o.REQUEST_POSTS:case o.RECEIVE_POSTS:return Object.assign({},r,(e={},t=s.source.title,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!0,items:[]},t=arguments[1];switch(t.type){case o.INVALIDATE_SOURCE:return Object.assign({},e,{didInvalidate:!0});case o.REQUEST_POSTS:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case o.RECEIVE_POSTS:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}(r[s.source],s),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));default:return r}},selectedSources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.SELECT_SOURCE:var n=Object.assign({},e);return t.sourceList.map(function(e){n[e].isSelected=!n[e].isSelected}),n;case o.SELECT_ALL:return n=Object.assign({},e),t.sourceList.map(function(e){n[e].isSelected=!0}),n;case o.UNSELECT_ALL:return n=Object.assign({},e),t.sourceList.map(function(e){n[e].isSelected=!1}),n;default:return e}},toggleMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments[1].type){case o.TOGGLE_MENU:return Object.assign({},e,{isVisible:!e.isVisible});default:return e}}});t.default=s},34:function(e,t,n){e.exports=n.p+"loading.gif"},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),s=(r=o)&&r.__esModule?r:{default:r},i=n(5);t.default=(0,i.connect)(function(e){return{selectedSources:e.selectedSources,showMenu:e.toggleMenu}})(function(e){var t=e.onClick,r=e.selectedSources,o=e.onSelectAll,i=e.onUnselectAll,a=e.showMenu,c="#ff5252",l="rgba(0, 0, 0, 0.54)",u=Object.keys(r).map(function(e){return e});return s.default.createElement("div",null,s.default.createElement("nav",{id:"sidebar",className:a.isVisible?"visible":"hidden"},s.default.createElement("ul",{className:"list-unstyled components"},s.default.createElement("div",null,s.default.createElement("h3",null,s.default.createElement("a",{onClick:function(e){return o(e,u)}},s.default.createElement("img",{id:"icon",src:n(16),className:"d-inline-block align-top"}),"All in one"),s.default.createElement("a",{onClick:function(e){return i(e,u)},id:"closeicon",className:"close","data-dismiss":"alert","aria-label":"Close"},s.default.createElement("span",{"aria-hidden":"true"},"clear")))),u.map(function(e){return s.default.createElement("li",null,s.default.createElement("label",{className:"containerOne",style:r[e].isSelected?{color:c}:{color:l}},r[e].properties.title,s.default.createElement("input",{type:"checkbox",onChange:function(n){return t(n,[e])},checked:r[e].isSelected}),s.default.createElement("span",{className:"checkmark"})))}))))})},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(0)),s=n(5);n(9);function i(e){return e&&e.__esModule?e:{default:e}}var a="Just now",c=" minute ago",l=" minutes ago",u=" hour ago",d=" hours ago",p="yesterday",f=" days ago";var h=function(e){var t=e.posts;e.selectedSource;return r.default.createElement("div",null,r.default.createElement("ul",{className:"list-group list-group-flush"},t.map(function(e,t){return r.default.createElement("a",{href:e.url,target:"_blank",className:"list-group-item list-group-item-action flex-column align-items-start",key:t},r.default.createElement("div",{className:"d-flex w-100 justify-content-between"},r.default.createElement("h6",{className:"mb-1 col-10"},e.title),r.default.createElement("small",null,(n=e.created,o="",s=Date.now(),h={month:"long",day:"numeric",year:"numeric"},(i=(s-n)/1e3)<60?a:i<3600?""+(o=Math.round(i/60))+(1===o?c:l):i<86400?""+(o=Math.round(i/3600))+(1===o?u:d):i<172800?p:i<60480?""+(o=Math.round(i/3600*24))+f:""+((o=new Date(n)).getFullYear(),new Date(s).getFullYear(),o.toLocaleDateString("en-US",h))))),r.default.createElement("div",{className:"d-flex w-100 justify-content-between"},r.default.createElement("small",null,e.site)));var n,o,s,i,h})))};h.propTypes={posts:o.default.array.isRequired},t.default=(0,s.connect)(function(e){return{selectedSource:e.selectedSource}})(h)},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),i=p(s),a=n(5),c=n(20),l=p(n(37)),u=p(n(36)),d=p(n(15));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={swipe:250},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),o(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.selectedSources;e.postsBySource;Object.entries(n).map(function(e){var n=r(e,2),o=(n[0],n[1]);!0===o.isSelected&&t((0,c.fetchPostsIfNeeded)(o.properties))})}},{key:"componentWillReceiveProps",value:function(e){if(e.selectedSources!==this.props.selectedSources){var t=e.dispatch,n=e.selectedSources;e.postsBySource,e.posts;Object.entries(n).map(function(e){var n=r(e,2),o=(n[0],n[1]);o.isSelected&&t((0,c.fetchPostsIfNeeded)(o.properties))})}}},{key:"handleSelectSource",value:function(e,t){(0,this.props.dispatch)((0,c.selectSource)(t))}},{key:"handleSelectAll",value:function(e,t){(0,this.props.dispatch)((0,c.selectAll)(t))}},{key:"handleUnselectAll",value:function(e,t){(0,this.props.dispatch)((0,c.unSelectAll)(t))}},{key:"handleToggle",value:function(){(0,this.props.dispatch)((0,c.toggleMenu)())}},{key:"onSwipeMove",value:function(e,t){this.setState({swipe:e.x}),console.log(this.state)}},{key:"render",value:function(){var e=this.props,t=e.posts,r=(e.postsBySource,e.selectedSources),o=e.toggleMenu,s=!0;return Object.values(r).map(function(e){if(e.isSelected)return s=!1}),i.default.createElement("div",null,i.default.createElement("div",null,i.default.createElement(u.default,{onClick:this.handleSelectSource.bind(this),onSelectAll:this.handleSelectAll.bind(this),onUnselectAll:this.handleUnselectAll.bind(this)})),i.default.createElement("div",{id:"content",className:o.isVisible?"visible":"hidden",style:{transform:"translateX("+this.state.swipe+")"}},i.default.createElement("div",{class:"hamburger",onClick:this.handleToggle.bind(this),className:o.isVisible?"change":"visible"},i.default.createElement("div",{class:"bar1"}),i.default.createElement("div",{class:"bar2"}),i.default.createElement("div",{class:"bar3"})),!0===s?i.default.createElement("div",{className:"container info"},i.default.createElement("h5",null,"Select source")):0===t.length?i.default.createElement("div",{className:"container info"},i.default.createElement("img",{src:n(34)})):i.default.createElement("div",null,i.default.createElement(l.default,{posts:t}))))}}]),t}();t.default=(0,a.connect)(function(e){var t=e.postsBySource,n=e.selectedSources,o=e.toggleMenu,s=[];return Object.entries(n).map(function(e){var n=r(e,2),o=n[0];if(n[1].isSelected)return t[o]&&t[o].items?t[o].items.map(function(e){return s.push(e)}):[]}),s=d.default.sortBy(s,[function(e){return-e.created}]),{postsBySource:t,selectedSources:n,posts:s,toggleMenu:o}})(f)},42:function(e,t,n){(e.exports=n(41)(!1)).push([e.i,'body {\n    font-family: Roboto, sans-serif;\n}\n.relative {\n    position: relative;\n}\n\n#icon {\n    max-width: 40px;\n    height: auto;\n    padding-right: 10px;\n}\n.close {\n    font-size: 15px;\n}\n\n.close:focus {\n    outline: none;\n}\n\n#sidebar {\n    height: 100vh;\n    width: 250px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    transition: 0.5s;\n    overflow-x: hidden;\n    background-color: #fff;\n    /* top layer */\n    z-index: 9999;\n    border-right: 1px solid rgba(0,0,0,.125);\n}\n\n#sidebar.hidden{\n    transform: translateX(-250px)\n}\n\n\n#content {\n    transition: transform .5s;\n}\n\n.badge {\n    background-color: #ff5252;\n    opacity: 0.7;\n}\n\na, a:hover, a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n\n#sidebar ul.components {\n    padding: 20px 8px 8px 15px;\n    width: 250px;\n    cursor: pointer;\n}\n\n#sidebar ul h3 {\n    padding: 5px; \n}\n\n#sidebar ul li {\n    padding: 5px;\n    font-size: 15px;\n    transition: 0.3s;\n}\n\n#content.hidden {\n    -webkit-transform: translateX(0%)\n}\n#content.visible {\n    -webkit-transform: translateX(250px)\n}\n\n#content {\n    padding: 10px;\n}\n\n@media (max-width: 450px) {\n    #content.visible {\n        transition: .5s;\n    }\n    #content.visible a {\n        opacity: 0.1;\n    }\n}\n\n#content a:hover {\n    color: rgb(109, 108, 108)\n}\n\n#content h6 {\n    font-size: 14px;\n    font-weight: 350;\n}\n\n#content h5 {\n    font-size: 15px;\n    opacity: 0.75;\n}\n\n#content small {\n    opacity: 0.54;\n    font-size: 12px;\n}\n\n.col-10 {\n    padding-left: 0px;\n}\n\n.info {\n    height:100vh;\n    text-align: center;\n    padding-top: 40vh;\n}\n\n\n/* The container */\n.containerOne {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Hide the browser\'s default checkbox */\n.containerOne input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border: 1px solid;\n}\n\n\n/* When the checkbox is checked, add a background */\n.containerOne input:checked ~ .checkmark {\n    background-color:#ff5252;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: "";\n    position: absolute;\n    display: none;\n}\n\n/* Show the checkmark when checked */\n.containerOne input:checked ~ .checkmark:after {\n    display: block;\n}\n\n/* Style the checkmark/indicator */\n.containerOne .checkmark:after {\n    left: 7px;\n    top: 1px;\n    width: 5px;\n    height: 13px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.hamburger {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.bar1, .bar2, .bar3 {\n    width: 35px;\n    height: 5px;\n    background-color: #ff5252;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n.change .bar1 {\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .bar2 {opacity: 0;}\n\n.change .bar3 {\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\n    transform: rotate(45deg) translate(-8px, -8px);\n}',""])},43:function(e,t,n){var r=n(42);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(40)(r,o);r.locals&&(e.exports=r.locals)},55:function(e,t,n){"use strict";var r=p(n(1)),o=p(n(22)),s=n(5),i=p(n(21)),a=n(7),c=(n(20),n(17),p(n(43)),p(n(38))),l=p(n(33)),u=n(9),d=p(n(32));function p(e){return e&&e.__esModule?e:{default:e}}n(16);var f,h={postsBySource:{},selectedSources:(0,d.default)(u.SOURCES,{},!1),toggleMenu:{isVisible:!0}},m=(f=h,(0,a.createStore)(l.default,f,(0,a.applyMiddleware)(i.default)));o.default.render(r.default.createElement(s.Provider,{store:m},r.default.createElement(c.default,null)),document.querySelector(".wrapper"))},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SOURCES={tmFeed:{title:"TM Feed",url:"https://cors-anywhere.herokuapp.com/https://tmfeed.ru/api/v1/habrahabr-geektimes_top_daily.json",jsonProperties:{url:"url",title:"title",comments:"comments_count",site:"site",created:"time_published"}},redditHot:{title:"Reddit Hot",api:"reddit",url:"https://www.reddit.com/hot.json",jsonProperties:{url:"url",title:"title",comments:"num_comments",site:"subreddit",created:"created_utc"}},reactjsSubreddit:{title:"reactjs(reddit)",api:"reddit",url:"https://www.reddit.com/r/reactjs.json",jsonProperties:{url:"url",title:"title",comments:"num_comments",site:"subreddit",created:"created_utc"}},todayILearnedSubreddit:{title:"todayilearned (reddit)",api:"reddit",url:"https://www.reddit.com/r/todayilearned.json",jsonProperties:{url:"url",title:"title",comments:"num_comments",site:"subreddit",created:"created_utc"}},VC:{title:"VC.ru",api:"rssfeed",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvc.ru%2Frss%2Fall",jsonProperties:{url:"link",title:"title",comments:"",site:"VC",created:"pubDate"}},theVerge:{title:"The Verge",api:"rssfeed",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml",jsonProperties:{url:"link",title:"title",comments:"",site:"The Verge",created:"pubDate"}},nineTo5mac:{title:"9to5Mac",api:"rssfeed",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F9to5mac.com%2Ffeed%2F",jsonProperties:{url:"link",title:"title",comments:"",site:"9to5Mac",created:"pubDate"}}}}});