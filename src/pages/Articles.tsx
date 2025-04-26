
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  content?: string;
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  const articles: Article[] = [
    {
      id: "1",
      title: "Vulnerability Assessment: Best Practices for Modern Applications",
      date: "January 27, 2023",
      slug: "vulnerability-assessment-best-practices",
      excerpt: "Learn about comprehensive vulnerability assessment methodologies and how to implement them in your organization.",
      content: `
        <div class="article-content">
          <h2>Understanding Vulnerability Assessment</h2>
          <p>Vulnerability assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation where necessary.</p>
          
          <h2>Key Components of Effective Vulnerability Assessment</h2>
          <ul>
            <li><strong>Asset Identification:</strong> Create an inventory of all systems, applications, and data repositories.</li>
            <li><strong>Vulnerability Scanning:</strong> Use automated tools to identify known vulnerabilities in systems.</li>
            <li><strong>Risk Assessment:</strong> Evaluate the potential impact and likelihood of each vulnerability.</li>
            <li><strong>Remediation Planning:</strong> Develop strategies to address identified vulnerabilities.</li>
            <li><strong>Verification:</strong> Confirm that remediation efforts have successfully addressed the vulnerabilities.</li>
          </ul>
          
          <h2>Best Practices for Implementation</h2>
          <p>To ensure effective vulnerability management, organizations should:</p>
          <ol>
            <li>Establish a regular scanning schedule</li>
            <li>Prioritize vulnerabilities based on risk</li>
            <li>Integrate vulnerability management into the development lifecycle</li>
            <li>Document all findings and remediation efforts</li>
            <li>Continuously update vulnerability databases and scanning tools</li>
          </ol>
          
          <h2>Common Challenges and Solutions</h2>
          <p>Many organizations face challenges in implementing effective vulnerability management programs. Some common issues include scanner noise, false positives, and remediation backlogs. Addressing these challenges requires a combination of technical solutions and process improvements.</p>
          
          <h2>Conclusion</h2>
          <p>Vulnerability assessment is an essential component of any cybersecurity program. By following best practices and establishing clear processes, organizations can significantly reduce their risk exposure and better protect their critical assets.</p>
        </div>
      `
    },
    {
      id: "2",
      title: "Deep Learning for Image-Based Disease Detection in Agriculture",
      date: "January 29, 2023",
      slug: "deep-learning-agriculture-disease-detection",
      excerpt: "Exploring how machine learning and computer vision are revolutionizing agricultural practices through automated disease detection.",
      content: `
        <div class="article-content">
          <h2>Introduction to Agricultural AI</h2>
          <p>The application of artificial intelligence in agriculture represents a significant technological advancement with the potential to address critical challenges in food production and sustainability. Among these applications, the use of deep learning for disease detection in crops stands out for its remarkable accuracy and efficiency.</p>
          
          <h2>Image-Based Disease Detection</h2>
          <p>Traditional methods of identifying plant diseases often rely on visual inspection by farmers or agricultural experts—a process that can be time-consuming, labor-intensive, and subject to human error. Image-based disease detection leverages computer vision and machine learning to automate this process, offering several advantages:</p>
          
          <ul>
            <li><strong>Early Detection:</strong> AI systems can identify symptoms before they become visible to the human eye.</li>
            <li><strong>Scalability:</strong> Once trained, models can analyze thousands of images rapidly.</li>
            <li><strong>Consistency:</strong> Automated systems maintain the same level of accuracy regardless of fatigue or other human factors.</li>
            <li><strong>Data Integration:</strong> Results can be integrated with other farm management systems for comprehensive decision-making.</li>
          </ul>
          
          <h2>Deep Learning Architectures for Plant Disease Detection</h2>
          <p>Several deep learning architectures have shown promising results in plant disease classification:</p>
          
          <ol>
            <li><strong>Convolutional Neural Networks (CNNs):</strong> The most commonly used architecture for image classification tasks, offering excellent performance for distinguishing between different diseases.</li>
            <li><strong>ResNet:</strong> Residual Networks are particularly effective for training very deep networks, allowing for more complex feature extraction.</li>
            <li><strong>Mask R-CNN:</strong> This architecture not only classifies diseases but also segments the affected areas of the plant, providing more detailed information about the disease's spread.</li>
          </ol>
          
          <h2>Case Study: Maize Leaf Disease Classification</h2>
          <p>In our research project at ICRISAT, we developed a deep learning model using ResNet architecture to detect diseases in maize plants. The model was trained on a dataset of over 3,000 high-resolution images of maize leaves with various diseases, including Northern Leaf Blight, Gray Leaf Spot, and Common Rust.</p>
          
          <p>The model achieved an impressive 94% accuracy on the test dataset, demonstrating its potential as a practical tool for farmers. By integrating this technology into a mobile application, farmers can simply take a picture of a suspected diseased leaf and receive an immediate diagnosis along with treatment recommendations.</p>
          
          <h2>Challenges and Future Directions</h2>
          <p>Despite the promising results, several challenges remain in the widespread adoption of deep learning for plant disease detection:</p>
          
          <ul>
            <li><strong>Data Quality and Availability:</strong> Building comprehensive datasets that cover all possible diseases and their variations across different growth stages and environmental conditions.</li>
            <li><strong>Model Generalization:</strong> Ensuring models perform well across different varieties, growing conditions, and regions.</li>
            <li><strong>Resource Requirements:</strong> Optimizing models to run efficiently on mobile devices with limited computational resources.</li>
            <li><strong>Integration with Agricultural Practices:</strong> Developing systems that seamlessly fit into existing farming workflows.</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>The application of deep learning for image-based disease detection represents a significant advancement in precision agriculture. By enabling early and accurate identification of plant diseases, these technologies have the potential to significantly reduce crop losses and pesticide use, contributing to more sustainable and productive agricultural systems.</p>
        </div>
      `
    },
    {
      id: "3",
      title: "API Security Testing: Common Vulnerabilities and Countermeasures",
      date: "January 31, 2023",
      slug: "api-security-testing",
      excerpt: "A comprehensive guide to identifying and addressing security flaws in API implementations.",
      content: `
        <div class="article-content">
          <h2>The Critical Importance of API Security</h2>
          <p>As organizations increasingly rely on APIs to connect services and transfer data, securing these interfaces becomes paramount. Insecure APIs can expose sensitive data, allow unauthorized access to systems, and even lead to complete system compromise.</p>
          
          <h2>Common API Vulnerabilities</h2>
          
          <h3>1. Broken Authentication</h3>
          <p>Authentication flaws in APIs allow attackers to assume other users' identities. This vulnerability typically stems from:
            <ul>
              <li>Weak password requirements</li>
              <li>Ineffective credential management</li>
              <li>Insecure session handling</li>
            </ul>
          </p>
          <p>To test for this vulnerability, security professionals should attempt to:</p>
          <ul>
            <li>Bypass authentication mechanisms</li>
            <li>Brute force login endpoints</li>
            <li>Manipulate JSON Web Tokens (JWTs)</li>
          </ul>
          
          <h3>2. Excessive Data Exposure</h3>
          <p>APIs sometimes return more data than necessary, often relying on clients to filter the results before displaying them to users. This creates risk when sensitive data is included in responses.</p>
          <p>Testing for this involves:</p>
          <ul>
            <li>Analyzing API responses for sensitive information</li>
            <li>Comparing documented data models with actual responses</li>
            <li>Examining how applications use the returned data</li>
          </ul>
          
          <h3>3. Broken Object Level Authorization</h3>
          <p>This occurs when APIs do not properly verify that the requesting user has permission to perform actions on specific objects, allowing attackers to access or modify resources belonging to other users.</p>
          <p>Security testers should:</p>
          <ul>
            <li>Replace IDs in API requests with IDs belonging to other users</li>
            <li>Attempt to access endpoints with different user privileges</li>
            <li>Test CRUD operations against objects owned by other users</li>
          </ul>
          
          <h2>Effective API Security Testing Methodologies</h2>
          
          <h3>Manual Testing</h3>
          <p>While time-consuming, manual testing remains essential for thorough API security assessment:</p>
          <ul>
            <li><strong>Business Logic Testing:</strong> Identifying flaws in the application's business rules that might allow unauthorized actions.</li>
            <li><strong>Parameter Tampering:</strong> Modifying request parameters to attempt unauthorized access or actions.</li>
            <li><strong>Session Management:</strong> Testing how the API handles user sessions and authentication tokens.</li>
          </ul>
          
          <h3>Automated Testing</h3>
          <p>Several tools can assist in identifying common API vulnerabilities:</p>
          <ul>
            <li><strong>OWASP ZAP:</strong> An open-source tool for finding security vulnerabilities in web applications and APIs.</li>
            <li><strong>Burp Suite:</strong> A comprehensive platform for web application security testing.</li>
            <li><strong>Postman:</strong> While primarily an API development tool, Postman includes features for security testing.</li>
          </ul>
          
          <h2>Implementing API Security Best Practices</h2>
          
          <p>Beyond testing, organizations should implement preventative measures:</p>
          
          <ol>
            <li><strong>Use Strong Authentication:</strong> Implement OAuth 2.0 or OpenID Connect for secure authentication.</li>
            <li><strong>Apply Rate Limiting:</strong> Prevent abuse through brute force attacks by limiting request frequency.</li>
            <li><strong>Validate All Input:</strong> Implement thorough server-side validation of all parameters and payload data.</li>
            <li><strong>Encrypt Data in Transit:</strong> Always use HTTPS/TLS for API communications.</li>
            <li><strong>Implement Proper Error Handling:</strong> Avoid revealing sensitive information in error messages.</li>
            <li><strong>Use API Gateways:</strong> Centralize authentication, rate limiting, and monitoring.</li>
          </ol>
          
          <h2>Conclusion</h2>
          <p>As APIs continue to serve as the backbone of modern applications, thorough security testing becomes increasingly critical. By understanding common vulnerabilities and implementing comprehensive testing strategies, organizations can significantly reduce their risk of API-related security breaches.</p>
        </div>
      `
    }
  ];
  
  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold font-display mb-4">Articles</h1>
              <p className="text-muted-foreground mb-8">
                Technical articles, tutorials, and insights on cybersecurity and development.
              </p>
              
              {!selectedArticle && (
                <>
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
                      <div 
                        key={article.id}
                        className="mb-8 p-6 border border-border rounded-lg hover:border-primary/50 transition-all cursor-pointer"
                        onClick={() => handleArticleClick(article)}
                      >
                        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                        <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
                        <p className="mb-4">{article.excerpt}</p>
                        <Button variant="link" className="p-0">
                          Read more →
                        </Button>
                      </div>
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
                </>
              )}

              {/* Single Article View */}
              {selectedArticle && (
                <div className="article-view">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedArticle(null)}
                    className="mb-6"
                  >
                    ← Back to articles
                  </Button>
                  
                  <h1 className="text-3xl font-bold mb-2">{selectedArticle.title}</h1>
                  <p className="text-sm text-muted-foreground mb-8">{selectedArticle.date}</p>
                  
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content || '' }}
                  />
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
