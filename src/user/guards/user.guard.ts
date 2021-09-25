/** user.guard.ts */
import { IExpressRequest } from "@/user/types/IExpressRequest"
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class UserAuthGuard implements CanActivate {
	/// ======== <> member-methods to implement <> ========
	canActivate(context: ExecutionContext): boolean {
		//..........
		const request = context.switchToHttp().getRequest<IExpressRequest>()
		if ( request.user ) return true;

		throw new HttpException(
		'[ERROR]..Not authorized',
		HttpStatus.UNAUTHORIZED
		)
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
