import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product} from './../../Modals/Product'
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from './product-details.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(public dialog:MatDialog){}
  // selectedProduct!: Product;
  products = [
    {
      id: 1,
      name: "Strawberry Delight",
      flavour: "Strawberry",
      origin: "USA",
      main_ingredient: "Strawberries",
      image_url: "../../../assets/images/images/rasberry jello.jpg",
      is_in_inventory: true,
      items_left: 50,
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A classic strawberry-flavored treat made with real strawberries. Perfect for a refreshing dessert.",
      price_ksh: 80
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A tangy and zesty lime-flavored dessert that brings a refreshing citrus burst to your palate.",
      price_ksh: 75
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A tropical mango-flavored dessert made from juicy mangoes, offering a taste of the tropics in every bite.",
      price_ksh: 90
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A sweet and delightful cherry-flavored treat for those who love the rich taste of cherries.",
      price_ksh: 85
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "Bursting with the citrusy freshness of oranges, this dessert delivers a sweet and tangy spark.",
      price_ksh: 70
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A rich and flavorful blueberry treat with the perfect balance of sweetness and tartness.",
      price_ksh: 95
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "Enjoy the luscious and bold flavor of grapes in this sweet and juicy dessert.",
      price_ksh: 65
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A smooth and flavorful peach dessert that delivers a perfect balance of sweetness and fruitiness.",
      price_ksh: 85
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "Packed with the natural sweetness and tang of fresh raspberries, this dessert is a berry lover's delight.",
      price_ksh: 90
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A tropical pineapple-flavored dessert that adds a burst of exotic sweetness to your day.",
      price_ksh: 100
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A creamy and smooth coconut dessert that transports you to a tropical paradise with every bite.",
      price_ksh: 95
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A light and refreshing watermelon-flavored dessert, perfect for hot summer days.",
      price_ksh: 60
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A tropical passionfruit-flavored treat that offers a delightful blend of sweet and tart flavors.",
      price_ksh: 85
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
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A crisp and refreshing apple-flavored dessert with a sweet and tart twist.",
      price_ksh: 55
    },
    {
      id: 15,
      name: "Blackberry Crush",
      flavour: "Blackberry",
      origin: "USA",
      main_ingredient: "Blackberries",
      image_url:"../../../assets/images/images/black_berry_jello.jpeg",
      is_in_inventory: false,
      items_left: 0,
      packaging: ["20g", "50g", "100g", "200g"],
      description: "A rich and flavorful blackberry treat that's perfect for berry lovers.",
      price_ksh: 70
    }
  ];
  

totalProduct=this.products.length
totalInStock=this.products.filter(p=>p.is_in_inventory===true).length
totalOutOfStock=this.products.filter(p=>p.is_in_inventory===false).length

selectedFilterRadioButton: string = 'all'

@Input()
searchText:string =''

onFilterChanged(value:string){
  console.log(value);
  this.selectedFilterRadioButton = value
  
}

openProductDetailDialog(product:any):void{
  const dialogRef = this.dialog.open(ProductDetailsComponent,{
    width:'70%',
    height:"85%",
    position: {
      right:"2em"
    },
    data:{product}
  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed');
    
  });
}
}
