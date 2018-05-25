# A Smart Contract Assistant for Roos 
  https://halloroos.nl/
  
## Introduction: 
The project owner for this project is **Roos** (www.halloroos.nl). Currently, Roos users have to manually input their contract details onto the website, which is time consuming, and often users may lose track of how many contracts they actually have. 
For this reason, our project goal was to make using Roos easier and faster for Roos users. 

On this app, the user only has to export their .CSV file and upload it onto the app. Once this is done, our algorithm will scan the .CSV file, and start by only extracting the out-going expenses for the last 6 months. Then, the algorithm will look for recurring fixed transactions, and divide them per category( telecom, energy,  insurance etc).

This way the user has a complete overview of all their out-going transactions from the last 6 months, divided by category. 
The Dashboard page gives the user a list of contracts, with an average per month expense, and a bar graph outlining their monthly outgoing expenses, displaying the amount of money by type.

When you click on one specific contract, it will bring you to the page of the single contract, showing a line graph (outlining your transactions for the past 6 months).

## How to run: 
**1.** Install **node.js** --> https://nodejs.org/en/

**2.** Install **Typescript** for the server --> https://www.typescriptlang.org/index.html 

**3.** Install **PostgreSQl** --> https://www.postgresql.org/

**4.** Set up PostgreSQL

    database: *postgres*
    
    environment: *localhost* 
    
    password: *secret*
    
    port: *5432*
  
  *alternative option*: change the url inside the code at /bunq-test/server/src/db.ts
    change the line: url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres' 
 
 **5.** Use **yarn** to install all the dependencies: 

  see the following link for more information -->  https://yarnpkg.com/en/

  check the **package.json** inside the client & server folder for more details 

  yarn commands used: 
  
    $ yarn
    
  run this command on the client and server
    
 **6.** Start PostgreSQL
 
 **7.** In server
 
    $ tsc
    
    $ node .
    
   *important*: keep the **node .** tab open in the terminal

**8.** In client 

    $ yarn start 
    
  *important*: keep the **yarn start** tab open in the terminal
