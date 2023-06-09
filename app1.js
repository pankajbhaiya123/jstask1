<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java script tut </title>
</head>

<body style="background:linear-gradient(red,yellow,black)">
    <center>
        <h1>JAVA SCRIPT TASK 1</h1>
        <h2>Name and address</h2>
        <p id="para1"></p>
        <h2>Addition of two number</h2>
        <form>
            enter first no: <input type="number" placeholder="number" id="no1">
            enter second no: <input type="number" placeholder="number" id="no2">
            <button type="button" onclick="add()"> add</button>
            <h2>square of number</h2>
            enter no: <input type="number" placeholder="number" id="no3">
            <button type="button" onclick="square()">square</button>
            <h2> factorial of a number</h2>
            enter no: <input type="number" placeholder="number" id="no4">
            <button type="button" onclick="factorial()">factorial</button>
            <h2> fibonacci series number at nth position</h2>
            enter position: <input type="number" placeholder="number" id="no5">

            <button type="button" onclick="fico()">getno</button>
        </form>
        <div id="result" style="border:5px solid black; height: 300px; font-size: 50px;">RESULTS</div>
    </center>
    <script>
        //print name and address
        document.getElementById("para1").innerHTML = "name:ANSHU ANAND \n address : motihari";
        //Addition of two number
        function add() {

            const no1 = document.getElementById("no1").value;
            const no2 = document.getElementById("no2").value;
            var added = parseInt(no1) + parseInt(no2);

            document.getElementById("result").innerText = "sum==" + added;
        }


        function square() {
            var no3 = document.getElementById("no3").value;
            const sqr = no3 * no3;
            document.getElementById("result").innerText = "square==" + sqr;
        }
        function factorial() {
            var no4 = document.getElementById("no4").value;
            let result = 1;
            for (let i = 1; no4 >= i; i++)
                result = result * i;

            document.getElementById("result").innerText = "factorial==" + result;
        }

        function fico() {
            var no5 = document.getElementById("no5").value;
            var base1 = 0, base2 = 1, other;
            for (let i = 1; i < no5; i++) {


                other = base1 + base2;
                base1 = base2;
                base2 = other;
            }

            document.getElementById("result").innerText = "fibonacci series number at " + no5 + " position==" + base1;
        }

    </script>
</body>

</html>