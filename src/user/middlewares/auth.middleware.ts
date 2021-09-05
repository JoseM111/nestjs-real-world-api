/** auth.middleware.ts */
import { JWT_SECRET_KEY } from "@/config"
import { IExpressRequestInterface } from "@/user/types/IExpressRequest.interface"
import { UserService } from "@/user/user.service"
import { Injectable, NestMiddleware } from "@nestjs/common"
import { NextFunction, Response } from "express"
import {verify} from "jsonwebtoken"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	/// ======== <> Constructor <> ========
	constructor(private readonly userService: UserService) {}
	
	/// ======== <> member-method to-implement <> ========
	async use(req: IExpressRequestInterface, _: Response, next: NextFunction) {
		//..........
		// console.log('authMiddleware use():', req.headers)
		
		if ( !req.headers.authorization ) {
			req.user = null
			next()
			return
		}
		
		// getting our token
		const token = req.headers.authorization.split(' ')[1]
		// console.log('AuthMiddleware token:', token)
		
		try {
			const decodeToken = verify(token, JWT_SECRET_KEY)
			const user = await this.userService.findByID(decodeToken.id)
			
			// adding our actual user to be the request user
			req.user = user
			next()
			//..........
		} catch (error: unknown) {
			const { message } = error as Error
			req.user = null
			next()
			
			console.log(message)
		}
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰








