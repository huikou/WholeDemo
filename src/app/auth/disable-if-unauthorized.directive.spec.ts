import { DisableIfUnauthorizedDirective } from './disable-if-unauthorized.directive';
import { UserRoleService } from './user-role.service';
import { TestBed, inject } from '@angular/core/testing';
import { Directive, ElementRef, OnInit, Input} from '@angular/core';
describe('DisableIfUnauthorizedDirective', () => {
  it('should create an instance',  inject([UserRoleService], (service: UserRoleService) => {
    let el: ElementRef=new ElementRef('');
    const directive = new DisableIfUnauthorizedDirective(el, service);
    expect(directive).toBeTruthy();
    
  }));
});
