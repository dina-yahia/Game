export class UI{
    constructor(response){
      this.response = response;
      this.disc=""
      console.log(this.response);
      if(this.response !=undefined){
        this.gameDiscr(this.response);
      
      }
  
    }
     
      displayGames (data){
      let cartona=``;
      for (let i = 0; i <data.length; i++) {
         cartona+=`
         <div class="hover col-md-3 mb-3">
          <div data-id=${data[i].id} class="card"  role="button">
         <div class="card bg-dark shadow">
          <div class="p-3"> <img src=${data[i].thumbnail} class="card-img-top w-100 rounded-2" id="img" alt="..."></div>
           <div class="card-body">
             <div class="cont d-flex justify-content-between"> 
               <h6 class=" card-title text-white" id="title">${data[i].title}</h6>
               <span class="badge text-bg-primary p-2">Free</span>
             </div>
            
             <p class="card-text small text-center opacity-50">${data[i].short_description}</p>
           </div>
           <div class="card-footer d-flex justify-content-between">
             <small class="badge badge-color">${data[i].genre}</small>
             <small class="badge badge-color">${data[i].platform}</small>
           </div>
         </div>
         </div>
       </div>
         `
      }
          document.getElementById("gameCards").innerHTML=cartona;
      }
  
  
  
  
  
      gameDiscr(data){
        console.log(data);
       this.disc=`
        <div class="col-md-3">
          <div class="images">
            <img src=${data.thumbnail} class="mt-1 w-100" alt="">
          </div> 
        </div>
          <div class="disc-cont col-md-9 text-white">
           <h2>Title: ${data.title}</h2>
           
           <p>Category: <span class="badge text-bg-info">${data.genre}</span> </p>
           <p>Platform: <span  class="badge text-bg-info"> ${data.platform}</span></p>
           <p>Status: <span  class="badge text-bg-info">${data.status}</span></p>
           <p>${data.description}</p>
         
           <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>
            `
          document.getElementById("details").innerHTML=this.disc;
  
      }
      
  }
  $('#detailsGames').ready(function(){
    $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
    })
   

});

  