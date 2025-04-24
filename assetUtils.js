export function generateInitialAssets() {
    return [
      {
        id: 1,
        symbol: 'BTC',
        name: 'Bitcoin',
        logo: '🟠',
        price: 93759.48,
        change1h: 0.43,
        change24h: 0.93,
        change7d: 11.11,
        marketCap: 1861618902186,
        volume24h: 43874950947,
        circulatingSupply: 19850000,
        trend: '📈'    
      },
      {
        id: 2,
        symbol: 'ETH',
        name: 'Ethereum',
        logo: '⚫️',
        price: 1802.46,
        change1h: 0.60,
        change24h: 3.21,
        change7d: 13.68,
        marketCap: 217581279327,
        volume24h: 23547469307,
        circulatingSupply: 120710000,
        trend: '📈'
      },
      {
        id: 3,
        symbol: 'USDT',
        name: 'Tether',
        logo: '🟢',
        price: 1.00,
        change1h: 0.00,
        change24h: 0.00,
        change7d: 0.04,
        marketCap: 145320022085,
        volume24h: 92288882007,
        circulatingSupply: 145270000000,
        trend: '↗️'
      },
      {
        id: 4,
        symbol: 'XRP',
        name: 'XRP',
        logo: '⚫️',
        price: 2.22,
        change1h: 0.46,
        change24h: 0.54,
        change7d: 6.18,
        marketCap: 130073814966,
        volume24h: 5131481491,
        circulatingSupply: 58390000000,
        trend: '📈'
      },
      {
        id: 5,
        symbol: 'BNB',
        name: 'BNB',
        logo: '🟡',
        price: 606.65,
        change1h: 0.09,
        change24h: -1.20,
        change7d: 3.73,
        marketCap: 85471956947,
        volume24h: 1874281784,
        circulatingSupply: 140890000,
        trend: '📉'
      },
      {
        id: 6,
        symbol: 'SOL',
        name: 'Solana',
        logo: '🟣',
        price: 151.51,
        change1h: 0.53,
        change24h: 1.26,
        change7d: 14.74,
        marketCap: 78381958631,
        volume24h: 4881674486,
        circulatingSupply: 517310000,
        trend: '📈'
      }
    ];
  }
  
  export function getRandomUpdate(asset) {
    const rand = (val) => +(val + (Math.random() * 2 - 1)).toFixed(2);
    return {
      price: rand(asset.price),
      change1h: rand(asset.change1h),
      change24h: rand(asset.change24h),
      change7d: rand(asset.change7d),
      volume24h: rand(asset.volume24h),
      trend: asset.change7d > 0 ? '📈' : asset.change7d < 0 ? '📉' : '↗️'
    };
  }