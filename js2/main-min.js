var $WhoWasThat=function(){function e(){$("#search").children("input").autocomplete({minLength:2,source:t,select:n}).each(function(){$(this).data("autocomplete")._renderItem=function(e,t){return $("<li></li>").data("item.autocomplete",t).append("<a>"+t.label+"</a>").appendTo(e)}})}function t(e,t){function n(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r={label:e[n].title+" <small>("+e[n].description.split(",")[0]+")</small>",value:e[n].title.replace("&#x27;","'").replace("&#x26;","&"),id:e[n].id};t[n]=r}return t}$.getJSON("proxy.php",e,function(e,r,i){var s=[];s=s.concat(n(e.title_popular));s=s.concat(n(e.title_exact));!e.title_popular&&!e.title_exact&&(s=s.concat(n(e.title_approx)));t(s)})}function n(e,t){var n="http://www.imdbapi.com/?i="+t.item.id,i=$(this);$.getJSON(n,function(e,t,n){i.data("movieData",e);var s=i.siblings("input"),o=!0;s.each(function(){Boolean(s.data("movieData"))||(o=!1)});o&&r(i.add(s))})}function r(e){function n(e,t,n,r,i){var s=$.map(e.split(","),$.trim),o="",u="";if(s.length===1){n.children("strong").text(i+":");o=$.trim(s[0]);n.show()}else if(s.length>1){n.children("strong").text(r);u="<li>"+s.join("</li><li>")+"</li>";n.show()}n.children("span").text(o);n.children("ul").html(u);return s}var t=$("#results").children(".movie");e.each(function(e){var r=$(this).data("movieData"),i=t.eq(e),s=i.children();s.filter("img").prop("src",r.Poster);s.filter("h2").html(r.Title+" <small>("+r.Year+")</small>");s.filter("a").prop("href","http://imdb.com/title/"+r.imdbID);s.filter("p").text(r.Plot);var o=[];o=o.concat(n(r.Actors,o,s.filter(".js-actors"),"Actors","Actor"));o=o.concat(n(r.Director,o,s.filter(".js-directors"),"Directors","Director"));o=o.concat(n(r.Writer,o,s.filter(".js-writers"),"Writers","Writer"));i.data("allNames",o)});$("#results").show();i(t)}function i(e){function t(e){var t,n,r=e.length,i=Infinity;while(r)if(e[--r].length<i){i=e[r].length;t=r}n=e.splice(t,1)[0];return n.filter(function(t,r){if(n.indexOf(t)==r)return e.every(function(e){return e.indexOf(t)!=-1})}).sort()}var n=[];e.each(function(e){n.push($(this).data("allNames"))});var r=t(n);if(r.length){var i="<li>"+r.join("</li><li>")+"</li>";$("#matches").show().find("ul").html(i);$("#no-matches").hide();var s=$("#results").find(".movie .list").find("li, span");$.each(r,function(e,t){s.filter(":contains("+t+")").addClass("highlight")});$("#results .movie .list ul li").each(function(){this.innerText})}else{$("#no-matches").show();$("#matches").hide()}}function s(){var e=$("input");e.first().val("Independence Day").data("movieData",{Title:"Independence Day",Year:"1996",Rated:"PG-13",Released:"03 Jul 1996",Runtime:"2 h 33 min",Genre:"Action, Adventure, Sci-Fi, Thriller",Director:"Roland Emmerich",Writer:"Dean Devlin, Roland Emmerich",Actors:"Will Smith, Bill Pullman, Jeff Goldblum, Mary McDonnell",Plot:"The aliens are coming and their goal is to invade and destroy. Fighting superior technology, Man's best weapon is the will to survive.",Poster:"http://ia.media-imdb.com/images/M/MV5BMTMwODY3NzQzNF5BMl5BanBnXkFtZTcwNzUxNjc0MQ@@._V1_SX640.jpg",imdbRating:"6.7",imdbVotes:"225,011",imdbID:"tt0116629",Response:"True"});e.last().val("Men in Black").data("movieData",{Title:"Men in Black",Year:"1997",Rated:"PG-13",Released:"02 Jul 1997",Runtime:"1 h 38 min",Genre:"Action, Comedy, Sci-Fi",Director:"Barry Sonnenfeld",Writer:"Lowell Cunningham, Ed Solomon",Actors:"Tommy Lee Jones, Will Smith, Linda Fiorentino, Vincent D'Onofrio",Plot:"A streetwise NYPD detective joins a secret organization that polices extraterrestrial affairs on Earth.",Poster:"http://ia.media-imdb.com/images/M/MV5BNzA2MzI5Nzc0N15BMl5BanBnXkFtZTcwODE2NDU2MQ@@._V1_SX640.jpg",imdbRating:"7.1",imdbVotes:"195,825",imdbID:"tt0119654",Response:"True"});r(e)}return{Init:e,test:s}}();$(function(){$WhoWasThat.Init();$WhoWasThat.test()});