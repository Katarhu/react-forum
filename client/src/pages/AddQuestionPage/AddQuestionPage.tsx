import {FormEventHandler, useState} from "react";
import TiptapEditor from "./components/TiptapEditor/TiptapEditor";

import {useInput} from "../../hooks/useInput";

import {TextField} from "../../common/components/Input/Input";
// import {inputOutlinedPlain} from "../../common/components/Input/Input.module.scss";

import TagsSelect from "./components/TagsSelect/TagsSelect";

import Button from "../../common/components/Button/Button";
import {primaryOrange, secondaryDanger} from "../../common/components/Button/Button.module.scss";

import {useAppDispatch} from "../../hooks/redux";
import {openDiscardChangesModal} from "../../store/modal/modal.slice";

import * as styles from "./AddQuestionPage.module.scss";


function AddQuestionPage() {
    const title = useInput('', { required: true, minLength: 3 });
    const [editorHTML, setEditorHTML] = useState("");

    const dispatch = useAppDispatch();

    const handleFormSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        handleSaveQuestion();
    }

    const onDiscard = () => {

    }
    const handleDiscardChanges = () => {
        dispatch(openDiscardChangesModal({ onDiscard }))
    }

    const handleSaveQuestion = () => {

    }

    const handleContentUpdate = (ev: any) => {
        setEditorHTML(ev.editor.getHTML());
    }

    return (
        <div className={styles.addQuestionPage}>
            <form
                onSubmit={handleFormSubmit}
                className={styles.questionForm}
            >
                <div>
                    <TagsSelect
                        placeholder="Choose categories"
                    />
                </div>

                <div>
                    <TextField
                        // className={inputOutlinedPlain}
                        value={title.value}
                        labelText={"Type catching attention title"}
                        onChange={title.onChange}
                    />
                </div>

                <TiptapEditor onUpdate={handleContentUpdate}/>

                <div className={styles.questionControls}>
                    <Button
                        onClick={handleSaveQuestion}
                        className={primaryOrange}
                        rounded
                    >
                        Save new question
                    </Button>

                    <Button
                        onClick={handleDiscardChanges}
                        className={secondaryDanger}
                        rounded
                    >
                        Discard changes
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddQuestionPage;
