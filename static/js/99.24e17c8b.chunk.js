"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[99],{819:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s=n(243),i="32cb02de168bb06bb4749c02122c4141";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t.moviesId,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={fetchTrendingMovies:u,fetchMoviesDetails:o,fetchSearchMovie:p,fetchMovieCast:f,fetchMovieReviews:h};t.Z=v},99:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),s=n(819),i="cast_list__BjE1s",u="cast_item__rFGCo",o="cast_img__ABSva",p=n(184);function f(){var e=(0,c.UO)().moviesId,t=(0,a.useState)(),n=(0,r.Z)(t,2),f=n[0],h=n[1];return(0,a.useEffect)((function(){s.Z.fetchMovieCast(e).then((function(e){h(e.cast)}))}),[e]),(0,p.jsx)(p.Fragment,{children:f&&(0,p.jsx)("ul",{className:i,children:f.map((function(e){return(0,p.jsxs)("li",{className:u,children:[(0,p.jsx)("img",{className:o,src:e.profile_path?"https://image.tmdb.org/t/p/w342".concat(e.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",width:250}),(0,p.jsx)("h3",{children:e.name}),(0,p.jsxs)("h4",{children:["Character: ",e.character]})]},e.id)}))})})}}}]);
//# sourceMappingURL=99.24e17c8b.chunk.js.map