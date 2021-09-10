/** user.module.ts */
import { UserEntity } from "@/user/entities/user.entity"
import { UserAuthGuard } from "@/user/guards/user.guard"
import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserController } from './user.controller'
import { UserService } from './user.service'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
	imports: [
		TypeOrmModule.forFeature([ UserEntity ]),
	],
	providers: [ UserService, UserAuthGuard ],
	controllers: [ UserController ],
	exports: [ UserService ]
})
export class UserModule {}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

