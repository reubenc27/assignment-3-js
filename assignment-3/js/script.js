// event listener for form submission
document.querySelector("form").addEventListener("submit", handleOrder);

// class to represent pizza order
class Pizza {
    constructor(size, crust, sauce, cheese, meats, veggies, orderType) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.meats = meats;
        this.veggies = veggies;
        this.orderType = orderType;
    }

    // html formatting for returning user's order 
    getDescription() {
        return `
            <h3>Your Order Summary</h3>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Crust:</strong> ${this.crust}</p>
            <p><strong>Sauce:</strong> ${this.sauce}</p>
            <p><strong>Cheese:</strong> ${this.cheese}</p>
            <p><strong>Meats:</strong> ${this.meats.length > 0 ? this.meats.join(", ") : "None"}</p>
            <p><strong>Veggies:</strong> ${this.veggies.length > 0 ? this.veggies.join(", ") : "None"}</p>
            <p><strong>Order Type:</strong> ${this.orderType}</p>
            <br>
            <p>LU: 1274383 | GC: 200628514</p> 
        `;  //display student id w order ^
    }
}

// form submission handler
function handleOrder(event) {
    event.preventDefault(); // prevent page reload

    //collect values from user's input
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const sauce = document.getElementById("sauce").value;
    const cheese = document.getElementById("cheese").value;
    const meats = [...document.querySelectorAll("input[name='meats']:checked")].map(input => input.value);
    const veggies = [...document.querySelectorAll("input[name='veggies']:checked")].map(input => input.value);
    const orderType = document.querySelector("input[name='orderType']:checked")?.value;

    //form validation
    if (!size) {
        alert("Please select a pizza size!");
        return;
    } else if (!crust) {
        alert("Please select a crust type!");
        return;
    } else if (!sauce) {
        alert("Please select a sauce type!");
        return;
    } else if (!cheese) {
        alert("Please select a cheese type!");
        return;
    }

    // create pizza object
    const pizza = new Pizza(size, crust, sauce, cheese, meats, veggies, orderType);

    // display  pizza description in #cart div
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = pizza.getDescription();
    cartDiv.style.display = "block"; // Show the order summary

}
