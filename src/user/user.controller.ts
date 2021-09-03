/** user.controller.ts */
import { CreateUserDTO } from "@/user/dtos/create-user.dto"
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
	@Body('user') createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
		//..........
		// console.log('createUser:', createUserDTO)
		return this.userService.serviceCreateUser(createUserDTO)
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
