define(["exports","./when-208fe5b0","./Check-5e798bbf","./Transforms-d5dbea8d"],(function(e,t,i,r){"use strict";e.GeometryInstance=function(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT),this.geometry=e.geometry,this.modelMatrix=r.Matrix4.clone(t.defaultValue(e.modelMatrix,r.Matrix4.IDENTITY)),this.id=e.id,this.pickPrimitive=e.pickPrimitive,this.attributes=t.defaultValue(e.attributes,{}),this.westHemisphereGeometry=void 0,this.eastHemisphereGeometry=void 0}}));