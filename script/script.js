document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is loaded, execute this function

    var userAge = prompt("What is your age?");

    if (isNaN(userAge) || userAge < 18) {
        alert("Sorry, you cannot access this market.");
        window.location.href = "https://google.com";
    } else {
        var userName = prompt("Enter your name:");
        document.getElementById("userName").textContent = userName;
        var userAmount = prompt("How much Bitcoin do you want to buy?");

        // Fetch the current price of Bitcoin using an API (e.g., Coindesk API)
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                // Extract the current price of Bitcoin from the API response
                var bitcoinPrice = data.bpi.USD.rate_float;

                // Calculate the total cost based on the user's input
                var totalCost = bitcoinPrice * userAmount;

                // Calculate the trading fee (0.4% of the total cost)
                var tradingFee = totalCost * 0.004;

                // Add trading fee to the total cost
                var totalCostWithFee = totalCost + tradingFee;

                // Display the purchase details on the HTML page
                document.getElementById("userSelection").textContent = "Amount to be purchased: " + userAmount + " BTC";
                document.getElementById("currentPrice").textContent = "The current price is: $" + bitcoinPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " per BTC";
                document.getElementById("tradingFee").textContent = "The trading fee (0.4%) is: $" + tradingFee.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
                document.getElementById("totalCost").textContent = "So the total cost will be: $" + totalCostWithFee.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " (including the trading fee).";
                
            })
            .catch(error => console.error('Error fetching Bitcoin price:', error));
    }
});
