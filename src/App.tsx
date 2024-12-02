import React from 'react';
import { Box, DollarSign, Package, Truck } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ShipmentChart from './components/ShipmentChart';
import CashflowChart from './components/CashflowChart';
import ShipmentList from './components/ShipmentList';
import MapView from './components/MapView';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <Header />
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          <StatCard
            icon={<Box className="w-5 h-5 text-red-600" />}
            title="Total Shipments"
            value="6,524"
            change={-1.25}
            bgColor="bg-red-50"
          />
          <StatCard
            icon={<Package className="w-5 h-5 text-emerald-600" />}
            title="Total Order"
            value="25,342"
            change={2.15}
            bgColor="bg-emerald-50"
          />
          <StatCard
            icon={<DollarSign className="w-5 h-5 text-blue-600" />}
            title="Revenue"
            value="$214,535"
            change={0.58}
            bgColor="bg-blue-50"
          />
          <StatCard
            icon={<Truck className="w-5 h-5 text-yellow-600" />}
            title="Delivered"
            value="1,568"
            change={0.43}
            bgColor="bg-yellow-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <ShipmentChart />
          <CashflowChart />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ShipmentList />
          <MapView />
        </div>
      </main>
    </div>
  );
}

export default App;