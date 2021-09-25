/** app.module.ts */
import { ArticleModule } from "@/article/article.module"
import * as ORM_CONFIG from "@/ormconfig"
import { TagModule } from "@/tag/tag.module"
import { AuthMiddleware } from "@/user/middlewares/auth.middleware"
import { UserModule } from "@/user/user.module"
import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
	imports: [
		TagModule,
		UserModule,
		ArticleModule,
		TypeOrmModule.forRoot(ORM_CONFIG),
	],
	controllers: [],
	providers: [],
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class AppModule {
	/// ======== <> member-methods <> ========
	configure(consumer: MiddlewareConsumer) {
		//..........
		consumer.apply(AuthMiddleware)
		.forRoutes({
			path: '*',
			method: RequestMethod.ALL
		})
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰















