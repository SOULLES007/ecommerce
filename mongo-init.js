db.auth('rootuser', 'rootpassword')

db = db.getSiblingDB('userdb')

db.createUser({
  user: 'rootuser',
  pwd: 'rootpassword',
  roles: [
    {
      role: 'readWrite',
      db: 'userdb',
    },
  ],
})