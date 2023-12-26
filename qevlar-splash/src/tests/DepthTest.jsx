import { useEffect } from 'react';
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'; 
import 'prismjs/themes/prism.css'
// import './prism/prism.js'// You can import other languages as needed
import '../prism/prism.css' // Ensure you import the Prism.css


// Prism.highlightAll()

const DepthTest = () =>{

    useEffect(() => {
        Prism.highlightAll();  // Initialize Prism after component mounts
    }, []);
    return(
        <div className='code-block'>
        <pre className='line-numbers'>
            <code  className="language-javascript">
            {`
        // Get config file
        const configPath = path.resolve(__dirname, '../qevlarConfig.json');
        // Read config file
        let config = {};
        try {
          const configFile = fs.readFileSync(configPath, 'utf8');
          config = JSON.parse(configFile);
        } catch (error) {
          console.error('Error reading config file:', error);
        }

        const depthLimitTest = {};

        // FIXED max query depth test
        depthLimitTest.max = (returnToTestMenu) => {
          function setDynamicQueryBody() {
            let dynamicQueryBody = \`\${config.TOP_LEVEL_FIELD}(id: \${config.ANY_TOP_LEVEL_FIELD_ID}) {\`;
            let depth = 1;
            let endOfQuery = 'id}';
            let lastFieldAddedToQuery = config.TOP_LEVEL_FIELD;

            while (depth < config.QUERY_DEPTH_LIMIT) {
              if (lastFieldAddedToQuery === config.TOP_LEVEL_FIELD) {
                dynamicQueryBody += \`\${config.CIRCULAR_REF_FIELD} {\`;
                lastFieldAddedToQuery = config.CIRCULAR_REF_FIELD;
              } else if (lastFieldAddedToQuery === config.CIRCULAR_REF_FIELD) {
                dynamicQueryBody += \`\${config.TOP_LEVEL_FIELD} {\`;
                lastFieldAddedToQuery = config.TOP_LEVEL_FIELD;
              }
              endOfQuery += '}';
              depth += 1;
            }
            return dynamicQueryBody + endOfQuery;
          }

          const dynamicQueryBody = setDynamicQueryBody();
          console.log('---> QUERY: ', dynamicQueryBody);

          fetch(config.API_URL, {
            method: 'POST',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              query: \`query depthLimitTestDynamic {
                \${dynamicQueryBody}
              }\`
            })
          })
          .then((res) => {
            if (res.status < 200 || res.status > 299) {
              console.log('Test passed: Query blocked.');
              if (returnToTestMenu) returnToTestMenu();
            } else {
              console.log('Test failed: Query depth over limit.');
              if (returnToTestMenu) returnToTestMenu();
            }
          });
        };
      `}
            </code>
        </pre>
        </div>
    )
}

export default DepthTest;