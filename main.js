
//----------------------------------
//          YOUR CODE
//----------------------------------
var counter = 0;

for (var i=0; i < 81; i++) {

    y = i*15;

    for (var j=0; j < 53; j++) {
        x = j*15;
        create(x,y,colors[counter]);
        counter++;
    }

}
