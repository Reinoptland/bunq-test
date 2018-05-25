# A Smart Contract Assistant for Roos 
  https://halloroos.nl/

## How to run: 
**1.** Install **node.js** --> https://nodejs.org/en/

**2.** Use **yarn** to install all the dependencies: 

  see the following link for more information -->  https://yarnpkg.com/en/

  check the **package.json** inside the client & server folder for more details 

  yarn commands used: 
  
    $ yarn
    
  run this command on the client and server

**3.** Install **Typescript** for the server --> https://www.typescriptlang.org/index.html 

**4.** Install **PostgresQl** --> https://www.postgresql.org/

**5.** Set up postgresql 
  database: *postgres*
  environment: *localhost* 
  password: *secret*
  port: *5432*
  
  *alternative option*: change the url inside the code at /bunq-test/server/src/db.ts
    change the line: url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres' 
