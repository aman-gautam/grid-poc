import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  LineChart, 
  Line, 
  ResponsiveContainer,
  ComposedChart
} from 'recharts';
import { chartData } from '../data';

const ChartsRow: React.FC = () => {
  return (
    <div className="charts-row">
      <div className="chart-container">
        <div className="chart-title">Current Penetration</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData.currentPenetration}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="solution" 
              label={{ value: 'Solution', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              label={{ value: 'Penetration %', angle: -90, position: 'insideLeft' }}
              domain={[0, 100]}
            />
            <Tooltip />
            <Bar dataKey="penetration" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <div className="chart-title">Retailer Growth</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData.retailerGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              label={{ value: '# of Active Stores', angle: -90, position: 'insideLeft' }}
              domain={[2400, 3100]}
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="stores" 
              stroke="#82ca9d" 
              strokeWidth={3}
              dot={{ fill: '#82ca9d', strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <div className="chart-title">Gatekeeper Revenue</div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={chartData.gatekeeperRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              label={{ value: 'Revenue ($M)', angle: -90, position: 'insideLeft' }}
              domain={[0, 7]}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="newInstall" stackId="a" fill="#8884d8" name="New Install" />
            <Bar dataKey="recurring" stackId="a" fill="#82ca9d" name="Recurring" />
            <Bar dataKey="reoccuring" stackId="a" fill="#ffc658" name="Reoccuring" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <div className="chart-title">New Installs</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData.newInstalls}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              label={{ value: 'Number of Installs', angle: -90, position: 'insideLeft' }}
              domain={[900, 1500]}
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="purchek" 
              stroke="#8884d8" 
              name="Purchek"
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="containment" 
              stroke="#82ca9d" 
              name="Containment"
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="cartManager" 
              stroke="#ffc658" 
              name="Cart Manager"
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="subscription" 
              stroke="#ff7300" 
              name="Subscription"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsRow;