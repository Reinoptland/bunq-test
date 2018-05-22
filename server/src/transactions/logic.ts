export const contractTypes = {
  insurances: ["Zilveren", "DELA NATURA", "CZ Groep"],
  telecom: ["ZIGGO", "TELE2", "BEN"],
  energy: ["ENECO ", "Essent "]
}

export const getTransactions = (csvData, contractTypes) => {

  const currentDate = new Date()
  const startingDate = currentDate.setDate(currentDate.getDate() - 180)

  const lastSixMonth = csvData.filter(object => {
      
      const year = String(object['Datum']).slice(0, 4)
      const month = String(object['Datum']).slice(4,6)
      const day = String(object['Datum']).slice(6, 8)
      const date = year + '-' + month + '-' + day

      return new Date(date).getTime() > startingDate 
  })

  const payments = lastSixMonth.filter(object => object['Af Bij'] === 'Af')

  const mappedPayments = payments.map(object => ({
      date: String(object['Datum']), 
      contractName: object['Naam / Omschrijving'], 
      IBAN: object['Tegenrekening'], 
      value: '-' + object['Bedrag (EUR)'].replace(/,/, '.'), 
      remarks: object['Mededelingen']
  }))
  .map(object => {
    if (contractTypes.insurances.filter(string => object.contractName.includes(string)).length > 0) return {...object, type: "insurance"}
    else if(contractTypes.energy.filter(string => object.contractName.includes(string)).length > 0) return {...object, type: "energy"}
    else if(contractTypes.telecom.filter(string => object.contractName.includes(string)).length > 0) return {...object, type: "telecom"}
    else return object
  })

  const contracts = mappedPayments.filter(object => Object.keys(object).includes('type'))
  
  const rest = mappedPayments.filter(object => !Object.keys(object).includes('type'))
  console.log(rest)

  const recurrentPayments = rest.map(object => {
      if (rest.filter(obj => obj.contractName === object.contractName && Number(obj.value) > (Number(object.value) - 3) && Number(obj.value) < (Number(object.value) + 3)).length >= 5) return {...object, type: "other"}
  }).filter(object => object !== undefined)

  return contracts.concat(recurrentPayments)
}




export const getContracts = (transactions) => {
  const contractsNames = transactions
      .map(transaction => transaction.contractName)
      .filter((v, i, a) => a.indexOf(v) === i);

  const totals = contractsNames.map(contract => {
      const total = transactions
          .filter(transaction => 
              transaction.contractName === contract)
          .map(transaction => Number(transaction.value))
          .reduce((total, transaction) => total + transaction)
      const type = transactions
          .filter(transaction => 
              transaction.contractName === contract)
          
      return {contractName: contract, totaal: total.toFixed(2), type: type[0].type}
  })

return totals
  
}