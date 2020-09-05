import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  border: 1px solid ${props => props.theme.colors.titulo};
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;

  div {
      padding: 8px 10px;
      font-size: 14px;
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${props => props.theme.colors.titulo};
      color: ${props => props.theme.colors.primaria};

      cursor: pointer;
      transition: opacity .3s;
  }


  #dark {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: 1px solid ${props => props.theme.colors.titulo};
    opacity: ${props => props.tema === 'light' && 0}
  }

  #light {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 1px solid ${props => props.theme.colors.titulo};
    opacity: ${props => props.tema === 'dark' && 0}
  }
`;
