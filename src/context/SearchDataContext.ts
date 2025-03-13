import { createContext } from 'react';

// 创建一个 Context 对象
export const SearchDataContext = createContext<{
  searchData: string;
  setSearchData: (searchData: string) => void;
}>({
    searchData: '{}', // 默认值
    setSearchData: () => {}, // 默认函数
});