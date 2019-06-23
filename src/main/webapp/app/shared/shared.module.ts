import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZigatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ZigatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ZigatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZigatewaySharedModule {
  static forRoot() {
    return {
      ngModule: ZigatewaySharedModule
    };
  }
}
