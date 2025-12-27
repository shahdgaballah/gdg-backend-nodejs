//app.controller => handles all the app routings
//auth => sub-routing
import authController from './modules/auth/auth.controller.js'
import userController from './modules/user/user.controller.js'
import dbConnect  from './DB/db.connection.js';
import messageController from './modules/messages/message.controller.js'

const bootstrap=(app, express)=>{ //assign a callback func to bootstrao which //takes two params app and express

    app.use(express.json());

    dbConnect();

    app.get('/', (req, res, next)=>{ 
    return res.json({'messege':'homepage '}); 
    });

    app.use('/auth', authController);

    app.use('/user', userController)

    app.use('/message', messageController)
}
export default bootstrap; //export it locally so that the app can see it
