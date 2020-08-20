const bcrypt = require('bcryptjs');

module.exports = {
    getSession: (req, res) => {

    },
    register: (req, res) => {
        //This is a way to do this with .then and .cath for the promise, instead of async/await.
        const db = req.app.get('db');
        console.log(req.body);
        //This console.log: 1) something about the front end - see the review at 20 minutes in, and 2) see the values I expect.
        const {email, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        db.user.register(email, hash)
            .then();
    },
    //With login and logout, req.session.user is the same. 
    login: (req, res) => {

    },
    logout: (req, res) => {
        
    }
}