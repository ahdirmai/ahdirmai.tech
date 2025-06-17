// Data for projects
export const projects = [
  {
    id: 1,
    title: "LamaranPro",
    summary:
      "MVP application to create professional job application letters in seconds, powered by Google Gemini AI and user CV.",
    description:
      "LamaranPro enables job seekers to automatically generate application letters based on job vacancy information and ATS-formatted CVs, without manual typing. All processes are stateless on the server, with no CV files stored.",
    challenge:
      "Simplifying the creation of professional job application letters in seconds, while ensuring user data security (CVs are not stored) and avoiding complex long forms.",
    solution:
      "I designed a full-stack application with Next.js + TypeScript, using Clerk for Google authentication, CV parser (pdf-parse, mammoth), requests to Google Gemini API for letter generation, and export to PDF/Word.",
    date: "June 2025",
    image:
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750140577/SS_1_tsq4et.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "pdf-parse",
      "mammoth",
      "Google Gemini API",
      "@react-pdf/renderer",
      "docx",
      "file-saver",
      "Vercel",
    ],
    category: "Community",
    features: [
      "Google Sign-In (Clerk)",
      "Upload CV (PDF/DOCX, ATS-friendly)",
      "Input job details (job title, company, address, job type)",
      "Parse CV to text",
      "Generate application letter with Google Gemini",
      "Preview letter (copy/edit)",
      "Export PDF & Word",
      "Marketing landing page + CTA",
    ],
    results:
      "Stateless MVP ready for demonstration; application forms are created, previewed, and exported successfully without storing CVs.",
    githubLink: "https://github.com/ahdirmai/bolt-lamaranpro",
    liveLink: "https://bolt-lamaranpro.vercel.app/",
    featured: true,
    additionalImages: [
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750140577/SS4_qgjbdl.png",
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750140577/SS3_q4j7lj.png",
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750140577/SS_2_gp2lll.png",
    ],
  },
  {
    id: 2,
    title: "Image Classification - Rock, Paper, Scissors",
    summary:
      "This project implements an image classification model using Artificial Neural Networks to categorize images of 'Rock', 'Paper', and 'Scissors'. It prepares the dataset by splitting it into training and validation sets and trains a deep learning model for classification.",
    description:
      "This Jupyter Notebook demonstrates an image classification task for 'Rock, Paper, Scissors' images. The core of the project involves downloading a dataset, extracting it, organizing the image files into appropriate directories, and then splitting them into training and validation sets (60% training, 40% validation) using the `splitfolders` library. The preprocessed data is then used to train a convolutional neural network (CNN) model built with TensorFlow/Keras for classifying the images into one of the three categories: rock, paper, or scissors. The notebook also includes steps for visualizing sample images from the dataset.",
    challenge:
      "A primary challenge in image classification tasks is effectively preparing and augmenting the image data for optimal model training. This includes ensuring proper directory structures and splitting data into balanced training and validation sets to prevent overfitting and ensure generalization.",
    solution:
      "The solution involves leveraging Python libraries like `zipfile` for data extraction, `os` and `shutil` for file system operations, and `splitfolders` for efficient dataset partitioning. TensorFlow and Keras are used for building and training the neural network, with `ImageDataGenerator` for preprocessing and augmentation. The structured approach ensures that the model is trained on a well-organized and representative dataset.",
    image:
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750142569/ssd_c84rhr.png",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Matplotlib",
      "split-folders",
      "Jupyter Notebook",
      "Google Colab",
    ],
    category: "Machine Learning",
    date: "July 2022",
    client: "Dicoding Academy (Dataset Source)",
    features: [
      "Image dataset download and extraction",
      "Automated data splitting into training and validation sets (60:40 ratio)",
      "Image preprocessing and augmentation using ImageDataGenerator",
      "Convolutional Neural Network (CNN) model building and training",
      "Classification of 'Rock', 'Paper', and 'Scissors' images",
      "Visualization of sample images",
    ],
    results:
      "The project successfully demonstrates the process of building and training an image classification model for the Rock, Paper, Scissors dataset, resulting in a functional classifier capable of distinguishing between the three hand gestures.",
    githubLink:
      "https://github.com/ahdirmai/image-Classification-Rock.-Paper.-scissor",
    liveLink:
      "https://github.com/ahdirmai/image-Classification-Rock.-Paper.-scissor",
    featured: false,
    additionalImages: [],
  },
  {
    id: 3,
    title: "ahdirmai-ecommerce",
    summary:
      "A web-based e-commerce application developed with Laravel, featuring product catalogs, shopping cart management, and a checkout system.",
    description:
      "This is a comprehensive web-based e-commerce application designed to provide an online shopping platform. It includes core functionalities such as a detailed product catalog, robust shopping cart management, and a streamlined checkout process. The application also offers an intuitive product management interface for administrators and is built with a responsive design to ensure optimal user experience across various devices. The project is open to contributions and is distributed under the MIT License.",
    challenge:
      "A common challenge in developing e-commerce platforms involves ensuring secure transactions, managing large product inventories efficiently, and providing a seamless user experience across different devices. Scalability and maintainability are also critical considerations for such an application.",
    solution:
      "The application leverages Laravel for the backend, providing a strong foundation for robust data handling and business logic. Tailwind CSS is used for a responsive and modern user interface, facilitating quick and consistent styling. Vite is employed as the build tool for efficient development. MySQL serves as the database for reliable data storage, and Laravel Breeze handles secure user authentication, streamlining development of core features.",
    image:
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750141140/E-Commerce_1_un772u.png",
    technologies: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Vite",
      "MySQL",
      "Laravel Breeze",
    ],
    category: "Web App",
    date: "Not specified",
    client: "Not specified",
    features: [
      "Product catalog with detailed information",
      "Shopping cart management",
      "Secure checkout system",
      "Product management interface for administrators",
      "Responsive design for various screen sizes",
      "User authentication via Laravel Breeze",
    ],
    results:
      "Information not explicitly available from the repository, but the project provides a foundational e-commerce solution that can be further expanded and customized to meet specific business needs.",
    githubLink: "https://github.com/ahdirmai/ahdirmai-ecommerce",
    liveLink: "",
    featured: false,
    additionalImages: [
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750141139/Ecommerce_-_2_ulrbtf.png",
    ],
  },
  {
    id: 4,
    title: "Business Tools: Google Places Scraper & WhatsApp Bulk Sender",
    summary:
      "A Python-based tool that facilitates business data gathering from Google Places and enables bulk WhatsApp messaging for lead generation, market research, and promotional campaigns.",
    description:
      "This repository hosts a powerful suite of business tools, combining a Google Places Scraper with a WhatsApp Bulk Sender. The Google Places Scraper efficiently extracts comprehensive business data, including names, categories, addresses, websites, phone numbers, and social media links, based on specified locations and keywords. It offers features like customizable search radius, data export to Excel, phone number cleaning, WhatsApp link generation, and robust handling of Google Places API errors. Complementing this, the WhatsApp Bulk Sender automates the delivery of personalized messages to multiple WhatsApp contacts from an Excel file by utilizing Selenium to control WhatsApp Web. Key features include customizable message templates, delivery reports, and implemented random delays to mitigate spam detection. The tool is designed with a user-friendly menu, clear instructions, prompts, and effective error handling. It requires a Google Places API Key and adherence to a specific Excel file format for the WhatsApp Sender. Users are strongly advised to use the tool responsibly and ethically, respecting WhatsApp's terms of service.",
    challenge:
      "A key challenge addressed by this tool is the manual and time-consuming process of collecting business leads from online directories and then individually contacting them. It also tackles the complexities of automating web interactions for bulk messaging while adhering to platform policies and avoiding spam flags.",
    solution:
      "The tool provides an automated solution by scraping structured business data from Google Places, significantly reducing manual effort in lead generation. For communication, it automates WhatsApp Web via Selenium, enabling personalized bulk messaging. Features like phone number cleaning, WhatsApp link generation, API error handling, and randomized delays in message sending directly address the challenges of data quality, efficiency, and avoiding detection as spam.",
    image:
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750142317/scrap_riawru.png",
    technologies: [
      "Python",
      "Google Places API",
      "Selenium",
      "WhatsApp Web Automation",
    ],
    category: "Business Tools",
    date: "Not specified",
    client: "Not specified",
    features: [
      "Google Places Scraper: Extracts business name, category, address, website, phone number, and social media links.",
      "Customizable search radius for data scraping.",
      "Exports scraped data to Excel format.",
      "Includes phone number cleaning and WhatsApp link generation.",
      "Handles Google Places API errors.",
      "WhatsApp Bulk Sender: Sends personalized messages to multiple WhatsApp numbers.",
      "Automates WhatsApp Web using Selenium.",
      "Supports customizable message templates.",
      "Provides delivery reports for sent messages.",
      "Implements random delays to avoid spam flagging.",
      "User-friendly menu with clear instructions and error handling.",
    ],
    results:
      "The tool streamlines lead generation and marketing outreach by automating the collection of targeted business data and enabling efficient, personalized bulk communication via WhatsApp, significantly saving time and resources.",
    githubLink: "https://github.com/ahdirmai/maps_scapper",
    liveLink: "",
    featured: true,
    additionalImages: [],
  },
  {
    id: 5,
    title: "Hulutalent.id",
    summary:
      "Contributed to the development of MVP 1 for Hulutalent.id, focusing on core feature implementation, bug resolution, and system optimization.",
    description:
      "Instrumental in building the first MVP of Hulutalent.id by implementing five essential features, collaborating closely with the product team for feature analysis, and ensuring the product met user requirements. Proactively resolved bugs within 24 hours to maintain system stability and optimized legacy code, achieving a 30% improvement in efficiency. Designed Entity Relationship Diagrams (ERDs) for scalable database development.",
    challenge:
      "Ensuring rapid delivery of stable core features while maintaining code quality and aligning development with evolving user needs. Addressing legacy code inefficiencies and supporting scalable database design.",
    solution:
      "Oversaw the implementation of five core features, worked closely with the product team for requirements analysis, and resolved bugs promptly. Refactored legacy code for better performance and designed ERDs to guide scalable database architecture.",
    date: "Not specified",
    image:
      "https://res.cloudinary.com/dunqr1cgq/image/upload/v1750141654/ht-1_xzerqv.png",
    technologies: [
      "Laravel",
      "Bootstrap",
      "JavaScript",
      "Spatie Media Library",
      "Spatie Role & Permission",
    ],
    category: "Web App",
    features: [
      "KPI Management",
      "Employee Management",
      "Goal Management",
      "Performance Review",
      "Feedback Management",
    ],
    results:
      "Delivered a stable MVP with improved system efficiency and scalable architecture, ensuring alignment with user and business needs.",
    githubLink: "Private Repository",
    liveLink: "hulutalent.id",
    featured: true,
    additionalImages: [],
  },
];
