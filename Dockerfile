FROM node:6

WORKDIR /app
ADD . /app

# install node packages
RUN npm install

# build front-end stuff
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
