/** user.controller.ts */
import { CreateUserDTO } from "@/user/dtos/create-user.dto"
import { UserEntity } from "@/user/entities/user.entity"
import { UserResponseType } from "@/user/types/user.response.type"
import { UserService } from "@/user/user.service"
import { Body, Controller, Post } from '@nestjs/common'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller()
export class UserController {
	/// ======== <> Constructor <> ========
	constructor(
	private readonly userService: UserService,
	) {}
	
	/// ======== <> member-request-methods <> ========
	@Post('/users')
	async createUser(
	@Body('user') createUserDTO: CreateUserDTO): Promise<UserResponseType> {
		//..........
		// console.log('createUser:', createUserDTO)
		const user = await this.userService.serviceCreateUser(createUserDTO)
		return this.userService.serviceBuildUserResponse(user)
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
