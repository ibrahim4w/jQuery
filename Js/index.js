/// <reference types="../JQuery/@types/jquery" />

// Side Navbar
$('.closeMark').on('click',function(){
    $('.side-nav').css('width', 0);
    $('.home-body').css('margin-left', 0);
})
$('.openNav').on('click',function(){
    $('.side-nav').css('width', 250);
    $('.home-body').css('margin-left', 250);
});

// Scroll Section
$('.navLink').on('click',function(e){
    let hrefSection = $(e.target).attr('href');
    let offsetSection = $(hrefSection).offset().top;
    $('html, body').animate({scrollTop:offsetSection},2000);
});

// Accordion                                 
$('#Accordion h3').on('click', function(e) {   
    let nextDiv = $(e.target).next();        
    if (nextDiv.is(':visible')) {            
        nextDiv.slideUp(500);                  
    } else {                                
        $('#Accordion div').slideUp(500);     
        nextDiv.slideToggle(500);            
    }                                        
});  

// Counter

let countTo = "2024-6-20 10:10:00";
let futureDate = new Date(countTo);
futureDate = (futureDate.getTime()/1000);

setInterval(() => {
    let currentDate = new Date();
    let currentTime = (currentDate.getTime()/1000);
    let timeLeft = futureDate - currentTime ;
    

    let days = Math.floor(timeLeft / (24*60*60));
    let hours = Math.floor((timeLeft - (days * (24*60*60)))/(60*60)); 
    let minutes = Math.floor((timeLeft - (days * (24*60*60)) - (hours * (60*60))) / 60);
    let seconds = Math.floor((timeLeft - (days * (24*60*60)) - (hours * (60*60)) - (minutes * 60 )));
    document.querySelector(".days").innerHTML = `${days} D`;
    document.querySelector(".hours").innerHTML = `${hours} h`;
    document.querySelector(".minutes").innerHTML = `${minutes} m`;
    document.querySelector(".seconds").innerHTML = `${seconds} s`;
},1000);

// Textarea

let maxChars = 100;
$('textarea').keyup(function(){
    let textLength = $(this).val.length;
    let textLeft = maxChars - textLength ;
    
    if(textLeft <= 0){
        $('#chars').text('Your available character finished');
    }
    else{
        $('#chars').text(textLeft);
    }
});








                                        

