$(document).ready(function(){
     
     let collection = [
          {
            title: "The Neighboring Aarya-san who Sometimes Acts Affectionate and Murmuring in Russian",
            cover: "/cover/The-Neighboring-Aaryasan-who-Sometimes-Acts-Affectionate-and-Murmuring-in-Russian.jpeg",
            link: ""
          },
          {
               title: "How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me?",
               cover: "/cover/How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me.jpg",
               source: "/series/How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me.html"
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
     
})
