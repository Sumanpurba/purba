const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    DOLL:  Symbol("doll"),
    STORY: Symbol("story"),
    ALIVE: Symbol("alive"),
    DEAD: Symbol("dead"),
    NEXT:Symbol("next"),
    SUSPENSE: Symbol("suspense"),
    CONTINUE: Symbol("continue"),
    STORM:Symbol("storm"),
    QUESTION:Symbol("question"),
    ANSWER:Symbol("answer"),
    REVENGE:Symbol("revenge"),
    SALLY:Symbol("sally")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    Exit_MSG(){ return "Your r not interested in story";};
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "The Girl and scary DOLL........ to read full story type DOLL";
                this.stateCur = GameState.DOLL;
                break;
            case GameState.DOLL:
                if(sInput.toLowerCase().match("doll")){
                    sReply = "One day,sally and her parents went to a yard sale,sally 's parents given her to $3 to buy something for her,......   to continue type STORY";
                    this.stateCur = GameState.STORY;
                }
                else{
                    sReply ="OH!!! your are not interested in full story, Bye Bye";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.STORY:
                if(sInput.toLowerCase().match("story")){
                    sReply = "Girl found nothing  until she saw a doll , but there is no price tag  she asked the salesman about price salesman looked at doll that was alive doll.... To read full story type ALIVE to continue?";
                    this.stateCur = GameState.ALIVE;
                }
                else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type STORY to continue or exit to quit"
                }
                break;

                break;
            case GameState.EXIT:
                if(sInput.toLowerCase().match("exit")){
                    sReply = "i am not interested in this scary doll story";
                    this.stateCur = GameState.DEAD;

                }else{
                    sReply = "DOLL WAS NOT ALIVE!!! THE END";
                   // this.stateCur = GameState.;
    
                }
                break;
                case GameState.ALIVE:
                if(sInput.toLowerCase().match("alive")){
                    sReply = "sally decided to inspect the doll she noticed a string in the back of the doll.... type SUSPENSE to continue or exit";
                    this.stateCur = GameState.SUSPENSE;
                }
                else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type alive to continue or exit to quit"
                }
                break;
                case GameState.SUSPENSE:
                if(sInput.toLowerCase().match("suspense")){
                    sReply = "sally pulled the string and oll started to repeat  it self over with weird beep, but she still love her, when she got home she putt the doll over the shelf,, write CONTINUE to continue  ";
                    this.stateCur = GameState.CONTINUE;
                }
                else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type suspense to continue or exit to quit"
                }
                 break;
                case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = "in the next morning when she woke up she saw doll was lying right next to her, same things happened three nights in a row.... write NEXT to continue  ";
                    this.stateCur = GameState.NEXT;
                }
                else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type continue to continue or exit to quit"
                }
                break;
                case GameState.NEXT:
                if(sInput.toLowerCase().match("next")){
                    sReply = "one day sally would not woke up ,her parents thought it was kind of strange,her mom tried to open the door  a winter storm traps type STORM to continue  ";
                    this.stateCur = GameState.STORM;
                }
                else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type next to continue or exit to quit"
                }
                break;
                case GameState.STORM:
                if(sInput.toLowerCase().match("storm")){
                    sReply = "that magical winter storm killed and little girl,,, then doll asked the question to her parents type QUESTION  OR EXIT ";
                    this.stateCur = GameState.QUESTION;
                }
                else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type storm to continue or exit to quit"
                }
                break;
                case GameState.QUESTION:
                if(sInput.toLowerCase().match("question")){
                    sReply = "Can you hear my breathing????  to know the answer type ANSWER OR EXIT ";
                    this.stateCur = GameState.ANSWER;
                }else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type question to continue or exit to quit"
                }
                break;
                case GameState.ANSWER:
                if(sInput.toLowerCase().match("answer")){
                    sReply = "yes  i do ,mother replied to doll , doll murdered her girl and doll become her girl  then doll  whispers, “I’m sorry...i murdered your girl because she loves me a lot and i hate love.........mother cries..she thought about to take revenge from doll type REVENGE ....";
                    this.stateCur = GameState.REVENGE;
                }else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type answer to continue or exit to quit"
                }
                break;
                case GameState.REVENGE:
                if(sInput.toLowerCase().match("revenge")){
                    sReply = "next morning,sally 's parents found  the body of doll at the bottom of the stairs , they guess that doll who act like her daughter might be fallen down from stairs,breaking her neck, type SALLY to know about sally ";
                    this.stateCur = GameState.SALLY;
                }else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type revenge to continue or exit to quit"
                }
                break;
                case GameState.SALLY:
                if(sInput.toLowerCase().match("sally")){
                    sReply = "parents found that girl is still alive in her room and doll burnt ....now they happily living together.....THE END";
                    this.stateCur = GameState.STORY;
                }else if (sInput.toLowerCase().match("exit")){
                    sReply=Exit_MSG();
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply = "Type sally to continue or exit to quit"
                }
            }
        return([sReply]);
    
    }}