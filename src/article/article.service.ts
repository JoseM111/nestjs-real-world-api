/** article.service.ts */
import { CreateArticleDTO } from "@/article/dtos/create-article.dto"
import { ArticleEntity } from "@/article/entities/article.entity"
import { ArticleResponseType } from "@/article/types/article.response"
import { UserEntity } from "@/user/entities/user.entity"
import { Injectable } from '@nestjs/common'
import { InjectRepository } from "@nestjs/typeorm"
import slugify from "slugify"
import { Repository } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class ArticleService {
	/// ======== <> Constructor <> ========
	constructor(
	@InjectRepository(ArticleEntity)
	private readonly articleRepo: Repository<ArticleEntity>
	) {
	}

	/// ======== <> member-service methods <> ========
	async serviceCreateArticle(
	currentUser: UserEntity,
	createArticleDTO: CreateArticleDTO
	): Promise<ArticleEntity> {
		// ™ ____________
		// create a new empty article
		const article = new ArticleEntity()
		// The Object.assign() method copies all enumerable
		// own properties  from one or more source objects
		// to a target object. It returns the modified target object.
		Object.assign(article, createArticleDTO)

		// add a condition if the tagList is empty, create a empty one
		if ( !article.tagList ) {
			article.tagList = Array<string>()
		}

		article.slug = ArticleService.generateSlug(createArticleDTO.title)

		// leveraging our relations between entities
		article.author = currentUser
		// saving our article
		const savedArticle = await this.articleRepo.save(article)
		.then((article: ArticleEntity) => {
			// ™ ____________
			console.log('\n\n*. New article created:', article)
			return article
		})

		return savedArticle
	}

	/// ======== <> helper-methods <> ========
	serviceBuildArticleResponse(article: ArticleEntity): ArticleResponseType {
		// ™ ____________
		return { article }
	}

	private static generateSlug(title: string): string {
		// ™ ____________
		const magicStr = ((Math.random() * Math.pow(36, 6 | 0)).toString(36))
		const result = slugify(title, { lower: true }) + '-' + magicStr

		return result
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰








