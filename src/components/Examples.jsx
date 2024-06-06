import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";



export default function Examples(){

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

    return(
        <Section title="Examples" id="examples">
            <Tabs 
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic ==='components'} onSelect={()=>handleSelect('components')}> Components </TabButton> 
                        <TabButton isSelected={selectedTopic ==='jsx'} onClick={()=>handleSelect('jsx')}>JSX </TabButton> 
                        <TabButton isSelected={selectedTopic ==='props'} onSelect={()=>handleSelect('props')}> Props </TabButton> 
                        <TabButton isSelected={selectedTopic ==='state'}onSelect={()=>handleSelect('state')}> State </TabButton> 
                    </>
                }
            >
                {tabContent}
            </Tabs>
            <menu></menu>
        </Section>
    )
}