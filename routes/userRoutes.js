const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.get('/', async(req, res)=> {
    try{
        const user =  await User.find()

        res.status(200).json(user)
    }    
    catch{
        res.status(500).json({error: error})        
    }    
})

router.post('/', async(req, res)=>{
    const {user, password} = req.body

    if (!user || !password) return res.status(422).json({error: 'Dados insuficientes!'})  

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
})

router.post('/auth', async(req, res) => {
    const {user, password} = req.body

    if (!user || !password) return res.status(422).json({error: 'Dados insuficientes!'}) 

    try{
        const user_found = await User.findOne({user}).select('+password')

        if (!user_found) {
            res.status(422).json({error: 'Usuário não registrado!'})
            return
        }

        bcrypt.compare(password, user_found.password, (err, isValid)=>{
            if (!isValid) return res.status(422).json({error: 'Senha inválida!'}) 
            res.status(201).json({message: "Usuário ''" + user + "'' autenticado"})
        });

    } catch(error){
        res.status(500).json({error: error})
    }   

})

module.exports = router
