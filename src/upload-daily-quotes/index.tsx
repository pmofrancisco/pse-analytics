import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IDailyQuote } from '../api-client/daily-quotes-client';
import { PageContent, PageTitle } from '../components/Page';
import Grid from '../components/Grid';

const InputFileContainer = styled.div`
  margin-bottom: 10px;
`;

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
    <PageContent>
      <PageTitle>UPLOAD DAILY QUOTES</PageTitle>
      <InputFileContainer>
        <input
          ref={fileEl}
          type="file"
          onChange={() => reader.readAsText(fileEl?.current?.files[0])}
        />
      </InputFileContainer>
      {dailyQuotes.length > 0 && (
        <Grid>
          <Grid.Header>
            <Grid.HeaderItem>CODE</Grid.HeaderItem>
            <Grid.HeaderItem>DATE</Grid.HeaderItem>
            <Grid.HeaderItem>OPEN</Grid.HeaderItem>
            <Grid.HeaderItem>HIGH</Grid.HeaderItem>
            <Grid.HeaderItem>LOW</Grid.HeaderItem>
            <Grid.HeaderItem>CLOSE</Grid.HeaderItem>
            <Grid.HeaderItem>VOLUME</Grid.HeaderItem>
            <Grid.HeaderItem>VALUE</Grid.HeaderItem>
          </Grid.Header>
          {dailyQuotes.map(({
            StockCode, QuoteDate, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume, Value,
          }) => (
            <Grid.Row key={StockCode}>
              <Grid.Cell>{StockCode}</Grid.Cell>
              <Grid.Cell>{QuoteDate.toLocaleDateString()}</Grid.Cell>
              <Grid.Cell>{OpenPrice.toString()}</Grid.Cell>
              <Grid.Cell>{HighPrice.toString()}</Grid.Cell>
              <Grid.Cell>{LowPrice.toString()}</Grid.Cell>
              <Grid.Cell>{ClosePrice.toString()}</Grid.Cell>
              <Grid.Cell>{Volume.toString()}</Grid.Cell>
              <Grid.Cell>{Value.toString()}</Grid.Cell>
            </Grid.Row>
          ))}
        </Grid>
      )}
    </PageContent>
  );
};
