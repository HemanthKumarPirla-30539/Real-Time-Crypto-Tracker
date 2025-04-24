import { useSelector } from 'react-redux';
import './CryptoTable.css';

export default function CryptoTable() {
  const assets = useSelector((state) => state.assets.assets);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th><th>Logo</th><th>Name</th><th>Symbol</th>
          <th>Price</th><th>1h %</th><th>24h %</th><th>7d %</th>
          <th>Market Cap</th><th>24h Volume</th>
          <th>Circulating</th>
          <th>Last Seven Days</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, idx) => (
          <tr key={asset.id}>
            <td>{idx + 1}</td>
            <td>{asset.logo}</td>
            <td>{asset.name}</td>
            <td>{asset.symbol}</td>
            <td>${asset.price.toLocaleString()}</td>
            <td className={asset.change1h >= 0 ? 'green' : 'red'}>{asset.change1h}%</td>
            <td className={asset.change24h >= 0 ? 'green' : 'red'}>{asset.change24h}%</td>
            <td className={asset.change7d >= 0 ? 'green' : 'red'}>{asset.change7d}%</td>
            <td>${asset.marketCap.toLocaleString()}</td>
            <td>${asset.volume24h.toLocaleString()}</td>
            <td>{asset.circulatingSupply.toLocaleString()}</td>
            <td>
              <div className="trend" style={{ 
                transform: asset.change7d > 0 ? 'translateY(-10px)' : asset.change7d < 0 ? 'translateY(10px)' : 'translateY(0px)',
                transition: 'transform 0.5s ease-in-out',
                fontSize: '30px',
              }}>
                {asset.change7d > 0 ? '📈' : asset.change7d < 0 ? '📉' : '↗️'}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
