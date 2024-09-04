# Docker Cheatsheet

## Image commands

```bash
  docker image build       Build an image from a Dockerfile
  docker image history     Show the history of an image
  docker image import      Import the contents from a tarball to create a filesystem image
  docker image inspect     Display detailed information on one or more images
  docker image load        Load an image from a tar archive or STDIN
  docker image ls          List images
  docker image prune       Remove unused images
  docker image pull        Download an image from a registry
  docker image push        Upload an image to a registry
  docker image rm          Remove one or more images
  docker image save        Save one or more images to a tar archive (streamed to STDOUT by default)
  docker image tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
```

## Container commands

```bash
  docker container attach      Attach local standard input, output, and error streams to a running container
  docker container commit      Create a new image from a container's changes
  docker container cp          Copy files/folders between a container and the local filesystem
  docker container create      Create a new container
  docker container diff        Inspect changes to files or directories on a container's filesystem
  docker container exec        Execute a command in a running container
  docker container export      Export a container's filesystem as a tar archive
  docker container inspect     Display detailed information on one or more containers
  docker container kill        Kill one or more running containers
  docker container logs        Fetch the logs of a container
  docker container ls          List containers
  docker container pause       Pause all processes within one or more containers
  docker container port        List port mappings or a specific mapping for the container
  docker container prune       Remove all stopped containers
  docker container rename      Rename a container
  docker container restart     Restart one or more containers
  docker container rm          Remove one or more containers
  docker container run         Create and run a new container from an image
  docker container start       Start one or more stopped containers
  docker container stats       Display a live stream of container(s) resource usage statistics
  docker container stop        Stop one or more running containers
  docker container top         Display the running processes of a container
  docker container unpause     Unpause all processes within one or more containers
  docker container update      Update configuration of one or more containers
  docker container wait        Block until one or more containers stop, then print their exit codes
```

## Network commands

```bash
  docker network connect      Connect a container to a network
  docker network create       Create a network
  docker network disconnect   Disconnect a container from a network
  docker network inspect      Display detailed information on one or more networks
  docker network ls           List networks
  docker network prune        Remove all unused networks
  docker network rm           Remove one or more networks
```

## Volume commands

```bash
  docker volume create        Create a volume
  docker volume inspect       Display detailed information on one or more volumes
  docker volume ls            List volumes
  docker volume prune         Remove all unused volumes
  docker volume rm            Remove one or more volumes
```

## System commands

```bash
  docker system df            Show Docker disk usage
  docker system events        Get real time events from the server
  docker system info          Display system-wide information
  docker system prune         Remove unused data
```