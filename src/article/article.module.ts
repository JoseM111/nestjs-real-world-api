/** article.module.ts */
import { ArticleController } from "@/article/article.controller"
import { ArticleService } from "@/article/article.service"
import { ArticleEntity } from "@/article/entities/article.entity"
import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
	imports: [
		TypeOrmModule.forFeature([ ArticleEntity ]),
	],
	controllers: [ ArticleController ],
	providers: [ ArticleService ],
	exports: []
})

export class ArticleModule {}

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
