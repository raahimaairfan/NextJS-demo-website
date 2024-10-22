Website using **Next.js** and **Tailwind CSS**

Features:
🔹 layout.tsx: This file is the backbone of application’s design. By defining a common layout that includes elements like headers and footers, I created a consistent user experience across all pages. This not only streamlines development but also helps in maintaining a cohesive aesthetic throughout the site.
🔹 error.tsx: Handling errors gracefully is crucial for user satisfaction. The error.tsx file acts as a safety net, capturing any runtime errors in my application. Instead of displaying a generic error message, it presents users with friendly and informative feedback, ensuring they don’t encounter a frustrating blank screen.
🔹 loading.tsx: To enhance the user experience, I integrated a loading state using the loading.tsx file. This shows a user-friendly message while data is being fetched, keeping users informed and engaged rather than leaving them in suspense.
🔹 not-found.tsx: I created a custom 404 page using not-found.tsx to enhance user navigation. Instead of a standard error message, this page guides users back to relevant content, helping them find what they’re looking for, which minimizes frustration.
🔹 page.tsx: The page.tsx file serves as the entry point for each page in my application. By exporting a React component, I’m able to define the content and functionality of each route, making it easy to create dynamic and interactive user experiences.
