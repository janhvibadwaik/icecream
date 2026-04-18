import { ChefHat, Cuboid, Truck, UtensilsCrossed } from 'lucide-react';
import Img1 from './assets/ice-cream-1.png';
import Img10 from './assets/ice-cream-10.png';
import Img2 from './assets/ice-cream-2.png';
import Img3 from './assets/ice-cream-3.png';
import Img4 from './assets/ice-cream-4.png';
import Img5 from './assets/ice-cream-5.png';
import Img6 from './assets/ice-cream-6.png';
import Img7 from './assets/ice-cream-7.png';
import Img8 from './assets/ice-cream-8.png';
import Img9 from './assets/ice-cream-9.png';
const OUR_SERVICES=[
    {id:1,
    title:"Dine-In",
    description:"Enjoy our delicious ice cream in a cozy and welcoming atmosphere. Our dine-in service offers a comfortable space for you to relax and savor your favorite flavors.",
    icon:<UtensilsCrossed height={"70px"} width={"70px"}/>
    },
    {id:2,
    title:"Takeaway",
    description:"Craving our ice cream on the go? Our takeaway service allows you to grab your favorite flavors and enjoy them wherever you like. Perfect for a quick treat or a picnic in the park.",
    icon:<Cuboid height={"70px"} width={"70px"}/>
    },
    {id:3,
    title:"Delivery",
    description:"Can't make it to our shop? No problem! We offer delivery services so you can enjoy our delicious ice cream from the comfort of your home. Just place your order and we'll bring the sweetness to you.",
    icon:<Truck height={"70px"} width={"70px"}/>
    },
    {id:4,
    title:"Catering",
    description:"Planning a special event? Our catering service provides a delightful selection of our ice cream flavors for your guests. Whether it's a birthday party, wedding, or corporate event, we have the perfect treats to make it memorable.",
    icon:<ChefHat height={"70px"} width={"70px"}/>
    },
]
const PRODUCTS=[{
    id:1,
    title:"IceCream Sandwich",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:100,
    image:Img1
},{
    id:2,
    title:"Chocolate IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:150,
    image:Img2
},
{
    id:3,
    title:"Vanilla IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:120,
    image:Img3
},
{
    id:4,
    title:"Strawberry IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:130,
    image:Img4
},
{
    id:5,
    title:"Mint IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:110,
    image:Img5
},{
    id:6,
    title:"Cookie Dough IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:140,
    image:Img6
},
{
    id:7,
    title:"Pistachio IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:160,
    image:Img7
},{
    id:8,
    title:"Coffee IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:170,
    image:Img8
},
{
    id:9,
    title:"Caramel IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:180,
    image:Img9
},{
    id:10,
    title:"Lemon IceCream ",
    description:"A delicious ice cream sandwich with a variety of flavors to choose from. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    price:190,
    image:Img10
},];
export { OUR_SERVICES, PRODUCTS };
