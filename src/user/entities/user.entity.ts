/** user.entity.ts */
import { hash } from 'bcrypt'
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number
	
	@Column() email: string
	@Column() username: string
	
	@Column({ default: '' })
	bio: string
	@Column({ default: '' })
	image: string
	
	@Column() password: string
	
	// will run hashing after creation of password
	@BeforeInsert()
	async hashPassword() {
		//..........
		// the value of <'10'> is the <`salt`> which just
		// means how many times it will be encrypted
		this.password = await hash(this.password, 10)
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
