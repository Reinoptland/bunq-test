# A Smart Contract Assistant for Roos 
  https://halloroos.nl/
  
  This project was created with **ReactJS**, **TypeScript** and **JavaScript**.

   https://reactjs.org/

   https://www.typescriptlang.org/

   https://www.javascript.com/
  
## Introduction: 
The project owner for this project is **Roos** (www.halloroos.nl). Currently, Roos users have to manually input their contract details onto the website, which is time consuming, and often users may lose track of how many contracts they actually have. 
For this reason, our project goal was to make the Roos experience easier and faster. 

On this app, the user only has to export their .CSV file ('Comma-Separated Values' bank account file) and upload it onto the app. Once this is done, our algorithm will scan the .CSV file, and start by only extracting the out-going expenses from the last 6 months. Then, the algorithm will look for recurring fixed transactions, and divide them per category( telecom, energy,  insurance etc).

This way the user has a complete overview of their out-going transactions from the last 6 months, divided by category. When you click on one specific contract, it will bring you to the page of the single contract, showing a line graph (outlining your transactions for the past 6 months).

The Dashboard page provides:

  1. a list of contracts 
  
  2. an average per month expense
  
  3. a bar graph outlining their monthly outgoing expenses, displaying the amount of money by type.


The following are screenshots of the app.

  1. Graph featured on the dashboard page 
  
  <img src=https://github.com/Reinoptland/bunq-test/blob/master/dashboard.png width="200" height="400" />
  
  2. Contracts page 
  
  <img src=https://github.com/Reinoptland/bunq-test/blob/master/contracts.png width="200" height="400" />
  
  3. Signup page 
  
  <img src=https://github.com/Reinoptland/bunq-test/blob/master/signup.png width="200" height="400" />


## How to run: 
**1.** Install **node.js** --> https://nodejs.org/en/

**2.** Install **Typescript** for the server --> https://www.typescriptlang.org/index.html 

**3.** Install **PostgreSQl** --> https://www.postgresql.org/

**4.** Set up PostgreSQL

    database: postgres
    
    environment: localhost 
    
    password: secret
    
    port: 5432
  
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
  
## Algorithm: 

### Algorithm getTransactions
The algorithm takes all transactions that the user submits and returns only the recurrent payments with a category assigned.

Parameters: 
- Types of contracts (object) : constant set up in server/src/transactions/logic.ts

Example: 
const contractTypes = {
insurances: [], 
energy: [],
telecom: []
}

- Csv Data (array of objects) : user uploads their csv document through form in client/src/components/uploadCSV/uploadCSVForm.js, which is converted to JSON with papaparse https://www.papaparse.com/

#### Step 1 - Filter out transactions which are older than six months

      const currentDate = new Date()
      const startingDate = currentDate.setDate(currentDate.getDate() - 180)

      const lastSixMonth = csvData.filter(object => {
      
      const year = String(object['Datum']).slice(0, 4)
      const month = String(object['Datum']).slice(4,6)
      const day = String(object['Datum']).slice(6, 8)
      const date = year + '-' + month + '-' + day

      return new Date(date).getTime() > startingDate 
  })

#### Step 2 - Filter out transaction in order to get only payments

      const payments = lastSixMonth.filter(object => object['Af Bij'] === 'Af')

#### Step 3 - Map over the array to obtain only the information needed to write to transactions table

      const mappedPayments = payments.map(object => {

      const year = String(object['Datum']).slice(0, 4)
      const month = String(object['Datum']).slice(4,6)
      const day = String(object['Datum']).slice(6, 8)
      const date = year + '-' + month + '-' + day 

      return {
            date: date, 
            contractName: " " + object['Naam / Omschrijving'] + " ", 
            IBAN: object['Tegenrekening'], 
            value: '-' + object['Bedrag (EUR)'].replace(/,/, '.'), 
            remarks: object['Mededelingen']
      }})

#### Step 4 - Check if the contractName of each transaction is present in the contractTypes, in which case a type will be assigned to the transaction

    .map(object => {
        if (contractTypes.insurances.filter(string => object.contractName.toLowerCase().includes(string)).length > 0) return        {...object, type: "insurance"}
        else if(contractTypes.energy.filter(string => object.contractName.toLowerCase().includes(string)).length > 0) return        {...object, type: "energy"}
        else if(contractTypes.telecom.filter(string => object.contractName.toLowerCase().includes(string)).length > 0) return      {...object, type: "telecom"}
        else return object
      })

#### Step 5 - For the rest of the transactions, check if they have recurred more than 5 times in the past six months, in which case type "other" will be assigned to them. Return all categorized transactions. 

    const contracts = mappedPayments.filter(object => Object.keys(object).includes('type'))
  
    const rest = mappedPayments.filter(object => !Object.keys(object).includes('type'))

    const recurrentPayments = rest.map(object => {
        if (rest.filter(obj => obj.contractName === object.contractName && Number(obj.value) > (Number(object.value) - 3) &&      Number(obj.value) < (Number(object.value) + 3)).length >= 5) return {...object, type: "other"}
    }).filter(object => object !== undefined)

    return contracts.concat(recurrentPayments)
 

### Algorithm getContracts
The algorithm takes all the transactions associated to a user and returns a collection of contracts with an average and a type.

Paramater: - Transactions (array of objects): transactions fetched from the database based on the user id. 

#### Step 1 - Create array of contract names and filter out duplicates

    const contractsNames = transactions
      .map(transaction => transaction.contractName)
      .filter((v, i, a) => a.indexOf(v) === i);

#### Step 2 - For each contract name, find all the related transactions. 

    const totals = contractsNames.map(contract => {
      const filteredContracts = transactions
          .filter(transaction => 
              transaction.contractName === contract)

#### Step 3 - Reduce on the array in order to get the total amount and then to find the average amount. 

          .map(transaction => Number(transaction.value ) * -1)
    
      const value = filteredContracts
          .reduce((total, transaction) => (total + transaction))
        
      const average = value/filteredContracts.length

#### Step 4 - For each contract name, an object with contractName, average and type is returned. 

    const type = transactions
          .filter(transaction => 
              transaction.contractName === contract)
          
      return {contractName: contract, average: average.toFixed(2), type: type[0].type}
  })

## ROOS-Smart Contract Assistant API


### Public Routes

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|-----------|
| /users      | POST      | create    |
| /logins     | POST      | login     |

### User Routes

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|-----------|
| /users/:id  | GET       | 1 user    |
| /users/:id  | DELETE    | 1 user *  |


### Transaction Routes

|**URI**|**VERB**|**ACTION**|
|-----------------------------|-----------|---------------------------------|
| /users/:id/transactions     | GET       | All transactions by user        |
| /user/:id/transactions      | DELETE    | all transaction by user id      |
|/users/:id/transactions      | POST      | create                          |
|/users/:id/contracts         | GET       | contracts by user id            |
|/orders/:id/users            | GET       | all orders by user              |
|/users/:id/contracts         | DELETE    |all transactions by contract name|      |

### Feedback Routes

|**URI**|**VERB**|**ACTION**|
|-----------------------------|-----------|---------------------------------|
| /users/:id/feedbacks        | GET       | feedback by user id             |
| /feedbacks/:id              | GET       | one specific feedback           |
|/users/:id/feedback          | POST      | create new feedback per user id |


_* When user is deleted, all other information relating to that user is also deleted (contracts/transactions/personal-data/feedback)_



