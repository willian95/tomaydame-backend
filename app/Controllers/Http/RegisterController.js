'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class RegisterController {

    async store ({ request, response }) {
        
        let input =  request.all()
        console.log(input)

        const user = new User()
        user.name = request.input("name")
        user.email = request.input("email")
        user.password = await Hash.make(request.input('password'))
        await user.save()

        response.json({"success": true, "msg": "Te has registrado exitosamente"})

    }

}

module.exports = RegisterController
