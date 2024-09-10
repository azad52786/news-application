# GNews Full-Stack Application

This project is a full-stack application that integrates with the [gnews.io](https://gnews.io) API to display news articles with pagination and search functionality. The project uses React for the frontend and Node.js for the backend.

## Project Setup

### Frontend

1. **Install npm packages:**
   ```bash
   npm install

2.  **Start the app:**
   ```bash
   npm start  
   
### Backend 
1. **Install npm packages:**
    ```bash
    npm install
    
2. **Set your GNews API Key:**

   - Obtain your API key from [gnews.io](https://gnews.io) and set it in your environment variables (`GNEWS_API_KEY`).
   - Set the `PORT=4000` in your `.env` file.

3. **Start the server:**
    ```bash
    npm start
    
## Overview of the Approach

- I started by designing the frontend to showcase the news articles in a clean and responsive manner.
- Then, I designed the APIs, focusing on efficient communication between the frontend and backend while following best practices for REST APIs.
- The project was built gradually by ensuring a seamless connection between frontend and backend.
- Throughout the development process, I followed a modular and well-structured approach to maintain clean code and scalability.


## Challenges Faced and Solutions

1. **GNews Pagination:**
   - The gnews.io API does not provide a free pagination feature. To solve this, I implemented a custom pagination process to handle the articles in the frontend.

2. **API Rate Limits:**
   - GNews allows only 100 API calls per day, which posed a challenge during development. I optimized the number of API requests and ensured that the application handles this limitation efficiently.

## Final Thoughts

This project helped me reinforce my knowledge of full-stack development. Starting from `npx create-react-app` to deploying the frontend on Firebase and connecting it to the backend was a valuable learning experience. It allowed me to revisit core concepts and apply them in a real-world application.

