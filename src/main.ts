/** main.ts */
if ( !process.env.IS_TS_NODE ) {
	require('module-alias/register')
}
import { AppModule } from "@/app/app.module"
import { NestFactory } from '@nestjs/core'

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

async function bootstrap(): Promise<void> {
	//..........
	const port = 3000
	
	const app = await NestFactory.create(AppModule)
	await app.listen(port)
}

bootstrap()
.then(() => {
	const portStr = `
	serving at: http://localhost:${ 3000 }
	`
	const bootstrapStr = `
	☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
	 --[ NESTJS ]--project booted up correctly--( WELCOME )--
	 \t${ portStr.trim() }
	☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
	`
	console.log(bootstrapStr)
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
