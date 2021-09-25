/** article.entity.ts */
import { UserEntity } from "@/user/entities/user.entity"
import {
	BeforeUpdate,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Entity({ name: 'articles' })
export class ArticleEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column() slug: string
	@Column() title: string

	@Column({ default: 'NONE' })
	description: string
	@Column({ default: 'NONE' })
	body: string

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	createdAt: Date
	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	updatedAt: Date

	@Column('simple-array')
	tagList: Array<string>

	@Column({ default: 0 })
	favoritesCount: number

	@BeforeUpdate()
	updateTimeStamp(): void {
		this.updatedAt = new Date()
	}

	// relations foreign key
	@ManyToOne(
	() => UserEntity,
	(user: UserEntity) => user.articles
	)
	author: UserEntity;
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰










