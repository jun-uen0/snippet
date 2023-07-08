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
  searched = []
  while search_queue:
    person = search_queue.popleft()
    if not person in searched:
      if is_end_with_i(person):
        print(person + " is finished with i")
        return True
      else:
        search_queue += graph[person]
        searched.append(person)
  return False

search('me')