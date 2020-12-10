import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  padding: 16px;
  width: 100%;
  border: 2px solid #fff;

  color: #ff872c;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff872c;
      border-color: #ff872c;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff872c;
    `}

    & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #ff872c;

    &::placeholder {
      color: #ff872c;
    }

    &:focus {
      border: 0 !important;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;
  }
`;
