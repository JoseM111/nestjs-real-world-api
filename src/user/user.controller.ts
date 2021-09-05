/** user.controller.ts */
import { CreateUserDTO } from "@/user/dtos/create-user.dto"
import { LoginUserDTO } from "@/user/dtos/login-user.dto"
import { UserEntity } from "@/user/entities/user.entity"
import { IExpressRequestInterface } from "@/user/types/IExpressRequest.interface"
import { UserResponseType } from "@/user/types/user.response.type"
import { UserService } from "@/user/user.service"
import { Body, Controller, Get, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller()
export class UserController {
	/// ======== <> Constructor <> ========
	constructor(
	private readonly userService: UserService,
	) {
	}
	
	/// ======== <> member-request-methods <> ========
	@Post('/users') @UsePipes(new ValidationPipe())
	async createUser(
	@Body('user') createUserDTO: CreateUserDTO
	): Promise<UserResponseType> {
		//..........
		// console.log('createUser:', createUserDTO)
		const user = await this.userService.serviceCreateUser(createUserDTO)
		return this.userService.serviceBuildUserResponse(user)
	}
	
	@Post('/users/login') @UsePipes(new ValidationPipe())
	async userLogin(
	@Body('user') loginUserDTO: LoginUserDTO
	): Promise<UserResponseType> {
		//..........
		// testing function
		// const test = 'Is user logged in, is a: [ SUCCESS | 201-code ]'
		// return test as any
		
		const user = await this.userService.serviceLogin(loginUserDTO)
		.then((user: UserEntity) => {
			console.log('\n[ SUCCESS ].. you are logged in as:', `[ ${ user.username } ]`)
			return user
		})
		
		// this line will add web tokens to our response
		return this.userService.serviceBuildUserResponse(user)
	}
	
	@Get('/user')
	async currentUser(@Req() request: IExpressRequestInterface): Promise<UserResponseType> {
		//..........
		console.log(`\n[ GET REQUEST ] CURRENT USER: ( ${ request.user.username } )`,)
		return this.userService.serviceBuildUserResponse(request.user)
	}
	
	
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰







