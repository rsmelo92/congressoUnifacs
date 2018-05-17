$(document).ready(function(){


		let palestrasSexta19 = [
			{
				title:'INTERNET DAS COISAS - UMA REVOLUÇÃO TECNOLÓGICA',
				nome: 'Rafael Levi',
				resumo: '"Serão apresentados conteúdos que permitirão estudar IoT, fazer projetos envolvendo eletrônica, desenvolvimento WEB, Banco de dados, Virtualização, Cloud server, infraestrutura de redes. Quais empresas estão trabalhando com IoT e como são feitos esses projetos. Segue os conteúdos que serão abordados:- O que há por trás da internet? - Equipamentos de redes: Roteadores, Switches, access point, Modem; Camadas: Núcleo, distribuição e acesso; Grande porte: Roteadores à nível de internet; Servidores, desenvolvimento web.- O que são essas coisas? - Smart House: Atuadores, sensores; Automação residencial: Eletrônica + programação + infraestrutura.- Empresas que vendem IoT - Eletrodomésticos; Indústria; Pesquisa.- Como começar a fazer IoT? - Arduino: C++; Orientação à objetos; RaspBerry pi: Python; Shields de comunicação- Projeto de IoT - Ubuntu server; Banco de dados (MYSQL); Projeto Web(HTML5, CSS3, JS) - lamp-server; Protocolo de comunicação MQTT - MQTT Broker; AWS (Amazon Web Service); FTP server - PROFTPD; Node mcu ESP 8266. - Dúvidas e apresentação do curso de smart house - Link do formulário de pré-Inscrição; Mini-curso do sábado.',
			},
			{
				title:'MONTANDO SEU PRÓPRIO ROBÔ',
				nome: 'Lucas Leite/Brunno - Faz Labs/BA',
				resumo: '"Vice em 2016 e campeão em 2017 na Laureate Award for Excellence in Robotics, Lucas e Brunno irão apresentar robótica com foco em TI e aplicações práticas.Tópicos:- Eletrônica embarcada: Microcontroladores (Arduino e Raspberry), sensores e atuadores - Impressão 3D: Prototipagem rápida com impressão 3D- Software: Web, Deep Learning e ROS"',
			},
			{
				title:'PERÍCIA COMPUTACIONAL FORENSE - CRIMES DIGITAIS',
				nome: 'Marcelo Sampaio - Infocrime/BA',
				resumo: 'Histórico e rotina da perícia computacional forense oficial no Estada da Bahia',
			},
			{
				title:'10 PASSOS PARA CRIAR UM NEGÓCIO ONLINE DE SUCESSO ',
				nome: 'Thyza Ferreira - Agência doisF/BA',
				resumo: 'Serão abordados os principais passos para se criar e obter sucesso em empresas online',
			},
			{
				title:'CULTURA DE SEGURANÇA DA INFORMAÇÃO & CAMPANHAS DE VACINAÇÃO',
				nome: 'Sergio Luz - Setor de Energia/BA',
				resumo: 'Como as campanhas de vacinação podem ajudar a melhorar a segurança da informação nas organizações.',
			},
		]

		palestrasSexta19.forEach((item, index) => 
			$('.19-wrapper').append(
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


		let palestrasSexta2040 = [
			{
				title:'MARKETING DIGITAL - QUERO APRENDER',
				nome: 'Jean Calhau',
				resumo: '1 - Panorama do Mkt Digital no Brasil2 - Transição on/off - Inbound/Outbond3 - Conteúdo é rei: Atraia, conquiste e fidelize clientes4 - Captação de Leads e Funis de conversão/vendas5 - Conceito OmniChannel6 - Perspectiva de mercado: teoria x prática7 - Fontes de aprendizado, por onde começar?8 - Melhores práticas de MKT Digital - cases de valor9 - Indicação de sites e livros10 - Encerramento',
			},
			{
				title:'IA - INTELIGÊNCIA ARTIFICIAL - Modelagem computacional para mimetizar o comportamento de um animal elementar, especificamente C. elegans',
				nome: 'Alexandre Nascimento - Unifacs/BA',
				resumo: 'Modelo computacional para a rede neural do C. elegans, mais precisamente a modelagem computacional da termotaxia',
			},
			{
				title:'COMO CRIAR SUA STARTUP',
				nome: 'Ramon Santos - Alpha Centauri/BA',
				resumo: '"Apresentação dos passos necessário para transformar uma ideia em uma Startup.A Ideação, o Modelo de Negócios, a Empresa e o Time, como conciliar tudo isso.',
			},
			{
				title:'VAMOS FALAR DE NOVIDADES DO MUNDO JAVA?',
				nome: 'Antônio Lazaro - Topos Informática/BA',
				resumo: 'Apresentação de novos recursos, como CDI 2.0, Beans Validation 2.0, Opções de frameworks para criação de microserviços, e integração com bancos não relacionais...Uma pincelada de java 9 e java 10.',
			},
			{
				title:'HISTÓRIAS DE HACKERS E CRIMINOSOS CIBERNÉTICOS: O QUE HÁ POR TRÁS DE UM CIBERATAQUE',
				nome: 'Cassius Puodzius - ESET/SP',
				resumo: 'Alguma vez já passou pela sua cabeça que é possível alguém comprometer a segurança do servidor onde você hospeda seus trabalhos da universidade? Em sendo possível, como um hacker consegue fazê-lo? Se a primeira pergunta se responde com um simples "sim", para responder à segunda pergunta propomos que assista à nossa palestra, onde apresentamos técnicas e ferramentas utilizadas por hackers a fim de comprometer a segurança de diferentes sistemas. Com isso, desejamos levar aos espectadores a importância do tema da segurança da informação, mostrando que essa deve ser uma preocupação prática e real, além de discutir como, apesar das inumeras ameaças digitais existentes, podemos utilizar a Internet com segurança.',
			},
		]

		palestrasSexta2040.forEach((item, index) => 
			$('.2040-wrapper').append(
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