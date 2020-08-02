function myFunction() {
    var checkBox = document.getElementById("deliveries");
    var text = document.getElementById("address");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }