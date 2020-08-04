
  $(document).ready(function(){})
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
     
     document.getElementById("1").innerHTML= " we received your order of pizza size  " + size + "flavor of" +type ;
     document.getElementById("2").innerHTML= " with topping of  "+ topping ;
     document.getElementById("3").innerHTML= " And crust of  "+ crust;
     document.getElementById("4").innerHTML= " And you selected " + quantity +" of them ";
     document.getElementById("5").innerHTML= " Total price " + price +" / ";

     };
     switch (pizzasize){
        case "large":
         var price=1200;
        break;
        case "medium":
          price=1000;
        break;
        case "regular":
          price=600;
        break;
        default:
          alert("select your pizza size");
      }
      switch(pizzacrust){
        case "cripsy":
         var crust_price=200;
        break;
        case "stuffed":
          crust_price=150;
          break;
        case "glutenfree":
          crust_price=300;
        break;
        default:
          alert("select your crust");
      }
      switch(pizzatopping){
        case "mushrooms":
         var topping_cost=200;
        break;
        case "onions":
          topping_cost=100
        break;
        case "extracheese":
          topping_cost=250;
        break;
        default:
          alert("select your topping");
      }
      var total=(price+crust_price+topping_cost)*pizzaquantity;
     

     $(document).ready(function(){
        $(".btn").click(function(){
            $("#summary").toggle();
            $("#down").toggle();
        })
    })

   