
  function myFunction(name,location,number){
    var name=document.getElementById("name").value
    var location=document.getElementById('location').value
    var number=document.getElementById("number").value
    event.preventDefault();
    if(name===""||location===""||number===""){
        alert("Fields can't be empty");
    }
    else{
        alert(" Hello " + name + " we've received your order it will be processed and deliverd to " +location)
    }
    
    };

    function myPrice(){
        var crust=document.getElementById("crust").value
        var topping=document.getElementById("topping").value
        var size=document.getElementById("size").value
        var quantity=document.getElementById("quantity").value
        var final=(crust + topping +size ) *quantity;
     
     document.getElementById("1").innerHTML= " we received your order of pizza size  " + size  ;
     document.getElementById("2").innerHTML= " with topping of  "+ topping ;
     document.getElementById("3").innerHTML= " And crust of  "+ crust;
     document.getElementById("4").innerHTML= " And you selected " + quantity +" of them ";
     };

     $(document).ready(function(){
        $(".btn").click(function(){
            $("#summary").toggle();
            $("#down").toggle();
        })
    })
    

    // let price, totalPrice;
    // switch (flavour) {
    //     case flavour = "chicken Tikka":
    //         switch (size) {
    //             case size = "regular":
    //                 price = 600;
    //                 if (crust === "cripsy") {
    //                     totalPrice = (price * number) + 85;
    //                 } else if (crust === "stuffed") {
    //                     totalPrice = (price * number) + 150;
    //                 } else if (crust === "Gluten-free") {
    //                     totalPrice = (price * number) + 180;
    //                 } 
    //                 break;
    //             case size = "medium":
    //                     price = 1000;
    //                     if (crust === "cripsy") {
    //                         totalPrice = (price * number) + 85;
    //                     } else if (crust === "stuffed") {
    //                         totalPrice = (price * number) + 150;
    //                     } else if (crust === "Gluten-free") {
    //                         totalPrice = (price * number) + 180;
    //                     }
    //                     break;
    //             case size = "large":
    //                         price = 1200;
    //                         if (crust === "cripsy") {
    //                             totalPrice = (price * number) + 85;
    //                         } else if (crust === "stuffed") {
    //                             totalPrice = (price * number) + 150;
    //                         } else if (crust === "Gluten-free") {
    //                             totalPrice = (price * number) + 180;
    //                         } 
    //                         break;
    //             case flavour = "peri-peri chicken":
    //                             switch (size) {
    //                                 case size = "regular":
    //                                     price = 600;
    //                                     if (crust === "thin") {
    //                                         totalPrice = (price * number) + 85;
    //                                     } else if (crust === "thick") {
    //                                         totalPrice = (price * number) + 150;
    //                                     } else if (crust === "flatbread") {
    //                                         totalPrice = (price * number) + 180;
    //                                     } 
    //                                     break;  
    //                     case size = "medium":
    //                                         switch (size) {
    //                                             case size = "medium":
    //                                                 price = 600;
    //                                                 if (crust === "thin") {
    //                                                     totalPrice = (price * number) + 85;
    //                                                 } else if (crust === "thick") {
    //                                                     totalPrice = (price * number) + 150;
    //                                                 } else if (crust === "flatbread") {
    //                                                     totalPrice = (price * number) + 180;
    //                                                 } 
    //                                                 break;    
    //                                  case size = "large":
    //                                                     switch (size) {
    //                                                         case size = "large":
    //                                                             price = 600;
    //                                                             if (crust === "thin") {
    //                                                                 totalPrice = (price * number) + 85;
    //                                                             } else if (crust === "thick") {
    //                                                                 totalPrice = (price * number) + 150;
    //                                                             } else if (crust === "flatbread") {
    //                                                                 totalPrice = (price * number) + 180;
    //                                                             } 
    //                                                             break;       