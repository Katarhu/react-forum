import {FormEventHandler, useState} from "react";

import {useAppDispatch} from "../../hooks/redux";
import {openDiscardChangesModal} from "../../store/modal/modal.slice";

import {useInput} from "../../hooks/useInput";

import Form from "../../common/components/Form/Form";
import {TextField} from "../../common/components/Input/Input";

import TiptapEditor from "./components/TiptapEditor/TiptapEditor";

import TagsSelect from "./components/TagsSelect/TagsSelect";

import {secondaryDanger} from "../../common/components/Button/Button.module.scss";

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
        console.log(title.value);
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
            <div className={styles.questionFormContainer}>
                <Form
                    onSubmit={handleFormSubmit}
                >
                    <TagsSelect placeholder="Choose categories" />

                    <TextField
                        value={title.value}
                        labelText={"Type catching attention title"}
                        onChange={title.onChange}
                    />

                    <TiptapEditor onUpdate={handleContentUpdate}/>

                    <Form.Controls>
                        <Form.SubmitButton>
                            Save new question
                        </Form.SubmitButton>
                        <Form.DeclineButton className={secondaryDanger} onClick={handleDiscardChanges}>
                            Discard changes
                        </Form.DeclineButton>
                    </Form.Controls>
                </Form>
            </div>
        </div>
    );
}

export default AddQuestionPage;
