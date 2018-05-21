const contractSoorten = {
  verzekeringen: ["Zilveren", "DELA NATURA", "CZ Groep"],
  telecom: ["ZIGGO", "TELE2", "BEN"],
  energie: ["ENECO ", "Essent "]
}

export const getTransactions = (csvData, contractSoorten) => {

  const currentDate = new Date()
  const startingDate = currentDate.setDate(currentDate.getDate() - 180)

  const lastSixMonth = csvData.filter(object => {
      
      const year = object['Datum'].slice(0, 4)
      const month = object['Datum'].slice(4,6)
      const day = object['Datum'].slice(6, 8)
      const date = year + '-' + month + '-' + day

      return new Date(date).getTime() > startingDate 
  })

  const payments = lastSixMonth.filter(object => object['Af Bij'] === 'Af')

  const mappedPayments = payments.map(object => ({
      datum: object['Datum'], 
      contractNaam: object['Naam / Omschrijving'], 
      tegenrekening: object['Tegenrekening'], 
      bedrag: '-' + object['Bedrag (EUR)'].replace(/,/, '.'), 
      mededelingen: object['Mededelingen']
  }))
  .map(object => {
    if (contractSoorten.verzekeringen.filter(string => object.contractNaam.includes(string)).length > 0) return {...object, soort: "verzekering"}
    else if(contractSoorten.energie.filter(string => object.contractNaam.includes(string)).length > 0) return {...object, soort: "energie"}
    else if(contractSoorten.telecom.filter(string => object.contractNaam.includes(string)).length > 0) return {...object, soort: "telecom"}
    else return object
  })

  const contracten = mappedPayments.filter(object => Object.keys(object).includes('soort'))
  
  const rest = mappedPayments.filter(object => !Object.keys(object).includes('soort'))

  const recurrentPayments = rest.map(object => {
      if (rest.filter(obj => obj.contractNaam === object.contractNaam && Number(obj.bedrag) > (Number(object.bedrag) - 3) && Number(obj.bedrag) < (Number(object.bedrag) + 3)).length >= 5) return {...object, soort: "overige"}
  }).filter(object => object !== undefined)

  return contracten.concat(recurrentPayments)
}




export const getOnlyContractsNamesAndTotals = (transactions) => {
  const contractsNames = transactions
      .map(transaction => transaction.contractNaam)
      .filter((v, i, a) => a.indexOf(v) === i);
  
  const totals = contractsNames.map(contract => {
      const total = transactions
          .filter(transaction => 
              transaction.contractNaam === contract)
          .map(transaction => Number(transaction.bedrag))
          .reduce((total, transaction) => total + transaction)
      return {contractNaam: contract, totaal: total.toFixed(2)}
  })

return totals
  
}