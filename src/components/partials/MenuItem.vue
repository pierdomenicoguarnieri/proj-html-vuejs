<script>
export default {
  name: "MenuItem",
  props:{
    name: String,
    dropdown: Array
  },
  data(){
    return{
      dropdownOpen: false,
      dropendOpen: false,
      savedIndex: null,
    }
  },
  methods:{
    getImage(img){
      return new URL(img, import.meta.url).href;
    }
  }
}
</script>

<template>
  <li
    class="text-uppercase d-flex align-items-center h-100 position-relative"
    @mouseenter="dropdownOpen = true"
    @mouseleave="dropdownOpen = false">

    <span class="me-1">{{name}}</span>
    <img v-if="dropdown.length > 0" class="chevron-down" :src="getImage('../../assets/img/image-7.svg')" alt="">

    <div
      class="pg-dropdown-menu position-absolute"
      v-if="dropdown.length > 0 && dropdownOpen">

      <nav>
        <ul class="list-unstyled">

          <li
            v-for="(dropdownItem, indexItem) in dropdown"
            :key="indexItem"
            class="text-white py-3 ps-2 border-bottom border-dark d-flex align-items-center position-relative"
            @mouseenter="dropendOpen = true, savedIndex = indexItem"
            @mouseleave="dropendOpen = false, savedIndex = null">

            <span>{{ dropdownItem.name }}</span>
            <img :src="getImage('../../assets/img/image-7.svg')" class="chevron-right" alt="" v-if="dropdownItem.dropendItems.length > 0">
            <div
              class="pg-dropend-menu position-absolute"
              v-if="dropdownItem.dropendItems.length > 0 && dropendOpen && indexItem == savedIndex">

              <nav>
                <ul class="list-unstyled">

                  <li
                    v-for="(dropendItem, index) in dropdownItem.dropendItems"
                    :key="index"
                    class="text-white py-3 ps-2 border-bottom border-dark d-flex align-items-center">

                    <span>{{ dropendItem }}</span>
                  </li>
                </ul>
              </nav>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    </li>
</template>

<style lang="scss" scoped>
@use "../../sass/partials/vars" as *;
  li{
    font-size: 0.8rem;
    font-weight: 700;
    color: $secondary-color;
    cursor: pointer;
    img.chevron-down{
      width: 20%;
    }
    .pg-dropdown-menu{
      top: 100%;
      width: 250px;
      background-color: black;
      img.chevron-right{
        position: absolute;
        top: 25%;
        right: 20px;
        transform: rotate(-90deg) scale(0.5) translate(0, -25%);
        filter: invert(100%);
      }
      li{
      .pg-dropend-menu{
        top: 0;
        left: 100%;
        width: 250px;
        background-color: black;
      }
    }
  }
}
</style>