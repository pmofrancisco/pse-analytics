import styled from 'styled-components';
import { SCREEN_XS } from '../../constants';

export const Header = styled.div`
  border-bottom: 1px solid var(--gray);
  display: flex;
  font-weight: bold;
  padding: 10px;
  @media only screen and (max-width: ${SCREEN_XS}) {
    display: none;
  }
`;

export const HeaderItem = styled.div`
  flex: 1;
`;
