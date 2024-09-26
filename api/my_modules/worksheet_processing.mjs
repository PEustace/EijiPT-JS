//A function to build a worksheet from the JSON data returned from the API call.
//We pass in the worksheet JSON array which is structured as:
// [{section: Vocabulary, 1: "What is bread"?, 2: "etc."}, {section: Grammar, 1: "etc."}]
//Will split off a potential answer key with a breaking code
export function ProcessWorksheet(worksheet_data) {
    //We need to introduce our own list to handle the compiled data
    //Won't need another array for this because we're mashing it all together into one string
    //that will be delivered to the client.
    var built_worksheet = [];

    //Scaffolding for an answer key.
    var answer_key = [];

    //For each section of the worksheet. If NOT answer key, continue. If an answer key, break out as such and put that in a separate space.
    for (var i = 0; i < Object.keys(worksheet_data).length; i++) {
        var section = worksheet_data[i];
        console.log(section);
        if (section["section"] != "Answer Key") {
            var ans_i = 0;
            console.log("Not an answer key.");
            for (var question_info in section) {
                ans_i++;
                var question = section[question_info];
                //When it gets to the user, it needs to be displayed.
                built_worksheet.push("<p className='worksheetClass'>" + ans_i + ": " + question + "</p>");
            }
        }
        else {
            console.log("Probably an answer key.");
            var ans_i = 0;
            for (var question_info in section) {
                ans_i++;
                var question = section[question_info];
                answer_key.push(ans_i + ": " + question);
            }
        }
    }
    console.log(built_worksheet);
    console.log(answer_key);
    //Now return the data that will be iterated through to deliver the worksheet
    return {worksheet: built_worksheet, answers: answer_key};
}

//a testing variable
export var test_data = [
    {
        "section": "Vocabulary",
        1: "‘Eki’ wa nan desu ka?",
        2: "‘Kouen’ wa doko ni arimasu ka?",
        3: "‘Hoteru’ ni ikitai no desu ga, nani ga hitsuyou desu ka?",
        4: "‘Teburu’ no ue ni nani ga arimasu ka?",
        5: "‘Kippu’ wa ikura desu ka?"
    },
    {
        "section": "Grammar",
        1: "‘Kare wa tokyou ni ikimasu’ no ‘ikimasu’ wa nan no imi desu ka?",
        2: "‘Watashi wa asagohan o tabemasu’ no ‘tabemasu’ wa doko ni tsukaimasu ka?",
        3: "‘Dare to ikimasu ka?’ no ‘dare’ wa nani o shiteimasu ka?",
        4: "‘Eiga o mimasen deshita’ no ‘mimasen’ wa nan desu ka?",
        5: "‘Watashi no tomodachi wa totemo oishii tabemono o tsukutteimasu’ no ‘tsukutteimasu’ wa nani o shiteimasu ka?"
    },
    {
        "section": "Conversation",
        1: "‘Konnichiwa! Nihon wa doko desu ka?’ to shite, nan to kotaemasu ka?",
        2: "‘Watashi wa Tokyo ni ikitai’ to itta toki, nan to kiite kudasai.",
        3: "‘Nani o shimasu ka?’ to kiita toki, nan to kotaemasu ka?",
        4: "‘Kono resutoran wa oishii desu ka?’ to shite, nani to kotaemasu ka?",
        5: "‘Toshokan wa doko ni arimasu ka?’ to kiita toki, nan to kotaemasu ka?"
    },
    {
        "section": "Answer Key",
        1: "Station",
        2: "In the park",
        3: "I need a hotel room",
        4: "There is a book on the table",
        5: "How much is the ticket?",
        6: "To go",
        7: "Eat",
        8: "Who are you going with?",
        9: "Did not see",
        10: "Is making delicious food",
        11: "Hello! Where is Japan?",
        12: "Please ask what I want to do.",
        13: "Please say what you will do.",
        14: "Please say if this restaurant is delicious.",
        15: "Please say where the library is."
    }
]
