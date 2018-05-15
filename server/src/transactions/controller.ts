import { JsonController, Get, Param, Body, NotFoundError, Post } from 'routing-controllers'
import Transaction from './entity'
import User from '../users/entity'


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
    
    // posts a new transaction per user 
    @Post('/users/:id/transactions')
    async createDetailedTransaction(
      @Body() transaction: Transaction,
      @Param('id') id: number
    ) {
      const user = await User.findOne(id)
      if(!user) throw new NotFoundError('A user with this Id does not exist')
  
      const createdTransaction = await Transaction.create({...transaction, user}).save()
  
      return createdTransaction
    }


  
  
    // @Get('/transactions')
    // async all() {
    // const transactions = await Transaction.find()
    // if (!transactions) throw new NotFoundError(`There are no transactions available in this table`)
    // return { transactions }
    // }
  

    // @Post('/transactions')
    // async createTransaction(
    //     @Body() transaction: Transaction
    // ) {
    // const { id, ...info } = transaction
    // const entity = Transaction.create(info)
    // entity.user = await User.findOne({where: {id}})

    // return entity.save()
    // }
}