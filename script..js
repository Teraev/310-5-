let cars = [
   {  model: "Mercedes_bens",
    brand : "G-Class",
    body_type: "SUV",
    cost: 300000,
    Details : {
        Engine : "V8",
        Horse_power: 115,
        Color: "White",
        Year: 2023,
    }
},
    { model : "BMW",
      brand : "M-Class",
      body_type: "Sedan",
      cost: 40000,
      Details : {
          Engine : "V6",
          Horse_power: 200,
          Color: "black",
          Year: 2013,
        },
    },
       { model : "Lada",
        brand : "Cross",
        body_type: "Sedan",
        cost: 23000,
        Details : {
            Engine : "V2",
            Horse_power: 78,
            Color: "Orange",
            Year: 2018,
        },
    },
    { model : "Chevrolet",
        brand : "Malibu",
        body_type: "Sedan",
        cost: 32000,
        Details : {
            Engine : "V3",
            Horse_power: 100,
            Color: "Dark_red",
            Year: 2020,
        },
    },
    { model : "Aidu",
        brand : "RR",
        body_type: "Sedan",
        cost: 30000,
        Details : {
            Engine : "V3",
            Horse_power: 100,
            Color: "blue",
            Year: 2015,
        },
    },
    { model : "Ferrari",
        brand : "La",
        body_type: "Cabriolet",
        cost: 150000,
        Details : {
            Engine : "V6",
            Horse_power: 350,
            Color: "red",
            Year: 2021,
        },
    },
    { model : "Lamborgini",
    brand : "Aventador",
    body_type: "Cabriolet",
    cost: 120000,
    Details : {
        Engine : "V6",
        Horse_power: 280,
        Color: "Green",
        Year: 2020,
    },
},
{ model : "Dodge",
brand : "Chelenger",
body_type: "Cabriolet",
cost: 40000,
Details : {
    Engine : "V6",
    Horse_power: 160,
    Color: "black",
    Year: 2017,
},
},
{ model : "Toyota",
brand : "200",
body_type: "Suv",
cost: 60000,
Details : {
    Engine : "V8",
    Horse_power: 200,
    Color: "black",
    Year: 2015,
},
},
    
] 
    
    let total = +prompt('price')
    let filtered = cars.filter(item => {
        if (item.cost <= total) {
           console.log( item); 
        } 
    } )
    
//    let year = cars.filter(item => {
//      if (item.Details.Year >= 2020) {
//         console.log(item);
//      }
//         })
   
    console.log(cars);