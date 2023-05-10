import {reactive} from "vue";

export const store = reactive({
  showModal: false,
  showBackUp: false,
  counter:[
    {
      name: "clients",
      text: "satisfied clients",
      plus: "",
      numberToShow: 0,
      limit: 780,
      interval: 5
    },
    {
      name: "projects",
      text: "our projects",
      plus: "+",
      numberToShow: 0,
      limit: 20,
      interval: 210
    },
    {
      name: "coffe",
      text: "cup of coffee",
      plus: "",
      numberToShow: 0,
      limit: 10000,
      interval: 1
    },
    {
      name: "awards",
      text: "our awards",
      plus: "",
      numberToShow: 0,
      limit: 12,
      interval: 340
    }
  ]
})