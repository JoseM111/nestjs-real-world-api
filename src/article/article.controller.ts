/** article.controller.ts */
import { ArticleService } from "@/article/article.service"
import { CreateArticleDTO } from "@/article/dtos/create-article.dto"
import { ArticleResponseType } from "@/article/types/article.response"
import { UserDecorator } from "@/user/decorators/user.decorator"
import { UserEntity } from "@/user/entities/user.entity"
import { UserAuthGuard } from "@/user/guards/user.guard"
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller('/articles')
export class ArticleController {
	/// ======== <> Constructor <> ========
	constructor(private readonly articleService: ArticleService) {
	}

	/// ======== <> member-service methods <> ========
	@Post()
	@UseGuards(UserAuthGuard)
	async createArticle(
	@UserDecorator() currentUser: UserEntity,
	@Body('article') createArticleDTO: CreateArticleDTO
	): Promise<ArticleResponseType> {
		//..........
		const article = await this.articleService.serviceCreateArticle(
		currentUser,
		createArticleDTO
		)

		return this.articleService.serviceBuildArticleResponse(article)
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
