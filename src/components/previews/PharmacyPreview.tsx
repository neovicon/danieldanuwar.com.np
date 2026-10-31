import React, { useState } from 'react';
import {
  Search,
  Database,
  HardDrive,
  ShoppingCart,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  LayoutGrid,
  Table as TableIcon,
  PackageCheck,
  ArrowLeftRight
} from 'lucide-react';

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

interface CartItem {
  name: string;
  dosage: string;
  qty: number;
  price: number;
}

const INITIAL_MEDICINES: MedicineItem[] = [
  { id: '1', sku: 'RX-7402', name: 'Amoxicillin Trihydrate', dosage: '500mg Cap', stock: 142, batch: 'B24-89', price: 12.50, status: 'In Stock' },
  { id: '2', sku: 'RX-9104', name: 'Metformin Hydrochloride', dosage: '850mg Tab', stock: 88, batch: 'B24-11', price: 8.20, status: 'In Stock' },
  { id: '3', sku: 'RX-3310', name: 'Cetirizine Dihydrochloride', dosage: '10mg Tab', stock: 14, batch: 'B23-90', price: 6.40, status: 'Low Stock' },
  { id: '4', sku: 'RX-5521', name: 'Omeprazole Delayed-Release', dosage: '20mg Cap', stock: 210, batch: 'B24-44', price: 15.00, status: 'In Stock' },
  { id: '5', sku: 'RX-1189', name: 'Azithromycin Monohydrate', dosage: '250mg Tab', stock: 6, batch: 'B24-02', price: 22.80, status: 'Critical' },
];

const INITIAL_CART: CartItem[] = [
  { name: 'Amoxicillin Trihydrate', dosage: '500mg Cap', qty: 1, price: 12.50 },
  { name: 'Metformin Hydrochloride', dosage: '850mg Tab', qty: 2, price: 8.20 },
];

export const PharmacyPreview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'pos'>('inventory');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [dispensedAlert, setDispensedAlert] = useState<string | null>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const filtered = INITIAL_MEDICINES.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDispense = (name: string, price: number, dosage: string) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { name, price, dosage, qty: 1 }];
    });
    setDispensedAlert(`Queued 1x ${name} to checkout`);
    setTimeout(() => setDispensedAlert(null), 2500);
  };

  const handleCompleteTransaction = () => {
    setDispensedAlert(`Transaction committed to local SQLite WAL`);
    setCartItems([]);
    setTimeout(() => setDispensedAlert(null), 3000);
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
        <div className="window-title font-mono">
          <Database size={12} className="accent-text" />
          <span>PharmacyApp.Avalonia</span>
          <span className="window-sub-tag font-mono text-muted text-xs">· Station #01</span>
        </div>
        <div className="window-meta">
          <span className="badge-sqlite font-mono">
            <HardDrive size={11} /> SQLite WAL
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
            <span className="metric-lbl">LOW STOCK</span>
            <span className="metric-val text-warning">8 Items</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">STATION</span>
            <span className="metric-val text-accent">
              <ShieldCheck size={13} style={{ display: 'inline', marginRight: 4 }} />
              SECURED
            </span>
          </div>
        </div>

        {/* Toolbar with Tab Buttons & Responsive View Switcher */}
        <div className="pharmacy-toolbar">
          <div className="search-input-wrap">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Search medicine or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pharmacy-search-input font-mono"
            />
          </div>

          <div className="pharmacy-controls-cluster">
            {/* Tab switchers: Inventory vs POS */}
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
                <ShoppingCart size={13} /> Checkout ({cartCount})
              </button>
            </div>

            {/* View layout toggles: Cards vs Table */}
            {activeTab === 'inventory' && (
              <div className="view-mode-toggles font-mono text-xs">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`view-toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  title="Card view (optimized for mobile & tablet)"
                  aria-label="Switch to Card view"
                >
                  <LayoutGrid size={12} />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                  title="Table spreadsheet view"
                  aria-label="Switch to Table view"
                >
                  <TableIcon size={12} />
                  <span>Table</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {dispensedAlert && (
          <div className="action-feedback-toast font-mono">
            <CheckCircle2 size={13} className="accent-text" />
            <span>{dispensedAlert}</span>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === 'pos' ? (
          /* POS / Checkout Queue View */
          <div className="pharmacy-pos-view">
            <div className="pos-queue-header font-mono text-xs">
              <span className="text-muted">ACTIVE TRANSACTION BATCH #TX-9041</span>
              <span className="accent-text">OFFLINE DISPENSARY</span>
            </div>

            {cartItems.length === 0 ? (
              <div className="pos-empty-state font-mono text-xs text-muted">
                <span>Checkout queue is empty. Add medicines from inventory above.</span>
              </div>
            ) : (
              <div className="pos-items-list">
                {cartItems.map((cartItem, idx) => (
                  <div key={idx} className="pos-item-row">
                    <div className="pos-item-info">
                      <span className="pos-item-name">{cartItem.name}</span>
                      <span className="pos-item-meta font-mono text-xs text-muted">
                        {cartItem.dosage} · Qty: {cartItem.qty}
                      </span>
                    </div>
                    <div className="pos-item-price font-mono">
                      <span>${(cartItem.price * cartItem.qty).toFixed(2)}</span>
                    </div>
                  </div>
                ))}

                <div className="pos-summary-box font-mono text-xs">
                  <div className="pos-sum-row">
                    <span className="text-muted">TOTAL ITEMS:</span>
                    <span>{cartCount} units</span>
                  </div>
                  <div className="pos-sum-row">
                    <span className="text-muted">LOCAL SYNC:</span>
                    <span className="accent-text">AES-256 WAL ATOMIC</span>
                  </div>
                  <div className="pos-sum-row total-row">
                    <span>ESTIMATED TOTAL:</span>
                    <span className="accent-text font-semibold">${cartSubtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCompleteTransaction}
                  className="btn-primary pos-checkout-btn"
                >
                  <PackageCheck size={14} />
                  <span>Commit Transaction &amp; Print Receipt</span>
                </button>
              </div>
            )}
          </div>
        ) : viewMode === 'cards' ? (
          /* Mobile & Tablet Responsive Cards Grid */
          <div className="pharmacy-cards-container">
            {filtered.map((item) => (
              <div key={item.id} className="pharmacy-inventory-card">
                <div className="p-card-top">
                  <div className="p-card-title-wrap">
                    <span className="p-card-name">{item.name}</span>
                    <div className="p-card-meta font-mono text-xs text-muted">
                      <span className="p-sku">{item.sku}</span>
                      <span className="p-dot">·</span>
                      <span className="p-dosage">{item.dosage}</span>
                      <span className="p-dot">·</span>
                      <span className="p-batch">Lot {item.batch}</span>
                    </div>
                  </div>
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
                </div>

                <div className="p-card-bottom">
                  <div className="p-card-stats font-mono">
                    <span className="p-stock-val text-muted text-xs">{item.stock} in stock</span>
                    <span className="p-price-val font-semibold">${item.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => handleDispense(item.name, item.price, item.dosage)}
                    className="btn-dispense"
                    title="Add to checkout"
                  >
                    + Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Horizontally Responsive Table View with Sticky Header & Sticky Columns */
          <div className="pharmacy-table-wrapper">
            <div className="table-scroll-hint font-mono text-xs">
              <ArrowLeftRight size={11} className="accent-text" />
              <span>Full 8-column spreadsheet view (scrollable horizontally on touch devices)</span>
            </div>
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th className="th-sticky">MEDICINE NAME</th>
                  <th>SKU</th>
                  <th className="th-dosage">DOSAGE</th>
                  <th className="th-batch">BATCH</th>
                  <th>STOCK</th>
                  <th>PRICE</th>
                  <th>STATUS</th>
                  <th className="th-action">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td className="item-name td-sticky">
                      <span className="primary-name">{item.name}</span>
                      <span className="mobile-sub-dosage font-mono text-xs text-muted">
                        {item.dosage} · {item.sku}
                      </span>
                    </td>
                    <td className="font-mono text-muted td-sku">{item.sku}</td>
                    <td className="td-dosage">{item.dosage}</td>
                    <td className="font-mono td-batch">{item.batch}</td>
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
                    <td className="td-action">
                      <button
                        onClick={() => handleDispense(item.name, item.price, item.dosage)}
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
        )}

        {/* Bottom Status bar */}
        <div className="pharmacy-statusbar font-mono">
          <div className="status-item">
            <span className="status-dot-inline" />
            <span>Store: Offline OK</span>
          </div>
          <div className="status-item">
            <span>Latency: 0.12ms</span>
          </div>
          <div className="status-item">
            <span>Storage: AES-256 WAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
