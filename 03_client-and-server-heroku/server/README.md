# Nodejs Server Example
# Nodejs API server with Docker
Deploy Basic API server with Nodejs using docker

Step:
Local Setup
1) docker image build -t my-server .
2) docker container run -d --name web1 -p 8080:8080 my-server

Heroku:
3) heroku container:push web
4) heroku container:release web
5) heroku open
