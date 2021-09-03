/** main.ts */
if ( !process.env.IS_TS_NODE ) {
	require('module-alias/register')
}
import { AppModule } from "@/app/app.module"
import { NestFactory } from '@nestjs/core'

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

async function bootstrap() {
	//..........
	const port = 3000
	const portStr = `
	\n\n\t\t\tserving at: http://localhost:${ port }\n\n
	`
	const app = await NestFactory.create(AppModule)
	await app.listen(port)
	
	console.log(portStr)
}

bootstrap().then()
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
