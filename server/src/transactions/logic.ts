export const contractTypes = {
  insurances: ["Zilveren", "DELA NATURA", "CZ Groep"],
  telecom: ["hi", "ben", "kpn","vodafone","tele2","telfort","simyo","hollandsnieuwe","sizz","anders","upc","ziggo","stipte","xs4all","canaldigitaal","concepts ict","online.nl","t-mobile"],
  energy: ["anode energie", "atoomstroom","bas","budget energie","delta","dgb energie","dong energie","e.d.mij","e.on","electrabel","eneco","energiedirect.nl","energieflex","essent","gazprom energy","greenchoice","greenfoot","hallo yellow","hezelaer","huismerk energie", "hvc","innova energie","kas energie","main energie","mkb energie","nederlandse energie maatschappij","nhec","nieuwestroom","nuon","oxxio","qurrent","qwint","raedthuys group","robin energie","scholt energy control","sepa green","twence","unitedconsumers","woonenergie","engie","powerpeers"]
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
      const filteredContracts = transactions
          .filter(transaction => 
              transaction.contractName === contract)
          .map(transaction => Number(transaction.value ) * -1)
    
      const value = filteredContracts
          .reduce((total, transaction) => (total + transaction))
        
      const average = value/filteredContracts.length

      const type = transactions
          .filter(transaction => 
              transaction.contractName === contract)
          
      return {contractName: contract, average: average.toFixed(2), type: type[0].type}
  })
return totals
  
}
