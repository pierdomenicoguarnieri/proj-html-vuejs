const navBar = [
  {
    name: "home",
    dropdownItems:[]
  },
  {
    name: "blog",
    dropdownItems:[]
  },
  {
    name: "pages",
    dropdownItems:[
      {
        name: "services",
        dropendItems:[]
      },
      {
        name: "our work flow",
        dropendItems:[]
      },
      {
        name: "video thumbnail type",
        dropendItems:[]
      },
    ]
  },
  {
    name: "about",
    dropdownItems:[]
  },
  {
    name: "contacts",
    dropdownItems:[]
  },
  {
    name: "gallery",
    dropdownItems:[]
  },
  {
    name: "shop",
    dropdownItems:[
      {
        name: "shop pages",
        dropendItems:["my account", "checkout", "cart"]
      },
      {
        name: "product type",
        dropendItems:["external/affiliate product", "group product", "simple product", "variable product"]
      }
    ]
  }
];

const navBarSocial = [
  {
    name: "Facebook",
    img_path:"9"
  },
  {
    name: "Twitter",
    img_path:"10"
  },
  {
    name: "YouTube",
    img_path:"11"
  },
  {
    name: "Instagram",
    img_path:"12"
  },
]

export {navBar, navBarSocial};