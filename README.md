## GET Users

### Get User by ID

**Route**: `/id/:id`

**Description**: Fetches a user by their ID.

**Parameters**:
- `id`: The ID of the user to fetch.

**Response**:
- Status: 200 OK
- Body: The user object.

### Get User by Email

**Route**: `/email/:email`

**Description**: Fetches a user by their email address.

**Parameters**:
- `email`: The email address of the user to fetch.

**Response**:
- Status: 200 OK
- Body: The user object.

### Get User by QR Code

**Route**: `/qr_code/:qr_code`

**Description**: Fetches a user by their QR code.

**Parameters**:
- `qr_code`: The QR code of the user to fetch.

**Response**:
- Status: 200 OK
- Body: The user object.

### Get User Password by Email

**Route**: `/password/:email`

**Description**: Fetches the password of a user by their email address.

**Parameters**:
- `email`: The email address of the user whose password is to be fetched.

**Response**:
- Status: 200 OK
- Body: The password string.

### Get User Balance by ID

**Route**: `/balance/:id`

**Description**: Fetches the balance of a user by their ID.

**Parameters**:
- `id`: The ID of the user whose balance is to be fetched.

**Response**:
- Status: 200 OK
- Body: The balance amount.

## POST Users

### Register User

**Route**: `/register`

**Description**: Registers a new user.

**Request Body**:
- `first_name`: First name of the user.
- `last_name`: Last name of the user.
- `user_name`: Username of the user.
- `email`: Email address of the user.
- `password`: Password of the user.

**Response**:
- Status: 200 OK
- Body: The registered user object.

### Login User

**Route**: `/login`

**Description**: Logs in a user.

**Request Body**:
- `email`: Email address of the user.
- `password`: Password of the user.

**Response**:
- Status: 200 OK
- Body: The logged-in user object.


## GET Transactions

### Get Transactions by User ID

**Route**: `/user_id/:user_id`

**Description**: Fetches transactions associated with a user by their user ID.

**Parameters**:
- `user_id`: The ID of the user whose transactions are to be fetched.

**Response**:
- Status: 200 OK
- Body: Array of transaction objects.

## POST Transactions

### Create Transaction

**Route**: `/`

**Description**: Creates a new transaction.

**Request Body**:
- `type`: Type of transaction (e.g., "withdraw", "game_fee").
- `user_id`: ID of the user associated with the transaction.
- `amount`: Amount of the transaction.

**Response**:
- Status: 200 OK
- Body: Success message indicating the transaction was successful.


## GET Games

### Get Games by User ID

**Route**: `/user_id/:user_id`

**Description**: Fetches games associated with a user by their user ID.

**Parameters**:
- `user_id`: The ID of the user whose games are to be fetched.

**Response**:
- Status: 200 OK
- Body: Array of game objects.

## POST Games

### Create Game

**Route**: `/`

**Description**: Creates a new game.

**Request Body**:
- `fee`: Fee for participating in the game.
- `user_id`: ID of the user participating in the game.

**Response**:
- Status: 200 OK
- Body: An object containing information about the game, including rows and rewards.
