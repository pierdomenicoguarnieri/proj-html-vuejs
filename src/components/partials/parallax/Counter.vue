<script>
import {store} from "../../../data/store.js";
export default {
  name: "Counter",
  data(){
    return{
      store
    }
  },
  methods:{
    /**
     * This function calls for each element of the array a function that modifies their value
     */
    callInterval(){
      store.counter.forEach((element, index) => {
        this.startCount(element.numberToShow, element.limit, element.interval, element.name, index);
      });
    },
    /**
     * This function, depending on the name of the name of the variable and on th value of the number adds 1 or 10 to the starting number and continues to do so until the limit is reached. Each operation happens every "x" ms, the amount of ms between each operation is determined by the interval wich is provided by a database, in this case the information is saved in store.js
     * 
     * @param {number} number 
     * @param {number} limit 
     * @param {number} interval 
     * @param {string} variable 
     * @param {number} index 
     */
    startCount(number, limit, interval, variable, index){
      setInterval(() => {
        if (number < limit){
          switch (variable) {
            case "coffe":
                number += 10;
                store.counter[index].numberToShow = number;
              break;
          
            default:
                number++;
                store.counter[index].numberToShow = number;
              break;
          }
        }
      }, interval);
    },
    /**
     * This function checks if the element with id "#parallax1" is visible or not. It does so by comparing the value of window.scrollY with pointOfTrggre wich is calculated by subtracting the offsetTop of the element with 2 times the offsetHeight of the element. This check is repeated each time the user scrolls, the if the element is visible it triggers callInterval(), if the element is not visible it does nothing.
     */
    checkIfVisible(){
      const parallax = document.getElementById("parallax1");
      const poitOfTrigger = parallax.offsetTop -  (parallax.offsetHeight * 2);
      let scrollY;
      window.addEventListener('scroll',() =>{
        scrollY = window.scrollY
        scrollY > poitOfTrigger ? this.callInterval() : null
      })
    }
  },
  mounted(){
    this.checkIfVisible();
  }
}
</script>

<template>
  <div class="pg-counter-container py-5" id="parallax1">
    <div class="container">
      <div class="row row-cols-4 py-5">
        <div class="col py-3" v-for="element in store.counter" :key="element.name" >
          <span class="title">{{ element.numberToShow }}{{ element.plus }}</span>
          <span>{{ element.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/vars" as *;
  .col{
    color: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      font-size: 18px;
      text-transform: uppercase;
      font-weight: $fw-bold;
    }
    .title{
      font-size: $fs-x-larger;
    }
  }
</style>