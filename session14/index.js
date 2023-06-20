import { Games } from "./games.js";

let games=new Games();


$(document).ready(function(){
    $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
    })
   

});

