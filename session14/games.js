import {Details} from "./details.js";
import{UI} from "./uigames.js"
export class Games{
   constructor(){
       this.links= Array.from(document.querySelectorAll(".nav-item a"));
       for(var i =0; i<this.links.length; i++){
           this.links[i].addEventListener("click",(e)=>{
               document.querySelector(".nav-item .active").classList.remove("active")
               e.target.classList.add("active")
               
               this.getgames(e.target.dataset.category)

           })
           this.getgames("mmorpg")
       }

       this.ui =new UI()
   }
   async getgames(category){
 
       const options = {
           method: 'GET',
           headers: {
               'X-RapidAPI-Key': '7ff8eacd55msha41fd62d14ec11dp172c34jsnada4db98fe17',
               'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
           }
       };

       let Api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
       let result=await Api.json()
       if(result){
           this.ui.displayGames(result)
           console.log(result);
           this.pageSwitch()
       }
   }
   
   pageSwitch(){
       let cards = Array.from(document.querySelectorAll(".card"));
      
       for(var i=0; i<cards.length ; i++){
           cards[i].addEventListener("click",(e)=>{
              
               let id= e.currentTarget.getAttribute("data-id")
               if(id != null){
                   console.log(id);
                   let ui = new Details(id)
               }

           })
       }
      
   }
   

   viewDetails(gameId){
       document.querySelector(".games").classList.add("d-none")
       document.querySelector(".details").classList.remove("d-none")
   }
  
  

}

