# Enunciado

Ecommerce + shopping cart

The e-commerce application serves as a modern online shopping platform with the following core capabilities:

Product browsing with visual product cards
Category and price filtering
Shopping cart functionality with add/remove operations
Cart state persistence between user sessions

<img src='./src/assets/img/User Workflows.png' alt='user workflows'>

System Architecture

The application follows a modern React architecture using context-based state management, custom hooks, and component composition. The system is organized into several interconnected layers:

<img src='./src/assets/img/System Architecture.png' alt='System Architecture'>

Key Components and Their Relationships

The application consists of several interconnected components that work together to provide the e-commerce functionality:

<img src='./src/assets/img/Key Components and Their Relationships.png' alt='Key Components and Their Relationships'>

Application Initialization and Data Flow


The application loads product data from a static JSON file and initializes with two main state providers: and . User interactions trigger state changes, which flow through the system to update the UI.CartProviderFiltersProvider

<img src='./src/assets/img/Application Initialization and Data Flow.png' alt='Application Initialization and Data Flow'>

Technical Stack and Implementation

The application is implemented using the following technologies and patterns:

Technology/Pattern	Usage in the Application
React	            Core UI library
React Context API	Global state management
React Hooks	        State and side-effect management
localStorage	    Cart state persistence
CSS Flexbox	        Responsive layout
Vite	            Development and build tool


File Organization
The codebase is organized into several key directories:

Directory	        Purpose
src/	            Main source code
src/components/	    UI components (Products, Cart, Header, etc.)
src/context/	    Context providers for state management
src/hooks/	        Custom React hooks
src/mocks/	        Mock data (products.json)
src/config/	        Application configuration


Development Features

The application includes several features specifically designed to aid development:

Development-only components (like Footer) that are only rendered in development mode
Configuration flags (IS_DEVELOPMENT) to control environment-specific behavior

<img src='./src/assets/img/Development Features.png' alt='Development Features'>


Component Hierarchy

The application follows a hierarchical component structure with the App component at the root:

<img src='./src/assets/img/Component Hierarchy.png' alt='Component Hierarchy'>


System State Management

The application employs two primary state management systems:

Cart State Management: Implemented using the CartProvider context and a reducer pattern, with localStorage persistence
Filter State Management: Implemented using the FiltersProvider context with filtering logic in the useFilters hook

<img src='./src/assets/img/System State Management.png' alt='System State Management'>

Summary

The e-commerce application demonstrates a modern React architecture with well-separated concerns between UI components, state management, and business logic. The system is designed to be modular, maintainable, and user-friendly, with features like cart persistence to enhance the shopping experience.