$(document).ready(function(){


		let palestrasSabado08 = [
			{
				title:'JOGOS DIGITAIS - PONG com UNITY e C# (Campus Tancredo Neves) - MINICURSO',
				nome: 'Ronílson Lobo - UNIFACS',
				resumo: ' -- Atenção Minicurso vai acontecer no Campus Tancredo Neves! -- Neste minicurso o participante vai ter noções básicas do que seria um motor de jogo (engine). Além de ter noções básicas de programação para Games na linguagem C#.',
			},
			{
				title:'CABEAMENTO ESTRUTURADO - MINICURSO',
				nome: 'Heber Araújo - DescompTec/BA',
				resumo: 'Serão aboradaos as Normas do Cabeamento Estruturado; Redes Locais (LAN); Conceitos e Equipamentos do Sistema; Meios Físicos (Metálico e Óptico); Conexões e Conectorização na Prática.',
			},
			{
				title:'DESENVOLVIMENTO MOBILE HÍBRIDO COM IONIC FRAMEWORK E INTEGRAÇÃO COM API EM NODE.JS - MINICURSO',
				nome: 'João Batista da Silva Júnior - GRUPO GNC',
				resumo: 'Será apresentado o Ionic Framework, os participantes entenderão sua estrutura e como desenvolver um aplicativo de forma prática. Também será apresentado o Node.js como Web Service.',
			},
			{
				title:'POWER BI NA PRÁTICA - MINICURSO',
				nome: 'Diógenes Pires dos Santos - Capgemini/BA',
				resumo: 'Neste minicurso você aprenderá como obter os dados de diferentes fontes, montar a camada semântica utilizando a modelagem multidimensional, tratar e organizar esses dados, com o objetivo de produzir alguns dos artefatos esperados pela inteligência de negócio utilizando diversos tipos de relatórios e Dashboards.',
			},
			{
				title:'SMART HOUSE - CASAS INTELIGENTES COM ARDUÍNO - MINICURSO',
				nome: 'Rafael Levi - SENAI/BA',
				resumo: 'Serão apresentados os seguintes conteúdos:- Apresentação do arduino e os componentes do kit - Arduino e suas versões; Sites com material; Resistor; Led; Push Button; Jumpers; Buzzer; LDR.- Eletrônica básica - Resistência, Corrente, Tensão; Unidades de medida; Grandezas K, M, G, T e m, μ, η, ρ.- Curso de smart house.',
			},
			{
				title:'INTEGRAÇÃO BI SELF SERVICE e R - MINICURSO ',
				nome: 'Isadora Almeida',
				resumo: '"Nesse minicurso veremos uma introdução a linguagem de programação estatística, R através da ferramenta RStudio. A linguagem R é mundialmente utilizada entre estatísticos e analistas de dados para geração de visualizações gráficas. A mesma permite a realização de infinitas tarefas desde cálculos estatísticos simples até tarefas mais complexas, como por exemplo, análises preditivas, análises de sentimentos - métodos bastante aplicados em ciência de dados. Além disso, veremos a ferramenta Self-Service de Business Intelligence da Microsoft, Power BI - que está cada vez mais sendo aderida pela empresas, devido a sua facilidade em gerar insights em tempo hábil para os tomadores de decisões. E para finalizar, faremos a integração da linguagem R com o Power BI para mostrar como as análises podem ficar ainda mais ricas."',
			},
		]

		palestrasSabado08.forEach((item, index) => 
			$('.08-wrapper').append(
				 '<div class="panel panel-info panel-box">'+
	                    '<div class="panel-heading panel-h">'+
	                        '<h3 class="panel-title title-box">'+ item.title +'</h3>'+
	                    '</div>'+

	                    '<a data-toggle="modal" data-target="#'+index+'">'+
	                        
	                        '<div class="panel-body minera-style">'+

	                            '' +item.nome+ '<br> '+
	                            '<span>Resumo</span> <br>'+
	                        '</div>'+
	                    '</a>'+
	                '</div>'+
	               ' <div class="modal fade" id="'+index+'" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
						'<div class="modal-dialog" role="document">'+
							'<div class="modal-content">'+
								
								'<div class="modal-header">'+
									'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									'<h4 class="modal-title" id="gridSystemModalLabel">'+ item.title +'</h4>'+
								'</div>'+

								'<div class="modal-body">'+
									item.resumo +
								'</div>'+

							'</div>'+
						'</div>'+
					'</div>'
			)
		);

});