// Description:
// // Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// Solution

function combat(health, damage) {
    let newHealth;  
    if (health > damage) {
    newHealth = health - damage;
    return newHealth  
    } else if (health <= damage){
      return 0
    }
  }

  console.log(combat(100, 54));
  