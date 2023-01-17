import {ChangeEvent, useState} from "react";


import * as styles from "./AddQuestionPage.module.scss";

// function useDebugValue(value: any) {
//     const
// }

function AddQuestionPage() {

    const [isCursive, setIsCursive] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    const onChange = (event: any) => {
        console.log(event.target.value)
    }

    const handleBoldToggle = () => { setIsBold(prev => !prev)};
    const handleCursiveToggle = () => { setIsCursive(prev => !prev)};
    const handleUnderlinedToggle = () => { setIsUnderline(prev => !prev)}

    const div = `<div>Hello ro</div>`

    return (
        <div>
            <div>
                <pre
                    dangerouslySetInnerHTML={{__html: div}}
                    contentEditable={true}
                    onChange={onChange}
                >
                    {/*{formattedValue}*/}
                </pre>
            </div>
            <button onClick={handleCursiveToggle}>Cursive</button>
            <button onClick={handleBoldToggle}>Bold</button>
            <button onClick={handleUnderlinedToggle}>Underlined</button>
        </div>
    );
}

export default AddQuestionPage;
