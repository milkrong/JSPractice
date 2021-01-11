user_role = [
  {"uuid" : 1, "role": 'admin'},
  {'uuid' : 2, "role" : 'contributor'},
  {"uuid" : 3, "role": 'owner'},
  {'uuid' : 4, "role" : 'contributor'}
]

user_name = [
  {"uuid" : 2, "name": 'Justin'},
  {'uuid' : 3, "name" : 'Peter'},
  {"uuid" : 4, "name": 'Taylor'},
  {'uuid' : 5, "name" : 'Angelina'}
]

console.log({...user_role, ...user_name})