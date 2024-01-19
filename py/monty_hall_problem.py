import random

def monty_hall_simulation():
  num_doors = 3
  
  # Set prize behind a door
  prize_door = random.randint(1, num_doors)
  
  # Player chose a door
  player_choice = random.randint(1, num_doors)
  
  # Host opens a door (not the prize door)
  remaining_doors = [door for door in range(1, num_doors + 1)
                      if door != player_choice and door != prize_door]
  host_opened = random.choice(remaining_doors)
  
  # Swiching the door
  remaining_doors = [door for door in range(1, num_doors + 1)
                      if door != player_choice and door != host_opened]
  player_choice_after_switch = remaining_doors[0]
  
  return player_choice == prize_door, player_choice_after_switch == prize_door

# Execute the simulations
num_simulations = 10000
wins_without_switching = 0
wins_with_switching = 0

for _ in range(num_simulations):
  win_no_switch, win_switch = monty_hall_simulation()
  wins_without_switching += win_no_switch
  wins_with_switching += win_switch

print(f"Not Swiching: {wins_without_switching / num_simulations:.2%}")
print(f"Swiching: {wins_with_switching / num_simulations:.2%}")
