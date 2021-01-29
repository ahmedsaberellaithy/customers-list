# Specify a base image
FROM node:14.5.0 as build-deps

WORKDIR '/app'

# Install some depenendencies
COPY package.json .
RUN yarn install
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Default command
CMD ["yarn", "run", "start"]