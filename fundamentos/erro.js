function tratarErroElancar(erro) {
    //throw new Error('...')
 //throw 10
throw true
}

function imprimirNomeGritado(obj) {
   try{ 
    console.log(obj.name,toUpperCase() + "!!!")   
   } catch (e) {
       tratarErroElancar(e)      

   }
    
}

const obj = { nome: "Roberto" }
imprimirNomeGritado(obj)
