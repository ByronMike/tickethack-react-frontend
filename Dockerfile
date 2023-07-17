# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install 

# Copy the rest of the project files to the working directory
COPY . .

# Expose the desired port (e.g., 3000) for the Next.js application
EXPOSE 3001

# Start the Next.js application
CMD ["yarn", "dev"]
