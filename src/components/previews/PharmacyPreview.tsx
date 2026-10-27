import React, { useState } from 'react';
import { Search, Database, HardDrive, ShoppingCart, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface MedicineItem {
  id: string;
  sku: string;
  name: string;
  dosage: string;
  stock: number;
  batch: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Critical';
}

const INITIAL_MEDICINES: MedicineItem[] = [
  { id: '1', sku: 'RX-7402', name: 'Amoxicillin Trihydrate', dosage: '500mg Cap', stock: 142, batch: 'B24-89', price: 12.50, status: 'In Stock' },
  { id: '2', sku: 'RX-9104', name: 'Metformin Hydrochloride', dosage: '850mg Tab', stock: 88, batch: 'B24-11', price: 8.20, status: 'In Stock' },
  { id: '3', sku: 'RX-3310', name: 'Cetirizine Dihydrochloride', dosage: '10mg Tab', stock: 14, batch: 'B23-90', price: 6.40, status: 'Low Stock' },
  { id: '4', sku: 'RX-5521', name: 'Omeprazole Delayed-Release', dosage: '20mg Cap', stock: 210, batch: 'B24-44', price: 15.00, status: 'In Stock' },
  { id: '5', sku: 'RX-1189', name: 'Azithromycin Monohydrate', dosage: '250mg Tab', stock: 6, batch: 'B24-02', price: 22.80, status: 'Critical' },
];

export const PharmacyPreview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'pos'>('inventory');
  const [cartCount, setCartCount] = useState(3);
  const [dispensedAlert, setDispensedAlert] = useState<string | null>(null);

  const filtered = INITIAL_MEDICINES.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDispense = (name: string) => {
    setCartCount((prev) => prev + 1);
    setDispensedAlert(`Queued 1x ${name} to checkout`);
    setTimeout(() => setDispensedAlert(null), 2500);
  };

  return (
    <div className="preview-container desktop-mockup">
      {/* Avalonia Window Chrome */}
      <div className="window-titlebar">
        <div className="window-controls">
          <span className="dot close" />
          <span className="dot min" />
          <span className="dot max" />
        </div>
        <div className="window-title">
          <Database size={12} className="accent-text" />
          <span>PharmacyApp.Avalonia — Local Offline Station #01</span>
        </div>
        <div className="window-meta">
          <span className="badge-sqlite">
            <HardDrive size={11} /> SQLite v3.45 (Local WAL)
          </span>
        </div>
      </div>

      {/* Main App Layout */}
      <div className="mockup-body">
        {/* Top Metric Bar */}
        <div className="pharmacy-metrics-bar">
          <div className="metric-box">
            <span className="metric-lbl">TOTAL SKU</span>
            <span className="metric-val">1,482</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">TODAY SALES</span>
            <span className="metric-val">$1,842.50</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">LOW STOCK ALERT</span>
            <span className="metric-val text-warning">8 SKUs</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">SECURITY STATE</span>
            <span className="metric-val text-accent">
              <ShieldCheck size={13} style={{ display: 'inline', marginRight: 4 }} />
              AUDITED
            </span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="pharmacy-toolbar">
          <div className="search-input-wrap">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Search medicine by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pharmacy-search-input"
            />
          </div>

          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`pharmacy-tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
            >
              Inventory ({filtered.length})
            </button>
            <button
              onClick={() => setActiveTab('pos')}
              className={`pharmacy-tab-btn ${activeTab === 'pos' ? 'active' : ''}`}
            >
              <ShoppingCart size={13} /> Checkout Queue ({cartCount})
            </button>
          </div>
        </div>

        {dispensedAlert && (
          <div className="action-feedback-toast">
            <CheckCircle2 size={13} className="accent-text" />
            <span>{dispensedAlert}</span>
          </div>
        )}

        {/* Inventory Table */}
        <div className="pharmacy-table-wrapper">
          <table className="pharmacy-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>MEDICINE NAME</th>
                <th>DOSAGE</th>
                <th>BATCH</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td className="font-mono text-muted">{item.sku}</td>
                  <td className="item-name">{item.name}</td>
                  <td>{item.dosage}</td>
                  <td className="font-mono">{item.batch}</td>
                  <td className="font-mono">{item.stock}</td>
                  <td className="font-mono">${item.price.toFixed(2)}</td>
                  <td>
                    <span
                      className={`status-pill-small ${
                        item.status === 'In Stock'
                          ? 'status-ok'
                          : item.status === 'Low Stock'
                          ? 'status-warn'
                          : 'status-crit'
                      }`}
                    >
                      {item.status === 'Critical' && <AlertTriangle size={10} />}
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDispense(item.name)}
                      className="btn-dispense"
                      title="Add to current transaction queue"
                    >
                      + Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Status bar */}
        <div className="pharmacy-statusbar">
          <span>● Offline Store: OK</span>
          <span>Latency: 0.12ms (Native IPC)</span>
          <span>Encryption: AES-256 DB At-Rest</span>
        </div>
      </div>
    </div>
  );
};
