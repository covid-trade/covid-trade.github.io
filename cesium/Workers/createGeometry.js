define(["./when-208fe5b0","./PrimitivePipeline-ff0113f1","./createTaskProcessorWorker","./Transforms-d5dbea8d","./Cartesian2-b4b7b0b3","./Check-5e798bbf","./Math-8386669c","./RuntimeError-7f634f5d","./ComponentDatatype-ce69354e","./WebGLConstants-76bb35d1","./GeometryAttribute-3314089a","./GeometryAttributes-b0b294d8","./GeometryPipeline-cd170892","./AttributeCompression-9711314b","./EncodedCartesian3-21af0f3b","./IndexDatatype-da7c58eb","./IntersectionTests-eb44dd99","./Plane-06d5a63d","./WebMercatorProjection-1b058022"],(function(e,r,t,n,o,i,a,s,b,f,d,c,u,m,p,l,y,P,k){"use strict";var C={};return t((function(t,n){for(var o=t.subTasks,i=o.length,a=new Array(i),s=0;s<i;s++){var b=o[s],f=b.geometry,d=b.moduleName;e.defined(d)?(d=function(r){var t=C[r];return e.defined(t)||("object"==typeof exports?C[t]=t=require("Workers/"+r):require(["Workers/"+r],(function(e){C[t=e]=e}))),t}(d),a[s]=d(f,b.offset)):a[s]=f}return e.when.all(a,(function(e){return r.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));