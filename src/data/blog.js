// Static blog data
export const blogPosts = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    slug: 'building-modern-web-apps-react-typescript',
    excerpt: 'Learn how to create scalable and maintainable web applications using React and TypeScript with best practices and modern tooling.',
    content: `# Building Modern Web Applications with React and TypeScript

In today's rapidly evolving web development landscape, creating scalable and maintainable applications is more important than ever. React and TypeScript have emerged as a powerful combination that enables developers to build robust, type-safe applications with excellent developer experience.

## Why React and TypeScript?

React has revolutionized how we think about building user interfaces, introducing concepts like component-based architecture and declarative programming. TypeScript adds static typing to JavaScript, catching errors at compile time and providing better tooling support.

### Benefits of Using TypeScript with React

1. **Type Safety**: Catch errors before they reach production
2. **Better IDE Support**: Enhanced autocomplete and refactoring
3. **Self-Documenting Code**: Types serve as documentation
4. **Easier Refactoring**: Confident code changes with type checking

## Setting Up Your Development Environment

\`\`\`bash
# Create a new React app with TypeScript
npx create-react-app my-app --template typescript

# Or with Vite (recommended)
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Best Practices

### 1. Component Structure

Always define clear interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
\`\`\`

### 2. State Management

Use proper typing for your state:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
\`\`\`

## Advanced Patterns

### Custom Hooks

Create reusable logic with custom hooks:

\`\`\`typescript
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Conclusion

React and TypeScript together provide a powerful foundation for building modern web applications. The combination offers type safety, better developer experience, and more maintainable code. Start small, gradually adopt TypeScript features, and you'll see the benefits in your development workflow.

Happy coding! 🚀`,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    published: true,
    featured: true,
    views: 1250,
    readTime: 8,
    tags: ['React', 'TypeScript', 'Web Development'],
    category: 'TECH',
    createdAt: new Date('2024-01-15'),
    publishedAt: new Date('2024-01-15'),
    author: {
      name: 'Ridha Fahmi J',
      email: 'ridhofahmij225@gmail.com',
      avatar: null
    },
    comments: [
      {
        id: '1',
        content: 'Great article! Very helpful for understanding TypeScript with React.',
        createdAt: new Date('2024-01-16'),
        author: {
          name: 'John Doe',
          avatar: null
        }
      },
      {
        id: '2',
        content: 'Thanks for the practical examples. The custom hooks section was particularly useful.',
        createdAt: new Date('2024-01-17'),
        author: {
          name: 'Jane Smith',
          avatar: null
        }
      }
    ]
  },
  {
    id: '2',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-web-development-trends-2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.',
    content: `# The Future of Web Development: Trends to Watch in 2024

Web development is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with web applications. Let's explore the most significant developments that every developer should be aware of.

## 1. AI-Powered Development Tools

Artificial Intelligence is revolutionizing the development process:

- **Code Generation**: Tools like GitHub Copilot and ChatGPT are helping developers write code faster
- **Automated Testing**: AI can generate comprehensive test suites
- **Bug Detection**: Machine learning algorithms can identify potential issues before they become problems

## 2. WebAssembly (WASM) Adoption

WebAssembly is gaining traction for performance-critical applications:

- **Near-native Performance**: Run high-performance applications in the browser
- **Language Flexibility**: Write web applications in languages like Rust, C++, and Go
- **Gaming and Graphics**: Enable complex games and graphics applications on the web

## 3. Edge Computing and CDNs

The shift towards edge computing is changing how we deploy applications:

- **Reduced Latency**: Serve content closer to users
- **Better Performance**: Faster load times and improved user experience
- **Global Scale**: Easier deployment across multiple regions

## 4. Progressive Web Apps (PWAs) Evolution

PWAs continue to bridge the gap between web and native apps:

- **Improved Capabilities**: Better offline functionality and device integration
- **App Store Distribution**: PWAs can now be distributed through app stores
- **Enhanced Performance**: Better caching strategies and optimization techniques

## 5. Serverless Architecture Maturity

Serverless computing is becoming more sophisticated:

- **Better Cold Start Performance**: Reduced latency for function execution
- **Improved Developer Experience**: Better tooling and debugging capabilities
- **Cost Optimization**: More granular pricing models

## Conclusion

The future of web development is exciting and full of opportunities. By staying informed about these trends and experimenting with new technologies, developers can build better, faster, and more engaging web experiences.

Stay curious and keep learning! 🌟`,
    coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true,
    featured: false,
    views: 890,
    readTime: 6,
    tags: ['Web Development', 'Trends', 'Future'],
    category: 'TECH',
    createdAt: new Date('2024-01-10'),
    publishedAt: new Date('2024-01-10'),
    author: {
      name: 'Ridha Fahmi J',
      email: 'ridhofahmij225@gmail.com',
      avatar: null
    },
    comments: [
      {
        id: '3',
        content: 'Interesting insights about the future of web development. The AI section was particularly enlightening.',
        createdAt: new Date('2024-01-11'),
        author: {
          name: 'Alex Johnson',
          avatar: null
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Design Systems: Creating Consistent User Experiences',
    slug: 'design-systems-consistent-user-experiences',
    excerpt: 'Learn how to build and maintain design systems that ensure consistency across your digital products.',
    content: `# Design Systems: Creating Consistent User Experiences

Consistency is key to creating great user experiences. Design systems provide the foundation for building cohesive, scalable, and maintainable digital products. In this article, we'll explore how to create and implement effective design systems.

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It includes:

- **Design Tokens**: Colors, typography, spacing, and other design decisions
- **Component Library**: Reusable UI components
- **Guidelines**: Rules and best practices for using the system
- **Documentation**: Clear instructions for implementation

## Benefits of Design Systems

### 1. Consistency
- Unified visual language across all products
- Reduced design debt
- Better brand recognition

### 2. Efficiency
- Faster design and development cycles
- Reduced duplication of effort
- Easier maintenance and updates

### 3. Scalability
- Easy to onboard new team members
- Consistent quality across teams
- Simplified decision-making process

## Building Your Design System

### Step 1: Audit Your Current Design
- Identify existing patterns and inconsistencies
- Document current components and styles
- Gather feedback from stakeholders

### Step 2: Define Design Tokens
\`\`\`css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  
  /* Typography */
  --font-family-base: 'Roboto', sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.5;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
\`\`\`

### Step 3: Create Component Library
Build reusable components with clear APIs:

\`\`\`jsx
const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  ...props 
}) => {
  return (
    <button 
      className={\`btn btn--\${variant} btn--\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

### Step 4: Document Everything
- Component usage examples
- Do's and don'ts
- Accessibility guidelines
- Implementation notes

## Tools for Design Systems

### Design Tools
- **Figma**: Collaborative design with component libraries
- **Sketch**: Vector-based design with symbols
- **Adobe XD**: Prototyping and design systems

### Development Tools
- **Storybook**: Component development and documentation
- **Bit**: Component sharing and collaboration
- **Chromatic**: Visual testing for components

## Maintaining Your Design System

### 1. Governance
- Establish clear ownership and responsibilities
- Create contribution guidelines
- Regular review and update processes

### 2. Adoption
- Provide training and support
- Create migration guides
- Monitor usage and gather feedback

### 3. Evolution
- Regular audits and improvements
- Stay updated with design trends
- Adapt to new requirements and technologies

## Conclusion

Design systems are essential for creating consistent, efficient, and scalable digital products. By investing time in building and maintaining a robust design system, teams can focus more on solving user problems and less on reinventing design solutions.

Remember, a design system is never truly finished—it's a living, breathing part of your product ecosystem that should evolve with your needs.

Happy designing! 🎨`,
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true,
    featured: true,
    views: 675,
    readTime: 10,
    tags: ['Design', 'UI/UX', 'Design Systems'],
    category: 'DESIGN',
    createdAt: new Date('2024-01-05'),
    publishedAt: new Date('2024-01-05'),
    author: {
      name: 'Ridha Fahmi J',
      email: 'ridhofahmij225@gmail.com',
      avatar: null
    },
    comments: [
      {
        id: '4',
        content: 'Excellent guide on design systems! The practical examples really help understand the concepts.',
        createdAt: new Date('2024-01-06'),
        author: {
          name: 'Sarah Wilson',
          avatar: null
        }
      },
      {
        id: '5',
        content: 'This is exactly what our team needed. Going to implement these practices right away.',
        createdAt: new Date('2024-01-07'),
        author: {
          name: 'Mike Chen',
          avatar: null
        }
      }
    ]
  }
];

// Helper functions for blog data
export const getAllPosts = (published = true) => {
  return published ? blogPosts.filter(post => post.published) : blogPosts;
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (limit = 3) => {
  return blogPosts
    .filter(post => post.published && post.featured)
    .slice(0, limit);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => 
    post.published && post.category === category.toUpperCase()
  );
};