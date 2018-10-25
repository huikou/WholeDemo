import { Directive, ElementRef, OnInit, Input} from '@angular/core';

import { UserRoleService } from './user-role.service';
import { AuthGroup } from './roleRights.types';

@Directive({
  selector: '[appDisableIfUnauthorized]'
})
export class DisableIfUnauthorizedDirective {

  @Input('myDisableIfUnauthorized') permission: AuthGroup; // Required permission passed in
  constructor(private el: ElementRef, private authorizationService: UserRoleService) { }
  ngOnInit() {
      if (!this.authorizationService.hasPermission(this.permission)) {
            this.el.nativeElement.disabled = true;
      }
  }

}