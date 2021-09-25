/** user.entity.ts */
import { ArticleEntity } from "@/article/entities/article.entity"
import { hash } from 'bcrypt'
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column() email: string
	@Column() username: string

	@Column({ default: 'NONE' })
	bio: string
	@Column({ default: 'NONE' })
	image: string

	// Will hide password from request
	@Column({ select: false })
	password: string

	// will run hashing after creation of password
	@BeforeInsert()
	async hashPassword(): Promise<void> {
		//..........
		// the value of <'10'> is the <`salt`> which just
		// means how many times it will be encrypted
		this.password = await hash(this.password, 10)
	}

	// relations foreign key
	@OneToMany(
	() => ArticleEntity,
	(article: ArticleEntity) => article.author
	)
	articles: Array<ArticleEntity>
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
