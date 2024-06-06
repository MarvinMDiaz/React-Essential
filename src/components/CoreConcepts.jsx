import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return(
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
    );
}