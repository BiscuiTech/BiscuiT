import styled from 'styled-components';

const TextStyles = styled.div`
  --SlantedBackgroundHeight: ${props => props.theme.home.slantedBackgroundHeight};
  margin: 32px auto;
  margin-top: ${props => `${props.marginTop}px` || 'inherit'}  ;
  max-width: 800px;
  font-size: 22px;
  color: hsl(0,0%,30%);
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  @media (max-width:420px) {
    max-width: 85%;
  line-height: 1.5;
  font-size: 18px;
  }
`;

const Text = ({ children, marginTop }) => (
  <TextStyles dangerouslySetInnerHTML={{ __html: children }} marginTop={marginTop} />
)

export default Text