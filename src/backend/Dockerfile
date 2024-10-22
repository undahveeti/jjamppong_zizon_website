# Use Node.js official image
FROM node:14

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port 5001
EXPOSE 5001

# Command to start your app
CMD [ "node", "server.js" ]
