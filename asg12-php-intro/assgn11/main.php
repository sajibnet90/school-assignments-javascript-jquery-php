<!--This is register.php file -->
<!DOCTYPE html>

<head>
    <title>
        Employee Summary</title>
    <style>
        th
        {
            padding: 5px;
            text-align: left;
            color: green;
        }
    </style>
</head>

<body>
    <h2> Employee Summary</h2>
    <hr>
    <table>
        <tr>
            <th>Name</th>
            <th>JOB Title</th>
            <th>Job type</th>
            <th>NET Salary</th>
        </tr>
        <tr>
            <td>
                <?php echo $_GET["first_name"] ."  " .$_GET["last_name"] ?>
            </td>
            <td>
                <?php echo $_GET["jobtitle"] ?>
            </td>
            <td>
                <?php $jobtype = $_GET["jobs"];
                foreach ($jobtype as $j)
                    echo $j . ' ';?>
            </td>
            <td>
                <?php $g_salary = $_GET["salary"];
                $taxAmount = "${g_salary}" * $_GET["tax"]/100;
                 echo $g_salary - $taxAmount;?>
            </td>
        </tr>
    </table>
    <a href="index.html">Back</a>
</body>

</html>