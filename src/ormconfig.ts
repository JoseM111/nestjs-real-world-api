/** ormconfig.ts */
import { ConnectionOptions } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const ORM_CONFIG: ConnectionOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'alias111',
	password: 'alias111',
	database: 'mediumclone',
	entities: [
		__dirname + "/**/*.entity{.ts,.js}"
	],
	synchronize: false,
	migrations: [
		__dirname + "/migrations/**/*{.ts,.js}",
	],
	cli: {
		migrationsDir: 'src/migrations'
	}
}

module.exports = ORM_CONFIG
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
