# hipages Full Stack Engineer Tech Challenge

### **Description**

This will create a dockerized stack for a backend in Laravel and frontend in Reactjs application, consisted of the following containers:
-  **app**, your PHP application container

        Nginx, PHP7.4 PHP7.4-fpm, Composer, NPM, Node.js v10.x
    
-  **mysql**, MySQL database container ([mysql](https://hub.docker.com/_/mysql/) official Docker image)
-  **web-client**, Reactjs container 
#### **Directory Structure**
```
+-- src <Laravel Backend>
+-- resources
|   +-- default
|   +-- nginx.conf
|   +-- supervisord.conf
|   +-- www.conf
+-- .gitignore
+-- default.conf
+-- Dockerfile
+-- docker-compose.yml
+-- Solutions.md <this file>
+-- web-client <Reactjs Frontend>
```

### **Setup instructions**

**Prerequisites:** 

* Depending on your OS, the appropriate version of Docker Community Edition has to be installed on your machine.  ([Download Docker Community Edition](https://hub.docker.com/search/?type=edition&offering=community))

**Installation steps:** 

1. Create a new directory in which your OS user has full read/write access and clone this repository inside.

2. Create two new textfiles named `db_root_password.txt` and `db_password.txt` and place your preferred database passwords inside:

    ```
    $ echo "myrootpass" > db_root_password.txt
    $ echo "myuserpass" > db_password.txt
    ```

3. Open a new terminal/CMD, navigate to this repository root (where `docker-compose.yml` exists) and execute the following command:

    ```
    $ docker-compose up -d
    ```

    This will download/build all the required images and start the stack containers. It usually takes a bit of time, so grab a cup of coffee.

4. After the whole stack is up, enter the app container and install the framework of your choice:

    **Laravel**

    ```
    $ docker exec -it app bash
    $ composer install
    $ nano .env
    $ php artisan migrate:fresh --seed
    $ php artisan key:generate
    ```
    **Backend Testing**
4.1 To run the unit test simply run following command (Note: don't forget to run migrations after running this command)
    ```
    $ composer test

    ```
5. That's it! Navigate to [http://localhost](http://localhost) to access the application backend.
5. That's it! Navigate to [http://localhost:8080/](http://localhost:8080/) to access the application frontend.

**Default configuration values** 

The following values should be replaced in your `.env` file if you're willing to keep them as defaults:
    
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=appdb
    DB_USERNAME=user
    DB_PASSWORD=myuserpass
    
