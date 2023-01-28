import {FormEventHandler} from "react";
import TiptapEditor from "./components/TiptapEditor/TiptapEditor";

import {useInput} from "../../hooks/useInput";

import Input from "../../common/components/Input/Input";
import {inputOutlinedPlain} from "../../common/components/Input/Input.module.scss";

import TagsSelect from "./components/TagsSelect/TagsSelect";

import * as styles from "./AddQuestionPage.module.scss";


function AddQuestionPage() {
    const title = useInput('', { required: true, minLength: 3 });

    const handleFormSubmit: FormEventHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={styles.addQuestionPage}>
            <form
                onSubmit={handleFormSubmit}
                className={styles.questionForm}
            >
                <fieldset>
                    <TagsSelect
                        placeholder="Choose categories"
                    />
                </fieldset>

                <fieldset>
                    <Input
                        className={inputOutlinedPlain}
                        value={title.value}
                        labelText={"Type catching attention title"}
                        onChange={title.onChange}
                    />
                </fieldset>

                <TiptapEditor/>
            </form>
        </div>
    );
}

export default AddQuestionPage;
