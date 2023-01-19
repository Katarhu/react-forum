import {ChangeEventHandler, useState} from "react";

import * as styles from "./AddQuestionPage.module.scss";
import TiptapEditor from "./components/TiptapEditor/TiptapEditor";
import Input from "../../common/components/Input/Input";
import {inputOutlinedPlain} from "../../common/components/Input/Input.module.scss";
import {useInput} from "../../hooks/useInput";
import Select from "../../common/components/Select/Select";


function AddQuestionPage() {
    const title = useInput('', { required: true, minLength: 3 });

    return (
        <div className={styles.addQuestionPage}>
            <form className={styles.questionForm}>
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
