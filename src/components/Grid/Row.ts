import styled from 'styled-components';
import { SCREEN_XS } from '../../constants';

const Row = styled.div`
  border-bottom: 1px solid var(--gray);
  padding: 10px;
  :last-child {
    border-bottom: none;
  }
  @media only screen and (min-width: ${SCREEN_XS}) {
    display: flex;
  }
`;

export default Row;
