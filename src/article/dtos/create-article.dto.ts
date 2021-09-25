/** create-article.dto.ts */
import { IsNotEmpty, IsOptional, IsString } from "class-validator"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class CreateArticleDTO {
	@IsNotEmpty()
	@IsString()
	readonly title: string

	@IsNotEmpty()
	@IsString()
	readonly description: string

	@IsNotEmpty()
	@IsString()
	readonly body: string

	@IsString()
	@IsOptional()
	readonly tagList?: Array<string>
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
