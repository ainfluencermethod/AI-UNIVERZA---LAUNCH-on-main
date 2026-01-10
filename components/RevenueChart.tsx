import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

type Period = '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL';

export const RevenueChart: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('1M');

  const chartConfig = useMemo(() => {
    // Helper to create curve
    const createData = (points: number, start: number, end: number, type: Period) => {
      const data = [];
      for (let i = 0; i < points; i++) {
        // Sigmoid-ish curve + noise for realism
        const x = i / (points - 1);
        // Mix of exponential and ease-in-out for natural growth look
        const curve = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        const noise = (Math.random() - 0.5) * (end - start) * 0.15;
        
        let val = start + (end - start) * curve + noise;
        
        let label = '';
        if (type === '1D') label = `${Math.floor(i)}:00`;
        else if (type === '1W') label = ['Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob', 'Ned'][i];
        else if (type === '1M') label = `${i + 1}. Jan`;
        else if (type === '3M') label = `Teden ${i + 1}`;
        else if (type === '1Y') label = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'][i];
        else label = `Leta ${2020 + i}`;

        data.push({ date: label, value: Math.max(0, val) });
      }
      // Fix last value for visual consistency
      data[data.length - 1].value = end;
      return data;
    };

    // Configuration for each period
    const configs: Record<Period, { data: any[], total: string, growth: string, label: string }> = {
      '1D': { 
        data: createData(24, 15100, 15240.50, '1D'), 
        total: '€15,240.50', 
        growth: '+0.9%', 
        label: 'vs včeraj' 
      },
      '1W': { 
        data: createData(7, 13500, 15240.50, '1W'), 
        total: '€15,240.50', 
        growth: '+12.8%', 
        label: 'vs prejšnji teden' 
      },
      '1M': { 
        data: createData(30, 6800, 15240.50, '1M'), 
        total: '€15,240.50', 
        growth: '+124%', 
        label: 'vs prejšnjih 30 dni' 
      },
      '3M': { 
        data: createData(12, 4200, 15240.50, '3M'), 
        total: '€15,240.50', 
        growth: '+340%', 
        label: 'vs prejšnjih 90 dni' 
      },
      '1Y': { 
        data: createData(12, 1200, 15240.50, '1Y'), 
        total: '€15,240.50', 
        growth: '+1,150%', 
        label: 'vs prejšnje leto' 
      },
      'ALL': { 
        data: createData(7, 0, 15240.50, 'ALL'), 
        total: '€15,240.50', 
        growth: '∞', 
        label: 'od začetka' 
      },
    };

    return configs[activePeriod];
  }, [activePeriod]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111] border border-white/10 p-3 rounded-xl shadow-2xl backdrop-blur-md">
          <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">{label}</p>
          <p className="text-white font-bold text-sm font-mono">
             €{payload[0].value.toLocaleString('sl-SI', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-md mx-auto relative group">
       {/* Glow effect */}
       <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-green-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

       {/* Card Container */}
       <div className="bg-[#0a0a0a] border border-white/10 rounded-[1.8rem] p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl z-10 h-full flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
              <div>
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     Total Revenue
                  </h3>
                  <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums transition-all duration-300">
                        {chartConfig.total}
                      </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                      <span className="flex items-center text-green-500 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 transition-all">
                          <TrendingUp size={10} className="mr-1" /> {chartConfig.growth}
                      </span>
                      <span className="text-gray-500 text-xs font-medium transition-all">{chartConfig.label}</span>
                  </div>
              </div>
              <div className="bg-white/5 p-2 rounded-full border border-white/5 group-hover:bg-white/10 transition-colors cursor-pointer hover:border-brand-gold/30">
                 <DollarSign className="text-brand-gold w-5 h-5" />
              </div>
          </div>

          {/* Chart Section */}
          <div className="relative h-48 w-full -ml-2">
              <ResponsiveContainer width="105%" height="100%">
                <AreaChart data={chartConfig.data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B67A" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#00B67A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'white', strokeWidth: 1, strokeOpacity: 0.1, strokeDasharray: '4 4' }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00B67A" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={1500}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#fff' }}
                  />
                  {/* Hidden XAxis to provide labels for tooltip */}
                  <XAxis dataKey="date" hide />
                </AreaChart>
              </ResponsiveContainer>
          </div>
          
          {/* Timeframe selector */}
          <div className="flex justify-between bg-white/5 rounded-xl p-1 border border-white/5 mt-4">
              {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((tf) => (
                  <button 
                    key={tf} 
                    onClick={() => setActivePeriod(tf as Period)}
                    className={`px-2 sm:px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all duration-300 ${activePeriod === tf ? 'bg-white/15 text-white shadow-sm scale-105' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                  >
                      {tf}
                  </button>
              ))}
          </div>

       </div>
    </div>
  );
};
