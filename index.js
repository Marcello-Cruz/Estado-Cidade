const estados = [
    {
    uf: "SP", cidades: [
        {id: 1, nome: "Mongaguá"}
       ,{id: 2, nome: "Itanhaém"}
       ,{id: 3, nome: "Peruíbe"}
       ] 
   }
   ,
   {
       uf: "RJ", cidades: [
         {id: 4, nome: "Níteroi"}
       , {id: 5, nome: "Macaé"}
       , {id: 6, nome: "Santa Maria Madalena"}
       ] 
   }
   ,
   {
       uf: "AC", cidades: [
        {id: 7, nome: "Feijó"}
      , {id: 8, nome: "Xapuri"}
      , {id: 9, nome: "Bujari"}
       ] 
   }
   ,
   {
       uf: "MS", cidades: [
        {id: 10, nome: " Maracaju "}
      , {id: 11, nome: " Dourados "}
      , {id: 12, nome: " Jardim "}
       ] 
   }
   ,
   {
       uf: " SC ", cidades: [
        {id: 13, nome: " Bombinhas "}
      , {id: 14, nome: "Penha"}
      , {id: 15, nome: " Balneario Camburiú"}
       ] 
   }
   ,
   {
       uf: " AM ", cidades: [
        {id: 16, nome: " Manaus"}
      , {id: 17, nome: " Tefé "}
      , {id: 18, nome: " Coari "}
       ] 
   }
   ,
   {
       uf: " MG", cidades: [
        {id: 19, nome: " Trindade "}
      , {id: 20, nome: " Passa Quatro "}
      , {id: 21, nome: " Monte Verde "}
       ] 
   }
   ,
   {
       uf: " ES ", cidades: [
        {id: 22, nome: " Vitória "}
      , {id: 23, nome: " Serra "}
      , {id: 24, nome: " Colatina "}
       ] 
   }
   ,
   {
       uf: " AL ", cidades: [
        {id: 25, nome: " Penedo "}
      , {id: 26, nome: " Murici "}
      , {id: 27, nome: " Maceio "}
       ] 
   }
   ,
   {
       uf: " RR ", cidades: [
        {id: 28, nome: " Iracema "}
      , {id: 29, nome: " Bonfim "}
      , {id: 30, nome: " Cantá "}
       ] 
   }
   ];
   

const alteraEstado = () =>{
    const selectEstado = document.getElementById("estado");
    const estadoSelecionado = selectEstado.value;

    const selectCidade = document.getElementById("cidade");
    selectCidade.innerHTML = "";

    const divSaida = document.getElementById("saida");
    divSaida.innerHTML = "";

    if(estadoSelecionado){
        adicionaOpcaoSelect(selectCidade, "", "Selecione uma cidade");

        const ufFiltro = estados.filter(
            estado => estado.uf === estadoSelecionado)[0];  
        
        ufFiltro.cidades.forEach(
            cidade => adicionaOpcaoSelect(selectCidade, cidade.id, cidade.nome)
        );
    }

    ajustaComboCidades();

};

const ajustaComboCidades = () => {
    const selectCidade = document.getElementById("cidade");

    if (selectCidade.length > 0){
        selectCidade.disabled = false;
    }else{
        adicionaOpcaoSelect(selectCidade, "", "---Selecione um estado---");
        selectCidade.disabled = true;
    }
};

const alteraCidade = () => {
    const divSaida = document.getElementById("saida");
    const selectEstado = document.getElementById("estado");
    const selectCidade = document.getElementById("cidade");

    const estadoSelecionado = selectEstado.value;
    const cidadeSelecionada = selectCidade.options[selectCidade.selectedIndex].text;
    if (selectCidade.value){
        divSaida.innerHTML = `${cidadeSelecionada}/${estadoSelecionado}`;
    }else{
        divSaida.innerHTML = "";
    }
};

const adicionaOpcaoSelect = (select, value, text) => {
    select.insertAdjacentHTML("beforeend"
                 , `<option value="${value}">${text}</option>`);
};

const iniciar = () => {
    document.getElementById("estado").addEventListener("change", alteraEstado);
    document.getElementById("cidade").addEventListener("change", alteraCidade);
    ajustaComboCidades();
};

document.addEventListener("DOMContentLoaded", iniciar);