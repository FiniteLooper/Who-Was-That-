$page=function(){function r(e){var t=this;t.Title=ko.observable(e.Title);t.Year=ko.observable(e.Year);t.Rating=ko.observable(e.Rated);t.Description=ko.observable(e.Plot);t.Poster=ko.observable(e.Poster);t.ImdbLink=ko.observable("http://imdb.com/title/"+e.imdbID);t.PeopleGroups=ko.observableArray([new i(e.Actors,"Actor:","Actors"),new i(e.Director,"Director:","Directors"),new i(e.Writer,"Writer:","Writers")])}function i(e,t,n){var r=this;r.People=$.map(e.split(","),$.trim);r.Title=r.People.length===1?t:n}function s(e,t){function n(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r={label:e[n].title+" <small>("+e[n].description.split(",")[0]+")</small>",value:e[n].title.replace("&#x27;","'").replace("&#x26;","&"),id:e[n].id};t[n]=r}return t}$.getJSON("proxy.php",e,function(e,r,i){var s=[];s=s.concat(n(e.title_popular));s=s.concat(n(e.title_exact));!e.title_popular&&!e.title_exact&&(s=s.concat(n(e.title_approx)));t(s)})}function o(i,s){var o="http://www.imdbapi.com/?i="+s.item.id,a=$(this);a.data(t,!0);var f=!0;e.each(function(e,n){f=f&&$(n).data(t)});n.SearchComplete(f);$.getJSON(o,function(e,t,i){n.Movies.push(new r(e));var s=new Array;$.each(n.Movies(),function(e,t){s.push($.map(t.PeopleGroups(),function(e){return e.People}))});n.Matches(u(s))})}function u(e){var t,n,r=e.length,i=Infinity;while(r)if(e[--r].length<i){i=e[r].length;t=r}n=e.splice(t,1)[0];return n.filter(function(t,r){if(n.indexOf(t)==r)return e.every(function(e){return e.indexOf(t)!=-1})}).sort()}function a(){var t={Title:"Independence Day",Year:"1996",Rated:"PG-13",Released:"03 Jul 1996",Runtime:"2 h 33 min",Genre:"Action, Adventure, Sci-Fi, Thriller",Director:"Roland Emmerich",Writer:"Dean Devlin, Roland Emmerich",Actors:"Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell",Plot:"The aliens are coming and their goal is to invade and destroy. Fighting superior technology, Man's best weapon is the will to survive.",Poster:"http://ia.media-imdb.com/images/M/MV5BMTMwODY3NzQzNF5BMl5BanBnXkFtZTcwNzUxNjc0MQ@@._V1_SX640.jpg",imdbRating:"6.7",imdbVotes:"225,011",imdbID:"tt0116629",Response:"True"},i={Title:"Men in Black",Year:"1997",Rated:"PG-13",Released:"02 Jul 1997",Runtime:"1 h 38 min",Genre:"Action, Comedy, Sci-Fi",Director:"Barry Sonnenfeld",Writer:"Lowell Cunningham, Ed Solomon",Actors:"Tommy Lee Jones, Will Smith, Linda Fiorentino, Vincent D'Onofrio",Plot:"A streetwise NYPD detective joins a secret organization that polices extraterrestrial affairs on Earth.",Poster:"http://ia.media-imdb.com/images/M/MV5BNzA2MzI5Nzc0N15BMl5BanBnXkFtZTcwODE2NDU2MQ@@._V1_SX640.jpg",imdbRating:"7.1",imdbVotes:"195,825",imdbID:"tt0119654",Response:"True"};n.Movies(new r(t));n.Movies(new r(i));e.first().val("Independence Day").trigger("autocompleteselect");e.last().val("Men in Black").trigger("autocompleteselect")}var e,t="completesearch",n={SearchComplete:ko.observable(!1),Movies:ko.observableArray([]),Matches:ko.observableArray([])};$(function(){ko.applyBindings(n);e=$("#search").children("input");e.autocomplete({minLength:2,source:s,select:o}).each(function(){$(this).data("autocomplete")._renderItem=function(e,t){return $("<li></li>").data("item.autocomplete",t).append("<a>"+t.label+"</a>").appendTo(e)}});a()});return{viewModel:n}}();