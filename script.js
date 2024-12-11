// Function to calculate the user's weight on the selected planet
function calculateGravity() {
    // Get the user's weight on Earth (in kg)
    const earthWeight = parseFloat(document.getElementById('earthWeight').value);

    // Ensure the weight is valid
    if (isNaN(earthWeight) || earthWeight <= 0) {
        document.getElementById('weightResult').innerHTML = "Please enter a valid weight.";
        return;
    }

    // Get the selected planet
    const planet = document.getElementById('planetSelect').value;

    // Define gravity values for each planet (in m/s²)
    const gravityValues = {
        'Mercure': 3.7,
        'Vénus': 8.87,
        'Terre': 9.81,
        'Mars': 3.71,
        'Jupiter': 24.79,
        'Saturne': 10.44,
        'Uranus': 8.69,
        'Neptune': 11.15
    };

    // Calculate the weight on the selected planet
    const planetGravity = gravityValues[planet];
    const weightOnPlanet = (earthWeight * planetGravity) / 9.81; // Using Earth's gravity (9.81 m/s²) for the calculation

    // Display the result
    document.getElementById('weightResult').innerHTML = `Tes poids sur ${planet} seraient environ ${weightOnPlanet.toFixed(2)} kg.`;
}

// Function to display information about a planet (you can add more detailed info for each planet)
function displayPlanetInfo(planet) {
    const planetInfo = {
        'Mercury': 'Mercury is the smallest planet in our solar system and closest to the Sun. Its gravity is 3.7 m/s².',
        'Venus': 'Venus is similar in size to Earth, but its thick atmosphere creates a surface temperature of over 460°C. Its gravity is 8.87 m/s².',
        'Earth': 'Earth is the only known planet to support life. Its gravity is 9.81 m/s².',
        'Mars': 'Mars, also known as the Red Planet, has a thin atmosphere and gravity of 3.71 m/s².',
        'Jupiter': 'Jupiter is the largest planet in our solar system. It has a strong gravity of 24.79 m/s².',
        'Saturn': 'Saturn is known for its beautiful rings. It has gravity of 10.44 m/s².',
        'Uranus': 'Uranus is an ice giant with a gravity of 8.69 m/s².',
        'Neptune': 'Neptune is the farthest planet from the Sun and has a gravity of 11.15 m/s².'
    };

    // Display the information in the 'planet-info' div
    document.getElementById('planet-info').innerHTML = `<h3>Learn About ${planet}</h3><p>${planetInfo[planet]}</p>`;
}

// Function to sort the gravity table by selected column (either Planet or Gravity)
function sortTable(n) {
    const table = document.getElementById("planet-table");
    let rows = table.rows;
    let switching = true;
    let shouldSwitch, dir = "asc", switchcount = 0;

    // Keep looping until no switching is needed
    while (switching) {
        switching = false;
        let rowsArray = Array.from(rows).slice(1); // Create an array from the rows (excluding the header)

        // Loop through all table rows (except the first one)
        for (let i = 0; i < rowsArray.length - 1; i++) {
            shouldSwitch = false;
            let x = rowsArray[i].getElementsByTagName("TD")[n];
            let y = rowsArray[i + 1].getElementsByTagName("TD")[n];

            // Check if rows should switch based on the direction
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rowsArray[i].parentNode.insertBefore(rowsArray[i + 1], rowsArray[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
