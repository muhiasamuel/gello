import { Component } from '@angular/core';
type Product = {
  id: number;
  name: string;
  flavour: string;
  origin: string;
  main_ingredient: string;
  image_url: string;
  is_in_inventory: boolean;
  items_left: number;
  packaging: string[];
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

products: Product[] = [
  {
    id: 1,
    name: "Strawberry Delight",
    flavour: "Strawberry",
    origin: "USA",
    main_ingredient: "Strawberries",
    image_url: "../../../assets/images/images/rasberry jello.jpg",
    is_in_inventory: true,
    items_left: 50,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 2,
    name: "Lime Zing",
    flavour: "Lime",
    origin: "USA",
    main_ingredient: "Limes",
    image_url: "../../../assets/images/images/lime jello.jpg",
    is_in_inventory: true,
    items_left: 30,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 3,
    name: "Tropical Mango",
    flavour: "Mango",
    origin: "Mexico",
    main_ingredient: "Mangoes",
    image_url: "../../../assets/images/images/fruits jello.jpg",
    is_in_inventory: true,
    items_left: 20,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 4,
    name: "Cherry Bliss",
    flavour: "Cherry",
    origin: "USA",
    main_ingredient: "Cherries",
    image_url: "../../../assets/images/images/cherry bliss jello.jpg",
    is_in_inventory: false,
    items_left: 0,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 5,
    name: "Orange Spark",
    flavour: "Orange",
    origin: "USA",
    main_ingredient: "Oranges",
    image_url: "../../../assets/images/images/orange spark jello.jpg",
    is_in_inventory: true,
    items_left: 40,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 6,
    name: "Blueberry Burst",
    flavour: "Blueberry",
    origin: "Canada",
    main_ingredient: "Blueberries",
    image_url: "../../../assets/images/images/blue-gelatin-dessert-on-white-260nw-428054227.webp",
    is_in_inventory: true,
    items_left: 35,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 7,
    name: "Grape Escape",
    flavour: "Grape",
    origin: "USA",
    main_ingredient: "Grapes",
    image_url: "../../../assets/images/images/cherry bliss jello.jpg",
    is_in_inventory: false,
    items_left: 0,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 8,
    name: "Peach Perfection",
    flavour: "Peach",
    origin: "USA",
    main_ingredient: "Peaches",
    image_url: "../../../assets/images/images/peach jello.jpg",
    is_in_inventory: true,
    items_left: 25,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 9,
    name: "Raspberry Ripple",
    flavour: "Raspberry",
    origin: "USA",
    main_ingredient: "Raspberries",
    image_url: "../../../assets/images/images/rasberry jello.jpg",
    is_in_inventory: true,
    items_left: 45,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 10,
    name: "Pineapple Punch",
    flavour: "Pineapple",
    origin: "Hawaii",
    main_ingredient: "Pineapples",
    image_url: "../../../assets/images/images/pineaple jello.jpg",
    is_in_inventory: true,
    items_left: 15,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 11,
    name: "Coconut Dream",
    flavour: "Coconut",
    origin: "Thailand",
    main_ingredient: "Coconut",
    image_url: "../../../assets/images/images/coconut jello.jpg",
    is_in_inventory: false,
    items_left: 0,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 12,
    name: "Watermelon Wave",
    flavour: "Watermelon",
    origin: "USA",
    main_ingredient: "Watermelons",
    image_url: "../../../assets/images/images/watermelon jello.jpg",
    is_in_inventory: true,
    items_left: 10,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 13,
    name: "Passionfruit Bliss",
    flavour: "Passionfruit",
    origin: "Brazil",
    main_ingredient: "Passionfruit",
    image_url: "../../../assets/images/images/passion jello.jpg",
    is_in_inventory: true,
    items_left: 5,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 14,
    name: "Apple Twist",
    flavour: "Apple",
    origin: "USA",
    main_ingredient: "Apples",
    image_url: "../../../assets/images/images/apple jello.jpg",
    is_in_inventory: true,
    items_left: 60,
    packaging: ["20g", "50g", "100g", "200g"]
  },
  {
    id: 15,
    name: "Blackberry Crush",
    flavour: "Blackberry",
    origin: "USA",
    main_ingredient: "Blackberries",
    image_url:"../../../assets/images/black berry jello.jpg",
    is_in_inventory: false,
    items_left: 0,
    packaging: ["20g", "50g", "100g", "200g"]
  }
];

}
