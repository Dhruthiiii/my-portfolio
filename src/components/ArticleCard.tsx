
import { Link } from "react-router-dom";

export interface ArticleProps {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
}

export const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Link to={`/articles/${article.slug}`} className="article-card block">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="text-lg font-medium mb-2 md:mb-0">{article.title}</h3>
        <time className="text-sm text-rose-500 dark:text-rose-400 font-medium">
          {article.date}
        </time>
      </div>
      {article.excerpt && (
        <p className="text-muted-foreground mt-2">{article.excerpt}</p>
      )}
    </Link>
  );
};
