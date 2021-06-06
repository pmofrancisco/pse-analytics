import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ align: string, size: string }>`
  animation: spin 2s linear infinite;
  border: 5px solid var(--gray-light);
  border-radius: 50%;
  border-top: 5px solid var(--gray);
  height: 20px;
  width: 20px;
  ${({ align }) => align === 'center' && 'margin: auto;'}
  ${({ align }) => align === 'left' && 'margin-right: auto;'}
  ${({ align }) => align === 'right' && 'margin-left: auto;'}

  ${({ size }) => size === 'small' && `
    border-width: 2px;
    height: 18px;
    width: 18px;
  `}

  ${({ size }) => size === 'smallest' && `
    border-width: 1px;
    height: 14px;
    width: 14px;
  `}

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

type SpinnerProps = {
  align?: 'center' | 'left' | 'right';
  size?: 'regular' | 'small' | 'tiny';
};

const Spinner = ({ align = 'center', size = 'regular' }: SpinnerProps) => (
  <Container align={align} size={size} />
);

export default Spinner;
