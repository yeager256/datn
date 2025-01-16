# Use the official Node.js image.
FROM node:18

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container.
COPY package*.json ./

# Install dependencies inside the container.
RUN npm install

# Copy the rest of the application code into the container.
COPY . .

# Expose the port the app will run on.
EXPOSE 5173

# Run the development server.
CMD ["npm", "run", "dev"]
