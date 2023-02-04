document.getElementById("done").onclick = function () {
    let cardNumber = document.getElementById("cardNumber").value;
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let yersOld = document.getElementById("yersOld").value;
  
    if (yersOld >= 18) {
      alert("Good");
    } else {
      alert("Вам не можна");
      return false;
    }
  
    if (country == "USA" && "United States" && "England" && "EN") {
      alert(
        "Good afternoon " +
          name +
          "Your year of birth " +
          yersOld +
          "You will be sent the cost to the card " +
          cardNumber +
          "By city of residence " +
          country
      );
    } else {
      alert(
        "Доброго дня " +
          name +
          "Ваш рік народження " +
          yersOld +
          "Вам буде надіслано кошти на карту " +
          cardNumber +
          "По місцю проживання " +
          country
      );
    }
  };
  