# dijkstra algorithm

def find_lowest_cost_node(costs):
  lowest_cost = float('inf')
  lowest_node = None
  for node in costs:
    cost = graph(node)
    if lowest_cost < cost:
      lowest_cost = cost
      lowest_node = node
  
  return lowest_cost_node

proccessed = {}
node = find_lowest_cost_node(costs)

while node is not None:
  cost = costs[node]
  neighbros = graph[node]
  for n in neighbors.key():
    new_cost = cost + neighbors[n]
    if new_cost < costs[n]:
      costs[n] = new_cost
      parents[n] = node
      proccessed[n] = node
  
  proccessed.append(node)
  node = find_lowest_cost_node(costs)
  