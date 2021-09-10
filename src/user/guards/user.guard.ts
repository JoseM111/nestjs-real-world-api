/** user.guard.ts */
import { IExpressRequest } from "@/user/types/IExpressRequest"
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

type UserGuardReturnType = boolean | Promise<boolean> | Observable<boolean>
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class UserAuthGuard implements CanActivate {
	/// ======== <> member-methods to implement <> ========
	canActivate(context: ExecutionContext): UserGuardReturnType {
		//..........
		const request = context.switchToHttp().getRequest<IExpressRequest>()
  
		if ( request.user ) return true; else {
			throw new HttpException(
			'[ERROR]..Not authorized',
			HttpStatus.UNAUTHORIZED
			)
		}
	}
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
