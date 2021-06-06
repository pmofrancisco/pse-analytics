import styled from 'styled-components';
import { SCREEN_XS } from '../../../constants';

const Cell = styled.div`
  flex: 1;
  @media only screen and (max-width: ${SCREEN_XS}) {
    :first-child {
      font-weight: bold;
    }
  }
`;

export default Cell;
