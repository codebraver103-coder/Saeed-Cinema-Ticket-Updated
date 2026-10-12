function calculateTicket() {
      let name = document.getElementById("name").value;
      let age = document.getElementById("age").value;
      let tickets = document.getElementById("ticket").value;
      let result = document.getElementById("result");

      let price;
      if (age < 12) {
        price = 5;
      } else if (age <= 17) {
        price = 7;
      } else {
        price = 10;
      }

      let total = price * tickets;

      result.innerHTML =
        "<h2>" + name + "'s Ticket</h2>" +
        "Price per ticket: $" + price + "<br>" +
        "Number of tickets: " + tickets + "<br>" +
        "Total: $" + total;
    }

    function clearTicket() {
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("ticket").value = "";
      document.getElementById("result").innerHTML = "";
    }