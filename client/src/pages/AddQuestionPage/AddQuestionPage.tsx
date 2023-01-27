import TiptapEditor from "./components/TiptapEditor/TiptapEditor";

import {useInput} from "../../hooks/useInput";

import Input from "../../common/components/Input/Input";
import {inputOutlinedPlain} from "../../common/components/Input/Input.module.scss";

import Select from "../../common/components/Select/Select";

import * as styles from "./AddQuestionPage.module.scss";
import {FormEventHandler} from "react";


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
                    <Select
                        label="Choose categories"
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
