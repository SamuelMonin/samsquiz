import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const RandInt = (maxInt=4) => {
   const randomNumber = Math.floor((Math.random() * maxInt));
   return randomNumber
}

const DecodeAsStringFromBase64 = (data) => {
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

const CreateQuestionList = (results) => { // CreateQuestionList
   const newList = results.map((elemOfResults) => {
      const neweElemOfResults = {}
      const correctAnswer = RandInt()
      neweElemOfResults.correctAnswer = correctAnswer
      const responseCorrecte = elemOfResults.correct_answer
      const incorrectAnswers = elemOfResults.incorrect_answers
      incorrectAnswers.splice(correctAnswer, 0, responseCorrecte)
      neweElemOfResults.responses = incorrectAnswers
      neweElemOfResults.question = elemOfResults.question
      return neweElemOfResults
   })
   console.log("newList : ", newList)
   return newList
}



export const fetchQuestions = createAsyncThunk(

   'users/fetchByIdStatus',
   async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&encode=base64").then((resp) => resp.json())
      return response
   }
)

export const counterSlice = createSlice({
   name: "counter",
   initialState: {
      questionIndex: -1,
      userResponseIndex: -1,
      isUserResponsePending: true,
      score: 0,
   },
   reducers: {
      startQuiz: (state) => { 
         state.questionIndex = 0
      },
      moveToNextQuestion: (state, action) => {
         state.questionIndex += 1
         state.isUserResponsePending = true
         state.userResponseIndex = action.payload
      },
      selectUserResponse: (state, action) => {
         if(state.isUserResponsePending === false){
            return
         }
         state.userResponseIndex = action.payload
         state.isUserResponsePending = false
         if (state.list[state.questionIndex].correctAnswer === state.userResponseIndex) {
            state.score += 1
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchQuestions.fulfilled, (state, action) => {
            const DecodeList = DecodeAsStringFromBase64(action.payload)
            state.list = CreateQuestionList(DecodeList)
            state.count = 0
            state.questionIndex = -1
            state.userResponseIndex = -1
            state.isUserResponsePending = true
            state.score = 0
         })
   }
});


export const { startQuiz, moveToNextQuestion,
   selectUserResponse } = counterSlice.actions;

export default counterSlice.reducer;