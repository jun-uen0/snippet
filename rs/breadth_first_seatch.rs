// breadth_first_search
fn breadth_first_search(start: &State, goal: &State) -> Vec<State> {
  let mut frontier: Vec<State> = Vec::new();
  let mut explored: Vec<State> = Vec::new();
  frontier.push(start.clone());
  while !frontier.is_empty() {
    let current = frontier.remove(0);
    if current == goal {
      return explored;
    }
    explored.push(current.clone());
    for successor in current.successors() {
      if !explored.contains(&successor) && !frontier.contains(&successor) {
        frontier.push(successor.clone());
      }
    }
  }
  explored
}