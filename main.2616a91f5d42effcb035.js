(()=>{"use strict";var e={3997:(e,t,r)=>{var n=r(7294),a=r(3935),o=r(3727),l=r(5977),i=r(6829),c=r(1439);function u(){var e=E(["\n  mutation($id: ID!, $bookmarkIndex: Int!) {\n    addBookmark(id: $id, bookmarkIndex: $bookmarkIndex) {\n      id\n      bookmarkIndex\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=E(["\n  mutation($id: ID!, $finished: Boolean!) {\n    finishedBook(id: $id, finished: $finished) {\n      id\n      finished\n    }\n  }\n"]);return s=function(){return e},e}function m(){var e=E(["\n  mutation($id: ID!) {\n    deleteBook(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function f(){var e=E(["\n  mutation($id: ID!, $title: String!, $cover: String!, $text: String!) {\n    editBook(id: $id, title: $title, cover: $cover, text: $text) {\n      id\n      title\n      cover\n      text\n    }\n  }\n"]);return f=function(){return e},e}function d(){var e=E(["\n  mutation($title: String!, $cover: String!, $text: String!) {\n    createBook(title: $title, cover: $cover, text: $text) {\n      id\n      title\n      text\n    }\n  }\n"]);return d=function(){return e},e}function v(){var e=E(["\n  query($id: ID!) {\n    book(id: $id) {\n      id\n      title\n      cover\n      text\n      finished\n      bookmarkIndex\n    }\n  }\n"]);return v=function(){return e},e}function p(){var e=E(["\n  {\n    allBooks {\n      id\n      title\n      cover\n      finished\n    }\n  }\n"]);return p=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=(0,c.Ps)(p()),h=(0,c.Ps)(v()),y=(0,c.Ps)(d()),g=(0,c.Ps)(f()),_=(0,c.Ps)(m()),k=(0,c.Ps)(s()),S=(0,c.Ps)(u());const x=(0,n.createContext)(),w=function(e){return n.createElement("div",{className:"wrapper ".concat(e.narrow?"wrapper--narrow":"")},e.children)},C=function(e){return(0,n.useEffect)((function(){document.title="".concat(e.title," | Japanese Reader"),window.scrollTo(0,0)}),[e.title]),n.createElement(w,{narrow:e.narrow},e.children)};var I=r(6893),N=r(9583);const A=function(e){return n.createElement(o.rU,{to:"/book/".concat(e.book.id),className:"bookcard ".concat(e.book.finished?"bookcard__finished":"")},e.book.finished&&n.createElement("div",{className:"bookcard__finished-icon-wrap"},n.createElement(N.FJM,{className:"bookcard__finished-icon"})),n.createElement("div",{className:"bookcard__content"},n.createElement("div",{className:"bookcard__cover"},n.createElement("img",{src:e.book.cover,alt:e.book.title,nopin:"nopin"})),n.createElement("h3",{className:"bookcard__title"},(t=e.book.title).length>30?t.substring(0,30).concat("..."):t)));var t},T=function(e){return n.createElement(n.Fragment,null,0===e.data.length?n.createElement("div",{className:"empty-booklist"},n.createElement(I.hbr,{className:"empty-booklist__icon"}),n.createElement("div",{className:"empty-booklist__title"},"Your booklist is empty"),n.createElement("p",null,"Click on the top right button to create a new book")):n.createElement("div",{className:"bookcard__wrap"},e.data.map((function(e){return n.createElement(A,{key:e.id,book:e})}))))},O=(0,n.createContext)(),M=function(){var e=(0,n.useContext)(O),t=(0,n.useContext)(x);return n.createElement("div",{className:"search__search-group"},n.createElement(N.U41,{className:"search__search-icon"}),n.createElement("input",{className:"search__field",type:"text",placeholder:"Search...",autoComplete:"off",value:t.searchKeyword,onChange:function(t){return e({type:"UPDATE_SEARCH_KEYWORD",value:t.target.value})}}),n.createElement(N.G5m,{onClick:function(t){return e({type:"UPDATE_SEARCH_KEYWORD",value:""})},className:"search__delete-btn ".concat(t.searchKeyword?"search__delete-btn--visible":"")}))},F=function(e){return n.createElement("div",{className:"search__checkbox-group"},n.createElement("input",{id:e.field,type:"checkbox",checked:e.checked,"aria-checked":e.checked,onChange:e.onChange}),n.createElement("label",{htmlFor:e.field},e.label))},j=function(){var e=(0,n.useContext)(x),t=(0,n.useContext)(O);return n.createElement("div",{className:"search"},n.createElement(M,null),n.createElement("div",{className:"search__filter-wrap"},n.createElement(F,{field:"finished",label:"Hide finished books",checked:e.finishedFilter,onChange:function(){localStorage.setItem("finishedFilter",!e.finishedFilter),t({type:"TOGGLE_FINISHED_FILTER"})}}),n.createElement(F,{field:"alphabetical",label:"あ → お",checked:e.alphabeticalFilter,onChange:function(){localStorage.setItem("alphabeticalFilter",!e.alphabeticalFilter),t({type:"TOGGLE_ALPHABETICAL_FILTER"})}})))},R=function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"loading-icon__wrap"},n.createElement("div",{className:"loading-icon"})))};function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const H=function(){var e,t=(0,n.useContext)(x),r=(0,i.useQuery)(b),a=r.loading,o=r.error,l=r.data;return console.log(o),n.createElement(C,{title:"Home"},a?n.createElement(R,null):n.createElement(n.Fragment,null,n.createElement(j,null),n.createElement(T,{loading:a,data:(e=l.allBooks,t.finishedFilter&&(e=function(e){return e.filter((function(e){return!e.finished}))}(e)),t.alphabeticalFilter&&(e=function(e){return(t=e,function(e){if(Array.isArray(e))return D(e)}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(e,t){return e.title.localeCompare(t.title,"ja")}));var t}(e)),t.searchKeyword&&(e=function(e){return e.filter((function(e){return e.title.toString().toLowerCase().indexOf(t.searchKeyword.toLowerCase())>-1}))}(e)),e)})))};var P=r(724),G=r.n(P),L=r(7919),B=r(6168),U=r(9352);function $(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const z=function(e){var t=(0,n.useRef)(null),r=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),a=K((0,n.useState)(!1),2),l=a[0],c=a[1],u=K((0,n.useState)(e.finished),2),s=u[0],m=u[1],f=K((0,n.useState)(0),2),d=f[0],v=f[1],p=(0,n.useContext)(O),E=(0,n.useContext)(x),b=K((0,i.useMutation)(k),2),h=b[0];function y(){c(!l)}function g(e){t.current.contains(e.target)||c(!1)}return b[1].data,(0,n.useEffect)((function(){return l?document.addEventListener("mousedown",g):document.removeEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g)}}),[l]),(0,n.useEffect)((function(){d&&function(){var t,r=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h({variables:{id:e.bookId,finished:!s}});case 3:t.sent,1==!s&&p({type:"ADD_FLOATING_MESSAGE",value:"This is book is now marked as read"}),m(!s),v(0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function l(e){$(o,n,a,l,i,"next",e)}function i(e){$(o,n,a,l,i,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}()()}),[d]),n.createElement("div",{ref:t,className:"reader-tools ".concat(l?"reader-tools--open":"")},l?n.createElement("button",{onClick:y,className:"reader-tools__cog"},n.createElement(N.aHS,null)):n.createElement("button",{onClick:y,className:"reader-tools__cog"},n.createElement(N.p4t,null)),n.createElement(L.Z,{classNames:"reader-tools__wrap",in:l,timeout:500,unmountOnExit:!0},n.createElement("div",{className:"reader-tools__wrap"},n.createElement("div",{className:"reader-tools__icon-group"},n.createElement(o.rU,{to:"/book/".concat(e.bookId,"/edit"),"data-tip":"Edit this book","data-for":"edit",className:"reader-tools__icons"},n.createElement(U.cpK,null)),n.createElement(B.Z,{id:"edit",effect:"solid",place:"left",disable:r,offset:{left:-5},className:"tooltip"})),n.createElement("div",{className:"reader-tools__icon-group"},n.createElement("button",{onClick:function(){return p({type:"TOGGLE_BOOKMARK_VISIBILITY"})},className:"reader-tools__icons ".concat(E.bookmarkVisible?"":"reader-tools__icons--inactive"),"data-tip":E.bookmarkVisible?"Hide bookmarks":"Display bookmarks","data-for":"bookmark"},n.createElement(N.VF9,null)),n.createElement(B.Z,{id:"bookmark",effect:"solid",place:"left",disable:r,offset:{left:-5},className:"tooltip"})),n.createElement("div",{className:"reader-tools__icon-group"},n.createElement("button",{onClick:function(){return v(d+1)},className:"reader-tools__icons ".concat(s?"":"reader-tools__icons--inactive"),"data-tip":s?"Mark as unread":"Mark as read","data-for":"finished"},n.createElement(N.FJM,null)),n.createElement(B.Z,{id:"finished",effect:"solid",place:"left",disable:r,offset:{left:-5},className:"tooltip"})),n.createElement("div",{className:"reader-tools__icon-group"},n.createElement("button",{onClick:e.toggleFont,className:"reader-tools__icons ".concat("big"!==E.fontSize?"reader-tools__icons--inactive":""),"data-tip":"big"===E.fontSize?"Decrease font size":"Increase font size","data-for":"font"},n.createElement(N.wT5,null)),n.createElement(B.Z,{id:"font",effect:"solid",place:"left",disable:r,offset:{left:-5},className:"tooltip"})))))},q=function(e){var t=(0,n.useContext)(x);return n.createElement("span",{className:"bookmark ".concat(e.bookmarkIndex===e.index?"bookmark--active":""," ").concat(t.bookmarkVisible?"":"bookmark--hidden"),onClick:function(){return e.handleBookmarkClick(e.index)}},n.createElement(N.VF9,null))};var Q=r(7516),Y=r(6486);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const Z=function(){var e,t,r=(e=(0,n.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],o=r[1];function l(){window.scrollY>900?o(!0):o(!1)}return(0,n.useEffect)((function(){var e=(0,Y.throttle)(l,200);return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),n.createElement(n.Fragment,null,n.createElement("button",{className:"scroll-to-top ".concat(a?"scroll-to-top--visible":""),onClick:function(){return window.scrollTo(0,0)}},n.createElement(Q.y02,null)))},W=function(){return n.createElement(C,{title:"404 Not Found"},n.createElement("div",{className:"flex-col-center text-center"},n.createElement("h1",null,"Oops! This page cannot be found"),n.createElement("p",{className:"mt-xs mb-s"},"Sorry but the page you are looking for does not exist, has been removed or is temporarily unavailable."),n.createElement(o.rU,{to:"/",className:"button"},"Go to the homepage")))};function J(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const re=function(){var e=(0,l.UO)().bookId,t=ee((0,n.useState)(0),2),r=t[0],a=t[1],o=ee((0,n.useState)(0),2),c=o[0],u=o[1],s=ee((0,n.useState)(!1),2),m=s[0],f=s[1],d=(0,n.useContext)(O),v=(0,n.useContext)(x),p=(0,i.useQuery)(h,{variables:{id:e}}),E=p.loading,b=p.data,y=ee((0,i.useMutation)(S),2),g=y[0];function _(e){a(e==r?0:e),u(c+1)}function k(e){return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement(q,{bookmarkIndex:r,handleBookmarkClick:_,index:e.index+1}),e.children))}y[1].data;var w={paragraph:function(e){return n.createElement(k,e)}};return(0,n.useEffect)((function(){c>0&&function(){var t,n=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g({variables:{id:e,bookmarkIndex:r}});case 3:t.sent,r>0&&d({type:"ADD_FLOATING_MESSAGE",value:"Bookmark successfully saved"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function l(e){J(o,n,a,l,i,"next",e)}function i(e){J(o,n,a,l,i,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}()()}),[c]),(0,n.useEffect)((function(){localStorage.setItem("fontSize",v.fontSize)}),[v.fontSize]),(0,n.useEffect)((function(){b&&(a(b.book.bookmarkIndex),f(!0))}),[E]),(0,n.useEffect)((function(){if(m&&r>0){var e=document.querySelector(".bookmark--active").getBoundingClientRect().y;window.scrollTo(0,e-20)}else window.scrollTo(0,0)}),[m]),E||b?n.createElement(C,{title:E?"...":b.book.title},E?n.createElement(R,null):n.createElement(n.Fragment,null,n.createElement(Z,null),n.createElement(z,{bookId:e,toggleFont:function(){d({type:"TOGGLE_FONT_SIZE"})},finished:b.book.finished}),n.createElement("div",{className:"reader ".concat("big"==v.fontSize?"reader--font-big":"")},n.createElement("h1",{className:"reader__title"},b.book.title),n.createElement("div",{className:"reader__content"},n.createElement(G(),{source:b.book.text,allowTypes:["paragraph"],renderers:w,includeNodeIndex:!0}))))):n.createElement(W,null)};var ne=r(5666),ae=r.n(ne),oe=r(195),le=r(6770),ie=r.n(le),ce=(r(8320),r(471));const ue={title:{value:"",hasErrors:!1,errorMessage:""},cover:{value:"",hasErrors:!1,errorMessage:""},text:{value:"",hasErrors:!1,errorMessage:""},isSaving:!1,saveRequestCount:0},se=function(e,t){switch(t.type){case"TITLE_CHANGE":return e.title.hasErrors=!1,e.title.errorMessage="",e.title.value=t.value,void(t.value.trim().length>30?(e.title.hasErrors=!0,e.title.errorMessage="Your title cannot exceed 30 characters"):(e.title.hasErrors=!1,e.title.errorMessage=""));case"CHECK_TITLE":return void(t.value.trim()||(e.title.hasErrors=!0,e.title.errorMessage="Please provide a title"));case"COVER_CHANGE":return e.cover.hasErrors=!1,e.cover.errorMessage="",void(e.cover.value=t.value);case"CHECK_COVER":return void(t.value||(e.cover.hasErrors=!0,e.cover.errorMessage="Please upload an image"));case"TEXT_CHANGE":return e.text.hasErrors=!1,e.text.errorMessage="",e.text.value=t.value,void(t.value.trim().length>1e7?(e.text.hasErrors=!0,e.text.errorMessage="Your text cannot exceed 10 000 000 characters"):(e.text.hasErrors=!1,e.text.errorMessage=""));case"CHECK_TEXT":return void(t.value.trim()||(e.text.hasErrors=!0,e.text.errorMessage="Don't forget to add a text to your new book"));case"SUBMIT_REQUEST":return void(e.title.hasErrors||e.cover.hasErrors||e.text.hasErrors||e.saveRequestCount++);case"DELETE_REQUEST":return void e.deleteRequestCount++;case"SAVE_REQUEST_STARTED":return void(e.isSaving=!0);case"SAVE_REQUEST_FINISHED":return void(e.isSaving=!1);case"FETCH_FINISHED":return e.bookId.value=t.value.bookId,e.title.value=t.value.title,e.cover.value=t.value.cover,e.text.value=t.value.text,void(e.isFetching=!1)}},me=function(e){return n.createElement("div",{className:"form-error"},e.errorMessage)},fe=function(e){return n.createElement("div",{className:"form__group ".concat(e.errorMessage?"form__group--error":"")},e.errorMessage&&n.createElement(me,{errorMessage:e.errorMessage}),n.createElement("label",{className:"form__label",htmlFor:e.field},e.label),n.createElement("input",{id:e.field,type:"text",className:"form__text-input",autoFocus:e.autofocus,autoComplete:"off",placeholder:e.placeholder,value:e.value,onBlur:e.onBlur,onChange:e.onChange}))},de=function(e){return n.createElement("div",{className:"form__group ".concat(e.value?"image-upload--filled":"")},e.errorMessage&&n.createElement(me,{errorMessage:e.errorMessage}),e.value.length<1&&n.createElement("input",{id:e.field,type:"file",accept:"image/*",className:"image-upload__input",value:e.value,onChange:e.onChange}),n.createElement("label",{className:"form__label image-upload__label ".concat(e.value?"image-upload__label-mb":""),htmlFor:e.field,"data-text-content":"Upload an image"},e.label),e.value&&n.createElement("div",{className:"image-upload__cover-wrap"},n.createElement("button",{onClick:e.removeImage,className:"image-upload__cover-delete"},n.createElement(N.Xm5,null)," Delete"),n.createElement("div",{className:"image-upload__cover"},n.createElement("img",{src:e.value,alt:e.bookTitle,nopin:"nopin"}))))},ve=function(e){return n.createElement("div",{className:"form__group ".concat(e.errorMessage?"form__group--error":"")},e.errorMessage&&n.createElement(me,{errorMessage:e.errorMessage}),n.createElement("label",{className:"form__label",htmlFor:e.field},e.label),n.createElement("textarea",{id:e.field,type:"text",className:"form__text-area",autoComplete:"off",value:e.value,onBlur:e.onBlur,onChange:e.onChange}))};function pe(e){return function(e){if(Array.isArray(e))return _e(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ge(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(){var e,t,r=(e=["\n                        fragment newBook on book {\n                          id\n                          title\n                          cover\n                          text\n                        }\n                      "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return Ee=function(){return r},r}function be(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function he(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){be(o,n,a,l,i,"next",e)}function i(e){be(o,n,a,l,i,"throw",e)}l(void 0)}))}}function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||ge(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){if(e){if("string"==typeof e)return _e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_e(e,t):void 0}}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const ke=(0,l.EN)((function(e){var t=(0,n.useContext)(O),r=ye((0,oe.C)(se,ue),2),a=r[0],o=r[1],l=ye((0,i.useMutation)(y),2),u=l[0];function s(){return(s=he(ae().mark((function e(t){var r;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.files[0])try{ie().imageFileResizer(r,280,600,"JPEG",80,0,(function(e){o({type:"COVER_CHANGE",value:e})}),"base64",140,300)}catch(e){console.log(e)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l[1].data,(0,n.useEffect)((function(){if(a.saveRequestCount){var r=function(){var r=he(ae().mark((function r(n){var l;return ae().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u({variables:{title:a.title.value,cover:a.cover.value,text:a.text.value},update:function(e,t){var r=t.data.createBook;e.modify({fields:{allBooks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.writeFragment({data:r,fragment:(0,c.Ps)(Ee())});return[n].concat(pe(t))}}})}});case 3:l=r.sent,o({type:"SAVE_REQUEST_FINISHED"}),e.history.push("/book/".concat(l.data.createBook.id)),t({type:"ADD_FLOATING_MESSAGE",value:"A new book has been successfully created"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}();o({type:"SAVE_REQUEST_STARTED"}),r()}}),[a.saveRequestCount]),n.createElement(C,{title:"Create New Book",narrow:!0},n.createElement("h1",{className:"text-center"},"Create a new book"),n.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"CHECK_TITLE",value:a.title.value}),o({type:"CHECK_COVER",value:a.cover.value}),o({type:"CHECK_TEXT",value:a.text.value}),o({type:"SUBMIT_REQUEST"})},className:"form"},n.createElement(fe,{autofocus:!0,field:"title",type:"text",label:"Title",errorMessage:a.title.errorMessage,onBlur:function(e){return o({type:"CHECK_TITLE",value:e.target.value})},onChange:function(e){return o({type:"TITLE_CHANGE",value:e.target.value})},placeholder:"Enter title of the book ..."}),n.createElement(de,{field:"imageupload",label:"Cover",bookTitle:a.title.value,value:a.cover.value,errorMessage:a.cover.errorMessage,removeImage:function(e){return o({type:"COVER_CHANGE",value:""})},onChange:function(e){return function(e){return s.apply(this,arguments)}(e)}}),n.createElement(ve,{field:"txtcontent",type:"text",label:"Text",errorMessage:a.text.errorMessage,onBlur:function(e){return o({type:"CHECK_TEXT",value:e.target.value})},onChange:function(e){return o({type:"TEXT_CHANGE",value:e.target.value})}}),n.createElement("button",{className:"button",disabled:a.isSaving||a.title.hasErrors||a.cover.hasErrors||a.text.hasErrors},a.isSaving?n.createElement(ce.frZ,{className:"button__icon button__loading-icon"}):n.createElement(N.EIY,{className:"button__icon"}),"Create new book")))})),Se={bookId:{value:""},title:{value:"",hasErrors:!1,errorMessage:""},cover:{value:"",hasErrors:!1,errorMessage:""},text:{value:"",hasErrors:!1,errorMessage:""},isSaving:!1,saveRequestCount:0,deleteRequestCount:0,isFetching:!0},xe=function(e){return n.createElement("div",{className:"confirm-modal"},n.createElement("span",{className:"confirm-modal__text"},"Permanently delete this book?"),n.createElement("div",{className:"confirm-modal__btn-wrap"},n.createElement("button",{onClick:function(t){return e.handleHideModalDisplay()},className:"confirm-modal__btn confirm-modal__btn--ghost"},"Cancel"),n.createElement("button",{onClick:function(t){return e.handleDelete()},className:"confirm-modal__btn"},"Delete")))};function we(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function Ce(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){we(o,n,a,l,i,"next",e)}function i(e){we(o,n,a,l,i,"throw",e)}l(void 0)}))}}function Ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ne(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const Ae=(0,l.EN)((function(e){var t=(0,l.UO)().bookId,r=Ie((0,n.useState)(!1),2),a=r[0],o=r[1],c=(0,n.useContext)(O),u=Ie((0,oe.C)(se,Se),2),s=u[0],m=u[1],f=(0,i.useQuery)(h,{variables:{id:t}}),d=f.loading,v=(f.error,f.data),p=Ie((0,i.useMutation)(_),2),E=p[0],b=(p[1].data,Ie((0,i.useMutation)(g),1)[0]);function y(){return(y=Ce(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.target.files[0])try{ie().imageFileResizer(r,280,600,"JPEG",80,0,(function(e){m({type:"COVER_CHANGE",value:e})}),"base64",140,300)}catch(e){console.log(e)}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Ce(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m({type:"CHECK_TITLE",value:s.title.value}),m({type:"CHECK_COVER",value:s.cover.value}),m({type:"CHECK_TEXT",value:s.text.value}),m({type:"SUBMIT_REQUEST"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,n.useEffect)((function(){s.deleteRequestCount&&function(){var t=Ce(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E({variables:{id:s.bookId.value},update:function(e,t){var r=t.data.deleteBook;e.modify({fields:{allBooks:function(e,t){var n=t.readField;return e.filter((function(e){return r.id!==n("id",e)}))}}})}});case 3:t.sent,e.history.push("/"),c({type:"ADD_FLOATING_MESSAGE",value:"This book has been successfully deleted"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[s.deleteRequestCount]),(0,n.useEffect)((function(){if(s.saveRequestCount){var t=function(){var t=Ce(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b({variables:{id:s.bookId.value,title:s.title.value,cover:s.cover.value,text:s.text.value}});case 3:t.sent,m({type:"SAVE_REQUEST_FINISHED"}),e.history.push("/book/".concat(s.bookId.value)),c({type:"ADD_FLOATING_MESSAGE",value:"This book has been successfully edited"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();m({type:"SAVE_REQUEST_STARTED"}),t()}}),[s.saveRequestCount]),(0,n.useEffect)((function(){v&&m({type:"FETCH_FINISHED",value:{bookId:v.book.id,title:v.book.title,cover:v.book.cover,text:v.book.text}})}),[d]),d||v?n.createElement(C,{title:"Edit Book",narrow:!0},d?n.createElement(R,null):n.createElement(n.Fragment,null,n.createElement("h1",{className:"text-center"},"Edit this book"),n.createElement("form",{onSubmit:k,className:"form"},n.createElement(fe,{autofocus:!0,field:"title",type:"text",label:"Title",value:s.title.value,errorMessage:s.title.errorMessage,onBlur:function(e){return m({type:"CHECK_TITLE",value:e.target.value})},onChange:function(e){return m({type:"TITLE_CHANGE",value:e.target.value})},placeholder:"Enter title of the book ..."}),n.createElement(de,{field:"imageupload",label:"Cover",bookTitle:s.title.value,value:s.cover.value,errorMessage:s.cover.errorMessage,removeImage:function(e){return m({type:"COVER_CHANGE",value:""})},onChange:function(e){return function(e){return y.apply(this,arguments)}(e)}}),n.createElement(ve,{field:"txtcontent",type:"text",label:"Text",value:s.text.value,errorMessage:s.text.errorMessage,onBlur:function(e){return m({type:"CHECK_TEXT",value:e.target.value})},onChange:function(e){return m({type:"TEXT_CHANGE",value:e.target.value})}})),n.createElement("div",{className:"button__group-row"},n.createElement("button",{onClick:k,className:"button",disabled:s.isSaving||s.title.hasErrors||s.cover.hasErrors||s.text.hasErrors},s.isSaving?n.createElement(ce.frZ,{className:"button__icon button__loading-icon"}):n.createElement(U.cpK,{className:"button__icon"}),"Edit this book"),n.createElement("div",{className:"button__delete-group"},n.createElement("button",{onClick:function(){o(!0)},className:"button button--delete"},n.createElement(N.Xm5,{className:"button__icon"})," Delete this book"),n.createElement(L.Z,{classNames:"confirm-modal",in:a,timeout:200,unmountOnExit:!0},n.createElement(xe,{handleDelete:function(){m({type:"DELETE_REQUEST"})},handleHideModalDisplay:function(){o(!1)}})))))):n.createElement(W,null)}));function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const Oe=function(){var e,t,r=(e=(0,n.useState)(localStorage.getItem("theme")),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],l=r[1];return(0,n.useEffect)((function(){"dark"==a?(localStorage.setItem("theme","dark"),document.body.classList.add("dark-theme")):(localStorage.setItem("theme","light"),document.body.classList.remove("dark-theme"))}),[a]),n.createElement("header",{className:"header"},n.createElement("div",{className:"header__wrap"},n.createElement(o.rU,{to:"/",className:"header__logo"},n.createElement(N.jXO,null)),n.createElement("div",{className:"header__tools"},n.createElement(o.rU,{to:"/create-book",tabIndex:"-1"},n.createElement("button",{className:"button"},n.createElement(N.EIY,{className:"button__icon"})," Add a Book")),n.createElement("button",{onClick:function(){l("light"==a?"dark":"light")},className:"header__theme-icon"},n.createElement(N.FM1,null)))))},Me=function(){var e=new Date;return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"footer__wrap"},n.createElement("p",null,"© ",e.getFullYear()," o.rasq")))},Fe=function(){var e=(0,n.useContext)(x);return n.createElement("div",{className:"floating-messages"},e.floatingMessages.map((function(e,t){return n.createElement("div",{key:t,className:"floating-messages__msg"},n.createElement(N.FJM,null),n.createElement("span",null,e))})))};function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const Re=function(){var e,t,r=(e=(0,n.useState)("true"===localStorage.getItem("hideDisclaimer")),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?je(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],o=r[1];return!a&&n.createElement("div",{className:"disclaimer"},n.createElement("div",{className:"disclaimer__txt"},"Hey! 👋   This ",n.createElement("strong",null,"demo version")," is not linked to my personnal database, so feel free to interact with it (create, edit, delete, ...)."),n.createElement("button",{onClick:function(){o(!0),localStorage.setItem("hideDisclaimer","true")},className:"button"},"Got it!"))},De={fontSize:localStorage.getItem("fontSize"),bookmarksVisible:!1,bookmarkIndex:4,floatingMessages:[],searchKeyword:"",finishedFilter:"true"===localStorage.getItem("finishedFilter"),alphabeticalFilter:"true"===localStorage.getItem("alphabeticalFilter")};function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?He(Object(r),!0).forEach((function(t){Ge(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Le=function(e,t){switch(t.type){case"TOGGLE_FONT_SIZE":return Pe(Pe({},e),{},{fontSize:"big"===e.fontSize?"small":"big"});case"ADD_FLOATING_MESSAGE":return Pe(Pe({},e),{},{floatingMessages:e.floatingMessages.concat(t.value)});case"TOGGLE_FINISHED_FILTER":return Pe(Pe({},e),{},{finishedFilter:!e.finishedFilter});case"TOGGLE_ALPHABETICAL_FILTER":return Pe(Pe({},e),{},{alphabeticalFilter:!e.alphabeticalFilter});case"UPDATE_SEARCH_KEYWORD":return Pe(Pe({},e),{},{searchKeyword:t.value});case"CHANGE_BOOKMARK":return Pe(Pe({},e),{},{bookmarkIndex:t.value});case"TOGGLE_BOOKMARK_VISIBILITY":return Pe(Pe({},e),{},{bookmarkVisible:!e.bookmarkVisible})}};function Be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ue=new c.fe({uri:"https://japanese-reader-public.herokuapp.com/graphql",cache:new c.h4});function $e(){var e,t,r=(e=(0,n.useReducer)(Le,De),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Be(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],c=r[1];return n.createElement(i.ApolloProvider,{client:Ue},n.createElement(x.Provider,{value:a},n.createElement(O.Provider,{value:c},n.createElement(o.UT,null,n.createElement(Fe,null),n.createElement(Oe,null),n.createElement(l.rs,null,n.createElement(l.AW,{path:"/",exact:!0},n.createElement(H,null)),n.createElement(l.AW,{path:"/book/:bookId",component:re,exact:!0}),n.createElement(l.AW,{path:"/book/:bookId/edit",component:Ae,exact:!0}),n.createElement(l.AW,{path:"/create-book"},n.createElement(ke,null)),n.createElement(l.AW,null,n.createElement(W,null))),n.createElement(Re,null),n.createElement(Me,null)))))}a.render(n.createElement($e,null),document.querySelector("#app"))}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0},t=[[3997,659]],n=()=>{};function a(){for(var n,a=0;a<t.length;a++){for(var o=t[a],l=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(l=!1)}l&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},l=l.slice();for(var e=0;e<l.length;e++)o(l[e]);return(n=a)()};var o=a=>{for(var o,l,[c,u,s,m]=a,f=0,d=[];f<c.length;f++)l=c[f],r.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);for(s&&s(r),i(a);d.length;)d.shift()();return m&&t.push.apply(t,m),n()},l=self.webpackChunksite=self.webpackChunksite||[],i=l.push.bind(l);l.push=o})(),r.x()})();