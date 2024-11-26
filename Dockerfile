# Base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
