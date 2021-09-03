/** user.service.ts */
import { JWT_SECRET_KEY } from "@/config"
import { CreateUserDTO } from "@/user/dtos/create-user.dto"
import { UserEntity } from "@/user/entities/user.entity"
import { UserResponseType } from "@/user/types/user.response.type"
import { Injectable } from '@nestjs/common'
import { InjectRepository } from "@nestjs/typeorm"
import { sign } from "jsonwebtoken"
import { Repository } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class UserService {
	/// ======== <> Constructor <> ========
	constructor(
	@InjectRepository(UserEntity)
	private readonly userRepo: Repository<UserEntity>
	) {
	}
	
	/// ======== <> member-service-methods <> ========
	async serviceCreateUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
		//..........
		const newUser = new UserEntity()
		/** @assign: The Object.assign() method copies all enumerable own
		 *  properties from one or more source objects to a target object.
		 *  It returns the modified target object. */
		Object.assign(newUser, createUserDTO)
		
		const savedUser = await this.userRepo.save(newUser)
		.then((user) => {
			const { email, username } = user
			console.log('\n\nNew User Created:', username)
			console.log('User Email:', email)
			
			return user
		})
		
		return savedUser
	}
	
	generateJwt(user: UserEntity): string {
		//..........
		return sign({
			id: user.id,
			username: user.username,
			email: user.email,
		}, JWT_SECRET_KEY, )
	}
	
	serviceBuildUserResponse(user: UserEntity): UserResponseType {
		//..........
		return {
			user: {
				...user,
				token: this.generateJwt(user)
			}
		}
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰











