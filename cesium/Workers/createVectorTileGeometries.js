define(["./Transforms-d5dbea8d","./BoxGeometry-8fee5c0e","./Cartesian2-b4b7b0b3","./Color-f81b2784","./CylinderGeometry-20320e60","./when-208fe5b0","./EllipsoidGeometry-aea476ce","./IndexDatatype-da7c58eb","./createTaskProcessorWorker","./Check-5e798bbf","./Math-8386669c","./RuntimeError-7f634f5d","./GeometryOffsetAttribute-3497d4dd","./ComponentDatatype-ce69354e","./WebGLConstants-76bb35d1","./GeometryAttribute-3314089a","./GeometryAttributes-b0b294d8","./VertexFormat-7e57a3bd","./CylinderGeometryLibrary-6ad5dbcf"],(function(e,t,n,r,a,i,o,d,s,c,f,l,u,h,b,p,y,x,g){"use strict";function C(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var m=new n.Cartesian3,v=e.Matrix4.packedLength+n.Cartesian3.packedLength,I=e.Matrix4.packedLength+2,k=e.Matrix4.packedLength+n.Cartesian3.packedLength,M=n.Cartesian3.packedLength+1,B={modelMatrix:new e.Matrix4,boundingVolume:new e.BoundingSphere};function w(t,r){var a=r*v;r=n.Cartesian3.unpack(t,a,m);return a+=n.Cartesian3.packedLength,a=e.Matrix4.unpack(t,a,B.modelMatrix),e.Matrix4.multiplyByScale(a,r,a),a=B.boundingVolume,n.Cartesian3.clone(n.Cartesian3.ZERO,a.center),a.radius=Math.sqrt(3),B}function A(t,r){var a=r*I,i=t[a++];r=t[a++],r=n.Cartesian3.fromElements(i,i,r,m),a=e.Matrix4.unpack(t,a,B.modelMatrix);return e.Matrix4.multiplyByScale(a,r,a),a=B.boundingVolume,n.Cartesian3.clone(n.Cartesian3.ZERO,a.center),a.radius=Math.sqrt(2),B}function O(t,r){var a=r*k;r=n.Cartesian3.unpack(t,a,m);return a+=n.Cartesian3.packedLength,a=e.Matrix4.unpack(t,a,B.modelMatrix),e.Matrix4.multiplyByScale(a,r,a),a=B.boundingVolume,n.Cartesian3.clone(n.Cartesian3.ZERO,a.center),a.radius=1,B}function L(t,r){var a=r*M;r=t[a++],a=n.Cartesian3.unpack(t,a,m),a=e.Matrix4.fromTranslation(a,B.modelMatrix);return e.Matrix4.multiplyByUniformScale(a,r,a),a=B.boundingVolume,n.Cartesian3.clone(n.Cartesian3.ZERO,a.center),a.radius=1,B}var E=new n.Cartesian3;function U(t,a,o,d,s){if(i.defined(a)){for(var c=o.length,f=d.attributes.position.values,l=d.indices,u=t.positions,h=t.vertexBatchIds,b=t.indices,p=t.batchIds,y=t.batchTableColors,x=t.batchedIndices,g=t.indexOffsets,m=t.indexCounts,v=t.boundingVolumes,I=t.modelMatrix,k=t.center,M=t.positionOffset,B=t.batchIdIndex,w=t.indexOffset,A=t.batchedIndicesOffset,O=0;O<c;++O){var L=s(a,O),U=L.modelMatrix;e.Matrix4.multiply(I,U,U);for(var G=o[O],S=f.length,T=0;T<S;T+=3){var V=n.Cartesian3.unpack(f,T,E);e.Matrix4.multiplyByPoint(U,V,V),n.Cartesian3.subtract(V,k,V),n.Cartesian3.pack(V,u,3*M+T),h[B++]=G}for(var F=l.length,R=0;R<F;++R)b[w+R]=l[R]+M;var Z=O+A;x[Z]=new C({offset:w,count:F,color:r.Color.fromRgba(y[G]),batchIds:[G]}),p[Z]=G,g[Z]=w,m[Z]=F,v[Z]=e.BoundingSphere.transform(L.boundingVolume,U),M+=S/3,w+=F}t.positionOffset=M,t.batchIdIndex=B,t.indexOffset=w,t.batchedIndicesOffset+=c}}var G=new n.Cartesian3,S=new e.Matrix4;function T(t,n,a){var i=a.length,o=2+i*e.BoundingSphere.packedLength+1+function(e){for(var t=e.length,n=0,a=0;a<t;++a)n+=r.Color.packedLength+3+e[a].batchIds.length;return n}(n),d=new Float64Array(o),s=0;d[s++]=t,d[s++]=i;for(var c=0;c<i;++c)e.BoundingSphere.pack(a[c],d,s),s+=e.BoundingSphere.packedLength;var f=n.length;d[s++]=f;for(var l=0;l<f;++l){var u=n[l];r.Color.pack(u.color,d,s),s+=r.Color.packedLength,d[s++]=u.offset,d[s++]=u.count;var h=u.batchIds,b=h.length;d[s++]=b;for(var p=0;p<b;++p)d[s++]=h[p]}return d}return s((function(r,s){var c=i.defined(r.boxes)?new Float32Array(r.boxes):void 0,f=i.defined(r.boxBatchIds)?new Uint16Array(r.boxBatchIds):void 0,l=i.defined(r.cylinders)?new Float32Array(r.cylinders):void 0,u=i.defined(r.cylinderBatchIds)?new Uint16Array(r.cylinderBatchIds):void 0,h=i.defined(r.ellipsoids)?new Float32Array(r.ellipsoids):void 0,b=i.defined(r.ellipsoidBatchIds)?new Uint16Array(r.ellipsoidBatchIds):void 0,p=i.defined(r.spheres)?new Float32Array(r.spheres):void 0,y=i.defined(r.sphereBatchIds)?new Uint16Array(r.sphereBatchIds):void 0,x=i.defined(c)?f.length:0,g=i.defined(l)?u.length:0,C=i.defined(h)?b.length:0,m=i.defined(p)?y.length:0,v=t.BoxGeometry.getUnitBox(),I=a.CylinderGeometry.getUnitCylinder(),k=o.EllipsoidGeometry.getUnitEllipsoid(),M=v.attributes.position.values,B=I.attributes.position.values,E=k.attributes.position.values,V=M.length*x;V+=B.length*g,V+=E.length*(C+m);var F=v.indices,R=I.indices;M=k.indices,B=F.length*x;return B+=R.length*g,B+=M.length*(C+m),E=new Float32Array(V),F=new Uint16Array(V/3),R=d.IndexDatatype.createTypedArray(V/3,B),M=x+g+C+m,V=new Uint16Array(M),B=new Array(M),x=new Uint32Array(M),g=new Uint32Array(M),C=new Array(M),m=r.packedBuffer,M=new Float64Array(m),m=0,n.Cartesian3.unpack(M,0,G),m+=n.Cartesian3.packedLength,e.Matrix4.unpack(M,m,S),U(r={batchTableColors:new Uint32Array(r.batchTableColors),positions:E,vertexBatchIds:F,indices:R,batchIds:V,batchedIndices:B,indexOffsets:x,indexCounts:g,boundingVolumes:C,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:S,center:G},c,f,v,w),U(r,l,u,I,A),U(r,h,b,k,O),U(r,p,y,k,L),C=T(R.BYTES_PER_ELEMENT,B,C),s.push(E.buffer,F.buffer,R.buffer),s.push(V.buffer,x.buffer,g.buffer),s.push(C.buffer),{positions:E.buffer,vertexBatchIds:F.buffer,indices:R.buffer,indexOffsets:x.buffer,indexCounts:g.buffer,batchIds:V.buffer,packedBuffer:C.buffer}}))}));