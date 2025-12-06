import { useState } from 'react';
import ItemCard from '../components/ItemCard';
import FilterPanel from '../components/FilterPanel';
import Pagination from '../components/Pagination';
import items from '../data/items.json';

const FoundItems = () => {
  const foundItems = items.filter(item => item.status === 'found');
  const [filteredItems, setFilteredItems] = useState(foundItems);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Found Items</h1>
      <FilterPanel onFilter={setFilteredItems} items={foundItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedItems.map(item => <ItemCard key={item.id} item={item} />)}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default FoundItems;