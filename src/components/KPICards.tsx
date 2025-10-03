import React from 'react';
import { Filters } from '../types';

interface KPICardsProps {
  kpiData: {
    serviceRecommended: number;
    purchekRecommended: number;
    containmentRecommended: number;
    pairedWheelRecommended: number;
  };
  filters: Filters;
  onKPIClick: (kpi: keyof Filters) => void;
}

const KPICards: React.FC<KPICardsProps> = ({ kpiData, filters, onKPIClick }) => {
  return (
    <div className="kpi-row">
      <div 
        className={`kpi-card ${filters.serviceRecommended ? 'active' : ''}`}
        onClick={() => onKPIClick('serviceRecommended')}
      >
        <div className="kpi-number">{kpiData.serviceRecommended}</div>
        <div className="kpi-label">Service Recommended</div>
      </div>

      <div 
        className={`kpi-card ${filters.purchekRecommended ? 'active' : ''}`}
        onClick={() => onKPIClick('purchekRecommended')}
      >
        <div className="kpi-number">{kpiData.purchekRecommended}</div>
        <div className="kpi-label">Purchek Recommended</div>
      </div>

      <div 
        className={`kpi-card ${filters.containmentRecommended ? 'active' : ''}`}
        onClick={() => onKPIClick('containmentRecommended')}
      >
        <div className="kpi-number">{kpiData.containmentRecommended}</div>
        <div className="kpi-label">Containment Recommended</div>
      </div>

      <div 
        className={`kpi-card ${filters.pairedWheelRecommended ? 'active' : ''}`}
        onClick={() => onKPIClick('pairedWheelRecommended')}
      >
        <div className="kpi-number">{kpiData.pairedWheelRecommended}</div>
        <div className="kpi-label">Paired Wheels Recommended</div>
      </div>
    </div>
  );
};

export default KPICards;