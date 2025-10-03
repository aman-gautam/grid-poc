import { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import ChartsRow from './components/ChartsRow';
import KPICards from './components/KPICards';
import StoreTable from './components/StoreTable';
import StoreModal from './components/StoreModal';
import { generateStoreData } from './data';
import { Store, Filters } from './types';

function App() {
  const [selectedRetailer, setSelectedRetailer] = useState<string>('');
  const [stores] = useState<Store[]>(() => generateStoreData());
  const [filters, setFilters] = useState<Filters>({
    serviceRecommended: false,
    purchekRecommended: false,
    containmentRecommended: false,
    pairedWheelRecommended: false
  });
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      if (filters.serviceRecommended && !store.recommendService) return false;
      if (filters.purchekRecommended && !store.recommendPurchek) return false;
      if (filters.containmentRecommended && !store.recommendContainment) return false;
      if (filters.pairedWheelRecommended && !store.recommendPairedWheel) return false;
      return true;
    });
  }, [stores, filters]);

  const kpiData = useMemo(() => ({
    serviceRecommended: stores.filter(s => s.recommendService).length,
    purchekRecommended: stores.filter(s => s.recommendPurchek).length,
    containmentRecommended: stores.filter(s => s.recommendContainment).length,
    pairedWheelRecommended: stores.filter(s => s.recommendPairedWheel).length
  }), [stores]);

  const handleKPIClick = (kpi: keyof Filters) => {
    setFilters(prev => ({
      ...prev,
      [kpi]: !prev[kpi]
    }));
  };

  return (
    <div className="dashboard">
      <h1 style={{ marginBottom: '30px', fontSize: '32px', textAlign: 'center' }}>
        Retailer Opportunities
      </h1>
      
      <SearchBar 
        selectedRetailer={selectedRetailer}
        onRetailerSelect={setSelectedRetailer}
      />

      {selectedRetailer && (
        <>
          <ChartsRow />
          
          <KPICards 
            kpiData={kpiData}
            filters={filters}
            onKPIClick={handleKPIClick}
          />
          
          <StoreTable 
            stores={filteredStores}
            onStoreClick={setSelectedStore}
          />
        </>
      )}

      {selectedStore && (
        <StoreModal 
          store={selectedStore}
          onClose={() => setSelectedStore(null)}
        />
      )}
    </div>
  );
}

export default App;