# Retailer Opportunities Dashboard

A React-based dashboard application for tracking retailer opportunities and store analytics.

## Features

- **Retailer Search**: Autocomplete search bar supporting Walmart, Kroger, Albertsons, Target, and Walgreens
- **Interactive Charts**: 
  - Current Penetration (Bar Chart)
  - Retailer Growth (Line Chart) 
  - Gatekeeper Revenue (Stacked Column Chart)
  - New Installs (Multi-line Chart)
- **KPI Cards**: Clickable cards for filtering by recommendation types
- **Store Table**: Sortable, searchable table with 100 generated store records
- **Store Details Modal**: Popup with map integration and conditional recommendations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173/`

## Usage

1. Search for a retailer name in the search bar (supports autocomplete)
2. Once a retailer is selected, the dashboard will display:
   - Four interactive charts showing various metrics
   - KPI cards that can be clicked to filter the store list
   - A table of stores with sorting and searching capabilities
3. Click on any store row to open a detailed popup with:
   - Store location on an OpenStreetMap
   - Conditional recommendation messages based on the store's flags

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Recharts for data visualization
- React Leaflet for map integration
- UUID for generating store IDs

## Data Structure

The application uses randomly generated data for 100 stores, each with:
- Unique Store ID (UUID)
- Address and ZIP code
- Optional Customer ID (60% of stores)
- Recommendation flags for Service, Purchek, Containment, and Paired Wheels