import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledContent = styled(Layout.Content)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const StyledSection = styled.section`
  flex: 1 1 auto;
`;
