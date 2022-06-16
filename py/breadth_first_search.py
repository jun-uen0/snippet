from collections import deque

graph = {} # Make hash table (Dictionary)
graph['me'] = ['yamamoto','tanaka']
graph['yamamoto'] = ['sasaki','ito']
graph['tanaka'] = ['sato','nishimoto']

def is_end_with_i(name):
  return name[-1] == 'i'

def search(name):
  search_queue = deque()
  search_queue += graph[name]
  while search_queue:
    person = search_queue.popleft()    
    if is_end_with_i(person):
      print(person + " is end with i")
      return True
    else:
      search_queue += graph[person]
  print("no one is end with i")
  return False

search('me')