import React, { useRef, useState } from 'react';

interface IDailyQuote {
  StockCode: string;
  QuoteDate: Date;
  OpenPrice: number;
  HighPrice: number;
  LowPrice: number;
  ClosePrice: number;
  Volume: number;
  Value: number;
};

export default () => {
  const fileEl = useRef(null);
  const [dailyQuotes, setDailyQuotes] = useState<IDailyQuote[]>([]);
  const reader = new FileReader();
  reader.onload = (e) => {
    const results = (e.target?.result as string).split('\n');
    const quotes: IDailyQuote[] = results.map((result) => {
      const [StockCode, QuoteDate, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume, Value] = result.split(',');
      return {
        StockCode,
        QuoteDate: new Date(QuoteDate),
        OpenPrice: parseFloat(OpenPrice),
        HighPrice: parseFloat(HighPrice),
        LowPrice: parseFloat(LowPrice),
        ClosePrice: parseFloat(ClosePrice),
        Volume: parseFloat(Volume),
        Value: parseFloat(Value),
      };
    });
    setDailyQuotes(quotes);
  };
  return (
    <div>
      <div>Upload Daily Quotes</div>
      <input
        ref={fileEl}
        type="file"
        onChange={() => reader.readAsText(fileEl?.current?.files[0])}
      />
      {dailyQuotes.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Code</td>
              <td>Date</td>
              <td>Open</td>
              <td>High</td>
              <td>Low</td>
              <td>Close</td>
              <td>Volume</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {dailyQuotes.map(({
              StockCode, QuoteDate, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume, Value,
            }) => (
              <tr key={StockCode}>
                <td>{StockCode}</td>
                <td>{QuoteDate.toLocaleDateString()}</td>
                <td>{OpenPrice.toString()}</td>
                <td>{HighPrice.toString()}</td>
                <td>{LowPrice.toString()}</td>
                <td>{ClosePrice.toString()}</td>
                <td>{Volume.toString()}</td>
                <td>{Value.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
