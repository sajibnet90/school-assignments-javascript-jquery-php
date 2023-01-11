<!--This is register.php file -->
<!DOCTYPE html>

<head>
    <title>
        Registration Summary</title>
    <style>
        th,
        td {
            padding: 5px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h2> HTTP GET Registration Summary</h2>
    <hr>
    <table>
        <tr>
            <th>
                Name</th>
            <th>
                Last name</th>
            <th>
                Email</th>
            <th>
                Jobs</th>
            <th>
                Employment Status</th>
        </tr>
        <tr>
            <td>
                <?php echo $_GET["first_name"] ?>
            </td>
            <td>
                <?php echo $_GET["last_name"] ?>
            </td>
            <td>
                <?php echo $_GET["email"] ?>
            <td>
                <?php $jobtype = $_GET["jobs"];
                foreach ($jobtype as $j) 
                    echo $j . ' '; ?>  
                    <!-- "." is used for concatanation -->
            </td>
            <td>
                <?php $emps = $_GET["empstate"];
                    echo $emps; ?>
            </td>
        </tr>
    </table>
    <a href="index.html">Back</a>
</body>

</html>