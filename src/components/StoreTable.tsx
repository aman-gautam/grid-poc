import React, { useState, useMemo } from 'react';
import { Store } from '../types';

interface StoreTableProps {
  stores: Store[];
  onStoreClick: (store: Store) => void;
}

type SortField = keyof Store;
type SortDirection = 'asc' | 'desc';

const StoreTable: React.FC<StoreTableProps> = ({ stores, onStoreClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const filteredAndSortedStores = useMemo(() => {
    let filtered = stores.filter(store => {
      const searchLower = searchTerm.toLowerCase();
      return (
        store.id.toLowerCase().includes(searchLower) ||
        store.address1.toLowerCase().includes(searchLower) ||
        store.zipcode.includes(searchTerm) ||
        (store.customerId && store.customerId.toLowerCase().includes(searchLower))
      );
    });

    return filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (aValue === undefined && bValue === undefined) return 0;
      if (aValue === undefined) return sortDirection === 'asc' ? 1 : -1;
      if (bValue === undefined) return sortDirection === 'asc' ? -1 : 1;
      
      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        comparison = Number(aValue) - Number(bValue);
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [stores, searchTerm, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return ' ↕️';
    return sortDirection === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          className="table-search"
          placeholder="Search stores..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '300px' }}
        />
        <div style={{ color: '#666', fontSize: '14px' }}>
          Showing {filteredAndSortedStores.length} of {stores.length} stores
        </div>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              Store ID {getSortIcon('id')}
            </th>
            <th onClick={() => handleSort('address1')}>
              Address {getSortIcon('address1')}
            </th>
            <th onClick={() => handleSort('zipcode')}>
              Zipcode {getSortIcon('zipcode')}
            </th>
            <th onClick={() => handleSort('customerId')}>
              Customer ID {getSortIcon('customerId')}
            </th>
            <th onClick={() => handleSort('recommendService')}>
              Service {getSortIcon('recommendService')}
            </th>
            <th onClick={() => handleSort('recommendPurchek')}>
              Purchek {getSortIcon('recommendPurchek')}
            </th>
            <th onClick={() => handleSort('recommendContainment')}>
              Containment {getSortIcon('recommendContainment')}
            </th>
            <th onClick={() => handleSort('recommendPairedWheel')}>
              Paired Wheel {getSortIcon('recommendPairedWheel')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedStores.map(store => (
            <tr key={store.id} onClick={() => onStoreClick(store)}>
              <td title={store.id}>
                {store.id.substring(0, 8)}...
              </td>
              <td>{store.address1}</td>
              <td>{store.zipcode}</td>
              <td>{store.customerId || ''}</td>
              <td>{store.recommendService ? 'Y' : ''}</td>
              <td>{store.recommendPurchek ? 'Y' : ''}</td>
              <td>{store.recommendContainment ? 'Y' : ''}</td>
              <td>{store.recommendPairedWheel ? 'Y' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreTable;