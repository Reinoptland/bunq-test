import { JsonController, Get, Param, Body, NotFoundError, Post, Delete } from 'routing-controllers'
import Feedback from './entity'
import User from '../users/entity'
// import { userInfo } from 'os';


@JsonController()
export default class FeedbackController {

    // gets feedback associated with one specific user
    @Get('/users/:id/feedbacks')
    async getFeedbacks(
        @Param('id') id: number
    ){
      const feedbacks = await Feedback.find({where: {user: id}})
      if(!feedbacks) throw new NotFoundError('This user has not given any feedback yet!')
  
      return {feedbacks}
    }

    // gets one specific feedback 
    @Get('/feedbacks/:id')
    async feedback(
        @Param('id') id: number
    ) {
        const feedback = await Feedback.findOne(id)
        return { feedback }
    }

    // gets all feedbacks regardless of the user
    @Get('/feedbacks')
    async allFeedbacks(){
      const feedbacks = await Feedback.find()
      if (!feedbacks) throw new NotFoundError('There are no feedbacks to display')
      return {feedbacks}
    }
    
    // posts a new feedback per user 
    @Post('/users/:id/feedback') 
    async createFeedback(
     @Body() feedback: Feedback,
       @Param('id') id: number
    ) {
      const user = await User.findOne(id)
      console.log('backend feedback')
      if(!user) throw new NotFoundError('A user with this Id does not exist')
  
      const createdFeedback = await Feedback.create({...feedback, user}).save()
  
      return createdFeedback
    }
    

    // deletes feedback from one user
    @Delete('/users/:id/feedback')
    async deleteFeedback(
        @Body() feedback: Feedback,
        @Param('id') userId: number
        ) {
        const user = await User.findOne(userId)
        if(!user) throw new NotFoundError('A user with this Id does not exist')
        const deletedFeedback = await Feedback.delete({...feedback, user})
        return deletedFeedback
        }
    }