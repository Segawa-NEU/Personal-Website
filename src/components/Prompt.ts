export default class Prompt {
    private readonly promptText: string;
    private readonly response: string;
    private currentPromptPos: number = 0;
    constructor(promptText: string,
                response: string) {
        this.promptText = promptText;
        this.response = response;
    }
    public getResponse(): string {
        return this.response;
    }
    public hasNext(): boolean {
        return this.promptText.length > this.currentPromptPos;
    }
    public next(): string {
        if (this.promptText.length <= this.currentPromptPos) {
            return ''; 
        }
        const result = this.promptText.charAt(this.currentPromptPos); 
        this.currentPromptPos++;
        return result;
    }
}
