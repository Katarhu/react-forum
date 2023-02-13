import React from "react";

import {Editor} from "@tiptap/react";

import {AiOutlineOrderedList, AiOutlineUnorderedList} from "react-icons/ai";
import {BsCode, BsCodeSquare} from "react-icons/bs";
import {FaBold, FaItalic} from "react-icons/fa";
import {RxStrikethrough} from "react-icons/rx";

import * as styles from "../TiptapEditor/TiptapEditor.module.scss";

interface MenuBarProps {
    editor: Editor | null;
}

export default function TiptapMenuBar({ editor }: MenuBarProps) {
    if ( !editor ) return null;

    const handleButtonClick = (event: React.MouseEvent, callback: () => void) => {
        event.preventDefault();
        callback();
    }

    const handleBoldClick = () => {
        editor.chain().focus().toggleBold().run()
    }

    const handleItalicClick = () => {
        editor.chain().focus().toggleItalic().run();
    }

    const handleCodeTextClick = () => {
        editor.chain().focus().toggleCode().run();
    }


    const handleOrderedListClick = () => {
        editor.chain().focus().toggleOrderedList().run();
    }

    const handleUnorderedListClick = () => {
        editor.chain().focus().toggleBulletList().run();
    }

    const handleCodeBlockClick = () => {
        editor.chain().focus().toggleCodeBlock().run();
    }

    const handleStrikeClick = () => {
        editor.chain().focus().toggleStrike().run();
    }

    const buttonClass = (action: string) => editor.isActive(action) ? styles.editorButtonActive : styles.editorButton;

    return (
        <div className={styles.editorMenu}>
            <div className={styles.editorBlock}>
                <button
                    className={buttonClass('bulletList')}
                    onClick={(event) => handleButtonClick(event, handleUnorderedListClick)}
                    disabled={ !editor.can().chain().focus().toggleBulletList().run() }
                >
                    <AiOutlineUnorderedList/>
                </button>

                <button
                    className={buttonClass('orderedList')}
                    onClick={(event) => handleButtonClick(event, handleOrderedListClick)}
                    disabled={ !editor.can().chain().focus().toggleOrderedList().run() }
                >
                    <AiOutlineOrderedList />
                </button>
                <button
                    className={buttonClass('codeBlock')}
                    onClick={(event) => handleButtonClick(event, handleCodeBlockClick)}
                    disabled={ !editor.can().chain().focus().toggleCodeBlock().run() }
                >
                    <BsCodeSquare />
                </button>
            </div>

            <div className={styles.editorBlock}>
                <button
                    className={buttonClass('bold')}
                    onClick={(event) => { handleButtonClick(event, handleBoldClick) }}
                    disabled={ !editor.can().chain().focus().toggleBold().run() }
                >
                    <FaBold />
                </button>

                <button
                    className={buttonClass('italic')}
                    onClick={(event) => handleButtonClick(event, handleItalicClick)}
                    disabled={ !editor.can().chain().focus().toggleItalic().run() }
                >
                    <FaItalic />
                </button>

                <button
                    className={buttonClass('strike')}
                    onClick={(event) => handleButtonClick(event, handleStrikeClick)}
                    disabled={ !editor.can().chain().focus().toggleStrike().run() }
                >
                    <RxStrikethrough />
                </button>

                <button
                    className={buttonClass('code')}
                    onClick={(event) => handleButtonClick(event, handleCodeTextClick)}
                    disabled={ !editor.can().chain().focus().toggleCode().run() }
                >
                    <BsCode />
                </button>
            </div>
        </div>
    )
}
