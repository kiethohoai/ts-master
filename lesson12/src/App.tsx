import Heading from './assets/components/Heading';
import Section from './assets/components/Section';
import Counter from './assets/components/Counter';
import List from './assets/components/List';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Hello World" />
      <Section title="Hello David Ho">"I Am John Ho"</Section>
      <Counter setCount={setCount}>Count is: {count}</Counter>
      <List items={[1, 2, 3]} render={(item) => <span className='gold bold'>{item}</span>}></List>
    </>
  );
};

export default App;
