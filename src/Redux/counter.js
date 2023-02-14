import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


function randInt(maxInt=4) {
   const randomNumber = Math.floor((Math.random() * maxInt));
   return randomNumber
}

function parser (data) {
   const results = data.results
   const transfo = results.map((element) => {
      const category = atob(element.category)
      const correct_answer = atob(element.correct_answer)
      const difficulty = atob(element.difficulty)
      const incorrect_answers = element.incorrect_answers.map((answer) => {
         const newAnswer = atob(answer)
         return newAnswer
      })
      const question = atob(element.question)
      const type = atob(element.type)
      return {
         category: category,
         correct_answer: correct_answer,
         difficulty: difficulty,
         incorrect_answers: incorrect_answers,
         question: question,
         type: type
      }
   })
   return transfo
}

const ChangementBis = (results) => {
   const newList = results.map((elemOfResults) => {
      const neweElemOfResults = {}
      const responseJuste = randInt()
      neweElemOfResults.responseJuste = responseJuste
      const responseCorrecte = elemOfResults.correct_answer
      const responseFausse = elemOfResults.incorrect_answers
      responseFausse.splice(responseJuste, 0, responseCorrecte)
      neweElemOfResults.responses = responseFausse
      neweElemOfResults.question = elemOfResults.question
      return neweElemOfResults
   })
   return newList
}



export const fetchQuestions = createAsyncThunk( // Rename fetchQuestions
   'users/fetchByIdStatus',
   async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&encode=base64").then((resp) => resp.json())
      return response
   }
)

export const counterSlice = createSlice({
   name: "counter",
   initialState: {
      index: -1,
      userResponseIndex: -1,
      isUserResponsePending: true,
      score: 0,
   },
   reducers: {
      startQuiz: (state) => { 
         state.index = 0
      },
      moveToNextQuestion: (state, action) => {
         state.index += 1
         state.isUserResponsePending = true
         state.userResponseIndex = action.payload
      },
      selectUserResponse: (state, action) => {
         if(state.isUserResponsePending === false){
            return
         }
         state.userResponseIndex = action.payload
         state.isUserResponsePending = false
         if (state.list[state.index].responseJuste == state.userResponseIndex) {
            state.score += 1
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchQuestions.fulfilled, (state, action) => {
            const coucou = parser(action.payload)
            state.list = ChangementBis(coucou)
            state.count = 0
            state.index = -1
            state.userResponseIndex = -1
            state.isUserResponsePending = true
            state.score = 0
         })
   }
});


export const { startQuiz, moveToNextQuestion,
   selectUserResponse } = counterSlice.actions;

export default counterSlice.reducer;