# THIS COMMAND STAT FROM IMAGE THAT ALREDEY NOOD JS IS INSTALL VER 20
FROM node:20-alpine

# THIS IS THE APP DIRECTORY
# SET /APP AS WORKING DIRECTORY INSIDE THE CONTAINER
WORKDIR /app


# copy package.jason and pakage-lock.json first to take advantage of docker layer 
COPY package*.json ./


# install all dependecies in packege.jason
RUN npm install 

#copy the entire project into the contanier
COPY . . 

#inform docker that tha applicatin uses port 3000 
EXPOSE 3000

#execute this command when the contanier starts
CMD [ "node", "app.js"]
