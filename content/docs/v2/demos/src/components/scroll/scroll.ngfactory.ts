/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './scroll';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
export class Wrapper_Scroll {
  /*private*/ _eventHandler:Function;
  context:import0.Scroll;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.Scroll(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_scrollX(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.scrollX = currValue;
      this._expr_0 = currValue;
    }
  }
  check_scrollY(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.scrollY = currValue;
      this._expr_1 = currValue;
    }
  }
  check_zoom(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.zoom = currValue;
      this._expr_2 = currValue;
    }
  }
  check_maxZoom(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.maxZoom = currValue;
      this._expr_3 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_4:any = this.context.scrollX;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      view.renderer.setElementClass(el,'scroll-x',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.scrollY;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      view.renderer.setElementClass(el,'scroll-y',currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Scroll_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Scroll_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Scroll>;
  _Scroll_0_3:Wrapper_Scroll;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Scroll_Host0,renderType_Scroll_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-scroll',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Scroll0(this.viewUtils,this,0,this._el_0);
    this._Scroll_0_3 = new Wrapper_Scroll(new import8.ElementRef(this._el_0));
    this.compView_0.create(this._Scroll_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Scroll_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Scroll) && (0 === requestNodeIndex))) { return this._Scroll_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Scroll_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._Scroll_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const ScrollNgFactory:import7.ComponentFactory<import0.Scroll> = new import7.ComponentFactory<import0.Scroll>('ion-scroll',View_Scroll_Host0,import0.Scroll);
const styles_Scroll:any[] = ([] as any[]);
var renderType_Scroll:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_Scroll,{});
export class View_Scroll0 extends import2.AppView<import0.Scroll> {
  _el_0:any;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Scroll0,renderType_Scroll,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','scroll-content'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','scroll-zoom-wrapper'),(null as any));
    this.projectNodes(this._el_1,0);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1
    ]
    ),(null as any));
    return (null as any);
  }
}