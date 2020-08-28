import React,{useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
  

  useEffect(() => {
    const div = messagesRef.current

    if(div){
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Anônimo"
            date="28/10/2020"
            content="Teste"
          />
        ))}

        <ChannelMessage
          author="Davi Barbosa"
          date="28/10/2020"
          content="Hoje carreguei uns nubs"
        />

        <ChannelMessage
          author="Diego"
          date="28/10/2020"
          content={
            <>
              <Mention>@Davi Barbosa</Mention>, me carrega de novo cara?
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;