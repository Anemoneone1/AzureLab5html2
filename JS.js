function solveEq(a, b, c) {
    var result = [];
    if (!(typeof c==`undefined`))
    {
        var x = b * b - 4 * a * c;
        if (x > 0) {
            console.log(`x1 equals: ${(-b + Math.sqrt(x)) / (2 * a)}`);
            console.log(`x2 equals: ${(-b - Math.sqrt(x)) / (2 * a)}`);
        } else if (x === 0) {
           console.log(`x equals: ${(-b / (2 * a))}`);
        }
    }
    else {
        console.log(`x equals: ${(-b / a)}`);
    }
}

solveEq(1, 2, 1);
solveEq(2, 4);
solveEq(1, 3, -10);


function count(a){
    var res = 0;
    if (typeof a == `number`) {
        res = a.toString().length;
    }
    else if (!(typeof a == `undefined`)) {
        res  = a.length;
    }
    console.log(`length: ${(res)}`);
}

count(123);
count("1234");
count(1.23);

function movie(title, year, duration) {
this.title = title;
this.year = year;
this.duration = duration;
}

function movieArr(a){
    document.open();
    document.write("<table border='1'>");

    var arr = [];
    var i = 0;
    for (element of a) {
        arr[i] = [element.title, element.year, element.duration];
        i++;
    }
    for (var i = 0; i < arr.length; i++) {
        document.write("<tr>");
        document.write("<th>" + arr[i][0] + "</th>");
        document.write("<td>" + arr[i][1] + "</td>");
        document.write("<td>" + arr[i][2] + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
    document.close();
}

var movies = [];
movies[0] = {title: "The Shawshank Redemption", year: 1994, duration: 142};
movies[1] = {title: "The Godfather", year: 1972, duration: 175};
movies[2] = {title: "The Godfather: Part II", year: 1974, duration: 202};
movies[3] = {title: "Titanic", year: "1998", duration: 204}

movieArr(movies);