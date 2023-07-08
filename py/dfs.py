graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
}

"""
  A
 / \
B---C
|   |
D---F
 \ /
  E
"""

graph = {
  '5' : ['3','7'],
  '3' : ['2', '4'],
  '7' : ['8'],
  '2' : [],
  '4' : ['8'],
  '8' : []
}

def dfs(graph, start):
  visited = [] # Store the node visited
  stack = [start]

  while stack:
    # 1. Assign stack value to 'node'
    # 2. Make 'satck' empty
    node = stack.pop()

    if node not in visited:
      visited.append(node)

      # 1. Get values in graph[node] that is not in 'visited' as 'x'
      # 2. extend (=inseart) all values 'x' into stack
      if node in graph:
        stack.extend([x for x in graph[node] if x not in visited])

  return visited

print(dfs(graph, '5'))
