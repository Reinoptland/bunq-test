import { data } from './dummyData'

  function getContracts (arrayOfObjects) {
      const currentDate = new Date()
      const startingDate = currentDate.setDate(currentDate.getDate() - 90)

      const lastThreeMonth = arrayOfObjects.filter(object => new Date(object.created).getTime() > startingDate )

      //To change in case there are other types of payments that need to be considered
      const paymentType = ["PAYMENT"]

      const payments = lastThreeMonth.filter(object => paymentType.indexOf(object.sub_type) > -1)

      //To symplify the object with only the required information
      const mappedPayments = payments.map(object => ({contractName: object.counterparty_alias.display_name, date: object.created, amount: object.amount.value}))


      const insurance = ["Zilveren Kruis Zorgverzekeringen NV", "DELA NATURA- EN LEVENSVE", "CZ Groep Zorgverzekeraar"]
      const energy = ["ENECO SERVICES", "Essent Retail Energie B.V."]
      const telecom = ["ZIGGO SERVICES BV", "TELE2 NEDERLAND B.V."]

      const insurances = mappedPayments.filter(object => insurance.indexOf(object.contractName) > -1)

      const energies = mappedPayments.filter(object => energy.indexOf(object.contractName) > -1)

      const telecoms = mappedPayments.filter(object => telecom.indexOf(object.contractName) > -1)

      return {insurance: insurances, energy: energies, telecom: telecoms}
  }

console.log(getContracts(data))
