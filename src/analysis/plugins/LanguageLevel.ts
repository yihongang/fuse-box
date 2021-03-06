import { File, ScriptTarget } from "../../core/File";

export class LanguageLevel {
    public static onNode(file: File, node: any, parent: any) {
        if (node.async === true) {
            file.setLanguageLevel(ScriptTarget.ES2017)
        }
    }
    public static onEnd(file: File) {
        const target = file.context.languageLevel
        if (file.languageLevel > target) {
            file.analysis.requiresTranspilation = true
        }
    }
}
