$(document).ready(function(){
     
     let collection = [
        {
          title: "I Kissed My Girlfriend's Little Sister",
          cover: "https://cdn.novelupdates.com/images/2020/10/i-kissed-my-girlfriends-little-sister.jpeg",
          source: "/series/i-kissed-my-girlfriends-little-sister.html"
        },
        {
        	title: "Angel Only Drinks Soda", cover: "/cover/Angel-Only-Drinks-Soda.jpg", source: "/series/Angel-Only-Drinks-Soda.html"
        },
       {
         title: "How to Keep a Distance from a Beautiful Girl",
         cover: "/cover/keepadistance1.jpg",
         source: "/series/How to Keep a Distance from a Beautiful Girl.html"
       },
       {
         title: "86 (Eighty-Six)",
         cover: "/cover/Eighty-Six.png",
         source: "/series/eighty-six-light-novel.html"
       },
       {
         title: "My Wife May Be a Pervert – My Childhood Friend, Who Had No Interest in Me, Fell in Love With Me as Soon as We Got Married",
         cover: "/cover/My-Wife-May-Be-a-Pervert-My-Childhood-Friend-Who-Had-No-Interest-in-Me-Fell-in-Love-With-Me-as-Soon-as-We-Got-Married.jpg",
         source: "/series/My-Wife-May-Be-a-Pervert-My-Childhood-Friend-Who-Had-No-Interest-in-Me-Fell-in-Love-With-Me-as-Soon-as-We-Got-Married.html"
       },
          {
            title: "The Neighboring Aarya-san who Sometimes Acts Affectionate and Murmuring in Russian",
            cover: "/cover/The-Neighboring-Aaryasan-who-Sometimes-Acts-Affectionate-and-Murmuring-in-Russian.jpeg",
             source: "/series/The-Neighboring-Aaryasan-who-Sometimes-Acts-Affectionate-and-Murmuring-in-Russian.html"
          },
          {
               title: "How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me?",
               cover: "/cover/How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me.jpg",
               source: "/series/How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me.html"
          },{
          	title: "People Made Fun of Me For Being Jobless but Its Not Bad at All",
              cover: "/cover/Not-Bad-At-All.jpg",
              source: "/series/People Made Fun of Me For Being Jobless but Its Not Bad at All.html"
          }
     ]
     
     let ul = $(".item-post");
     let col = $(".collection");
     let res = $("#result");
     for(let item=0;item < collection.length;item++){
          
          //Create Element
          let li = document.createElement("li");
          let li2 = document.createElement("li");
          let a = document.createElement("a");
          let img = document.createElement("img");
          let p = document.createElement("p");
          let link = document.createElement("a");
          
          //Set Attribute
          a.setAttribute("href","");
          link.setAttribute("href","");
          img.setAttribute("src","");
          
          //Emplement
          img.src = collection[item].cover;
          p.textContent = collection[item].title;
          a.href = collection [item].source;
          link.textContent = collection[item].title;
          link.href = collection [item].source;
          
          a.appendChild(img);
          a.appendChild(p);
          li.appendChild(a);
          ul.append(li);
          
          li2.appendChild(link);
          col.append(li2);
          
          let li3 = document.createElement("li");
          let a3 = document.createElement("a");
          let img3 = document.createElement("img");
          
          a3.textContent = collection[item].title;
          a3.href = collection [item].source;
          img3.src = collection[item].cover;
          
          li3.appendChild(img3);
          li3.appendChild(a3);
          res.append(li3);
          
     }
     
     //Sorting List
    var mylist = $('.collection');
    var listitems = mylist.children('li').get();
    listitems.sort(function(a, b) {
       return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
    })
    $.each(listitems, function(idx, itm) { mylist.append(itm); });
    
})
