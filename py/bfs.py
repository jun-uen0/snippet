from collections import deque

graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
}

def bfs(graph, root):
  visited = []
  queue = deque([root])
  print(f'queue is {queue}')
  while queue:
    node = queue.popleft()
    if node not in visited:
      visited.append(node)
      queue.extend([x for x in graph[node] if x not in visited])
      print(f'queue is {queue}')
  return visited

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']