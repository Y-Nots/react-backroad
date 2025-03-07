import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
    {id:1, href:'#home' , text:'home'},
    {id:2, href:'#about' , text:'about'},
    {id:3, href:'#services' , text:'services'},
    {id:4, href:'#tours' , text:'tours'},
]

export const socialMediaLinks = [
    {id:1, href:'https://www.twitter.com' , icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com' , icon:'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com' , icon:'fab fa-squarespace'},
]

export const services = [
    {id:1, icon:'fas fa-wallet fa-fw' , title:'saving money',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:2, icon:'fas fa-tree fa-fw' , title:'endless hiking',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:3, icon:'fas fa-socks fa-fw' , title:'amazing comfort',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
]

export const tours = [
    {id:1, img:tour1 , tourdate:'august 26th, 2020',title:'Tibet Adventure',text:'Tibet AdventureLorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.',country:'china',days:'6 days',amount:'from $2100'},
    {id:2, img:tour2 , tourdate:'october 1th, 2020',title:'best of java',text:'Tibet AdventureLorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.',country:'indonesia',days:'11 days',amount:'from $1400'},
    {id:3, img:tour3 , tourdate:'september 15th, 2020',title:'explore hong kong',text:'Tibet AdventureLorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.',country:'hong kong',days:'8 days',amount:'from $5000'},
    {id:4, img:tour4 , tourdate:'december 5th, 2019',title:'kenya highlights',text:'Tibet AdventureLorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque.vitae tempore voluptatum maxime reprehenderit eum quoexercitationem fugit, qui corporis.',country:'kenya',days:'20 days',amount:'from $3300'},
]