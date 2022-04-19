const router = require('express').Router()
const User = require('../models/User')

router.get('/', async(req, res)=> {
    User.find({}, (err, data) => {
        if (err) return res.send({error: 'Erro na consulta!'})
        return res.send(data);
    })
})

router.post('/', async(req, res)=>{
    const {user, password} = req.body

    if (!user || !password) return res.send({error: 'Dados insuficientes!'})  

    try{
        const user_found = await User.findOne({user})

        if(user_found){
            res.status(422).json({error: 'Usuário já registrado!'})
            return
        }

        new_user = await User.create(req.body)
        new_user.password = undefined
        res.status(201).json(new_user)
    } catch(error){
        res.status(500).json({error: error})
    }
    // })
})

module.exports = router
