import { useLocalStorage } from './use-local-storage';

export interface Article {
  id: number;
  name: string;
  price: number;
  ingredients: number[];
}

export function useArticles() {
  const [articles, setArticles] = useLocalStorage<Article[]>('articles', []);

  const addArticle = (data: Omit<Article, 'id'>) => {
    setArticles([...articles, { ...data, id: Date.now() }]);
  };

  const updateArticle = (id: number, data: Omit<Article, 'id'>) => {
    setArticles(articles.map((a) => (a.id === id ? { ...a, ...data, id } : a)));
  };

  const deleteArticle = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return { articles, addArticle, updateArticle, deleteArticle };
}
