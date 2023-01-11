<!-- <!DOCTYPE html>
 <head>
 <title>
Registration Summary</title>
 <style>
 th, td {      padding: 5px;     text-align: center; }
 </style>
</head>
 <body>
 <h2> HTTP GET Registration Summary</h2>
<hr>
 <table>
 <tr>
<th>Name</th>
<th>Last name</th>
<th>Job</th>
<th>Gross salary</th>
<th>Tax rate</th>
<th>Net salary</th>
   </tr>
 <tr>
<td>
<?php //echo $_GET["first_name"] ?>
</td>
<td>
<?php  //echo $_GET["last_name"] ?>
</td>
<td>
<?php // echo $_GET["Job"] ?>
 <td>
<?php //echo $_GET["Gross salary"] ?>
</td>
 <td>
<?php //echo $_GET["Tax rate"]; ?>
</td>
 </tr>
 </table>
 <a href="./index.html">Back</a>
 </body>
 </html>
 -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PHP Program To find the gross salary of an Employee</title>
</head>
<body>
<form method="post" autofocus="autofocus" autocomplete="on">
<table border="1" >
<tr>
  <th>First name:</th>
<td>
<input type="text" name="first_name" 
</td>
</tr>

<tr>
  <th>Last name:</th>
<td>
<input type="text" name="last_name" 
</td>
</tr>

<tr>
  <th>Profession:</th>
<td>
<input type="text" name="profession"  required>
</td>
</tr>

<tr>
  <th>Gross salary:</th>
<td>
<input type="number" name="gross_salary" required>
</td>
</tr>

<tr>
  <th>Tax rate:</th>
<td>
<input type="number" name="tax_rate" required>
</td>
</tr>

<tr>
<td colspan="3">
<input type="submit" name="calculate" value="Calculate" float="right">
</td>
</tr>
</table>
</form>
<br>
<?php
if(isset($_POST['calculate']))
{
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$profession = $_POST['profession'];
$gross_salary = $_POST['gross_salary'];
$tax_rate = $_POST['tax_rate']/100;
$paid_tax = $gross_salary * $tax_rate;
//To Compute the net Salary
$net_salary = $gross_salary - ($gross_salary * $tax_rate);
echo "Summary of Data :"."<br><br>";
echo "First Name :" .$first_name."<br>";
echo "Last Name : ".$last_name."<br>";
echo "Profession :".$profession."<br>";
echo "Gross Salary :".$gross_salary."€"."<br>";
echo "Tax Rate : ".$tax_rate * 100 ."%"."<br>";
echo "Paid Tax : ".$paid_tax."€"."<br>";
echo "Net Salary : ".$net_salary."€";

return 0;
}
?>
</body>
</html>