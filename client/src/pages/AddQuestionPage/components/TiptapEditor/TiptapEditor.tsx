import React from "react";

import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";

import {OrderedList} from "@tiptap/extension-ordered-list";
import {BulletList} from "@tiptap/extension-bullet-list";
import {Paragraph} from "@tiptap/extension-paragraph"

import TiptapMenuBar from "../TiptapMenu/TiptapMenu";

import * as styles from "./TiptapEditor.module.scss";


interface TiptapEditorProps {
    onUpdate: any;
}

function TiptapEditor({onUpdate}: TiptapEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            BulletList.configure({
                HTMLAttributes: {
                    class: styles.editorBulletList
                }
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: styles.editorOrderedList
                }
            }),
            Paragraph.configure({
                HTMLAttributes: {
                    class: styles.editorParagraph
                }
            })
        ],
        editorProps: {
            attributes: {
                class: styles.editorContent
            }
        },
        onUpdate: onUpdate
    })

    return (
        <div className={styles.editorContainer}>
            <TiptapMenuBar editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    );
}

export default TiptapEditor;
