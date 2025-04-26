
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArticleCard, ArticleProps } from "@/components/ArticleCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const articles: ArticleProps[] = [
    {
      id: "1",
      title: "Form Validation In React.js: Build A Reusable Custom Hook For Inputs And Error Handling",
      date: "January 27, 2023",
      slug: "form-validation-react-custom-hook",
      excerpt: "Learn how to create a reusable custom hook for form validation in React applications."
    },
    {
      id: "2",
      title: "Silky Smooth Scrolling In React.js: A Step-By-Step Guide For React Developers",
      date: "January 30, 2023",
      slug: "smooth-scrolling-react-guide",
      excerpt: "Implement smooth scrolling effects in your React applications with this comprehensive guide."
    },
    {
      id: "3",
      title: "Creating An Efficient Modal Component In React Using Hooks And Portals",
      date: "January 29, 2023",
      slug: "efficient-modal-react-hooks-portals",
      excerpt: "Learn how to build an accessible and reusable modal component with React hooks and portals."
    },
    {
      id: "4",
      title: "Build A Fabulous Todo List App With React, Redux And Framer-Motion",
      date: "January 28, 2023",
      slug: "todo-app-react-redux-framer-motion",
      excerpt: "Create a feature-rich todo application with animations using React, Redux, and Framer Motion."
    },
    {
      id: "5",
      title: "Redux Simplified: A Beginner's Guide For Web Developers",
      date: "January 31, 2023",
      slug: "redux-simplified-beginners-guide",
      excerpt: "Break down complex Redux concepts into simple, understandable parts for beginners."
    },
    {
      id: "6",
      title: "Mastering CSS Grid Layout: From Basics to Advanced Techniques",
      date: "February 5, 2023",
      slug: "mastering-css-grid-layout",
      excerpt: "A comprehensive guide to CSS Grid layout with practical examples and best practices."
    },
    {
      id: "7",
      title: "Understanding React Context API: A Practical Approach",
      date: "February 12, 2023",
      slug: "understanding-react-context-api",
      excerpt: "Learn how to leverage React Context API for state management in your applications."
    },
    {
      id: "8",
      title: "Building Accessible Web Applications with ARIA",
      date: "February 18, 2023",
      slug: "building-accessible-web-apps-aria",
      excerpt: "Improve your web application's accessibility using ARIA attributes and best practices."
    }
  ];
  
  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold font-display mb-4">All Articles</h1>
              <p className="text-muted-foreground mb-8">
                Technical articles, tutorials, and insights on web development and design.
              </p>
              
              {/* Search input */}
              <div className="relative mb-10">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pr-12 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <span className="absolute right-4 top-4 text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>
              
              {/* Articles list */}
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">No articles found matching your search.</p>
                  {searchTerm && (
                    <Button variant="outline" onClick={() => setSearchTerm("")}>
                      Clear search
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Newsletter signup */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold font-display mb-4">Stay updated with my latest articles</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to my newsletter to receive updates on new articles and exclusive content.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
