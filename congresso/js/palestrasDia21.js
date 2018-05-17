$(document).ready(function(){


		let palestrasQuinta1920 = [
			{
				title:'VENHA SER UM CIENTISTA DE DADOS - O PROFISSIONAL DE BIG DATA',
				nome: 'Christian Guerreiro - TCE/BA',
				resumo: 'O que é um Cientista de Dados? Por que esta é uma das profissões mais promissoras das próximas décadas? O que estudar? Onde estudar? Onde trabalhar? As respostas para estas e várias outras questões importantes para interessados no mercado de Big Data e Ciência de Dados. Não perca! ',
			},
			{
				title:'ATAQUES CIBERNÉTICOS',
				nome: 'Othon Batista- UNIFACS/BA',
				resumo: 'A segurança da informação é um tema importante nos dias atuais. O profissional de tecnologia da informação precisa ter conhecimento de aspectos relacionados com este tema. Um aspecto apresentado com muita ênfase nas mídias são os ataques cibernéticos. Estes ataques, tema desta palestra, serão apresentados como exploração de vulnerabilidades de ativos e, desta forma, devem ser previstos em uma análise de riscos. Assim sendo, a matriz de análise de riscos será a nossa principal ferramenta para pensarmos nos ataques cibernéticos e em alguma forma de mitigá-los.',
			},
			{
				title:'ERROS NO SEU CURRÍCULO  QUE FAZEM VOCÊ PERDER OPORTUNIDADES DE EMPREGO EM TI',
				nome: 'Carlos Silveira - Minimal Solutions',
				resumo: 'Entendendo a logística e o design ideal do currículo. A concepção moderno do currículo. O que deve e não deve ser dito para sua boa acolhida pelas empresas.',
			},
			{
				title:'CIRCUITO DE TRANSFORMAÇÃO HORUS',
				nome: 'Danilo Andrade - HORUS ITS',
				resumo: 'A tecnologia pode ser entendida como “o estudo do ato de transformar”. Mas ela por si só transforma? Qual deve ser o papel da tecnologia em uma empresa? Como isso tudo está ligado a transformação dos resultados? Esses resultados são meramente financeiros? O circuito de transformação Horus é um momento de experimentação e ampliação do campo de visão. Nesta oportunidade, daremos uma visão geral dele e uma amostra capaz de abrir uma janela para esse mundo fascinante e, por isso mesmo, cheio de armadilhas quando se usa a tecnologia sem o alinhamento necessário.',
			},
			{
				title:'VIRTUALIZAÇÃO X COMPUTAÇÃO EM NUVEM: QUAL A DIFERENÇA?',
				nome: 'Wagner Moraes - MCPS | MCSA | ITPRO',
				resumo: '"O Cloud Computing difere da virtualização ao ser definido como o resultado da manipulação do hardware por parte de um software específico. A virtualização é, portanto, um elemento fundamental à computação na nuvem. A confusão está no fato de os dois conceitos se correlacionarem para oferecer serviços diferentes. Ponto de vista que serão abordados: O que é virtualização e serviços; Hyper-V; O que é computação em nuvem; Vantagens e Desvantagens desses serviços. "',
			},
		]

		palestrasQuinta1920.forEach((item, index) => 
			$('.1920-wrapper').append(
				 '<div class="panel panel-info panel-box">'+
	                    '<div class="panel-heading panel-h">'+
	                        '<h3 class="panel-title title-box">'+ item.title +'</h3>'+
	                    '</div>'+

	                    '<a data-toggle="modal" data-target="#'+index+index+'">'+
	                        
	                        '<div class="panel-body minera-style">'+

	                            '' +item.nome+ '<br> '+
	                            '<span>Resumo</span> <br>'+
	                        '</div>'+
	                    '</a>'+
	                '</div>'+
	               ' <div class="modal fade" id="'+index+index+'" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
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


		let palestrasQuinta2045 = [
			{
				title:'BIG DATA E CIDADES INTELIGENTES - COMO PODEM INFLUENCIAR A SOCIEDADE ATUAL?',
				nome: 'Felipe Torres - Fiocruz/BA',
				resumo: 'É muito comum atualmente a discussão sobre o volume de dados gerados pela sociedade. smartphones, redes sociais, casas automatizadas e dispositivos inteligentes. Estamos cada vez mais conectados uns aos outros pelas redes sociais e gerando dados. Nossa sociedade está inteiramente ligada a análises de dados que ela mesma gera. Seu mercado envia um informativo de promoções dos produtos que você costuma comprar; Sua academia envia mensagens de estimulo no dia que você precisava; O seu email recebe uma notícia sobre promoções de geladeira quando você estava pensando em comprar uma; O seu caminho para o trabalho utilizando o Waze para evitar o engarrafamento. Nosso estilo de vida está mudando. Estamos utilizando o big data como uma ferramenta de apoio em diversas decisões empresariais, pessoais e profissionais em diversas áreas.'
			},
			{
				title:'REALIDADE AUMENTADA: COMO FAZER',
				nome: 'André Costa - UNIFACS/BA',
				resumo: 'Em breve',
			},
			{
				title:'VISÃO COMPUTACIONAL E PROCESSAMENTO DE IMAGENS utilizando OPENCV com PYTHON',
				nome: 'Thiago Vieira',
				resumo: 'Abrimos o aplicativo de câmera e ele detecta nossa face, utilizamos realidade aumentada para nosso entretenimento e até mesmo projetos de pesquisa... Mas como as máquinas conseguem tamanho feito? Como as máquinas enxergam nosso mundo? A visão computacional é a ciência que estuda isso e acredite: vai muito além do que você viu! Venha aprender a usar esta tecnologia, seja mais um entusiasta tecnológico.'	
			},
			{
				title:'O PODER DA TECNOLOGIA APLICADA À SAÚDE',
				nome: 'Arleys Castro - WEX/BA',
				resumo: ' Desvendando a Interdisciplinaridade e multidisciplinaridade, como uso da tecnologia pode agregar valores a saúde usando os diversos conhecimentos',
			},
			{
				title:'FÓRUM DE DISCUSSÃO: BITCOIN: MODA, FUTURO ECONÔMICO OU PESSÍMO NEGÓCIO',
				nome: 'Vagner Oliveira/Heber Santana/Christian Guerreiro',
				resumo: 'A Nova Moda Moedas Virtuais, Os altercoin são tratados como um sistema de comunicação que funciona através da Internet. Na ciência da computação a gente chama esses sistemas de protocolo. Você consegue acessar qualquer página da Web tanto do seu celular, como do computador de casa ou do seu trabalho, não importa o país que o sítio web esteja hospedado. Isso é porque o protocolo que os servidores usam para disponibilizar os websites, e que os navegadores usam para mostrar os sites é o mesmo. Os protocolos funcionam como línguas universais, que permitem que os vários computadores diferentes da Internet consigam se comunicar para realizar diferentes tarefas específicas.',
			},
		]

		palestrasQuinta2045.forEach((item, index) => 
			$('.2045-wrapper').append(
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
		)

});