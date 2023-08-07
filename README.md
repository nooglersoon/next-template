# Next.js Project Folder Structure and Guidelines

### Created by Rupawarna Studio

Welcome to the Next.js project! This repository follows a well-organized folder structure to promote maintainability, code consistency, and ease of development. To ensure smooth collaboration and adherence to the project's standards, please follow these guidelines when working on this project:

## Folder Structure

```
my-nextjs-project/
|-- .gitignore
|-- package.json
|-- pages/
|   |-- index.tsx
|   |-- _app.tsx
|   |-- _document.tsx
|   |-- api/
|   |   |-- some-api-route.ts
|-- public/
|   |-- favicon.ico
|   |-- images/
|-- src/
|   |-- common/
|   |   |-- utils/
|   |   |   |-- utility1.ts
|   |   |   |-- utility2.ts
|   |   |-- components/
|   |   |   |-- Header.tsx
|   |   |   |-- Footer.tsx
|   |   |-- layout/
|   |   |-- hooks/
|   |   |-- service/
|   |-- modules/
|   |   |-- module1/
|   |   |   |-- index.tsx
|   |   |   |-- components/
|   |   |   |   |-- Component1.tsx
|   |   |   |   |-- Component2.tsx
|   |   |   |-- models/
|   |   |   |   |-- Model1.ts
|   |   |   |   |-- Model2.ts
|   |   |   |-- hooks/
|   |   |   |   |-- useCustomHook1.ts
|   |   |   |   |-- useCustomHook2.ts
|   |-- styles/
|   |   |-- global.css
|-- tsconfig.json
|-- jest.config.js
|-- README.md
```

## Folder Details

- **`pages/`**: This folder contains Next.js pages, representing the different routes of the application. The `index.tsx` file is the default landing page, while other files correspond to their respective routes. The `_app.tsx` and `_document.tsx` files handle app-wide configurations.

- **`pages/api/`**: This folder contains API routes that can be accessed from the client-side using `fetch()` or similar methods. These API routes help in building serverless backend endpoints.

- **`public/`**: The public directory contains static files like `favicon.ico`, images, and other assets that can be directly accessed by the client.

- **`src/`**: This folder contains the source code of the application.

- **`src/common/`**: The `common` folder holds utility functions and helpers that are shared across different parts of the application.

- **`src/components/`**: The `components` folder contains reusable React components used throughout the application.

- **`src/modules/`**: The `modules` folder houses self-contained modules or pages of the application. Each module follows its own folder structure and includes components, models, and hooks specific to that module.

- **`src/styles/`**: The `styles` folder contains global CSS files or stylesheets used for styling the application.

## Guidelines

1. **Follow TypeScript**: The project is built using TypeScript. Ensure that all new code is written in TypeScript and existing code is migrated to TypeScript when making changes.

2. **Stick to the Folder Structure**: Maintain the prescribed folder structure to keep the codebase organized. Create new modules in the `modules` folder, and ensure each module follows its folder structure.

3. **Reuse Components**: Whenever possible, reuse components from the `components` folder in different modules. Avoid duplicating code to promote code reuse.

4. **Test Code Thoroughly**: Write unit tests using Jest for critical components, utilities, and custom hooks. Ensure that new features or changes are accompanied by appropriate test coverage.

5. **Use Descriptive Names**: Use meaningful and descriptive names for files, components, and utilities. This improves code readability and helps fellow developers understand your code easily.

6. **Document Your Code**: Add comments and documentation to your code to explain complex logic or functions. This helps others, including your future self, understand the codebase.

7. **Be Mindful of Dependencies**: Limit the use of external dependencies. Ensure that new dependencies are necessary and do not introduce security or performance issues.

8. **Commit and Pull Request Guidelines**: Use descriptive commit messages and follow a clean commit history. When submitting pull requests, provide clear explanations of the changes made and their purpose.

9. **License Compliance**: Respect the licensing terms of external code and assets used in the project. If you add new assets or libraries, ensure they comply with the project's chosen license.

10. **Code Review**: Embrace code reviews and participate actively in the review process. Provide constructive feedback to your peers and maintain a collaborative environment.

## Conclusion

By adhering to these guidelines and following the prescribed folder structure, we can maintain a clean, organized, and efficient codebase. If you have any questions or need further clarification, feel free to reach out to fellow team members or refer to this README document. Happy coding!