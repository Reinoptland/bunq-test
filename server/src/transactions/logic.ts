export const contractTypes = {
    insurances: [ " loyalis " ,  " movir " ,  " northwest " ,  " finalis " ,  " bedum " ,  " pekela " ,
         " florentis " ,  " yarden " ,  " nuvema " ,  " reall " ,  " monuta " ,  " budgetuitvaartpolis " ,  " axent " ,  " ardanta " ,  " nhp " ,  " conservatrix " ,  " dela " , " taf " ,  " goedldee " ,  " gewoonldee " , " callas " ,  " florius " ,  " cardif " ,  " finvita " ,  " ace " ,
         " twenthe-uitvaartverzekeringen " ,  " de-laatste-eer-steenwijk " ,  " de-laatste-eer-drachten " ,  " nivo-uitvaart " ,  " de-laatste-eer-assen " ,  " cooperatieve-uitvaartvereniging-ermelo " ,  " eerste-algemene-nijkerk " ,  " de-laatste-eer-veendam " ,
         " algemeen belang " ,  " onderlinge-uitvaartvereniging-veendam-winschoten-en-omstreken " ,  " de-laatste-eer-emmen " ,  " abn amro verzekeringen " ,  " pc hooft uitvaartverzekeringen " ,  " guv verzekeringen " ,  " onderlinge 's gravenhage " ,  " iq life " , 
         " credit life international " ,  " patronale life " ,  " brand new day " ,  " bnp paribas " ,  " leidsche verzekeringen " ,  " legal & general " ,  " erasmus leven " ,  " petplan " ,  " proteq dier&zorg " ,  " kuiper " ,  " efm " ,  " eoc " ,  " oranje " ,  " dov " ,  " datacombinatie " , 
         " ovz " ,  " witgeld " ,  " knmv " ,  " de witte " ,  " de europeesche " ,  " orion direct " ,  " rialto " ,  " enra " ,  " meeùs " ,  " iak verzekeringen " ,  " rabobank " ,  " ing verzekeringen " ,  " arag " ,  " anker rechtsbijstand " ,  " das " ,  " neerlandia van 1880 " ,  " izio " ,  " columbus direct " , 
         " europeesche verzekeringen " ,  " allianz global assistance " ,  " kruidvat " ,  " dak " ,  " blg wonen " ,  " nh1816 " ,  " zlm verzekeringen " ,  " kroodle " ,  " zelf " ,  " huis in eén verzekeringen " ,  " eag assuradeuren " ,  " allianz nederland " ,  " zorg en zekerheid " ,  " zilveren kruis achmea " , 
         " youcare.nu " ,  " vgz " ,  " united consumers " ,  " univé zekur " ,  " umc zorgverzekering " ,  " takecarenow " ,  " stad holland " ,  " salland " ,  " promovendum " ,  " pro life " ,  " pnozorg " ,  " ozf achmea " ,  " onvz " ,  " nedasco " ,  " menzis " ,  " kiemer " ,  " kettlitz wulfse " ,  " izz zorgverzekeraar " ,  " iza-cura " , 
         " iza " ,  " ik zorgverzekering " ,  " energiek (eno) " ,  " dvz zorgverzekeringen " ,  " dsw " ,  " de friesland zorgverzekeraar " ,  " cz direct " ,  " cz " ,  " beter dichtbij " ,  " care4me " ,  " bewuzt (vgz) " ,  " besured " ,  " azvz " ,  " azivo " ,  " de amersfoortse " ,  " anderzorg " ,  " agis zorgverzekeringen " ,  " aevitae zorgverzekeraar " , 
         " zlm " ,  " zelf.nl " ,  " witgeld.nl " ,  " vvs " ,  " vvaa " ,  " voogd & voogd " ,  " verzekeruzelf " ,  " verzekersnel " ,  " verzeker-je-auto " ,  " van kampen groep " ,  " univé " ,  " united insurance " ,  " unigarant " ,  " turien & co " ,  " sns bank " ,  " route mobiel " ,  " reaal " ,  " proteq " ,  " premio " ,  " polisvoormij " ,  " polis direct " ,  " onna-onna " ,
         " ohra " ,  " nh1816 verzekeringen " ,  " neerlandia " ,  " de nederlanden van nu " ,  " nationale-nederlanden " ,  " national academic " ,  " london verzekeringen " ,  " lancyr " ,  " kruitvat " ,  " klik & go " ,  " klaverblad " ,  " interpolis " ,  " inshared " ,  " ing " ,  " hema " ,  " hdi-gerling " ,  " generali " ,  " fbto " ,  " eag " ,  " ditzo " ,  " delta lloyd " ,  " de zeeuwse " ,
         " de kilometerverzekering " ,  " de goudse " ,  " centraal beheer achmea " ,  " budgio " ,  " brunsten brink " ,  " bovemij " ,  " bovag " ,  " avero achmea " ,  " assicuro " ,  " a.s.r. verzekeringen " ,  " aon direct " ,  " anwb " ,  " allsecur " ,  " allianz " ,  " aegon " ,  " acura " ,  " abn amro " ],
  telecom: [ " hi " ,  " ben " ,  " kpn " , " vodafone " , " tele2 " , " telfort " , " simyo " , " hollandsnieuwe " , " sizz " , " anders " , " upc " , " ziggo " , " stipte " , " xs4all " , " canaldigitaal " , " concepts ict " , " online.nl " , " t-mobile " ],
  energy: [ " anode energie " ,  " atoomstroom " , " bas " , " budget energie " , " delta " , " dgb energie " , " dong energie " , " e.d.mij " , " e.on " , " electrabel " , " eneco " , " energiedirect.nl " , " energieflex " , " essent " , " gazprom energy " , " greenchoice " , " greenfoot " , " hallo yellow " , " hezelaer " , " huismerk energie " ,  " hvc " , " innova energie " , " kas energie " , " main energie " , " mkb energie " , " nederlandse energie maatschappij " , " nhec " , " nieuwestroom " , " nuon " , " oxxio " , " qurrent " , " qwint " , " raedthuys group " , " robin energie " , " scholt energy control " , " sepa green " , " twence " , " unitedconsumers " , " woonenergie " , " engie " , " powerpeers " ]
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
      contractName: " " + object['Naam / Omschrijving'] + " ", 
      IBAN: object['Tegenrekening'], 
      value: '-' + object['Bedrag (EUR)'].replace(/,/, '.'), 
      remarks: object['Mededelingen']
  }))
  .map(object => {
    if (contractTypes.insurances.filter(string => object.contractName.toLowerCase().includes(string)).length > 0) return {...object, type: "insurance"}
    else if(contractTypes.energy.filter(string => object.contractName.toLowerCase().includes(string)).length > 0) return {...object, type: "energy"}
    else if(contractTypes.telecom.filter(string => object.contractName.toLowerCase().includes(string)).length > 0) return {...object, type: "telecom"}
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
