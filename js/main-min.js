var $WhoWasThat={Init:function(){$WhoWasThat.Search.SetupAutoComplete()},Search:{SetupAutoComplete:function(){$("#search").children("input").autocomplete({minLength:2,source:$WhoWasThat.Search.PerformSearch,select:$WhoWasThat.Search.MakeSelection}).each(function(){$(this).data("autocomplete")._renderItem=function(e,t){return $("<li></li>").data("item.autocomplete",t).append("<a>"+t.label+"</a>").appendTo(e)}})},PerformSearch:function(e,t){function n(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r={label:e[n].title+" <small>("+e[n].description.split(",")[0]+")</small>",value:e[n].title.replace("&#x27;","'").replace("&#x26;","&"),id:e[n].id};t[n]=r}return t}$.getJSON("proxy.php",e,function(e,r,i){var s=[];s=s.concat(n(e.title_popular));s=s.concat(n(e.title_exact));!e.title_popular&&!e.title_exact&&(s=s.concat(n(e.title_approx)));t(s)})},MakeSelection:function(e,t){var n="http://www.imdbapi.com/?i="+t.item.id,r=$(this);$.getJSON(n,function(e,t,n){r.data("movieData",e);var i=r.siblings("input"),s=!0;i.each(function(){Boolean(i.data("movieData"))||(s=!1)});s&&$WhoWasThat.Results.Display(r.add(i))})}},Results:{Display:function(e){function n(e,t,n,r,i){var s=$.map(e.split(","),$.trim),o="",u="";if(s.length===1){n.children("strong").text(i+":");o=$.trim(s[0]);n.show()}else if(s.length>1){n.children("strong").text(r);u="<li>"+s.join("</li><li>")+"</li>";n.show()}n.children("span").text(o);n.children("ul").html(u);return s}var t=$("#results").children(".movie");e.each(function(e){var r=$(this).data("movieData"),i=t.eq(e),s=i.children();s.filter("img").prop("src",r.Poster);s.filter("h2").html(r.Title+" <small>("+r.Year+")</small>");s.filter("a").prop("href","http://imdb.com/title/"+r.imdbID);s.filter("p").text(r.Plot);var o=[];o=o.concat(n(r.Actors,o,s.filter(".js-actors"),"Actors","Actor"));o=o.concat(n(r.Director,o,s.filter(".js-directors"),"Directors","Director"));o=o.concat(n(r.Writer,o,s.filter(".js-writers"),"Writers","Writer"));i.data("allNames",o)});$("#results").show();$WhoWasThat.Results.FindMatches(t)},FindMatches:function(e){function t(e){var t,n,r=e.length,i=Infinity;while(r)if(e[--r].length<i){i=e[r].length;t=r}n=e.splice(t,1)[0];return n.filter(function(t,r){if(n.indexOf(t)==r)return e.every(function(e){return e.indexOf(t)!=-1})}).sort()}var n=[];e.each(function(e){n.push($(this).data("allNames"))});var r=t(n);if(r.length){var i="<li>"+r.join("</li><li>")+"</li>";$("#matches").show().find("ul").html(i);$("#no-matches").hide();var s=$("#results").find(".movie .list").find("li, span");$.each(r,function(e,t){s.filter(":contains("+t+")").addClass("highlight")});$("#results .movie .list ul li").each(function(){this.innerText})}else{$("#no-matches").show();$("#matches").hide()}}}};$($WhoWasThat.Init);