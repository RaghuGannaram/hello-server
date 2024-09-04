# Steps to create a docker image and run the containers

-   Create a network

```bash
docker network create hello-service-network
```

-   Build the docker image

```bash
docker image build --tag raghugannaram/hello-service:1.0.0 ./
```

-   Run the alpha container

```bash
docker container run \
    --detach \
    --name hello-service-alpha \
    --env LOG_LEVEL=debug \
    --env SERVICE_NAME=alpha \
    --publish 9001:5000 \
    --network hello-service-network \
    --mount type=bind,source="$(pwd)/logs",target=/app/logs \
    raghugannaram/hello-service:1.0.0
```

-   Run the beta container

```bash
docker container run \
    --detach \
    --name hello-service-beta \
    --env LOG_LEVEL=debug \
    --env SERVICE_NAME=beta \
    --publish 9002:5000 \
    --network hello-service-network \
    --mount type=bind,source="$(pwd)/logs",target=/app/logs \
    raghugannaram/hello-service:1.0.0
```

-   Run the gamma container

```bash
docker container run \
    --detach \
    --name hello-service-gamma \
    --env LOG_LEVEL=debug \
    --env SERVICE_NAME=gamma \
    --publish 9003:5000 \
    --network hello-service-network \
    --mount type=bind,source="$(pwd)/logs",target=/app/logs \
    raghugannaram/hello-service:1.0.0
```
