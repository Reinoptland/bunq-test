import { JsonController, Get, Param, NotFoundError, Post, Delete, Body, Authorized } from 'routing-controllers'
import Transaction from './entity'
import User from '../users/entity'
// import  { data }  from './dummyData';
import { getTransactions, getContracts } from './logic';
import { contractTypes } from './logic';


@JsonController()
export default class TransactionController {

    // gets all transactions associated with one specific user
    @Authorized()
    @Get('/users/:id/transactions')
    async getTransactions(
        @Param('id') id: number
    ){
      const transactions = await Transaction.find({where: {user: id}})
      if(!transactions) throw new NotFoundError('This user has no transactions yet!')
     
      return {transactions}
    }

    // gets one specific transaction for one specific user
    @Authorized()
    @Get('/users/:id/transactions/:id')
    async transaction(
        @Param('id') id: number
    ) {
        const transaction = await Transaction.findOne(id)
        return { transaction }
    }

    @Authorized()
    @Delete('/transactions/:id')
    async deleteTransaction(
        @Param('id') id: number,
    ){
       const transaction = await Transaction.findOne(id)
       let transactions;
       //    return { userId }
       if(transaction) {
            const userId = await transaction.user.id
            transactions = await Transaction.find({where: { user: userId }})
            await transaction.remove()
        //    return { transactions }
        }
        else throw new NotFoundError('Transaction Not Found!')
        return { message: 'Transaction successfully deleted!', transactions, transaction }
    }
    
    // posts a new transaction per user
    @Authorized() 
    @Post('/users/:id/transactions')
    async createDetailedTransaction(
        @Body() data: Transaction[],
        @Param('id') id: number
    ) {
        console.log(data)
      const user = await User.findOne(id)
      if(!user) throw new NotFoundError('A user with this Id does not exist')
      
     
      const contracts = getTransactions(data, contractTypes)

      contracts.map(async contract => await Transaction.create({...contract, user}).save())
      
      const transactions = await Transaction.find({where: {user: id}})
      if(!transactions) throw new NotFoundError('This user has no transactions yet!')
  
      return transactions
    }

    @Authorized()
    @Delete('/users/:id/transactions')
    async deleteTransactionsUser(
        @Body() transactions: Transaction,
        @Param('id') userId: number
        ) {
        const user = await User.findOne(userId)
        if(!user) throw new NotFoundError('A user with this Id does not exist')
        const deletedTransaction = await Transaction.delete({...transactions, user})
        return deletedTransaction
    }

    @Authorized()
    @Get('/users/:id/contracts')
    async getContracts(
        @Param('id') id: number
    ) {
        const transactions = await Transaction.find({where: {user: id}})
        if(!transactions) throw new NotFoundError('This user has no transactions yet!') 

        return getContracts(transactions)
        }

    @Authorized()
    @Delete('/users/:id/contracts/')
    async deleteContractTransactions(
        @Body() contractName: string,
        @Param('id') userId: number,
        ) {
        console.log(contractName)
        let transactions = await Transaction.find({where: {user: userId}})
        transactions = transactions.filter(transaction => transaction.contractName === Object.values(contractName)[0])

        if(!transactions) throw new NotFoundError('No transactions found under this contract')
        const deletedTransaction = await Transaction.remove(transactions)
        console.log(deletedTransaction)
        return deletedTransaction
    }
    }
  