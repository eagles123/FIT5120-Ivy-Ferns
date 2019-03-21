export default function recommend(custom, data) {}
var point = {x:1,y:1,z:1}
var point2= {x:1,y:1,z:1}

//the distance between these points can be calculated as follows

function euclideanDistance(p,p2){
    xdiff = Math.pow((p.x-p2.x),2);
    ydiff = Math.pow((p.y-p2.y),2);
    zdiff = Math.pow((p.z-p2.z),2);
   return Math.sqrt( xdiff + ydiff + zdiff)
// }

// console.log(euclideanDistance(point,point2));
