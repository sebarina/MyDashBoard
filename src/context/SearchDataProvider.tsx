'use client'; // 标记为客户端组件

import { useState, useEffect } from 'react';
import { SearchDataContext } from './SearchDataContext';

export default function SearchDataProvider({ children }: { children: React.ReactNode }) {
  const [searchData, setSearchData] = useState('{}');
  useEffect(() => {
    console.log('Provider 中的 data:', searchData);
  }, [searchData]);
  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchDataContext.Provider>
  );
}
