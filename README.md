# mata-gen-api

The general-purpose api.

## Instructions for Running the API

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running `npm install`.
4. Start the server by running `npm run start`.
5. The API will now be running on `http://localhost:3000`.
6. To stop the database, run `npm run stop`.

7. If you have Docker installed, you can also run the API using Docker Compose. The `docker-compose.yml` file is provided in the project directory. To start the API with Docker, navigate to the project directory and run `docker-compose up -d`.
8. To stop the API, run `docker-compose down`.
9. To query the database using `psql`, follow these steps:
   - Open a terminal and navigate to the project directory.
   - Run `docker-compose exec db psql -U myuser mydb` to connect to the database.
   - You will be prompted to enter the password. Enter `mypassword`.
   - Once connected, you can execute SQL queries to interact with the database.
   - To exit the `psql` shell, type `\q` and press Enter.

## Testing the API

You can test the API by running the following `curl` command:
curl http://localhost:3000/api
