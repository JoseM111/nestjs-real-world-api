/** tag.module.ts */
import { TagController } from "@/tag/tag.controller"
import { TagEntity } from "@/tag/tag.entity"
import { TagService } from "@/tag/tag.service"
import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
	imports: [ TypeOrmModule.forFeature([ TagEntity ]) ],
	controllers: [ TagController ],
	providers: [ TagService ]
})
export class TagModule {
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
