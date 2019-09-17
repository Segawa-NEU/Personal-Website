import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Prompt from './Prompt';

@Component
export default class HomeTopContent extends Vue{
    @Prop({ required: true }) private readonly navBarHeight!: string; 
    @Prop({ required: true }) private readonly contentHeight!: string;
    private readonly prompts: Prompt[] = [
        new Prompt('lucas = new Lucas();', 'null'),
        new Prompt("lucas.educations.orderBy('endDate').last().name;", "'Northeastern University'"),
        new Prompt("lucas.educations.orderBy('endDate').last().graduation_date.year;", '2021'),
        new Prompt("lucas.works.all().aggregate('employer');",
            "['Northeastern University College of Computer Science and Information Science', " +
            "'Persistence Plus', 'SemFronteiras Ltd.']"),
        new Prompt("lucas.projects.all().aggregate('gitHubUrl');", "['']"),
        new Prompt("lucas.technologies.all().aggregate('name');", 'null'),
        new Prompt('lucas.isLookingForEmployment();', 'true'),
    ];
    private currentPromptIdx: number = 0; 
    private rawText: string = '>>'; 
    private cursorStatus: boolean = true;
    private cursorInterval: any = null;
    private textProgressInterval: any = null;
    private shouldScroll: boolean = true;

    private toggleCursor() {
        this.cursorStatus = !this.cursorStatus;
    }

    private scrollToBottom() {
        if (this.shouldScroll) {
            const container = this.$el.querySelector("pre")!;
            container.scrollTop = container.scrollHeight;
        }
    }

    private progressText() {
        if (this.prompts.length > this.currentPromptIdx) {
            const currentPrompt = this.prompts[this.currentPromptIdx];
            if (currentPrompt.hasNext()) {
                this.rawText += currentPrompt.next();
            } else {
                this.rawText += '\n=>' + currentPrompt.getResponse() + '\n>>';
                this.currentPromptIdx++;
            }
        } else {
            this.shouldScroll = false;
        }
    }

    private get displayText() {
        if (this.cursorStatus) {
            return this.rawText + '|';
        } else {
            return this.rawText;
        }
    }

    private created() {
        this.cursorInterval = setInterval(() => this.toggleCursor(), 1000);
        this.textProgressInterval = setInterval(() => this.progressText(), 100);
    }

    private updated() {
        this.scrollToBottom();
    }
}
