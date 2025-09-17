// 1. Dating
let ticketPrice = 14.0;
let numTickets = 3; // Larry + 2 friends
let totalCost = ticketPrice * numTickets;
document.getElementById("ticketNum").innerHTML = "Tickets: " + numTickets;
document.getElementById("ticketCost").innerHTML = "Cost: $" + ticketPrice.toFixed(2);
document.getElementById("ttCost").innerHTML = "Total: $" + totalCost.toFixed(2);

// Console logs
console.log("Dating:");
console.log("Tickets:", numTickets);
console.log("Ticket Price:", ticketPrice);
console.log("Total Cost:", totalCost);


// 2. Shopping
let bankBalance = 235.87;
let shirt = 35;
let pants = 75;
let shoes = 60;
let outfitTotal = shirt + pants + shoes;
let remainingBalance = bankBalance - outfitTotal;
document.getElementById("bank").innerHTML = "Remaining Balance: $" + remainingBalance.toFixed(2);

// Check if user can also afford jacket
let jacket = 70;
let addJacket = remainingBalance >= jacket;
document.getElementById("addJacket").innerHTML = "Can you add a jacket? " + addJacket;

// Console logs
console.log("Shopping:");
console.log("Bank Balance:", bankBalance);
console.log("Outfit Total:", outfitTotal);
console.log("Remaining Balance:", remainingBalance);
console.log("Can add jacket?", addJacket);


// 3. Pizza
let pizzas = 4;
let slicesPerPizza = 8;
let totalSlices = pizzas * slicesPerPizza;
let slicesPerStudent = 2.5;
let studentsFed = Math.floor(totalSlices / slicesPerStudent);
let leftoverSlices = totalSlices - (studentsFed * slicesPerStudent);
document.getElementById("profPizza").innerHTML = "Students Fed: " + studentsFed + "<br>Leftover Slices: " + leftoverSlices;

// Console logs
console.log("Pizza:");
console.log("Total Slices:", totalSlices);
console.log("Students Fed:", studentsFed);
console.log("Leftover Slices:", leftoverSlices);


// 4. Monty's Mega Bar
let adultBuffet = 12.00;
let childBuffet = 6.00;
let drink = 1.50;
let orderTotal = (2 * adultBuffet) + (1 * childBuffet) + (3 * drink);
document.getElementById("Monty").innerHTML = "Total Price: $" + orderTotal.toFixed(2);

// Console logs
console.log("Monty's Mega Bar:");
console.log("Order Total:", orderTotal);


// 5. Average Earned Tips
let week1 = 202.45, week2 = 134.97, week3 = 256.63, week4 = 178.22;
let averageTips = (week1 + week2 + week3 + week4) / 4;
document.getElementById("tips").innerHTML = "Average Weekly Tips: $" + averageTips.toFixed(2);

// Console logs
console.log("Average Tips:");
console.log("Week 1:", week1);
console.log("Week 2:", week2);
console.log("Week 3:", week3);
console.log("Week 4:", week4);
console.log("Average:", averageTips);
