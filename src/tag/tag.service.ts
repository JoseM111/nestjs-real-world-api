/** tag.service.ts */
import { TagEntity } from "@/tag/tag.entity"
import { Injectable } from '@nestjs/common'
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class TagService {
	/// ======== <> Constructor <> ========
	constructor(
	@InjectRepository(TagEntity)
	private readonly tagRepo: Repository<TagEntity>
	) {}
	
	/// ======== <> member-service-methods <> ========
	async serviceFindAll(): Promise<{tags: string[]}> {
		//..........
		const tags = await this.tagRepo.find()
		
		return {
			tags: tags.map((tag) => tag.name)
		}
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
