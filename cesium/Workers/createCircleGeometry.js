define(["./Cartesian2-b4b7b0b3","./Check-5e798bbf","./when-208fe5b0","./EllipseGeometry-8d2f5a72","./VertexFormat-7e57a3bd","./Math-8386669c","./GeometryOffsetAttribute-3497d4dd","./Transforms-d5dbea8d","./RuntimeError-7f634f5d","./ComponentDatatype-ce69354e","./WebGLConstants-76bb35d1","./EllipseGeometryLibrary-f934d063","./GeometryAttribute-3314089a","./GeometryAttributes-b0b294d8","./GeometryInstance-3ec54139","./GeometryPipeline-cd170892","./AttributeCompression-9711314b","./EncodedCartesian3-21af0f3b","./IndexDatatype-da7c58eb","./IntersectionTests-eb44dd99","./Plane-06d5a63d"],(function(e,t,i,r,o,n,s,a,l,d,m,u,p,c,y,_,h,G,x,f,g){"use strict";function b(e){var t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius;e={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(e),this._workerName="createCircleGeometry"}b.packedLength=r.EllipseGeometry.packedLength,b.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var E=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),v={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new o.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return b.unpack=function(t,n,s){return n=r.EllipseGeometry.unpack(t,n,E),v.center=e.Cartesian3.clone(n._center,v.center),v.ellipsoid=e.Ellipsoid.clone(n._ellipsoid,v.ellipsoid),v.height=n._height,v.extrudedHeight=n._extrudedHeight,v.granularity=n._granularity,v.vertexFormat=o.VertexFormat.clone(n._vertexFormat,v.vertexFormat),v.stRotation=n._stRotation,v.shadowVolume=n._shadowVolume,i.defined(s)?(v.semiMajorAxis=n._semiMajorAxis,v.semiMinorAxis=n._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(v),s):(v.radius=n._semiMajorAxis,new b(v))},b.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},b.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid;t=t(r,n),i=i(r,n);return new b({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:t,height:i,vertexFormat:o.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(b.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return(t=i.defined(r)?b.unpack(t,r):t)._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),b.createGeometry(t)}}));