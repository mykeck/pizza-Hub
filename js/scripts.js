
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
        var type=document.getElementById("type").value
        var topping=document.getElementById("topping").value
        var size=document.getElementById("size").value
        var quantity=document.getElementById("quantity").value
        console.log(size)
     document.getElementById("1").innerHTML= " we received your order of pizza size  " + size +" flavor of " + type;
     document.getElementById("2").innerHTML= " with topping of  "+ topping ;
     document.getElementById("3").innerHTML= " And crust of  "+ crust;
     document.getElementById("4").innerHTML= " And you selected " + quantity +" of them ";
     

     switch (size){
        case "large":
         var price=1200;
        break;
        case "medium":
          price=1000;
        break;
        case "small":
          price=600;
        break;
        default:
      }
      switch(crust){
        case "cripsy":
         var crust_price=85;
        break;
        case "stuffed":
          crust_price=150;
          break;
        case "Gluten-free":
          crust_price=180;
        break;
        default:
      }
      switch(topping){
        case "sausage":
         var topping_cost=100;
        break;
        case "onion":
          topping_cost=50
        break;
        case "bacon":
          topping_cost=150;
        break;
        default:
      }
      
      var total=(price+crust_price+topping_cost)*quantity;
      console.log(topping_cost);
      document.getElementById("5").innerHTML= " Total price " + total;
     
     };
    

     $(document).ready(function(){
        $(".btn").click(function(){
            $("#summary").toggle();
            $("#down").toggle();
        })
    })

   