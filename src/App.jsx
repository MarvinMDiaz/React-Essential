import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header.jsx"
import jsxImg from './assets/jsx-ui.png';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';




function App() {
  const [selectedTopic, setSeletedTopic] = useState(null);

  function handleSelect(selectedButton){
    setSeletedTopic(selectedButton);
        // console.log(selectedButton)
    }

    let tabContent = <p> Please Select a Topic</p>;

    if (selectedTopic){
      tabContent = ( 
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
      );
    }

  return (
    <div>
      <Header> </Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concepItem) => (
          <CoreConcept key={concepItem.title} {...concepItem} />))}
          {/* Option 1  */}
          {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          /> */}
          {/* Option 2  */}
          {/* <CoreConcept 
            title = "JSX"
            description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
            image={jsxImg}
          /> */}
          {/* Option 3  */}
          {/* <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic ==='components'} onSelect={()=>handleSelect('components')}> Components </TabButton> 
            <TabButton isSelected={selectedTopic ==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX </TabButton> 
            <TabButton isSelected={selectedTopic ==='props'} onSelect={()=>handleSelect('props')}> Props </TabButton> 
            <TabButton isSelected={selectedTopic ==='state'}onSelect={()=>handleSelect('state')}> State </TabButton> 
          </menu>

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
