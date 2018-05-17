$(document).ready(function(){
	if ($('.carousel-galeria').length) {
		$('.carousel-galeria').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover:false,
			pauseOnFocus: false,
			arrows:true,
		});
	}
	

	console.log("Script rodando");
	$('header').append('<div class="wrapper hidden-xs">'+
						' <h3 class="dias-banner">21, 22 e 23 de Setembro 2017</h3>'+
						' </div>'+
						'<div class="wrapper-mob visible-xs">'+
						' <img class="img-responsive" src="congresso/img/logo-main - mobi.png">'+
						' <h4 class="dias-banner-mob">21, 22 e 23 de Setembro 2017</h4>'+
						' </div>'+
						'<nav class="navbar navbar-default navbar-congresso"> '+
						'<div class="container-fluid"> '+
						'<div class="navbar-header"> '+
							'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div>'+
							'<div id="bs-example-navbar-collapse-1" class="navbar-cong collapse navbar-collapse">'+
							' <ul class="navbar-list nav navbar-nav"> '+
								'<li class="navbar-item"><a class="nav-link" href="index.html">O Congresso</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="a-unifacs.html">A Unifacs </a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="programacao.html">Programação</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="palestrantes.html">Palestrantes</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="inscricoes.html">Inscrições</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="hackathon.html">Hackathon</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="local.html">Local</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="galeria.html">Galeria</a></li>'+
								'<li class="navbar-item"><a class="nav-link" href="contato.php">Fale Conosco</a></li>'+
							'</ul> </div></div>'+
							'</nav>');

	let palestrantesArray = [
								{
									nome: 'Alexandre Nascimento',
									empresa: 'UNIFACS',
									foto: 'congresso/img/palestrantes/Alexandre_do_Nascimento.jpg',
									texto: 'Natural de Refice/PE, concluiu o ensino superior em Administração na Faculdades Integradas Olga Mettig; recebeu o diploma de especialização e mestrado em Computação Científica pela Fundação Visconde de Cairu em 2003 e 2009 respectivamente. Ainda concluiu o curso superior de Engenharia de Produção na ÁREA1 em 2016',
									link:'https://www.linkedin.com/in/alexandre-do-n-silva-b5178699'
								},
								// Completo
								{
									nome: 'André Costa',
									empresa: 'Senai/BA',
									foto: 'congresso/img/palestrantes/Andre_Costa.jpg',
									texto: 'Mestre em Modelagem Computacional, MBA em Gestão de TI com Business Intelligence e Bacharel e Sistemas da Informação. Atua como Líder Técnico no núcleo de Inovação e Tecnologias Educacionais do SENAI e Professor Adjunto nos cursos de Tecnologia da Informação da UNIFACS',
									link:'https://br.linkedin.com/in/andreluizcosta'
								},
								// Completo
								{
									nome: 'Antônio Lázaro',
									empresa: 'Topos Informática/BA',
									foto: 'congresso/img/palestrantes/Antonio_Lazaro.jpg',
									texto:' Baiano, Arquiteto de Sofware na Topos Informática, JUG Leader no Java Bahia, Torcedor do Bahia, Bacharel em Sistema de Informação pela UCSAL, Pós-graduado em Engenharia de Sofware pela Faculdade Ruy Barbosa, SCJP.',
									link:'https://www.linkedin.com/in/antonio-lazaro-carvalho-borges-a78a1514/'
								},
								{
									nome: 'Arleys Castro',
									empresa: 'WEX/BA',
									foto: 'congresso/img/palestrantes/Arleys_Castro.jpg',
									texto: 'Análise e desenvolvimento de Projetos, definição de escopo, determinação de esforço para entrega do projeto, recursos e desempenho das atividades para desenvolvimento, verificação de Documentação UML, análise e desenvolvimento de projeto em JAVA, C# e C++, implementação do Sistema de compras, análise de impacto de mudança de banco de dados, administração DBA, Criação e manutenção do modelo de dados corporativo, Auditoria dos modelos de dados.',
									link:'https://www.linkedin.com/in/arleys-castro-47753111a/'
								},
								{
									nome:'Brunno Araújo',
									empresa: 'Faz Labs/BA',
									foto: 'congresso/img/palestrantes/Brunno_Araujo.jpg',
									texto: 'Majoring in mechatronics engineering, eighth semester. Computation Technician. Has won Unifacs Award for Academic Merit thrice. Has published three scientific papers on residential automation. Is enrolled, as a special student, in the Master of Software Engineering at Universidade Federal da Bahia, UFBA.',
									link: '',
								},
								// Completo
								{
									nome:'Carlos Silveira',
									empresa: 'Minimal Solutions',
									foto: 'congresso/img/palestrantes/Carlos_Silveira.jpg',
									texto: '"Economista, analista de sistemas, professor emérito da Unifacs e diretor da MINIMAL SOLUTIONS Serviços de apoio técnico, consultorias em Telecom, Gestão de Projetos & Governança de TI.',
									link: 'https://www.linkedin.com/in/silveira-carlos-9510729/?ppe=1',
								},
								// Completo
								{
									nome:'Cassius Puodzius',
									empresa: 'ESET/SP',
									foto: 'congresso/img/palestrantes/Cassius_Puodzius.jpg',
									texto: 'Pesquisador de segurança da informação da ESET, onde se dedica a acompanhar as ações e evolução do cibercrime no Brasil e é colaborador do blog WeLiveSecurity.Já publicou e apresentou pesquisas no Journal of Systems and Software, WTICG do SBSeg, LatinCrypt (seção “Students and Posdocs”) e ministrou palestras em eventos se segurança como Roadsec, BSides-SP e Cryptorave.Formado em engenharia da computação pela Escola Politécnica da USP (Poli-USP), participou de pesquisas relacionadas a criptografia na Poli-USP e na TU Darmstadt (Alemanha), atuou em projeto de segurança para IoT na Gemalto (Meudon, França), trabalhou durante dois anos no Security Office do Banco BTG Pactual e desde 2016 é pesquisador da ESET.',
									link: 'https://br.linkedin.com/in/cassius-puodzius-a80a5525',
								},
								// Completo
								{
									nome:'Christian Guerreiro',
									empresa: 'TCE/BA',
									foto: 'congresso/img/palestrantes/Christian_Guerreiro.jpg',
									texto: '"Auditor, Professor, Pesquisador, Blogueiro, Empreendedor e, acima de tudo, Estudioso de TI e viciado em informação!Compartilhando o que aprendo no blog Tecnologia que Interessa! e cursos online, ajudo profissionais de TI a obter certificações relevantes para o mercado de trabalho.Atualmente focado em Marketing Digital, Empreendedorismo e sua interseção com Big Data e Ciẽncia de Dados.Entre em contato! Terei a maior satisfação de trocar ideias com você!Certificado em COBIT 4.1 & ITIL v3, Certified Linux Instructor, MCSA.Projetos e Pesquisas:- Business Intelligence com IBM COGNOS;- Auditoria de TI;- Virtualização com VMware (desde a versão 3.5!);- Governança de TI (ITIL, COBIT)- Big Data & Ciência de Dados com soluções da Cloudera, Hortonworks, Amazon, R, WEKA;- Melhores Práticas para ambientes virtuais: estudo de caso de um ambiente hospitalar;- Desenvolvimento de plugin Wordpress para simplificar postagens em blogs;- Estudo de Caso sobre Segurança da Computação em Nuvem em Instituição Hospitalar;- Análise de Dados do Twitter sobre Times de Futebol com Apache Hadoop;- Mineração de Dados com WEKA para Previsão do Tempo;- Mineração de Dados e Big Data: Análise de Dados das Eleições;- Distribuições Hadoop: uma análise comparativa;- Big Data: análise e classificação de ferramentas com base na arquitetura IBM;- Análise comparativa de soluções de Computação em Nuvem: avaliação de maturidade e perspectivas;',
									link: 'https://www.linkedin.com/in/christianguerreiro/'
								},
								// Completo
								{
									nome:'Danilo Andrade',
									empresa: 'Horus ITS',
									foto: 'congresso/img/palestrantes/Danilo_Andrade.jpg',
									texto: '"Danilo Andrade é antes de tudo um entusiasta da colaboração, advinda do alinhamento dos propósitos individuais e das empresas, quando todos trabalham em sinergia para construir a contribuição que será deixada para as próximas gerações.Empreendedor da área de engenharia de software, vem contribuindo com líderes organizacionais para a ampliação do campo de visão através dos indicadores, de forma a compreender e promover as transformações necessárias para a obtenção de resultados que deem significado ao trabalho.Líder na Horus ITS, colabora para o entendimento das necessidades e desejos dos clientes, traduzindo-os em uma solução singular, além de atuar como educador nos programas de aprendizagem.Graduado em Ciências da Computação pela UNIFACS, pós-graduado em Sistemas Distribuídos pela UFBA e em Gestão Empresarial pela FGV, lecionou em programas de graduação e pós-graduação em Engenharia de Software e Gestão de Projetos em diversas Universidades na Bahia, além de possuir as principais certificações em Engenharia de Software, Gestão de Projetos e Gestão de Processos.Sempre focado nas expectativas e desejos dos clientes, lidera a equipe Horus de forma a todos compreenderem os respectivos papéis e exercê-los com excelência para que os resultados superem as expectativas.Dedica-se atualmente a atender gestores transformadores de negócios em busca de insights a partir de seus dados, conferindo o conhecimento necessário para que esses gestores liderem suas equipes a resultados extraordinários."',
									link: 'https://www.linkedin.com/in/danilo-andrade-0151693/',
								},
								// Completo
								{
									nome:'Diógenes Pires dos Santos',
									empresa: 'CAPGEMINI/BA',
									foto: 'congresso/img/palestrantes/Diogenes_Pires_Santos.jpg',
									texto: 'Mestrando em Ciência da Computação, UFBA, 4 disciplinas cursadas como aluno especial, pós-graduado especialista em Banco de dados com ênfase em alta disponibilidade pela UNIFACS em 2012, pós-graduado especialista em Governança de TI pelo SENAC em 2011. Certificação Microsoft MTA:98-364 Database Fundamentals. Curso de Metodologia do Ensino Superior pela UNIFACS. Bacharel em Sistemas de Informação pela Faculdade Hélio Rocha em 2010. Nível médio técnico em processamento de dados, formado pela Escola de Engenharia Eletro-Mecânica da Bahia em 1999. Atuação em Desenvolvimento de sistemas desde 1996, Análise de sistemas desde 2005 e Análise de Requisitos desde 2010, Analista de Business Intelligence desde 2013. Consultor Funcional de Business Intelligence atuando com as ferramentas IBM Cognos, IBM Watson Analytics, Qlikview, Power BI, Tableau, Talend, Microsoft SSIS e Oracle ODI.',
									link: 'https://www.linkedin.com/in/di%C3%B3genes-pires-b375a172?ppe=1',
								},
								{
									nome:'Eber Santana',
									empresa: '',
									foto: 'congresso/img/palestrantes/Eber_Santana.jpg',
									texto: '"Mestrando em Sistemas e Computação pelo PPGCOMP - UNIFACS, Graduação em Administração com ênfase em Sistemas da Informação, Tecnólogo em Processamento de Dados, Especialista em Redes e Segurança da Informação - CSO e MBA em gestão de Projetos. Atualmente é analista de Suporte Pleno e Professor Universitário nas faculdades Dom Pedro 2, FAT e FADBA. Coordenador da Pós-Graduação de Segurança da Informação e Redes de Computadores na Faculdade Anísio Teixeira FAT. Participou do projeto do Edital Nº 016/2015 Concurso Ideias Inovadoras 2015 pela Faculdade Dom Pedro 2. Experiência na área de Sistemas, Infraestrutura e Segurança da Informação. Tenho aproximadamente tenho 16 anos de experiência nacional e 3 anos de experiência internacional nas áreas corporativa (gestão de infraestrutura, docência, suporte e acadêmica). Possuo nível intermediário de inglês e com experiência em tecnologia de redes (TCP/ IP, WAN, LAN, DNS, DHCP), banco de dados (SQL), servidores de e-mail (Exchange), servidores de aplicação (IIS), Windows Active Directory, GPOs e virtualização (VMWare e Hyper-V). "',
									link: 'http://br.linkedin.com/pub/eber-santana/15/4b2/386/',
								},
								// Completo
								{
									nome:'Felipe Torres',
									empresa: 'Fiocruz/BA',
									foto: 'congresso/img/palestrantes/Felipe_Torres.png',
									texto: 'Ama programação em Python, análises de dados em JAVA, plotar gráficos em R e fazer páginas web em PHP com Code Igniter. Ele é motivado por desafios, nas horas vagas nunca nega uma roda de capoeira ao toque do berimbau. Obteve o título de bacharel em Sistemas de Informação pela UNIJORGE e Mestre em computação aplicada a saúde pela UEFS. Atualmente, faz doutorado em Biotecnologia na FIOCRUZ, atuando em diversos projetos de computação aplicada a saúde.',
									link: 'https://www.linkedin.com/in/fgtorres18/',
								},
								// Completo
								{
									nome:'Heber Araújo Silva',
									empresa: 'DescompTec - Tecnologia da Informação e Telecomunicações.',
									foto: 'congresso/img/palestrantes/Heber_Araujo.jpg',
									texto: 'Possui graduação em Engenharia de Telecomunicações. Atualmente é Diretor Executivo na DescompTec - Tecnologia da Informação e Telecomunicações, e Professor de ensino técnico (SENAI) na área de TIC. Tem experiência na área de Infraestrutura, Redes de Computadores, Telecomunicações, Segurança Eletrônica e Qualidade.​ Certificações Oficiais: ISO/IEC 20000, ITIL Foundation, CCNA, MCDST, MCP.',
									link: 'https://www.linkedin.com/in/hebersilva/',
								},
								{
									nome:'Isadora Almeida',
									empresa: 'HORUS ITS/BA',
									foto: 'congresso/img/palestrantes/Isadora_Almeida.PNG',
									texto: '"Aficionada por tecnologia e inovação, acredita que a ciência e tecnologia podem e devem ser utilizadas para solucionar problemas reais da sociedade, visando sempre o desenvolvimento humano na sua totalidade. Bacharel em Sistemas de Informação pela Universidade do Estado da Bahia, com produções realizadas nas áreas de Processamento de Linguagem Natural e Análises de Big Data. Atuou como desenvolvedora de software durante 5 anos, e como analista de Big Data durante um estágio de verão na Universidade do Estado do Arizona, oportunidade que despertou sua paixão pelos megadados e todo o seu poderio. Atualmente, atua como Analista de BI na Horus Its, onde dedica-se a levar aos clientes encontros inspiradores de forma a entregar resultados confiáveis e de alto valor. Focada sempre nas melhores soluções para o cliente, visa atender suas necessidades de forma assertiva, de modo a aumentar seu campo de visão a nível global empresarial, através da utilização coerente dos seus dados e informações."',
									link: 'https://www.linkedin.com/in/isadora-almeida-807a8511b/',
								},
								{
									nome:'Jean Calhau',
									empresa: '',
									foto: 'congresso/img/palestrantes/Jean_Calhau.jpg',
									texto: 'Sou formado em Comunicação Social pela UFBA e Especialista em Docência do Ensino Superior, atuo como consultor nas áreas de comunicação/ marketing e como docente.Na área de educação, já atuei como docente do curso Tecnólogo em Web sites da UNIFACS nas disciplinas: Gestão Empresarial, Interface Homem-Computador, Design para Web, Ferramentas de Edição Web, Multimídia para Web e Marketing Digital. No curso de Publicidade e Propaganda lecionei as disciplinas E-Marketing e Propaganda em Tecnologias Emergentes.Como consultor de Comunicação e Marketing, atuei recentemente no Ministério da Justiça onde desenvolvi diagnósticos sobre as estratégias de comunicação, portal web e redes sociais do ministério. Atuei também na Odebrecht Infraestrutura, obra de requalificação da Orla da Barra em Salvador – BA, na área de comunicação e relações com comunidades e na Odebrecht Ambiental na área de Comunicação Corporativa no desenvolvimento de estratégias de comunicação interna, apresentações institucionais, relatórios, criação de revistas impressas e eletrônicas para divulgação de serviços e produtos.Tenho experiência internacional, em 2008 e 2009 participei do Projeto Vias de Luanda da Odebrecht Angola, onde trabalhei na criação de materiais impressos de divulgação das ações de responsabilidade socioambiental, identidade visual e comunicação interna. Além disso, fui consultor do PNUD na Criação da primeira versão do web site do Programa de Inclusão de Jovens - Projovem em Brasília, em 2006 e 2007.Prestei consultoria de comunicação e marketing para diversas empresas de âmbito nacional e estadual como VALE, LLX, SENAI, FIEB, FIRJAN, FINEP, AGERBA e GTZ.',
									link: 'https://www.linkedin.com/in/jcalhau/',
								},
								// Completo
								{
									nome:'João Batista da Silva Júnior',
									empresa: 'GRUPO GNC',
									foto: 'congresso/img/palestrantes/Joao_Batista_Silva.jpg',
									texto: 'Mestrando em Sistemas e Computação na Universidade Salvador (UNIFACS) e graduado em Bacharel em Ciência da Computação na UNIFACS. Tem experiência na área de Web Design, Design Gráfico e Editor de Vídeo na Força Aérea Brasileira, Front-End na empresa de Tecnologia em Internet e Mobile CARTELLO, Programador na empresa Freellas Comunicação, Desenvolvedor Web na empresa Level131, Analista de Sistemas Júnior na Capgemini, Analista de Sistemas Sênior na Montreal e atualcomo Analista de Desenvolvimento Sênior no Grupo GNC.',
									link: 'http://www.linkedin.com/in/joaojuniormail',
								},
								// Completo
								{
									nome:'Lucas Leite',
									empresa: 'Faz Labs/BA',
									foto: 'congresso/img/palestrantes/Lucas_Leite.jpg',
									texto: '"Estudante da UNIFACS de Engenharia Mecatrônica de 9º semestre. Principais marcos: 2014.2 - Transferência de para a Universidade Salvador - 1º Lugar Mérito acadêmico pelas melhores notas em Engenharia Mecatrônica (do semestre) 2015.1 - Monitoria de Álgebra Linear/Geometria Analítica - Projeto acadêmico do sistema de gestão on-line AIC - 3º Lugar mérito acadêmico 2015.2 - Estágio no laboratório de microcontroladores e aplicações: Projetos menores: Aranha Hexapod, Automação residencial, Drone - Conhece Brunno Araujo (Atual sócio fundador da Faz Labs) - Selecionado para final da competição de robótica internacional Laureate Award for Excelence in Robotics 2016.1 - Início do estágio na Ford no time de elétrica - Construção do robô HEIMDALL, final no méxico. 2º Lugar na competição 2016.2 - Fim (voluntário) do estágio na Ford - foco na área acadêmica - Junto a Brunno, vencedor do Startup Weekend:FSA (competição de criar uma empresa do zero em um final de semana) - Selecionado novamente para a competição internacional Laureate Award for Excellence in Robotics - Fundação da FAZ LABS - Software and Hardware development - Criação do LABFY - Sistema de gestão de laboratórios 2017.1 - 1º Lugar no Laureate Award for Excellence in Robotics com o Amazon-e. - 2º ou 3º Lugar na competição internacional James Mcguire (1 dos 3 finalistas de 118 candidatos) (não sabemos a colocação) - Líder do LIFEBOX, projeto acadêmico do IEEE. Equipamento de medição de gases poluentes - Inscrito na competição Sharktank da Laureate com o Chatbot LAURA (aguardando resultado)"',
									link: 'https://www.linkedin.com/in/lucas-leite/',
								},
								// Completo
								{
									nome:'Marcelo Antônio Sampaio Lemos Costa',
									empresa: 'Secretaria de Segurança Pública/BA',
									foto: 'congresso/img/palestrantes/Marcelo_Sampaio.jpg',
									texto:'Perito Criminal Oficial do Departamento de Polícia Técnica. Especializado nas perícias relacionadas a computadores e sistemas. Lotado na Coordenação de Computação Forense do Instituto de Criminalística Afrânio Peixoto, do qual foi fundador em 1997, hoje o mais antigo laboratório de Computação Forense do Brasil.Pesquisador em Ciências da Computação com registro no CNPq. Líder do grupo de pesquisa de Computação Forense do Instituto de Criminalística Afrânio Peixoto. Autor do livro Computação Forense, da Editora Millennium 3ª edição. Autor do blog Infocrime.com.br. Professor da Academia de Polícia do Estado da Bahia na disciplina “Computação Forense”. Professor da Universidade Jorge Amado - UNIJORGE, na disciplina “Auditoria e Análise Forense” do curso de especialização de “Gestão em Segurança da Informação”.',
									link:'https://www.linkedin.com/in/marceloslcosta/',	
								},
								// Completo
								{
									nome:'Othon Batista',
									empresa: 'UNIFACS',
									foto: 'congresso/img/palestrantes/Othon_Batista.png',
									texto:'"Mestre em Informática - Redes de Computadores e Sistemas Distribuídos Bacharel em Ciência da Computação Linux desde 1994 Programa em qualquer linguagem desde 1985, quando iniciou com Basic e Assembly em MSX Atualmente consultor de segurança de informação e programador, com ênfase em iOS, Android ou Smartfones, de forma nativa ou híbrida."',
									link:'https://www.linkedin.com/in/othon-batista-9b6a33108/',	
								},
								// Completo
								{
									nome:'Rafael Levi',
									empresa: 'SENAI/BA',
									foto: 'congresso/img/palestrantes/Rafael_Levi.jpg',
									texto:'Formado em Ciência e Tecnologia pela UFBa, graduando em Engenharia da Computação na UFBa e concluinte do curso de Mestrado em Modelagem Computacional no SENAI Cimatec com o tema de pesquisa na área de robótica educacional, também é certificado CISCO CCNA 1.',
									link:'https://www.linkedin.com/in/rafael-costa-8791b258/',	
								},
								{
									nome:'Ramon Santos',
									empresa: 'Gerente de Inovação Topos Informática/BA',
									foto: 'congresso/img/palestrantes/Ramon_Santos.jpg',
									texto: 'Possui experiência na área de Desenvolvimento de Sistemas, Gerenciamento de Projetos e Empreendedorismo. Na graduação em Engenharia da Computação foi premiado com uma viajem 100% patrocinada para o Vale do Silício (Califórnia/EUA - Sede do Grupo Devry) e também foi vencedor do Prêmio Ideias Inovadoras (FAPESB) obtendo o 1º lugar na Categoria Graduando (2014). Inciou a pós-graduação em Gerenciamento de Projetos (MBA) na Ruy Barbosa | Devry no semestre 2015.2 e tem previsão de conclusão em 2017.1. Foi Coordenador de Sistemas da Secretaria Estadual do Meio Ambiente da Bahia (SEMA) onde desenvolveu sistemas computacionais que são utilizados neste e em outros órgãos do Governo do Estado da Bahia. Atualmente é Gerente de Inovação da Topos Informática, empresa instalada no Parque Tecnológico movida por inovação e qualidade em soluções e serviços de Tecnologia da Informação com atuação no setor público e privado',
									link: 'https://www.linkedin.com/in/ramon-santos-05798518/',	
								},
								// Completo
								{
									nome:'Ronilson Moraes Lobo',
									empresa: 'Unifacs',
									foto: 'congresso/img/palestrantes/Ronilson_Lobo.jpg',
									texto: 'Graduado em Desenho Industrial com Programação Visual (Design Gráfico e Web Design) pela Universidade Federal da Bahia UFBA (2002). Especializou-se em Design de Conteúdo Digital: Tecnologias e Mídias para Web pela Universidade Salvador - UNIFACS. Atualmente é Mestre em Sistemas e Computação pela UNIFACS e exerce a atividade de professor: no Curso de Graduação em Design - Bacharelado com Habilitação em Comunicação Visual com ênfase em Meios Digitais, ministrando as disciplinas: Técnicas de Representação e Expressão Gráfica, Animação Computacional 2D e 3D e Design de Ambientes Virtuais Interativos; no Curso de Graduação em Comunicação Social com habilitação em Publicidade e Propaganda, ministrando a disciplina Editoração Eletrônica e Propaganda em Tecnologias Emergentes, no curso de Design e Gestão de Moda ministrando a disciplina Expressão Bidimensional e por último e não menos importante no Curso de Graduação Tecnológica - Sistemas para Internet (Criação e Desenvolvimento de Websites), é responsável pelas disciplinas de Projetos em Educação a Distância, Gestão de Conteúdo na Web, Ferramentas de Edição Web e Sistemas Multimídia; ambas na Universidade Salvador UNIFACS. Dentre as áreas de experiência como professor e pesquisador destacam-se: Interação Homem-Computador - IHC (Análise e Design de Interfaces), Modelagem e Animação Computacional 3D, Ilustração, Ferramentas Multimídia, CMS Plone e Joomla, Tecnologias EAD em especial LMS Moodle e atualmente pesquisa projeto e implementação de Design de Games com o Blender 3D.',
									link: 'https://www.linkedin.com/in/ronilson-lobo-2b54526a/',	
								},
								// Completo
								{
									nome:'Sergio Luz',
									empresa: 'Setor de Energia',
									foto: 'congresso/img/palestrantes/Sergio_Luz.JPG',
									texto: 'Bacharel em Matemática, Especialista em Sistemas Distribuídos e Auditor Líder ISO 27001 certificado desde 2008. Há mais de 20 anos atuando nas áreas de tecnologia da informação, redes de computadores e tecnologias de segurança, passou os últimos 15 anos definindo, implantando e mantendo políticas e processos de segurança da informação. Atualmente atua como analista de segurança da informação no setor de energia.',
									link: 'https://www.linkedin.com/in/sergio-luz-30666820',	
								},
								// Completo
								{
									nome:'Thiago Vieira',
									empresa: '',
									foto: 'congresso/img/palestrantes/Thiago_Vieira.jpg',
									texto: 'Graduando em Ciência da Computação pela UNIFACS, técnico em Desenvolvimento de Software pelo SENAI CIMATEC, técnico em Automação Industrial pelo IFBA. Script Kiddie curioso por tecnologias inovadoras e apegado à tecnologias open source.',
									link: 'https://www.linkedin.com/in/francearnaut/',
								},
								// Completo
								{
									nome:'Thyza Ferreira',
									empresa: 'Agência DoisF',
									foto: 'congresso/img/palestrantes/Thysa_Ferreira.jpg',
									texto: '"Publiciária. Formada em Publicidade e Propaganda (Unifacs) Graduanda em Bacharelado de Humanidades- Comunicação (Ufba) Pós Graduanda em Comunicação Estratégica (Ufba) Diretora e Social Media da Agência DoisF"',
									link: 'https://www.linkedin.com/in/thyzaferreira/',	
								},
								{
									nome:'Vagner Oliveira',
									empresa: '',
									foto: 'congresso/img/palestrantes/Vagner_Oliveira.jpg',
									texto: 'Bacharelando em Sistemas de Informação, membro do SQL Server Bahia, HackBahia, PSL Bahia',
									link: 'http://linkedin.com/in/vopp86',	
								},
								{
									nome:'Wagner Moraes',
									empresa: 'Neoclata/BA',
									foto: 'congresso/img/palestrantes/Wagner_Moraes.jpg',
									texto: 'Entusiasta em Cloud Computing, virtualização e Administrador de sistema. Profissional Microsoft, com atuações em projetos de virtualização e segurança, palestrante em eventos de Universidades.  Já ministrou em eventos, No Global Bootcamp Microsoft, Microsoft Azure dentre outros. ',
									link: 'https://www.linkedin.com/in/wagnerrodrigues1/',	
								},
								
							]

		let float;

		palestrantesArray.forEach(function(item, index) {
			if (index % 2 === 0) {
				float = 'left';
			}
			else {
				float = 'right';
			}

			$("section.page-content.palestrantes").append('<div class="palest-wrap clearfix col-sm-4">'+
	        '<figure class="col-sm-3" style="display:block;float:'+float+'">'+
	            '<img class="palest-photo-img" src="' + item.foto + '">' +
	            '<h3 class="palest-title">' + item.nome +'</h3>'+
	            '<h5 class="palest-title">' + item.empresa +'</h5>'+
	        '</figure>'+
	        '<article class="col-sm-9">'+
	            '<p class="palest-texto" class="palest-texto">'+ item.texto +'</p>'+
	        	(item.link !== '' ? '<a href="'+ item.link +'" target="_blank"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>': '')+
	    	'</div>');
			
		});


	});
	