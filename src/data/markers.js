// Seed data — swap with real DB (MongoDB / PostgreSQL) as needed
const markers = [
  { id:'1', lat:23.033, lng:72.585, emoji:'🍜', name:'Agashiye Restaurant',  type:'Restaurant · Heritage', category:'food',     rating:4.7, reviewCount:1200,  distance:'0.8 km', openNow:true },
  { id:'2', lat:23.022, lng:72.571, emoji:'🏛',  name:'Sabarmati Ashram',     type:'Historic Site',          category:'landmark', rating:4.8, reviewCount:8500,  distance:'2.1 km', openNow:true },
  { id:'3', lat:23.049, lng:72.609, emoji:'🏨', name:'The Fern Hotel',        type:'Hotel · Luxury',         category:'hotel',    rating:4.5, reviewCount:903,   distance:'1.5 km', openNow:true },
  { id:'4', lat:23.039, lng:72.554, emoji:'🛍',  name:'AlphaOne Mall',        type:'Shopping Mall',          category:'shop',     rating:4.3, reviewCount:11000, distance:'3.2 km', openNow:true },
  { id:'5', lat:23.027, lng:72.587, emoji:'🌿', name:'Law Garden',            type:'Park · Green Space',     category:'park',     rating:4.4, reviewCount:6300,  distance:'1.1 km', openNow:true },
];
module.exports = { markers };
