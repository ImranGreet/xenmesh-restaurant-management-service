import slides from "./SlideshowItems";

let currentSlideElement = 0;
let itemIndex = 0;

class SlideShow {

   constructor(slidesProperties){
      this.slidesContainer = slidesProperties.value;
      this.propertyLength = slidesProperties.value.length;
      this.currentSlide = this.slidesContainer.at(itemIndex);
      this.currentSlider();
   }  

    currentSlider (){
      currentSlideElement= this.currentSlide;
      return currentSlideElement;
    }

   nextSlider(){
    
      if(itemIndex<this.propertyLength){
            itemIndex+=1;
            currentSlideElement = this.slidesContainer[itemIndex];
            return currentSlideElement;
      }

      if(itemIndex>this.propertyLength){
            itemIndex-=1;
            currentSlideElement = this.slidesContainer[itemIndex];
            return currentSlideElement;
      }

   }

   previusSlider(){

      if(itemIndex<this.propertyLength){
            itemIndex-=1;
            currentSlideElement = this.slidesContainer[itemIndex];
            return currentSlideElement;
      }

      if(itemIndex>this.propertyLength){
            itemIndex+=1;
            currentSlideElement = this.slidesContainer[itemIndex];
            return currentSlideElement;
      }
      
   }
   
}


const slidingController = new SlideShow(slides);


export  {slidingController,currentSlideElement};