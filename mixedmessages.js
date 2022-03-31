/*
  mixedmessages.js

  Generates a random Master Winner

  Copyright 2022, Patrick McCrudden
*/

// Main message object
const mixedMessage = {

    // Build the message to be displayed
     _message: '',
   
     // Store words used to generate the mixedmessage headline
     _words: {
       golfers: [],             // This could be people or groups
       scores: [],
     },
   
     // Getter and setters
     get golfers(){
       return this._words["golfers"];
     },
     set entities(entity){
       this._words["golfers"].push(golfer);
     },
   
     get scores(){
       return this._words["scores"];
     },
     set actions(action){
       this._words["scores"].push(score);
     },
   
   
     // grab a random word from an array
     randomWord(word_array){
       let len = this._words[word_array].length;
       if(len > 0){
         return this._words[word_array][Math.floor(Math.random() * len)];
       }
     },
   
     // create the winner and score and return it
     createMessage(){
       const entity = this.randomWord('golfers');
       const action = this.randomWord('scores');
       
       return `${golfer} shoots ${action} to win the 2022 Masters Tournament`;
     },
   
   };
   
   // Add some data into the mixedMessageobject
   // Golfer Names
   mixedMessage['golfers'] = 'Tiger Woods';
   mixedMessage['golfers'] = 'Rory McIlroy';
   mixedMessage['golfers'] = 'Scottie Scheffler';
   mixedMessage['golfers'] = 'Lee Westwood';
   mixedMessage['golfers'] = 'Dustin Johnson';
   mixedMessage['golfers'] = 'Seamus Power';
   mixedMessage['golfers'] = 'Jordan Spieth';
   mixedMessage['golfers'] = 'Justin Rose';
   mixedMessage['golfers'] = 'Brooks Koepka';
   mixedMessage['golfers'] = 'Sergio Garcia';
   
   // Winning Scores
   mixedMessage['scores'] = 'Par';
   mixedMessage['scores'] = '-1';
   mixedMessage['scores'] = '-2';
   mixedMessage['scores'] = '-3';
   mixedMessage['scores'] = '-5';
   mixedMessage['scores'] = '-7';
   mixedMessage['scores'] = '-9';
   mixedMessage['scores'] = '-12';
   mixedMessage['scores'] = '-15';
   
   
   // show the user the final message
   console.log(mixedMessage.createMessage());
   
   // Uncomment the below to run some Tests
   /*
   console.log('Tests');
   console.log('1. Add some words ( 3 entries per array )')
   mixedMessage["entities"] = 'Nasa';
   mixedMessage["entities"] = 'Donald Trump';
   mixedMessage["entities"] = 'Alien Overlord';
   console.log(mixedMessage["entities"]);
   mixedMessage["actions"] = 'arrested';
   mixedMessage["actions"] = 'discovered';
   mixedMessage["actions"] = 'rehabilitated';
   console.log(mixedMessage["actions"]);
   mixedMessage["subjects"] = 'covid.';
   mixedMessage["subjects"] = 'bad parenting.';
   mixedMessage["subjects"] = 'a consequence of money laundering.';
   console.log(mixedMessage["subjects"]);
   
   console.log('2. Randomly select words - 1 random word per array');
   console.log(mixedMessage.randomWord('entities'));
   console.log(mixedMessage.randomWord('actions'));
   console.log(mixedMessage.randomWord('subjects'));
   
   console.log('3. Final message generation');
   console.log(mixedMessage.createMessage());
   */