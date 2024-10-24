import type { HttpContext } from '@adonisjs/core/http'

// Import del model User per la CRUD
import User  from 'App/Models/User';


export default class UsersController {

    // Creo una funzione che mi permette di recuperare gli Utenti nel DataBase;
    public async index({ response }: HttpContext) {

        // Salvo in una variabile tutti gli utenti;
        const users = await User.all();

        // Ritorno tutti le info degli Users in formato .JSON;
        return response.json(users);
    }
}