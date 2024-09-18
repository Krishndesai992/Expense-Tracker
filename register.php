<?php
// Configuration
$dbHost = 'localhost';
$dbUsername = 'your_username';
$dbPassword = 'your_password';
$dbName = 'your_database';

// Create a connection to the database
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];

    // Validate the form data
    if (empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
        $errorMessage = "Please fill in all fields.";
    } elseif ($password !== $confirmPassword) {
        $errorMessage = "Passwords do not match.";
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert the user into the database
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $username, $email, $hashedPassword);
        $stmt->execute();

        // Check if the user was inserted successfully
        if ($stmt->affected_rows == 1) {
            $successMessage = "User created successfully.";
        } else {
            $errorMessage = "Failed to create user.";
        }
    }
}

// Close the database connection
$conn->close();
// register.php
// ...

if (isset($successMessage)) {
    echo json_encode(['success' => true, 'message' => $successMessage]);
} elseif (isset($errorMessage)) {
    echo json_encode(['success' => false, 'message' => $errorMessage]);
}
?>
