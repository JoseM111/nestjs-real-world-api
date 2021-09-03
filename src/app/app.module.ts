/** app.module.ts */
import { AppController } from "@/app/app.controller"
import { AppService } from "@/app/app.service"
import * as ORM_CONFIG from "@/ormconfig"
import { TagModule } from "@/tag/tag.module"
import { UserModule } from "@/user/user.module"
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
	imports: [
		TagModule,
		UserModule,
		TypeOrmModule.forRoot(ORM_CONFIG),
	],
	controllers: [ AppController ],
	providers: [ AppService ],
})
export class AppModule {
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
