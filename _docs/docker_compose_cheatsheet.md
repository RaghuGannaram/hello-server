# Docker Compose Instructions and Use Cases

This documentation provides a comprehensive list of Docker Compose commands along with use cases to manage containers, networks, and volumes efficiently.

## Docker Compose Basic Commands

### Starting Services

Start all services defined in the `docker-compose.yml` file.

```sh
docker compose up
```

Start services in detached mode (in the background).

```sh
docker compose up -d
```

### Stopping Services

Stop all running services.

```sh
docker compose stop
```

### Removing Services

Stop and remove all services, networks, and volumes defined in `docker-compose.yml`.

```sh
docker compose down
```

### Viewing Logs

View logs from all services.

```sh
docker compose logs
```

View logs from a specific service.

```sh
docker compose logs <service_name>
```

### Managing Containers

List all running containers.

```sh
docker compose ps
```

Restart a specific service.

```sh
docker compose restart <service_name>
```

### Building Images

Build or rebuild services.

```sh
docker compose build
```

Build services without using cache.

```sh
docker compose build --no-cache
```

### Executing Commands in Containers

Run a command in a running service container.

```sh
docker compose exec <service_name> <command>
```

Example: Open a shell in the web service container.

```sh
docker compose exec web sh
```

### Scaling Services

Scale the number of containers for a service.

```sh
docker compose up --scale <service_name>=<number>
```

## Use Cases and Examples

### Example 1: Basic Web Application Setup

`docker-compose.yml` for a simple web application with a database.

```yaml
version: "3.8"
services:
    web:
        image: my_web_image
        ports:
            - "8000:8000"
        volumes:
            - ./web:/app
    db:
        image: postgres
        environment:
            POSTGRES_DB: example_db
            POSTGRES_USER: example_user
            POSTGRES_PASSWORD: example_password
        volumes:
            - db_data:/var/lib/postgresql/data

volumes:
    db_data:
```

### Example 2: Using Bind Mounts for Logs

Persisting logs to the host machine using bind mounts.

```yaml
version: "3.8"
services:
    my_service:
        image: my_service_image
        volumes:
            - ./logs:/app/logs
        ports:
            - "8000:8000"
```

### Example 3: Using Docker Volumes for Persistent Storage

Using Docker volumes for managing persistent data.

```yaml
version: "3.8"
services:
    my_service:
        image: my_service_image
        volumes:
            - logs_volume:/app/logs
        ports:
            - "8000:8000"

volumes:
    logs_volume:
```

### Example 4: Custom Network Configuration

Defining a custom network for services.

```yaml
version: "3.8"
services:
    app:
        image: my_app_image
        networks:
            - my_custom_network
    db:
        image: mysql
        networks:
            - my_custom_network

networks:
    my_custom_network:
```

### Example 5: Environment Variables

Passing environment variables to services.

```yaml
version: "3.8"
services:
    app:
        image: my_app_image
        environment:
            - APP_ENV=development
            - APP_DEBUG=true
```

## Useful Docker Compose Commands

### Listing All Containers

List all containers (active and inactive) managed by Docker Compose.

```sh
docker compose ps -a
```

### Removing All Stopped Containers

Remove all stopped containers.

```sh
docker compose rm
```

### Viewing Container Status

Check the status of all services.

```sh
docker compose ps
```

### Updating Services

Pull the latest images and recreate services.

```sh
docker compose pull
docker compose up -d
```

### Stopping and Removing Containers, Networks, and Volumes

Completely clean up services, networks, and volumes.

```sh
docker compose down -v
```

## Conclusion

This documentation provides essential Docker Compose commands and examples for managing and deploying multi-container Docker applications efficiently. Use this as a reference for setting up and maintaining your Docker environments.
