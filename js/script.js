document.addEventListener("DOMContentLoaded", () => {
    const descriptionElement = document.getElementById("description");

    // Elements
    const tinLid = document.getElementById("tin-lid");
    const oilLayer = document.getElementById("oil-layer");
    const sardine = document.getElementById("sardine");
    const tinBase = document.getElementById("tin-base");

    // Descriptions for each part
    const descriptions = {
        "tin-lid": "The tin lid is crucial for preserving the freshness and flavor of the sardines. It creates an airtight seal.",
        "oil-layer": "The oil is the unsung hero of the tin. Whether it’s olive oil or a tangy tomato sauce, it keeps the sardines moist, flavorful, and ready to eat. Think of it as the sardines’ cozy blanket, locking in all that deliciousness.",
        "sardine": "Here’s the star of the show—the sardine! These little fish are packed with protein, omega-3s, and a rich, savory taste that’s beloved by many. Lined up neatly in the tin, they’re ready to add a burst of flavor to your next meal.",
        "tin-base": "The sturdy foundation—the tin base! It might not get much attention, but this base is what keeps everything together. It holds the sardines and their flavorful oil securely, ensuring nothing spills out before you’re ready to enjoy."
    };

    // Add click events to each part
    document.querySelectorAll(".sardine-part").forEach(part => {
        part.addEventListener("click", () => {
            const id = part.id;
            descriptionElement.textContent = descriptions[id] || "Click on the parts of the sardine tin to learn more about its anatomy.";
        });
    });

    // Adjust the animation to avoid offset issues
    setTimeout(() => {
        // Animate the tin lid moving up
        tinLid.style.transform = "translate(-50%, -110%)";

        // Animate the sardine moving up
        sardine.style.transform = "translate(-50%, -45)";

        // Animate the oil layer moving down
        oilLayer.style.transform = "translate(-50%, 12%)";

        // Animate the tin base moving down
        tinBase.style.transform = "translate(-50%, 80%)";
    }, 2000); // Delay to start the animatiom
});

document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Did you know? Sardines are named after the Mediterranean island of Sardinia, where they were once abundant!",
        "Sardines are incredibly nutritious, packed with omega-3 fatty acids, vitamin D, and calcium.",
        "A can of sardines can provide about 20 grams of protein, making it a great snack for muscle building!",
        "Sardines are one of the most sustainable fish options because they are plentiful and reproduce quickly.",
        "The bones in sardines are so small and soft that they are fully edible, providing a great source of calcium."
    ];

    let currentFactIndex = 0;
    const factElement = document.getElementById("fun-fact");
    const nextFactButton = document.getElementById("next-fact");

    nextFactButton.addEventListener("click", () => {
        currentFactIndex = (currentFactIndex + 1) % facts.length;
        factElement.textContent = facts[currentFactIndex];
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");

    // Open the sidebar and hide the menu button
    menuBtn.addEventListener("click", () => {
        sidebar.style.width = "250px"; // Sidebar expands to 250px
        menuBtn.style.display = "none"; // Hide the menu button
    });

    // Close the sidebar and show the menu button
    closeBtn.addEventListener("click", () => {
        sidebar.style.width = "0"; // Sidebar collapses to 0
        menuBtn.style.display = "block"; // Show the menu button again
    });
});
