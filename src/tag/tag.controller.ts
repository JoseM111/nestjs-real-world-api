/** tag.controller.ts */
import { TagEntity } from "@/tag/tag.entity"
import { TagService } from "@/tag/tag.service"
import { Controller, Get } from '@nestjs/common';
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller({ path: '/tags' })
export class TagController {
	/// ======== <> Constructor <> ========
	constructor(private readonly tagService: TagService) {}
	
	/// ======== <> controller-member-methods <> ========
	@Get()
	async findAll(): Promise<{ tags: string[] }> {
		//..........
		return await this.tagService.serviceFindAll()
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
