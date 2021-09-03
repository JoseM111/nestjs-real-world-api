/** user.service.ts */
import { CreateUserDTO } from "@/user/dtos/create-user.dto"
import { UserEntity } from "@/user/entities/user.entity"
import { Injectable } from '@nestjs/common'
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class UserService {
	/// ======== <> Constructor <> ========
	constructor(
	@InjectRepository(UserEntity)
	private readonly userRepo: Repository<UserEntity>
	) {}
	
	/// ======== <> member-service-methods <> ========
	async serviceCreateUser(createUserDTO: CreateUserDTO): Promise<any> {
		//..........
		const newUser = new UserEntity()
		/** @assign: The Object.assign() method copies all enumerable own
		 *  properties from one or more source objects to a target object.
		 *  It returns the modified target object. */
		Object.assign(newUser, createUserDTO)
		console.log('New user created:', newUser)
		
		return await this.userRepo.save(newUser)
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
