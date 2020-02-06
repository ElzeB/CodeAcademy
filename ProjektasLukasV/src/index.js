import './assets/styles/app.scss';
import './assets/images/Sliced_Bread.jpg';
import './assets/images/Pineapple.jpg';
import './assets/images/Marble_Surface.jpg';
import './assets/images/logoresized.png';
import './assets/images/Facebook.png';
import './assets/images/Instagram.png';
import './assets/images/Pinterest.png';
import './assets/images/press-white.png';
import './assets/images/commercial.png';
import './assets/images/event.png';
import './assets/images/cookies.jpg';
import './assets/images/yogurt.jpg';
import './assets/images/table.jpg';
import './assets/images/pumpkin.jpg';
import './assets/images/pancakes.jpg';
import './assets/images/breakfast.jpg';
import './assets/images/cookies-background.jpg';
import './assets/images/tiles.jpg';
import './assets/images/wood.jpg';
import './assets/images/couple.jpg';
import './index.hbs';

$(document).ready(function() {
    $(window).scroll( function(){
        $('.services__section__name, .services__section__columns__press__name, .services__section__columns__commercial__name, .services__section__columns__events__name').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.services__section__columns__press__description, .services__section__columns__commercial__description, .services__section__columns__events__description').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1500);
            }
            
        }); 
    });
});


