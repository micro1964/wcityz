!function(){var moduleFactory=function($){var module=this;$.require().script("mvc/event.drag","mvc/dom.cur_styles").done(function(){var exports=function(){var round=function(x,m){return Math.round(x/m)*m};$.Drag.prototype.step=function(amount,container,center){if(typeof amount=="number"){amount={x:amount,y:amount}}container=container||$(document.body);this._step=amount;var styles=container.curStyles("borderTopWidth","paddingTop","borderLeftWidth","paddingLeft");var top=parseInt(styles.borderTopWidth)+parseInt(styles.paddingTop),left=parseInt(styles.borderLeftWidth)+parseInt(styles.paddingLeft);this._step.offset=container.offsetv().plus(left,top);this._step.center=center;return this};var oldPosition=$.Drag.prototype.position;$.Drag.prototype.position=function(offsetPositionv){if(this._step){var step=this._step,center=step.center&&step.center.toLowerCase(),movingSize=this.movingElement.dimensionsv("outer"),lot=step.offset.top()-(center&&center!="x"?movingSize.height()/2:0),lof=step.offset.left()-(center&&center!="y"?movingSize.width()/2:0);if(this._step.x){offsetPositionv.left(Math.round(lof+round(offsetPositionv.left()-lof,this._step.x)))}if(this._step.y){offsetPositionv.top(Math.round(lot+round(offsetPositionv.top()-lot,this._step.y)))}}oldPosition.call(this,offsetPositionv)}};exports();module.resolveWith(exports)})};dispatch("mvc/event.drag.step").containing(moduleFactory).to("Foundry/2.1 Modules")}();