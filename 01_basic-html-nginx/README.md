# First Basic Example
# Local server -- HTML with Nginx using Docker
Deploy Basic html page with Nginx using docker on Local machine

Step:
1) docker build -t basic-nginx .
2) docker run --name first-nginx -d -p 8080:80 basic-nginx
3) Open browser and hit http://localhost:8080 or http://host-ip:8080
