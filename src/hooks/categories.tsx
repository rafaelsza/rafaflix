import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { uuid } from 'uuidv4';

import api from '../services/api';

export interface Category {
  id: number;
  title: string;
  description: string;
  color: string;
  videos: Video[];
}

export interface Video {
  id: number;
  categoryId: number | undefined;
  title: string;
  description: string;
  url: string;
}

interface CategoryContextData {
  categories: Category[];
  addCategory(data: Omit<Category, 'id' | 'videos'>): void;
  addVideo(data: Omit<Video, 'id'>): void;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData,
);

const CategoryProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories?_embed=videos');

      if (response.data) {
        setCategories(response.data);
      }
    }

    loadCategories();
  }, []);

  const addCategory = useCallback(
    async (data: Omit<Category, 'id' | 'videos'>) => {
      const response = await api.post('/categories', {
        id: uuid(),
        ...data,
      });

      if (response.data) {
        setCategories([...categories, response.data]);
      }
    },
    [categories],
  );

  const addVideo = useCallback(
    async (data: Omit<Video, 'id'>) => {
      const response = await api.post<Video>('/videos', {
        id: uuid(),
        ...data,
      });

      const addVideoToCategories = categories.map(category => {
        if (category.id === data.categoryId) {
          const addNewVideoOnArray = {
            ...category,
            videos:
              category.videos.length > 0
                ? [...category.videos, response.data]
                : [response.data],
          };

          return addNewVideoOnArray;
        }

        return category;
      });

      setCategories(addVideoToCategories);
    },
    [categories],
  );

  return (
    <CategoryContext.Provider value={{ categories, addCategory, addVideo }}>
      {children}
    </CategoryContext.Provider>
  );
};

function useCategory(): CategoryContextData {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }

  return context;
}

export { CategoryProvider, useCategory };
