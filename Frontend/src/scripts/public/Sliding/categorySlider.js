import { computed, ref } from 'vue';

const categories = [
      { id: 1, category: 'Appetizers', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Delicious starters to kick off your meal' },
      { id: 2, category: 'Mainc', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Heartwarming main dishes to satisfy your hunger' },
      { id: 3, category: 'Desserts', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Sweet treats to end your meal on a high note' },
      { id: 4, category: 'Beverages', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Refreshing drinks to quench your thirst' },
      { id: 5, category: 'Salads', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Healthy and fresh salads for a lighter option' },
      { id: 6, category: 'Sandwiches', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Tasty sandwiches for a quick and satisfying bite' },
      { id: 7, category: 'Pasta', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Hearty pasta dishes for a comforting experience' },
      { id: 8, category: 'Specia', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Unique and flavorful drinks for a special touch' }
    ];


let  firstIndex = ref(0);

let  lastIndex = ref(3);

const categoryToShow = computed(()=>{
      return categories.splice(firstIndex.value,lastIndex.value);
});

const UseCategorySlider = function(){

      const rightCategories = function(){
            lastIndex.value +=2;
            console.log(lastIndex.value);
            return 0;
             if(window.innerWidth >640){
                  firstIndex +=2;
                  lastIndex +=2;
             }else if(window.innerWidth>768){
                  firstIndex +=3;
                  lastIndex +=3;
             }else if(window.innerWidth >1024){
                  firstIndex +=4;
                  lastIndex +=4;
             }
      }    

      const leftCategories = function(){
            if(window.innerWidth >640){
                  firstIndex -=2;
                  lastIndex -=2;
             }else if(window.innerWidth>768){
                  firstIndex -=3;
                  lastIndex -=3;
             }else if(window.innerWidth >1024){
                  firstIndex -=4;
                  lastIndex -=4;
             }
      }

      return {
            categories,
            leftCategories,
            rightCategories,
      }
}


export {categories,UseCategorySlider,categoryToShow};