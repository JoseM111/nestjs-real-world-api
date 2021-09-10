/** create-user.dto.ts */
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

// class MatchPwd {
// 	static REGEX = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
// 	static ERROR_MSG = '[ PASSWORD IS TO WEAK PASSWORD ]: Please try again...'
// }
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class CreateUserDTO {
	@IsNotEmpty()//<--validation-pipes
	@IsString()
	@MinLength(4)
	readonly username: string
	
	@IsNotEmpty()
	@IsEmail()
	readonly email: string
	
	@IsNotEmpty()
	@MinLength(4)
	// @Matches(MatchPwd.REGEX, { message: MatchPwd.ERROR_MSG })<-- For strong password=PRODUCTION
	readonly password: string
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
