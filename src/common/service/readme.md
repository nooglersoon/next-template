## Common/Service Folder Readme

### Purpose

The `common/service` folder in this Next.js project serves as a centralized location to store all service functions related to making HTTP API requests, GraphQL queries, communicating with databases, or handling interactions with third-party services. These services are intended to be reusable across the entire application or specific modules and are implemented using TypeScript for type safety and enhanced developer experience.

### Folder Structure

The folder structure inside `common/service` is organized in a modular and maintainable manner. The main subfolders are as follows:

1. **api**: This folder contains service functions responsible for making HTTP API requests to external APIs or your backend services. It handles the communication between the frontend and backend, abstracting away the complexities of network calls.

2. **graphql**: Here, you can find service functions related to executing GraphQL queries and mutations. These functions encapsulate the GraphQL logic, making it easy to fetch data from your GraphQL server.

3. **database**: The `database` folder houses service functions that interact with your application's database. These functions provide an abstraction layer over database operations, ensuring a clean separation of concerns.

4. **thirdparty**: This folder includes service functions that handle interactions with third-party services or APIs. Examples could be services for payment gateways, authentication providers, email services, etc.

### TypeScript Support

The services stored in this folder are written using TypeScript, taking advantage of its static typing capabilities. TypeScript enhances the development process by providing type checking, better code completion, and early detection of potential bugs.

### Usage

To use these common services in your application:

1. **Importing**: You can import the required service functions from the relevant subfolder in `common/service` into any module or component where you need them.

2. **Usage Example**: For example, if you need to make an API request to fetch user data, you can import the appropriate service function from the `api` subfolder and use it to fetch the data.

```typescript
// Importing the API service function
import { fetchUserData } from '@/common/service/api';

// Usage in a component or module
async function fetchData() {
  try {
    const userData = await fetchUserData('/users/123');
    // Process the fetched user data
  } catch (error) {
    // Handle error
  }
}
```

### Contribution Guidelines

If you find any issues with existing services or have ideas for new services that could benefit the project, we welcome contributions! Please follow these guidelines when contributing:

1. **Modularity**: Ensure that the new service functions are modular and adhere to the existing folder structure.

2. **TypeScript**: All services should be written in TypeScript to maintain consistency and take advantage of type safety.

3. **Documentation**: Provide clear and concise documentation for the new service functions and update the `README.md` accordingly.

4. **Unit Tests**: Whenever possible, include unit tests for the new services to maintain code quality and avoid regressions.

### License

This `common/service` folder, like the rest of the Next.js project, is licensed under [insert license here]. Please ensure that any contributions you make are also licensed under the project's chosen license.

---

With this README, developers will have a clear understanding of the purpose and organization of the `common/service` folder, making it easier for them to use, contribute, and maintain the services efficiently throughout the Next.js application.