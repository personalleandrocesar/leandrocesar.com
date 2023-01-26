<template>
  <div class="homeAnimation">
    <div class='main-two'>
      <code v-if="Math.random() > 0.5" >
        <i class="fa-solid fa-quote-left"></i> A felicidade não é algo que simplesmente acontece conosco. <br>É algo que nós fazemos acontecer.
        <br>
        Mihaly Csikszentmihalyi      
      </code>
      <code v-else-if="Math.random() > 0.5">
        <i class="fa-solid fa-quote-left"></i> Nascer, morrer, renascer ainda, progredir sempre, tal é a lei.<br>
        Allan Kardec      
      </code>
      <code v-else-if="Math.random() > 0.5">
        <i class="fa-solid fa-quote-left"></i> Para crer, não basta ver, é necessário compreender.
        <br>
        Allan Kardec   
      </code>
      <code v-else>
        <i class="fa-solid fa-quote-left"></i> De uma forma ou de outra, se a evolução humana é para continuar, teremos de aprender a apreciar mais a vida completamente.
        <br>
        Mihaly Csikszentmihalyi      
      </code>

    </div>

    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-bars-progress"></i> Projetos em destaque</h5>
      </div>
    </div>
    
    
    <div class='main-five'>
    
    
    
      <a href="https://professorleandrocesar.com" class='main-five-card'>
    
        <div>
          <img src='/img/myFotoTwo.jpg' alt='' class='mini-profile'>
        </div>
        <div>
          <h4>Professor<br>Leandro Cesar</h4>
          <h5>@professorleandrocesar</h5>
          <p>Personal trainer - Consultoria - Avaliação Física - Krav-maga</p>
        </div>
      </a>
      <a href="https://deepacupuntura.com" class='main-five-card'>
    
        <div>
          <img src='/img/deep.jpg' alt='' class='mini-profile'>
        </div>
        <div>
          <h4>Deep Acupuntura</h4>
          <h5>@deepacupuntura</h5>
          <p>Clínica particular de Medicina Chinesa</p>
        </div>
      </a>
      <!--
              <a href="https://espirita.xyz" class='main-five-card'>
    
                <div>
                  <img src='/img/espiritaxyz.jpg' alt='' class='mini-profile'>
                </div>
                <div>
                  <h4>Espirita.xyz</h4>
                  <h5>@espirita.xyz</h5>
                  <p>Espiritismo para todos</p>
                </div>
              </a>
              <a href="https://triboalmaforte.com" class='main-five-card'>
    
                <div>
                  <img src='/img/tribo.jpg' alt='' class='mini-profile'>
                </div>
                <div>
                  <h4>Tribo Alma forte</h4>
                  <h5>@triboalmaforte</h5>
                  <p>A carne só é forte porque a alma é forte!</p>
                </div>
              </a>
              -->
      <!--
          <div class='main-six'>
              <div class='main-six-card'>
                  <h5><b>Vantagens:</b></h5>
                  <p>
                    <ul>
                      <li>
                        <b>Treino na medida e com resultado + rápido:</b> o conhecimento de um treinador pessoal permitirá 
                        potencializar o treino, através de estímulos e metodologias de trabalho diferentes.
                      </li>
                      <li>
                        <b>Permite corrigir erros:</b> serão corrigidos os erros de execução de cada técnica, preocupando-se
                        com a correta posição postural, afim de evitar má posturas e lesões.
                      </li>
                      <li>
                        <b>+ seguro:</b> tendo em conta os objetivos e a condição física do cliente, a intesidade e o volume 
                        são ajustados com bases no conhecimento do treinador.
                      </li>
                      <li>
                        <b>+ motivador:</b> o personal trainer ajudará a evitar a rotina e monotonia dos treinos, isso claro,
                        se o aluno tiver obediência na hora do planejamento da sessão de treino e rotina de ir à academia.
                      </li>
                      <li>
                        <b>Facilmente quantificável:</b> as reavaliações periódicas da composição corporal e capacidades físicas 
                        permitem analisar a evolução em todos os parâmetros e reajustar o treino de acordo com os objetivos traçados.
                      </li>
                    </ul>
                  </p>  
                  <h5><b>Benefícios:</b></h5>
                  <p>
                        <b><i class="fa-solid fa-clipboard-check"></i> Avaliação inicial gratuita:</b> mensuração de medidas antropométricas, para ver a composição corporal; realização 
                        de teste para ver o condicionamento.
                        <br>
                        <b><i class="fa-solid fa-mobile"></i> Acesso a aplicativo:</b> nos dias em que for treinar sozinho, terá sua planilha de treinamento para não ficar perdido;
                        e continuar a evoluir sem escapar do planejamento.
                        <br>
                        <b><i class="fa-solid fa-chart-pie"></i> Reavaliações de 2 em 2 meses:</b> Analise dos resultados dos testes e medidas para readaptação dos treinos para
                        chegar ao objetivo pre-determinado pelo cliente.
                        <br>
                        <b><i class="fa-solid fa-tags"></i> Direito à descontos:</b> direito a descontos em terapias e parcerias, exclusivas para clientes;
                    
                  </p>  
                </div>
                
              </div>
              <a class='button-call'
              href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20no%20seu%20serviço%20de%20Personal,%20me%20chamo%20'>
              <i class="fa-brands fa-whatsapp"></i> Marcar Horário
            </a>
            -->
    
    </div>
    
    <br>
    <br>
    <br>
  </div>
</template>
<style scoped>
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a{
  text-decoration: none;
  color: #aaa;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.5em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color:#888;
}

.divider {
  height:15px;
  background-color: #dddddd54;
}

.nav-one{
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:10px 0 5px 0;
  color:black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
  box-shadow: 0px 4px 5px #ddd;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i, .main-one a:nth-child(2) i{
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(2) i{
  padding-right: 1px;
  margin: 0 0 0 0;
}

.main-one a:nth-child(3) i{
  padding-right: 5px;
  margin: 0 0 0 2px;
} 

.main-one a:nth-child(4) i{
  padding-right: 4px;
  margin: 0 0 0 2px;
}

.main-one a{
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0px 0 15px 0;
  margin-top: -30px; 
  color: black;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 -20px 0;
  color: #aaa;
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #aaa;
}

.main-tree h5{
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #aaa;
  overflow-x:auto;
}

.main-four i {
  font-size: 1.2em;
  color: #aaa;
}

.main-four h5{
  margin-left: 10px;
}

.main-four-card {
  height: 150px;
  width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card a {
  border: solid 1px #eeeeee;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
  transform: translateY(1em);
  transition: all .4s linear;
  box-shadow: 0 0px 5px #ddd;
}

.main-four-card a:hover {
  transform: translateY(0.8em) ;
  box-shadow: 0 5px 5px #999;
  background-color: #eeeeee70;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px 0 0 0;
  color: #333;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: 0px 10px 5px #fff;
  overflow-x: auto;
}

.main-five img {
  height: 70px;
  border-radius: 50%;
}

.main-five i {
  font-size: 1em;
  color: #333;
}


.main-five h4 {
  margin: 10px 10px 0 10px;
  color: #333;
  transition: all .4s linear;
  text-align: center;
  line-height: normal;
}

.main-five h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #333;
}

.main-five h5 {
  margin: 0px 10px 0px 10px;
  color: #555;
  font-size: .8em;
}

.main-five div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-five-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: solid 1px #dddddd;
  border-radius: 3% 3% 3% 3%;
  align-items: center;
  width: 44%;
}

@media only screen and (max-width: 382px) {
  .main-five-card {
    width: 100%;
  }
}


.main-five a {
  border: solid 1px #eeeeee;
  padding-bottom: 10px;
  margin: 0px 5px 20px 5px;
  border-radius: 3% 3% 3% 3%;
  transform: scale(0.97);
  transition: all .4s linear;
  transform: translateY(1em);
  box-shadow: 0 0 5px #ddd;
}

.main-five a:hover {
  background-color: #eeeeee70;
  transform: translateY(0.8em);
  box-shadow: 0 5px 5px #999;
}

.main-five a:hover:nth-child(1) {
  box-shadow: 0 5px 5px #fadb41;
}
.main-five a:hover:nth-child(1) h4 {
  text-shadow: 0 1px 1px #fadb41;
}
.main-five a:hover:nth-child(2) {
  box-shadow: 0 5px 5px #e23a28;
}
.main-five a:hover:nth-child(2) h4 {
  text-shadow: 0 1px 1px #e23a28;
}

.main-five a:hover:nth-child(3) {
  box-shadow: 0 5px 5px #53dd84;
}

.main-five a:hover:nth-child(3) h4 {
  text-shadow: 0 1px 1px #53dd84;
}

.main-five a:hover:nth-child(4) {
  box-shadow: 0 5px 5px #c07b4f;
}

.main-five a:hover:nth-child(4) h4 {
  text-shadow: 0 1px 1px #c07b4f;
}

.main-five p {
  padding: 0px;
  margin: 0px 10px 0px 10px;
  font-size: .7em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #777;
}
.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-six i {
  font-size: 1.2em;
  color: #555;
}

.main-six h5{
  margin-left: 10px;
}

.main-six h5{
  margin: 10px;
}

.main-six-card {
  height: 280px;
  width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid 1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-seven i {
  font-size: 1.2em;
  color: #555;
}

.main-seven h5{
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;   
  margin:auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;   
  margin:10px auto 20px auto  ;
  width:60%;
}
.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
border-radius: 50%;
margin: 10px 0 0 10px;
padding: 0 15px 0 0;
}


@media only screen and (max-width: 369px) {

  }
</style>