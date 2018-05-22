import { JsonController, Get, Param, NotFoundError, Post, Delete, Body } from 'routing-controllers'
import Transaction from './entity'
import User from '../users/entity'
// import  { data }  from './dummyData';
import { getTransactions, getContracts } from './logic';
import { contractTypes } from './logic';


@JsonController()
export default class TransactionController {

    // gets all transactions associated with one specific user
    @Get('/users/:id/transactions')
    async getTransactions(
        @Param('id') id: number
    ){
      const transactions = await Transaction.find({where: {user: id}})
      if(!transactions) throw new NotFoundError('This user has no transactions yet!')
  
      return {transactions}
    }

    // gets one specific transaction for one specific user
    @Get('/users/:id/transactions/:id')
    async transaction(
        @Param('id') id: number
    ) {
        const transaction = await Transaction.findOne(id)
        return { transaction }
    }

    @Delete('/transactions/:id')
    async deleteTransaction(
        @Param('id') id: number,
    ){
       const transaction = await Transaction.findOne(id)
       if(transaction) await transaction.remove()
       else throw new NotFoundError('Transaction Not Found!')
       return 'Transaction successfully delted!'
    }
    
    // posts a new transaction per user 
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

    @Get('/users/:id/contracts')
    async getContracts(
        @Param('id') id: number
    ) {
        const transactions = await Transaction.find({where: {user: id}})
        if(!transactions) throw new NotFoundError('This user has no transactions yet!') 

        return getContracts(transactions)
        }
    }
  